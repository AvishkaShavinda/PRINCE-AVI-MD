const { downloadContentFromMessage } = require('baileys');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

async function handleMessages(Avi, chat) {
    try {
        const m = chat.messages[0];
      

        const from = m.key.remoteJid;
        const pushName = m.pushName || "Unknown User";

       
        const body = (
            m.message.conversation || 
            m.message.extendedTextMessage?.text || 
            m.message.imageMessage?.caption || 
            m.message.videoMessage?.caption || 
            m.message.documentMessage?.caption || 
            ""
        ).trim();
        
        const color = {
            cyan: '\x1b[36m', green: '\x1b[32m', yellow: '\x1b[33m', 
            magenta: '\x1b[35m', reset: '\x1b[0m', bold: '\x1b[1m'
        };

        const isGroup = from.endsWith('@g.us');
        const prefix = "."; 
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : "";
        const args = body.trim().split(/ +/).slice(1);
        const text = args.join(" ");

        
        console.log(`${color.cyan}╭───────────────────────────────────────────${color.reset}`);
        console.log(`${color.green}📩 [NEW MESSAGE]${color.reset}`);
        console.log(`${color.yellow}👤 From: ${color.reset}${color.bold}${pushName}${color.reset}`);
        console.log(`${color.yellow}📍 Chat: ${color.reset}${isGroup ? 'Group' : 'Private'}`);
        console.log(`${color.yellow}💬 Msg : ${color.reset}${body || 'Media Content'}`);
        console.log(`${color.cyan}╰───────────────────────────────────────────${color.reset}`);
        
        if (!isCmd) return;

        switch (command) {
            case 'alive':
                await Avi.sendMessage(from, { text: 'AVI MINI 🚀' });
                break;

                
case 'ytmp3': {
				if (!text) return m.reply(`*කෝ යුටියුබ් ලින්ක් එක. where's the yt link ?:* ${prefix + command} https://youtube.com/watch?v=Xs0Lxif1u9E`);
				const url = text.trim();
				const format = 'mp3';
				const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
				if (!regex.test(url)) {
					return m.reply('The link you provided is invalid, please enter the correct link.');
				}
				m.reply(' මොහොතක් රැදීසිටින්න.✨ ');
				try {
					const headers = {
						"accept": "*/*",
						"accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
						"sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\"",
						"sec-ch-ua-mobile": "?1",
						"sec-ch-ua-platform": "\"Android\"",
						"sec-fetch-dest": "empty",
						"sec-fetch-mode": "cors",
						"sec-fetch-site": "cross-site",
						"Referer": "https://id.ytmp3.mobi/",
						"Referrer-Policy": "strict-origin-when-cross-origin"
					}
					const initial = await fetch(`https://d.ymcdn.org/api/v1/init?p=y&23=1llum1n471&_=${Math.random()}`, { headers });
					let format = 'mp4';
					const init = await initial.json();
					const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/))([^&?/]+)/)?.[1];
					let convertURL = init.convertURL + `&v=${id}&f=${format}&_=${Math.random()}`;
					const converts = await fetch(convertURL, { headers });
					const convert = await converts.json();
					let info = {};
					for (let i = 0; i < 3; i++) {
						let j = await fetch(convert.progressURL, { headers });
						info = await j.json();
						console.log(info);
						if (info.progress == 3) break;
					}
					const result = {
						url: convert.downloadURL,
						title: info.title
					}
					await Avishka.sendMessage(m.chat, {
						audio: { url: result.url },
						mimetype: 'audio/mp4'
					}, { quoted: m });
				} catch {
					m.reply('Error..')
				}
			}
				break


            case 'menu':
                let menu = `*── 「 AVI MINI MENU 」 ──*\n\n` +
                           `✨ .ping - Speed test\n` +
                           `✨ .alive - Check status\n` +
                           `✨ .getdp - Get profile pic\n` +
                           `✨ .save - Save status/media\n` +
                           `✨ .echo - Repeat text\n\n` +
                           `© 2026 AVI SYSTEM`;
                await Avi.sendMessage(from, { text: menu });
                break;

            case 'ping':
                await Avi.sendMessage(from, { text: 'Pong! 🏓' });
                break;
                
            case 'getdp':
            case 'getpp': {
                try {
                    let q = text.trim();
                    if (!q) return await Avi.sendMessage(from, { text: "*❌ අංකයක් ලබා දෙන්න. Ex: .getdp 947xxxxxxxx*" });

                    let jid = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
                    let ppUrl;
                    try {
                        ppUrl = await Avi.profilePictureUrl(jid, "image");
                    } catch {
                        ppUrl = "https://files.catbox.moe/mjem6q.jpg"; 
                    }

                    const metaQuote = {
                        key: { remoteJid: "status@broadcast", participant: "0@s.whatsapp.net", fromMe: false },
                        message: { contactMessage: { displayName: "AVI MINI", vcard: `BEGIN:VCARD\nVERSION:3.0\nN:AVI MINI;;;;\nFN:AVI MINI\nEND:VCARD` } }
                    };

                    await Avi.sendMessage(from, { 
                        image: { url: ppUrl }, 
                        caption: `> 🖼 *Profile Picture of* +${q.replace(/[^0-9]/g, '')}\n> *Fetched by:* AVI MINI ✨`,
                    }, { quoted: metaQuote });

                } catch (e) {
                    await Avi.sendMessage(from, { text: "*⚠️ DP එක ලබා ගත නොහැක.*" });
                }
                break;
            }

            case 'දාපන්':
            case 'save':
            case 'ඔන': {
                try {
                    const quotedMsg = m.message?.extendedTextMessage?.contextInfo?.quotedMessage || 
                                    (m.message.imageMessage || m.message.videoMessage ? m.message : null);

                    if (!quotedMsg) {
                        return await Avi.sendMessage(from, { text: '*❌ කරුණාකර Status එකකට reply කර හෝ caption එක ලෙස .save යොදා එවන්න.*' });
                    }

                    try { await Avi.sendMessage(from, { react: { text: '💾', key: m.key } }); } catch (e) {}

                    const type = Object.keys(quotedMsg)[0];
                    
                    if (type === 'conversation' || type === 'extendedTextMessage') {
                        const savedText = quotedMsg.conversation || quotedMsg.extendedTextMessage.text;
                        await Avi.sendMessage(from, { text: `✅ *Status Saved*\n\n${savedText}` });
                    } 
                    else if (/imageMessage|videoMessage|audioMessage|stickerMessage|documentMessage/.test(type)) {
                        const stream = await downloadContentFromMessage(quotedMsg[type], type.replace('Message', ''));
                        let buffer = Buffer.from([]);
                        for await (const chunk of stream) {
                            buffer = Buffer.concat([buffer, chunk]);
                        }

                        const caption = quotedMsg[type].caption || '✅ Saved by AVI MINI';
                        const mimetype = quotedMsg[type].mimetype;

                        if (type === 'imageMessage') {
                            await Avi.sendMessage(from, { image: buffer, caption: caption });
                        } else if (type === 'videoMessage') {
                            await Avi.sendMessage(from, { video: buffer, caption: caption, mimetype: mimetype });
                        } else if (type === 'audioMessage') {
                            await Avi.sendMessage(from, { audio: buffer, mimetype: mimetype, ptt: quotedMsg[type].ptt });
                        } else if (type === 'stickerMessage') {
                            await Avi.sendMessage(from, { sticker: buffer });
                        } else if (type === 'documentMessage') {
                            await Avi.sendMessage(from, { document: buffer, fileName: quotedMsg[type].fileName, mimetype: mimetype });
                        }
                    }
                } catch (err) {
                    console.error(err);
                    await Avi.sendMessage(from, { text: '❌ දෝෂයක් සිදු විය.' });
                }
                break;
            }

            
