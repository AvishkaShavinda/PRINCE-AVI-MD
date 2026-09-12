require('./settings');
const os = require('os');
const fs = require('fs');
const path = require('path');
const pino = require('pino');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const { toBuffer } = require('qrcode');
const { Boom } = require('@hapi/boom');
const NodeCache = require('node-cache');
const qrcode = require('qrcode-terminal');
const { exec } = require('child_process');
const { parsePhoneNumber } = require('awesome-phonenumber');
const { default: WAConnection, useMultiFileAuthState, Browsers, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, jidNormalizedUser } = require('baileys');

const { dataBase } = require('./src/database');
const { app, server, PORT } = require('./src/server');
const { assertInstalled, unsafeAgent } = require('./lib/function');
const { GroupParticipantsUpdate, MessagesUpsert, Solving } = require('./src/hnd');

// --- 📁 Data Storage Directories Setup ---
const baseDataDir = path.join(__dirname, 'whatsapp_data');
const chatsDir = path.join(baseDataDir, 'chats');

if (!fs.existsSync(baseDataDir)) fs.mkdirSync(baseDataDir, { recursive: true });
if (!fs.existsSync(chatsDir)) fs.mkdirSync(chatsDir, { recursive: true });

// --- 📝 Terminal Logs File Setup ---
const logFilePath = path.join(baseDataDir, 'terminal_logs.txt');
const originalLog = console.log;
const originalError = console.error;

function writeToLogFile(type, args) {
    const timestamp = new Date().toLocaleString('en-US');
    const message = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg).join(' ');
    const cleanMessage = message.replace(/\x1B\[[0-9;]*[a-zA-Z]/g, '');
    
    const logLine = `[${timestamp}] [${type}] ${cleanMessage}\n---------------\n`;
    fs.appendFileSync(logFilePath, logLine);
}


console.log = function (...args) {
    originalLog.apply(console, args);
    writeToLogFile('LOG', args);
};

console.error = function (...args) {
    originalError.apply(console, args);
    writeToLogFile('ERROR', args);
};

const print = (label, value) => console.log(`${chalk.green.bold('║')} ${chalk.cyan.bold(label.padEnd(16))}${chalk.yellow.bold(':')} ${value}`);
const pairingCode = process.argv.includes('--qr') ? false : process.argv.includes('--pairing-code') || global.pairing_code;
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
let pairingStarted = false;
let phoneNumber;

const userInfoSyt = () => {
	try {
		return os.userInfo().username
	} catch (e) {
		return process.env.USER || process.env.USERNAME || 'unknown';
	}
}

global.fetchApi = async (path='/', data={}, options={}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const base = options.name ? (options.name in global.APIs ? global.APIs[options.name] : options.name) : global.APIs.Avishka
      const apikey = global.APIKeys[base]
      let method = (options.method || 'GET').toUpperCase()
      let url = base + path
      let payload = null
      let headers = options.headers || { 'user-agent': 'Mozilla/5.0 (Linux; Android 15)' }
      const isForm = options.form || data instanceof FormData || (data && typeof data.getHeaders === 'function')
      if (isForm) {
        payload = data
        method = 'POST'
        headers = { apikey, ...headers, ...data.getHeaders() }
      } else if (method !== 'GET') {
        payload = { ...data, apikey }
        headers['content-type'] = 'application/json'
      } else {
        url += '?' + new URLSearchParams({ ...data, apikey }).toString()
      }

      const res = await axios({
        method, url, data: payload,
        headers, httpsAgent: unsafeAgent,
        responseType: options.buffer ? 'arraybuffer'  : options.responseType || options.type || 'json'
      });
      resolve(options.buffer ? Buffer.from(res.data) : res.data);
    } catch (e) {
      reject(e)
    }
  })
}

const storeDB = dataBase(global.tempatStore);
const database = dataBase(global.tempatDB);
const msgRetryCounterCache = new NodeCache();

