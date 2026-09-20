const { handleMessages } = require('./Avi.js');
const { 
    default: makeWASocket, 
    useMultiFileAuthState, 
    Browsers, 
    delay, 
    DisconnectReason 
} = require('baileys');
const pino = require('pino');
const express = require('express');
const { Boom } = require('@hapi/boom');
const fs = require('fs-extra');

const app = express();
const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
  
            <h1>AVI BOT SYSTEM</h1>
            
                <a onclick="requestPairCode()" class="btn"><i class="fas fa-bolt"></i> GET PAIR CODE</a>
           

            <div id="codeResult"></div>


    <script>

        async function requestPairCode() {
            const num = prompt("ඔයාගේ WhatsApp අංකය ඇතුළත් කරන්න (උදා: 947xxxxxxxx):");
            if (!num) return;
            
            const cleanNum = num.replace(/[^0-9]/g, '');
            if (cleanNum.length < 10) {
                alert("කරුණාකර නිවැරදි දුරකථන අංකයක් ඇතුළත් කරන්න!");
                return;
            }

            const resDiv = document.getElementById('codeResult');
            resDiv.innerText = "කේතය සාදමින් පවතී... ⏳";

            try {
                const res = await fetch('/get-pair-code?number=' + cleanNum);
                const data = await res.json();
                
                if (data.code) {
                    resDiv.innerText = "PAIR CODE: " + data.code;
                } else {
                    resDiv.innerText = "දෝෂයක් සිදු විය!";
                }
            } catch (e) {
                resDiv.innerText = "Server Error!";
            }
        }
    </script>

</body>
</html>
    `);
});



async function startAviMini(num, res = null) {
    const sessionPath = `./Avisessions/${num}`;
    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    
    const Avi = makeWASocket({
        auth: state,
        printQRInTerminal: false,
        logger: pino({ level: 'silent' }),
        browser: Browsers.ubuntu('Chrome')
    });

    // Pair code request logic
    if (res && !Avi.authState.creds.registered) {
        try {
            await delay(3000);
            const code = await Avi.requestPairingCode(num);
            if (!res.headersSent) {
                res.json({ code: code?.match(/.{1,4}/g)?.join('-') || code });
            }
        } catch (e) {
            if (!res.headersSent) res.status(500).json({ error: "Fail" });
        }
    }

    Avi.ev.on('creds.update', saveCreds);

    Avi.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'open') {
            console.log(`[CONNECTED] ${num} active now! ✅`);
            await Avi.sendMessage(Avi.user.id, { text: `*AVI MINI CONNECTED SUCCESSFULLY!* 👊😈\n\nSession active for: ${num}` });
        }
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            if (reason !== DisconnectReason.loggedOut) {
                startAviMini(num);
            } else {
                console.log(`[LOGGED OUT] ${num} session deleted.`);
                fs.removeSync(sessionPath);
            }
        }
    });

    Avi.ev.on('messages.upsert', async (chat) => {
        await handleMessages(Avi, chat);
    });
}

// Pair code endpoint
app.get('/get-pair-code', async (req, res) => {
    const num = req.query.number?.replace(/[^0-9]/g, '');
    if (!num) return res.json({ error: "Invalid number" });
    startAviMini(num, res);
});


app.listen(PORT, () => {
    console.log(`Avi Pair code Server running on  http://localhost:${PORT}`);
    if (fs.existsSync('./Avisessions')) {
        const folders = fs.readdirSync('./Avisessions');
        folders.forEach(file => {
            if (fs.lstatSync(`./Avisessions/${file}`).isDirectory()) {
                startAviMini(file);
            }
        });
    }
});