case 'ph':
case 'pornhub':
case 'phdl': {
    if (!text) {
        return await Avi.sendMessage(from, { 
            text: '💡 *භාවිතය:* `.ph [Pornhub Link හෝ Search Keyword]`' 
        });
    }

    await Avi.sendMessage(from, { react: { text: '🔞', key: m.key } });

    try {
        let query = text.trim();

  
        const apiUrl = `https://api.vytal.dev/ph?query=${encodeURIComponent(query)}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
           
            const backupApiUrl = `https://api.agatz.xyz/api/phdl?url=${encodeURIComponent(query)}`;
            const backupRes = await fetch(backupApiUrl);
            const backupData = await backupRes.json();

            if (backupData && backupData.data) {
                return await processAndSendMedia(backupData.data.title, backupData.data.thumbnail, backupData.data.media?.[0]?.url || backupData.data.url);
            }
            return await Avi.sendMessage(from, { text: '❌ වීඩියෝව සොයා ගැනීමට හෝ Download කිරීමට නොහැකි විය.' });
        }

        const data = await response.json();
        
        if (!data || !data.download_url) {
            return await Avi.sendMessage(from, { text: '❌ වීඩියෝ තොරතුරු ලබා ගැනීමට නොහැකි විය.' });
        }

        await processAndSendMedia(data.title, data.thumbnail, data.download_url);

        async function processAndSendMedia(title, thumbnail, videoUrl) {
            const caption = `🔞 *PORNHUB VIDEO FOUND* 🔞\n\n` +
                           `> 📝 *Title:* ${title || 'Pornhub Video'}\n\n` +
                           `⏳ *වීඩියෝව Download වෙමින් පවතී...*\n\n` +
                           `> © AVI MINI SYSTEM`;

        
            if (thumbnail) {
                await Avi.sendMessage(from, { 
                    image: { url: thumbnail }, 
                    caption: caption 
                }, { quoted: m });
            }

            await Avi.sendMessage(from, { react: { text: '📥', key: m.key } });

            // Video එක Direct Stream ලෙස යැවීම
            await Avi.sendMessage(from, { 
                video: { url: videoUrl }, 
                mimetype: 'video/mp4',
                caption: `🔞 *${title || 'Pornhub Video'}*\n\n> © AVI MINI`
            }, { quoted: m });

            await Avi.sendMessage(from, { react: { text: '✅', key: m.key } });
        }

    } catch (err) {
        console.error('[Pornhub API Error]:', err);
        await Avi.sendMessage(from, { text: '❌ වීඩියෝව ලබා ගැනීමේදී දෝෂයක් සිදු විය.' });
    }

    break;
}

            
            