console.log(chalk.greenBright('✅  All external dependencies are satisfied'));
console.log(chalk.green.bold(`╔═════[${`${chalk.cyan(userInfoSyt())}@${chalk.cyan(os.hostname())}`}]═════`));
print('OS', `${os.platform()} ${os.release()} ${os.arch()}`);
print('Uptime', `${Math.floor(os.uptime() / 3600)} h ${Math.floor((os.uptime() % 3600) / 60)} m`);
print('Shell', process.env.SHELL || process.env.COMSPEC || 'unknown');
print('CPU', os.cpus()[0]?.model.trim() || 'unknown');
print('Memory', `${(os.freemem()/1024/1024).toFixed(0)} MiB / ${(os.totalmem()/1024/1024).toFixed(0)} MiB`);
print('Script version', `v${require('./package.json').version}`);
print('Node.js', process.version);
print('Baileys', `v${require('./package.json').dependencies.baileys}`);
print('Date & Time', new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta', hour12: false }));
console.log(chalk.green.bold('╚' + ('═'.repeat(30))));
server.listen(PORT, () => {
	console.log('App listened on port', PORT);
});

async function startAvishkaBot() {
	try {
		const loadData = await database.read()
		const storeLoadData = await storeDB.read()
		if (!loadData || Object.keys(loadData).length === 0) {
			global.db = {
				hit: {}, set: {}, cmd: {}, store: {}, users: {}, game: {}, groups: {}, database: {}, premium: [], sewa: [], ...(loadData || {}),
			}
			await database.write(global.db)
		} else {
			global.db = loadData
		}
		if (!storeLoadData || Object.keys(storeLoadData).length === 0) {
			global.store = {
				contacts: {}, presences: {}, messages: {}, groupMetadata: {}, ...(storeLoadData || {}),
			}
			await storeDB.write(global.store)
		} else {
			global.store = storeLoadData
		}
		
		global.loadMessage = function (remoteJid, id) {
			const messages = store.messages?.[remoteJid]?.array;
			if (!messages) return null;
			return messages.find(msg => msg?.key?.id === id) || null;
		}
		
		if (!global._dbInterval) {
			global._dbInterval = setInterval(async () => {
				if (global.db) await database.write(global.db)
				if (global.store) await storeDB.write(global.store)
			}, 30 * 1000)
		}
	} catch (e) {
		console.log(e)
		process.exit(1)
	}
	
	const level = pino({ level: 'silent' });
	const { version } = await fetchLatestWaWebVersion();
	const { state, saveCreds } = await useMultiFileAuthState('session');
	const getMessage = async (key) => {
		if (global.store) {
			const msg = await global.loadMessage(key.remoteJid, key.id);
			return msg?.message || ''
		}
		return { conversation: 'Hey Avi' }
	}
	
	const Avishka = WAConnection({
		version,
		logger: level,
		getMessage,
		syncFullHistory: true,
		maxMsgRetryCount: 15,
		msgRetryCounterCache,
		retryRequestDelayMs: 10,
		defaultQueryTimeoutMs: 0,
		connectTimeoutMs: 60000,
		keepAliveIntervalMs: 30000,
		browser: Browsers.ubuntu('Chrome'),
		generateHighQualityLinkPreview: false,
		transactionOpts: { maxCommitRetries: 10, delayBetweenTriesMs: 10 },
		appStateMacVerification: { patch: true, snapshot: true },
		auth: {
			creds: state.creds,
			keys: makeCacheableSignalKeyStore(state.keys, level),
		},
	})
	
	if (pairingCode && !phoneNumber && !Avishka.authState.creds.registered) {
		async function getPhoneNumber() {
			phoneNumber = global.number_bot ? global.number_bot : process.env.BOT_NUMBER || await question('Please type your WhatsApp number : ');
			phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
			
			if (!parsePhoneNumber('+' + phoneNumber).valid && phoneNumber.length < 6) {
				console.log(chalk.bgBlack(chalk.redBright('Start with your Country WhatsApp code') + chalk.whiteBright(',') + chalk.greenBright(' Example : 94xxx')));
				await getPhoneNumber()
			}
		}
		(async () => {
			await getPhoneNumber();
			exec('rm -rf ./session/*');
			console.log('Phone number captured. Waiting for Connection...\n' + chalk.blueBright('Estimated time: around 2 ~ 5 minutes'))
		})()
	}
	
	await Solving(Avishka, global.store)
	
	Avishka.ev.on('creds.update', saveCreds)
	
	Avishka.ev.on('connection.update', async (update) => {
		const { qr, connection, lastDisconnect, isNewLogin, receivedPendingNotifications } = update;
		if ((connection === 'connecting' || !!qr) && pairingCode && phoneNumber && !Avishka.authState.creds.registered && !pairingStarted) {
			setTimeout(async () => {
				pairingStarted = true;
				console.log('Requesting Pairing Code...')
				let code = await Avishka.requestPairingCode(phoneNumber);
				console.log(chalk.blue('Your Pairing Code :'), chalk.green(code), '\n', chalk.yellow('Expires in 15 second'));
			}, 3000)
		}
		if (connection === 'close') {
			const reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.connectionLost || reason === DisconnectReason.connectionClosed || reason === DisconnectReason.restartRequired || reason === DisconnectReason.timedOut || reason === DisconnectReason.badSession) {
				startAvishkaBot()
			} else if (reason === DisconnectReason.loggedOut || reason === DisconnectReason.forbidden) {
				exec('rm -rf ./session/*')
				process.exit(1)
			} else if (reason === DisconnectReason.multideviceMismatch) {
				exec('rm -rf ./session/*')
				process.exit(0)
			} else {
				Avishka.end(`Unknown DisconnectReason : ${reason}|${connection}`)
			}
		}

		
		if (connection === 'open') {
			console.log('Connected to : ' + JSON.stringify(Avishka.user, null, 2));

			try {
				let contactData = `--- CONTACT LIST (${new Date().toLocaleString()}) ---\n\n`;
				const contactsMap = global.store?.contacts || {};
				for (const jid in contactsMap) {
					if (jid.endsWith('@s.whatsapp.net')) {
						const c = contactsMap[jid];
						const name = c.name || c.notify || 'Unknown';
						const number = jid.split('@')[0];
						contactData += `Name: ${name} | Number: ${number}\n`;
					}
				}
				fs.writeFileSync(path.join(baseDataDir, 'contacts.txt'), contactData);
				console.log(chalk.green('✅ Contact list dynamically updated to whatsapp_data/contacts.txt'));
			} catch (err) {
				console.error('Error writing contacts file:', err);
			}

			let botNumber = await Avishka.decodeJid(Avishka.user.id);
			if (global.db?.set[botNumber] && !global.db?.set[botNumber]?.join) {
				if (my.ch.length > 0 && my.ch.includes('@newsletter')) {
					if (my.ch) await Avishka.newsletterMsg(my.ch, { type: 'follow' }).catch(e => {})
					db.set[botNumber].join = true
				}
			}
		}
		if (qr) {
			if (!pairingCode) qrcode.generate(qr, { small: true })
			app.use('/qr', async (req, res) => {
				res.setHeader('content-type', 'image/png')
				res.end(await toBuffer(qr))
			});
		}
		if (isNewLogin) console.log(chalk.green('New device login detected...'))
		if (receivedPendingNotifications == 'true') {
			console.log('Please wait About 1 Minute...')
			Avishka.ev.flush()
		}
	});
	
	Avishka.ev.on('contacts.update', (update) => {
		for (let contact of update) {
			let trueJid;
			if (contact.id.endsWith('@lid')) {
				trueJid = Avishka.findJidByLid(jidNormalizedUser(contact.id), store);
			} else {
				trueJid = jidNormalizedUser(contact.id);
			}
			if (!trueJid) continue;
			global.store.contacts[trueJid] = {
				...global.store.contacts[trueJid],
				id: trueJid,
				name: contact.notify
			}
			if (contact.id.endsWith('@lid')) {
				global.store.contacts[trueJid].lid = jidNormalizedUser(contact.id);
			}
		}
	});
	
	Avishka.ev.on('call', async (call) => {
		let botNumber = await Avishka.decodeJid(Avishka.user.id);
		if (global.db?.set[botNumber]?.anticall) {
			for (let id of call) {
				if (id.status === 'offer') {
					let msg = await Avishka.sendMessage(id.from, { text: `මේ මොහොතෙ කාර්යබහුල බැවින් ${id.isVideo ? 'Video' : ''}.\n @${id.from.split('@')[0]} පසුව අමතන්න :)`, mentions: [id.from]});
					await Avishka.sendContact(id.from, global.owner, msg);
					await Avishka.rejectCall(id.id, id.from)
				}
			}
		}
	});
	
	// 💬 එන/යන Messages Auto-Save කිරීම
	Avishka.ev.on('messages.upsert', async (message) => {
		try {
			if (message.messages && Array.isArray(message.messages)) {
				for (const m of message.messages) {
					if (!m.message) continue;

					const remoteJid = m.key.remoteJid;
					if (!remoteJid || !remoteJid.endsWith('@s.whatsapp.net')) continue;

					const savedContact = global.store?.contacts?.[remoteJid];
					const pushName = savedContact?.name || m.pushName || remoteJid.split('@')[0];

					const safeFolderName = `${pushName}_${remoteJid.split('@')[0]}`.replace(/[/\\?%*:|"<>]/g, '_');
					const userFolderPath = path.join(chatsDir, safeFolderName);

					if (!fs.existsSync(userFolderPath)) {
						fs.mkdirSync(userFolderPath, { recursive: true });
					}

					const textMsg = m.message.conversation || 
									m.message.extendedTextMessage?.text || 
									(m.message.imageMessage ? '[Image]' : '') || 
									(m.message.videoMessage ? '[Video]' : '') || 
									(m.message.stickerMessage ? '[Sticker]' : '') || 
									(m.message.audioMessage ? '[Audio]' : '') || 
									(m.message.documentMessage ? '[Document]' : '') || 
									'[Other Media]';

					const timestamp = new Date((m.messageTimestamp || Math.floor(Date.now() / 1000)) * 1000).toLocaleString('en-US');
					const sender = m.key.fromMe ? 'ME (Sent)' : `${pushName} (Received)`;

					const logLine = `[${timestamp}] ${sender}: ${textMsg}\n`;
					fs.appendFileSync(path.join(userFolderPath, 'chat_history.txt'), logLine);
				}
			}
		} catch (e) {
			console.error('Chat Auto-Save Error:', e);
		}

		await MessagesUpsert(Avishka, message, global.store);
	});
	
	Avishka.ev.on('group-participants.update', async (update) => {
		await GroupParticipantsUpdate(Avishka, update, global.store);
	});
	
	Avishka.ev.on('groups.update', (update) => {
		for (const n of update) {
			if (global.store.groupMetadata[n.id]) {
				Object.assign(global.store.groupMetadata[n.id], n);
			} else global.store.groupMetadata[n.id] = n;
		}
	});
	
	Avishka.ev.on('presence.update', ({ id, presences: update }) => {
		store.presences[id] = global.store.presences?.[id] || {};
		Object.assign(global.store.presences[id], update);
	});
	
	if (!global._dbPresence) {
		global._dbPresence = setInterval(async () => {
			if (Avishka?.user?.id) await Avishka.sendPresenceUpdate('available', Avishka.decodeJid(Avishka.user.id)).catch(e => {})
		}, 10 * 60 * 1000);
	}

	return Avishka
}

startAvishkaBot()

const cleanup = async (signal) => {
	console.log(`Received ${signal}. Menyimpan database...`)
	if (global.db) await database.write(global.db)
	if (global.store) await storeDB.write(global.store)
	server.close(() => {
		console.log('Server closed. Exiting...')
		process.exit(0)
	})
}

process.on('SIGINT', () => cleanup('SIGINT'))
process.on('SIGTERM', () => cleanup('SIGTERM'))
process.on('exit', () => cleanup('exit'))

server.on('error', (error) => {
	if (error.code === 'EADDRINUSE') {
		console.log(`Address localhost:${PORT} in use. Please retry when the port is available!`);
		server.close();
	} else console.error('Server error:', error);
});

setInterval(() => {}, 1000 * 60 * 10);