case 'video':
case 'ytmp4': 
    if (!text) {
        return await Avi.sendMessage(from, { 
            text: '💡 *භාවිතය:* `.video [වීඩියෝවේ නම හෝ YouTube Link]`' 
        });
    }

    await Avi.sendMessage(from, { react: { text: '🔍', key: m.key } });
    const queryv = text.startsWith('http') ? `"${text}"` : `"ytsearch1:${text}"`;
    const infoCommand = `yt-dlp ${queryv} --dump-single-json --no-playlist`;
    exec(infoCommand, { timeout: 30000 }, async (error, stdout, stderr) => {
        if (error || !stdout || stdout.trim() === '') {
            console.error('[yt-dlp Info Error]:', error || 'Empty stdout');
            return await Avi.sendMessage(from, { text: '❌ වීඩියෝ තොරතුරු ලබා ගැනීමට නොහැකි විය.' });
        }

        try {
            const info = JSON.parse(stdout);
            const videoUrl = info.webpage_url || (text.startsWith('http') ? text : `https://www.youtube.com/watch?v=${info.id}`);
            const title = info.title || 'YouTube Video';
            
           
            const thumbnail = (info.thumbnail && typeof info.thumbnail === 'string' && info.thumbnail.startsWith('http')) 
                ? info.thumbnail 
                : 'https://files.catbox.moe/mjem6q.jpg';

            const duration = info.duration_string || 'N/A';
            const caption = `🎬 *AVI MINI VIDEO DOWNLOADER* 🎬\n\n` +
                           `> 📝 *Title:* ${title}\n` +
                           `> ⏱️ *Duration:* ${duration}\n` +
                           `> 🔗 *Source:* YouTube\n\n` +
                           `*කරුණාකර අවශ්‍ය Quality එකේ අංකය Reply කරන්න:*\n\n` +
                           `1️⃣. 📱 360p (Low Quality / Small Size)\n` +
                           `2️⃣. 🎬 480p (Medium Quality)\n` +
                           `3️⃣. 📺 720p (HD Quality)\n` +
                           `4️⃣. 🖥️ 1080p (Full HD - High Data)\n` +
                           `5️⃣. 🎵 MP3 Audio ලෙස\n\n` +
                           `> © AVI SYSTEM 2026`;          
            const sentMsg = await Avi.sendMessage(from, { 
                image: { url: thumbnail }, 
                caption: caption 
            }, { quoted: m });

            
            const handler = async (msgUpdate) => {
                const received = msgUpdate.messages[0];
                if (!received.message) return;

                const rFrom = received.key.remoteJid;
                const rText = (received.message?.conversation || received.message?.extendedTextMessage?.text || '').trim();
                const rQuotedId = received.message?.extendedTextMessage?.contextInfo?.stanzaId;

                if (rFrom === from && rQuotedId === sentMsg.key.id) {
                    
                    let formatSpec = '';
                    let ext = 'mp4';

                    if (rText === '1') {
                        formatSpec = '-f "bestvideo[height<=360][ext=mp4]+bestaudio[ext=m4a]/best[height<=360]"';
                    } else if (rText === '2') {
                        formatSpec = '-f "bestvideo[height<=480][ext=mp4]+bestaudio[ext=m4a]/best[height<=480]"';
                    } else if (rText === '3') {
                        formatSpec = '-f "bestvideo[height<=720][ext=mp4]+bestaudio[ext=m4a]/best[height<=720]"';
                    } else if (rText === '4') {
                        formatSpec = '-f "bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[height<=1080]"';
                    } else if (rText === '5') {
                        formatSpec = '-x --audio-format mp3 --audio-quality 0';
                        ext = 'mp3';
                    } else {
                        return await Avi.sendMessage(from, { text: '❌ අසංගත අංකයකි. කරුණාකර 1, 2, 3, 4 හෝ 5 යොදා Reply කරන්න.' });
                    }

                    Avi.ev.off('messages.upsert', handler);

                    await Avi.sendMessage(from, { react: { text: '📥', key: received.key } });

                    const fileName = `download_${Date.now()}.${ext}`;
                    const filePath = path.join(__dirname, fileName);

                    const dlCommand = `yt-dlp "${videoUrl}" ${formatSpec} --no-playlist -o "${filePath}"`;

                    exec(dlCommand, { timeout: 240000 }, async (dlErr) => {
                        if (dlErr || !fs.existsSync(filePath)) {
                            console.error('[Download Error]:', dlErr);
                            cleanupFile(filePath);
                            return await Avi.sendMessage(from, { text: '❌ Download කිරීමේදී දෝෂයක් සිදුවිය.' });
                        }

                        try {
                            await Avi.sendMessage(from, { react: { text: '⬆️', key: received.key } });

                            const fileBuffer = fs.readFileSync(filePath);

                            if (ext === 'mp3') {
                                await Avi.sendMessage(from, { 
                                    audio: fileBuffer, 
                                    mimetype: 'audio/mpeg',
                                    fileName: `${title}.mp3`
                                }, { quoted: received });
                            } else {
                                await Avi.sendMessage(from, { 
                                    video: fileBuffer, 
                                    mimetype: 'video/mp4',
                                    caption: `🎬 *${title}*\n\n> © AVI MINI`
                                }, { quoted: received });
                            }

                            await Avi.sendMessage(from, { react: { text: '✅', key: received.key } });

                        } catch (sendErr) {
                            console.error('[Send Error]:', sendErr);
                            await Avi.sendMessage(from, { text: '❌ File එක යැවීමේදී දෝෂයක් සිදුවිය.' });
                        } finally {
                            setTimeout(() => cleanupFile(filePath), 3000);
                        }
                    });
                }
            };

            Avi.ev.on('messages.upsert', handler);
            setTimeout(() => Avi.ev.off('messages.upsert', handler), 120000);

        } catch (e) {
            console.error('[Metadata Parse Error]:', e);
            await Avi.sendMessage(from, { text: '❌ වීඩියෝ විස්තර සකස් කිරීමේදී දෝෂයක් සිදුවිය.' });
        }
    });

    function cleanupFile(p) {
        if (fs.existsSync(p)) {
            try { fs.unlinkSync(p); } catch (e) {}
        }
    }

    break;




            
                       
                                  
                                             
                                                        
                                                                   
                                                                                         
            
            
            
// 🎵 SONG DOWNLOADER 🎵
case 'song':
case 'ytmp3': 
    

    if (!text) {
        return await Avi.sendMessage(from, { 
            text: '💡 *භාවිතය:* `.song [සින්දුවේ නම හෝ YouTube Link]`' 
        });
    }

    await Avi.sendMessage(from, { react: { text: '⏳', key: m.key } });

    const fileName = `song_${Date.now()}.mp3`;
    const filePath = path.join(__dirname, fileName);
    const query = text.startsWith('http') ? `"${text}"` : `"ytsearch1:${text}"`;
    const command = `yt-dlp ${query} -x --audio-format mp3 --audio-quality 0 --no-playlist -o "${filePath}"`;

    const child = exec(command, { timeout: 90000 }, async (error, stdout, stderr) => {
        
        
        if (error) {
            console.error(`[yt-dlp Error]:`, error.message);
            cleanupFile(filePath);
            return await Avi.sendMessage(from, { text: '❌ ගීතය ඩවුන්ලෝඩ් කිරීමට නොහැකි විය. (Timeout or Invalid Link)' });
        }

        
        if (fs.existsSync(filePath)) {
            try {
                await Avi.sendMessage(from, { react: { text: '⬆️', key: m.key } });

                
                await Avi.sendMessage(from, { 
                    audio: { url: filePath }, 
                    mimetype: 'audio/mp4',
                    fileName: `${text}.mp3`
                }, { quoted: m });

                await Avi.sendMessage(from, { react: { text: '✅', key: m.key } });

            } catch (sendErr) {
                console.error('[Send Error]:', sendErr);
                await Avi.sendMessage(from, { text: '❌ Audio එක යැවීමේදී දෝෂයක් සිදුවිය.' });
            } finally {
                
                setTimeout(() => cleanupFile(filePath), 3000);
            }
        } else {
            await Avi.sendMessage(from, { text: '*❌ File එක Save වුණේ නැත.*' });
        }
    });

    
    function cleanupFile(p) {
        if (fs.existsSync(p)) {
            try { fs.unlinkSync(p); } catch (e) {}
        }
    }

    break;






            case 'echo':
                if (!text) return await Avi.sendMessage(from, { text: 'මොනවා හරි ලියන්න මචං!' });
                await Avi.sendMessage(from, { text: text });
                break;

            default:
                break;
        }

    } catch (err) {
        console.error("Error in Avi.js:", err);
    }
}

module.exports = { handleMessages };
