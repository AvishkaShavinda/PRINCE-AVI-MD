require('../settings');
const fs = require('fs');
const path = require('path');
const https = require('https');
const axios = require('axios');
const chalk = require('chalk');
const crypto = require('crypto');
const FileType = require('file-type');
const PhoneNumber = require('awesome-phonenumber');

const groupMetadataTimers = {};
const { checkStatus } = require('./database');
const { imageToWebp, videoToWebp, writeExif, gifToWebp } = require('../lib/exif');
const { getBuffer, getSizeMedia, fetchJson, sleep, axiosss, fixBytes } = require('../lib/function');
const { jidNormalizedUser, proto, getBinaryNodeChildren, getBinaryNodeChildString, getBinaryNodeChild, generateMessageIDV2, jidEncode, encodeSignedDeviceIdentity, generateWAMessageContent, generateForwardMessageContent, prepareWAMessageMedia, delay, areJidsSameUser, extractMessageContent, generateMessageID, downloadContentFromMessage, generateWAMessageFromContent, jidDecode, generateWAMessage, toBuffer, getContentType, getDevice } = require('baileys');

/*
	* Create By Avishka
	* Follow https://github.com/Avishkadev
	* Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
*/

async function GroupUpdate(Avishka, m, store) {
	function clearParse(parse) {
		try {
			return JSON.parse(parse);
		} catch {
			return parse;
		}
	}
	if (!m.messageStubType || !m.isGroup) return
	if (global.db?.groups?.[m.chat] && store?.groupMetadata?.[m.chat]) {
		const admin = `@${m.sender.split('@')[0]}`
		const metadata = store.groupMetadata[m.chat];
		const normalizedTarget = clearParse(m.messageStubParameters[0]);
		const type = m.messageStubType;
		const messages = {
			1: 'mereset link grup!',
			21: `mengubah Subject Grup menjadi :\n*${normalizedTarget}*`,
			22: 'telah mengubah icon grup.',
			23: 'mereset link grup!',
			24: `mengubah deskripsi grup.\n\n${normalizedTarget}`,
			25: `telah mengatur agar *${normalizedTarget == 'on' ? 'hanya admin' : 'semua peserta'}* yang dapat mengedit info grup.`,
			26: `telah *${normalizedTarget == 'on' ? 'menutup' : 'membuka'}* grup!\nSekarang ${normalizedTarget == 'on' ? 'hanya admin yang' : 'semua peserta'} dapat mengirim pesan.`,
			29: `telah menjadikan @${normalizedTarget?.id?.split('@')?.[0]} sebagai admin.`,
			30: `telah memberhentikan @${normalizedTarget?.id?.split('@')?.[0]} dari admin.`,
			72: `mengubah durasi pesan sementara menjadi *@${normalizedTarget}*`,
			123: 'menonaktifkan pesan sementara.',
			132: 'mereset link grup!',
			172: `@${normalizedTarget?.pn?.split('@')?.[0]} meminta bergabung`,
		}
		if (Avishka.public && global.db?.groups?.[m.chat]?.setinfo && messages[type]) {
			await Avishka.sendMessage(m.chat, { text: `${admin} ${messages[type]}`, mentions: [m.sender, ...((normalizedTarget?.id || normalizedTarget)?.includes('@') ? [`${normalizedTarget.id || normalizedTarget}`] : [])].filter(Boolean)}, { ephemeralExpiration: m.expiration || m?.metadata?.ephemeralDuration || store?.messages[m.chat]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0 })
		}
		if (type === 20) {
			clearTimeout(groupMetadataTimers[m.chat])
			groupMetadataTimers[m.chat] = setTimeout(async () => {
				store.groupMetadata[m.chat] = await Avishka.groupMetadata(m.chat).catch(e => ({ ...store.groupMetadata[m.chat] }));
			}, 5000);
		} else if (type === 29 || type === 30) {
			const target = jidNormalizedUser(normalizedTarget.id || normalizedTarget)
			const newAdminValue = type === 29 ? 'admin' : null
			if (metadata?.participants?.length) {
				metadata.participants = metadata.participants.map(p => {
					const key = metadata.addressingMode === 'lid' ? jidNormalizedUser(p.id) : jidNormalizedUser(p.phoneNumber)
					if (key === target) {
						return { ...p, admin: newAdminValue }
					}
					return p
				})
			}
		} else if (type === 27) {
			if (!metadata.participants.some(a => (a.id === (normalizedTarget.id || normalizedTarget) || a.phoneNumber === (normalizedTarget.id || normalizedTarget)))) {
				clearTimeout(groupMetadataTimers[m.chat])
				groupMetadataTimers[m.chat] = setTimeout(async () => {
					store.groupMetadata[m.chat] = await Avishka.groupMetadata(m.chat).catch(e => ({ ...store.groupMetadata[m.chat] }));
				}, 5000);
			}
		} else if (type === 28 || type === 32) {
			if (m.fromMe && ((jidNormalizedUser(Avishka.user.id) == (normalizedTarget.id || normalizedTarget)) || (jidNormalizedUser(Avishka.user.lid) == (normalizedTarget.id || normalizedTarget)))) {
				delete store.messages[m.chat];
				delete store.presences[m.chat];
				delete store.groupMetadata[m.chat];
			}
			if(!!metadata) metadata.participants = metadata.participants.filter(p => {
				const key = metadata.addressingMode === 'lid' ? jidNormalizedUser(p.id) : jidNormalizedUser(p.phoneNumber)
				return key !== (normalizedTarget.id || normalizedTarget)
			});
		} else {
			console.log({
				messageStubType: m.messageStubType, type,
				messageStubParameters: m.messageStubParameters,
			})
		}
	}
}

async function GroupParticipantsUpdate(Avishka, update, store) {
	try {
		const { id, participants, author, action } = update;
		function updateAdminStatus(participants, metadataParticipants, status) {
			for (const participant of metadataParticipants) {
				if (participants.includes(jidNormalizedUser(participant.id)) || participants.includes(jidNormalizedUser(participant.phoneNumber))) {
					participant.admin = status;
				}
			}
		}
		if (global.db?.groups?.[id] && store?.groupMetadata?.[id]) {
			const metadata = store.groupMetadata[id];
			for (let n of participants) {
				const jid = typeof n === 'string' ? n : (n?.phoneNumber || n?.id || '');
				const participant = metadata.participants.find(a => a.id == jidNormalizedUser(jid))
				let profile;
				try {
					profile = await Avishka.profilePictureUrl(jid, 'image');
				} catch {
					profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png';
				}
				let messageText;
				if (action === 'add') {
					if (db.groups[id].welcome) messageText = db.groups[id]?.text?.setwelcome || `Welcome to ${metadata.subject}\n@`;
					if (!participant) {
						clearTimeout(groupMetadataTimers[id])
						groupMetadataTimers[id] = setTimeout(async () => {
							store.groupMetadata[id] = await Avishka.groupMetadata(id).catch(e => ({ ...store.groupMetadata[id] }));
						}, 5000);
					}
				} else if (action === 'remove') {
					if (db.groups[id].leave) messageText = db.groups[id]?.text?.setleave || `@\nLeaving From ${metadata.subject}`;
					if ((jidNormalizedUser(Avishka.user.lid) == jidNormalizedUser(jid)) || (jidNormalizedUser(Avishka.user.id) == jidNormalizedUser(jid))) {
						delete store.messages[id];
						delete store.presences[id];
						delete store.groupMetadata[id];
					}
					if(metadata) metadata.participants = metadata.participants.filter(p => !participants.includes(metadata.addressingMode === 'lid' ? jidNormalizedUser(p.id) : jidNormalizedUser(p.phoneNumber)));
				} else if (action === 'promote') {
					if (db.groups[id].promote) messageText = db.groups[id]?.text?.setpromote || `@\nPromote From ${metadata.subject}\nBy @admin`;
					updateAdminStatus(participants, metadata.participants, 'admin');
				} else if (action === 'demote') {
					if (db.groups[id].demote) messageText = db.groups[id]?.text?.setdemote || `@\nDemote From ${metadata.subject}\nBy @admin`;
					updateAdminStatus(participants, metadata.participants, null);
				}
				if (messageText && Avishka.public) {
					await Avishka.sendMessage(id, {
						text: messageText.replace('@subject', metadata.subject).replace('@admin', author ? `@${author.split('@')[0]}` : '@admin').replace(/(?<=\s|^)@(?!\w)/g, `@${jid.split('@')[0]}`),
						contextInfo: {
							mentionedJid: [jid, author].filter(Boolean),
							externalAdReply: {
								title: action == 'add' ? 'Welcome' : action == 'remove' ? 'Leaving' : action.charAt(0).toUpperCase() + action.slice(1),
								mediaType: 1,
								previewType: 0,
								thumbnailUrl: profile,
								renderLargerThumbnail: true,
								sourceUrl: global.my.gh
							}
						}
					}, { ephemeralExpiration: metadata?.ephemeralDuration || store?.messages[id]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0 });
				}
			}
		}
	} catch (e) {
		throw e;
	}
}

async function LoadDataBase(Avishka, m) {
	try {
		const botNumber = await Avishka.decodeJid(Avishka.user.id);
		let game = global.db.game || {};
		let premium = global.db.premium || [];
		let user = global.db.users[m.sender] || {};
		let setBot = global.db.set[botNumber] || {};
		
		global.db.game = game;
		global.db.users[m.sender] = user;
		global.db.set[botNumber] = setBot;
		
		const defaultSetBot = {
			lang: 'id',
			limit: 0,
			money: 0,
			status: 0,
			log: true,
			join: false,
			public: true,
			anticall: true,
			original: true,
			readsw: false,
			autobio: false,
			autoread: true,
			antispam: false,
			autotyping: true,
			grouponly: true,
			multiprefix: false,
			privateonly: true,
			didyoumean: true,
			author: global.author || 'Avishka shavinda',
			authorPrefix: '',
			autobackup: false,
			botname: global.botname || 'Avi Bot',
			packname: global.packname || 'Bot WhatsApp',
			template: 'documentMessage',
			owner: global.owner,
		};
		for (let key in defaultSetBot) {
			if (!(key in setBot)) setBot[key] = defaultSetBot[key];
		}
		
		const limitUser = user.vip ? global.limit.vip : checkStatus(m.sender, premium) ? global.limit.premium : global.limit.free;
		const moneyUser = user.vip ? global.money.vip : checkStatus(m.sender, premium) ? global.money.premium : global.money.free;
		
		const defaultUser = {
			vip: false,
			ban: false,
			afkTime: -1,
			afkReason: '',
			register: false,
			limit: limitUser,
			money: moneyUser,
			lastclaim: Date.now(),
			lastbegal: Date.now(),
			lastrampok: Date.now(),
		};
		for (let key in defaultUser) {
			if (!(key in user)) user[key] = defaultUser[key];
		}
		
		if (m.isGroup) {
			let group = global.db.groups[m.chat] || {};
			global.db.groups[m.chat] = group;
			
			const defaultGroup = {
				url: '',
				text: {},
				warn: {},
				tagsw: {},
				nsfw: false,
				mute: false,
				leave: false,
				setinfo: false,
				antilink: false,
				demote: false,
				antitoxic: false,
				promote: false,
				welcome: false,
				antivirtex: false,
				antitagsw: false,
				antidelete: false,
				antihidetag: false,
				waktusholat: false,
			};
			for (let key in defaultGroup) {
				if (!(key in group)) group[key] = defaultGroup[key];
			}
		}
		
		const defaultGame = {
			suit: {},
			chess: {},
			chat_ai: {},
			menfes: {},
			tekateki: {},
			tictactoe: {},
			tebaklirik: {},
			kuismath: {},
			blackjack: {},
			tebaklagu: {},
			tebakkata: {},
			family100: {},
			susunkata: {},
			tebakbom: {},
			ulartangga: {},
			tebakkimia: {},
			caklontong: {},
			tebakangka: {},
			tebaknegara: {},
			tebakgambar: {},
			tebakbendera: {},
		};
		for (let key in defaultGame) {
			if (!(key in game)) game[key] = defaultGame[key];
		}
		
	} catch (e) {
		throw e
	}
}




async function MessagesUpsert(Avishka, message, store) {
	try {
		let botNumber = await Avishka.decodeJid(Avishka.user.id);
		const msg = message.messages[0];
		if (!msg.message) return;
		const remoteJid = msg.key.remoteJid;

		// 1. පණිවිඩය ලැබුණු සැණින් Store එකට එක් කිරීම
		(store.messages ??= {})[remoteJid] ??= {};
		store.messages[remoteJid].array ??= [];
		store.messages[remoteJid].keyId ??= new Set();
		if (!(store.messages[remoteJid].keyId instanceof Set)) {
			store.messages[remoteJid].keyId = new Set(store.messages[remoteJid].array.map(m => m.key.id));
		}

		const type = getContentType(msg.message) || Object.keys(msg.message)[0];

		// 2. --- ANTI-DELETE LOGIC (AUTO RECOVER) ---
		if (type === 'protocolMessage' && msg.message.protocolMessage.type === 0) {
			const key = msg.message.protocolMessage.key;
			const chatMsgs = store.messages[remoteJid]?.array || [];
			const oldMsg = chatMsgs.find(ms => ms.key.id === key.id);

			if (oldMsg && oldMsg.message) {
				const senderNumber = (key.participant || remoteJid).split('@')[0];
				
				// පණිවිඩය මැකූ බව දැනුම් දීම
				await Avishka.sendMessage(remoteJid, { 
					text: `*「 ANTI-DELETE DETECTED 」*\n\n*User:* @${senderNumber}`,
					mentions: [key.participant || remoteJid]
				}, { quoted: oldMsg });

				// මැකූ පණිවිඩය (Original එකම) Forward කිරීම
				const forwardContent = generateForwardMessageContent(oldMsg, false);
				const contentType = getContentType(forwardContent);
				
				if (contentType) {
					await Avishka.relayMessage(remoteJid, forwardContent, { messageId: oldMsg.key.id });
				}
			}
			return; 
		}
		// --- ANTI-DELETE LOGIC END ---

		if (store.messages[remoteJid].keyId.has(msg.key.id)) return;
		store.messages[remoteJid].array.push(msg);
		store.messages[remoteJid].keyId.add(msg.key.id);

		if (store.messages[remoteJid].array.length > (global.chatLength || 250)) {
			const removed = store.messages[remoteJid].array.shift();
			store.messages[remoteJid].keyId.delete(removed.key.id);
		}

		if (!store.groupMetadata || Object.keys(store.groupMetadata).length === 0) {
			store.groupMetadata ??= await Avishka.groupFetchAllParticipating().catch(e => ({}));
		}

		// 3. මුල් කේතයේ තිබූ අනෙකුත් Logic (Serialize, status read ආදිය)
		const m = await Serialize(Avishka, msg, store);
		require('../Avishka')(Avishka, m, msg, store);

		if (db?.set?.[botNumber]?.readsw && msg.key.remoteJid === 'status@broadcast') {
			await Avishka.readMessages([msg.key]);
			if (/protocolMessage/i.test(type)) {
				await Avishka.sendFromOwner(global.db?.set?.[botNumber]?.owner || global.owner, 'Status dari @' + msg.key.participant.split('@')[0] + ' Telah dihapus', msg, { mentions: [msg.key.participant] });
			}
			if (/(audioMessage|imageMessage|videoMessage|extendedTextMessage)/i.test(type)) {
				let keke = (type == 'extendedTextMessage') ? `Story Teks Berisi : ${msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''}` : (type == 'imageMessage') ? `Story Gambar ${msg.message.imageMessage.caption ? 'dengan Caption : ' + msg.message.imageMessage.caption : ''}` : (type == 'videoMessage') ? `Story Video ${msg.message.videoMessage.caption ? 'dengan Caption : ' + msg.message.videoMessage.caption : ''}` : (type == 'audioMessage') ? 'Story Audio' : '\nTidak diketahui cek saja langsung';
				await Avishka.sendFromOwner(global.db?.set?.[botNumber]?.owner || global.owner, `Melihat story dari @${msg.key.participant.split('@')[0]}\n${keke}`, msg, { mentions: [msg.key.participant] });
			}
		}
	} catch (e) {
		console.error('Error in MessagesUpsert:', e);
	}
}



/*
async function MessagesUpsert(Avishka, message, store) {
	try {
		let botNumber = await Avishka.decodeJid(Avishka.user.id);
		const msg = message.messages[0];
		const remoteJid = msg.key.remoteJid;
		(store.messages ??= {})[remoteJid] ??= {};
		store.messages[remoteJid].array ??= [];
		store.messages[remoteJid].keyId ??= new Set();
		if (!(store.messages[remoteJid].keyId instanceof Set)) {
			store.messages[remoteJid].keyId = new Set(store.messages[remoteJid].array.map(m => m.key.id));
		}
		if (store.messages[remoteJid].keyId.has(msg.key.id)) return;
		store.messages[remoteJid].array.push(msg);
		store.messages[remoteJid].keyId.add(msg.key.id);
		if (store.messages[remoteJid].array.length > (global.chatLength || 250)) {
			const removed = store.messages[remoteJid].array.shift();
			store.messages[remoteJid].keyId.delete(removed.key.id);
		}
		if (!store.groupMetadata || Object.keys(store.groupMetadata).length === 0) store.groupMetadata ??= await Avishka.groupFetchAllParticipating().catch(e => ({}));
		const type = msg.message ? (getContentType(msg.message) || Object.keys(msg.message)[0]) : '';
		const m = await Serialize(Avishka, msg, store)
		require('../Avishka')(Avishka, m, msg, store);
		if (db?.set?.[botNumber]?.readsw && msg.key.remoteJid === 'status@broadcast') {
			await Avishka.readMessages([msg.key]);
			if (/protocolMessage/i.test(type)) await Avishka.sendFromOwner(global.db?.set?.[botNumber]?.owner || global.owner, 'Status dari @' + msg.key.participant.split('@')[0] + ' Telah dihapus', msg, { mentions: [msg.key.participant] });
			if (/(audioMessage|imageMessage|videoMessage|extendedTextMessage)/i.test(type)) {
				let keke = (type == 'extendedTextMessage') ? `Story Teks Berisi : ${msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''}` : (type == 'imageMessage') ? `Story Gambar ${msg.message.imageMessage.caption ? 'dengan Caption : ' + msg.message.imageMessage.caption : ''}` : (type == 'videoMessage') ? `Story Video ${msg.message.videoMessage.caption ? 'dengan Caption : ' + msg.message.videoMessage.caption : ''}` : (type == 'audioMessage') ? 'Story Audio' : '\nTidak diketahui cek saja langsung'
				await Avishka.sendFromOwner(global.db?.set?.[botNumber]?.owner || global.owner, `Melihat story dari @${msg.key.participant.split('@')[0]}\n${keke}`, msg, { mentions: [msg.key.participant] });
			}
		}
	} catch (e) {
		throw e;
		console.log(message);
	}
}*/

///emd



async function Solving(Avishka, store) {
	Avishka.serializeM = (m) => MessagesUpsert(Avishka, m, store)
	
	Avishka.decodeJid = (jid) => {
		if (!jid) return jid
		if (/:\d+@/gi.test(jid)) {
			let decode = jidDecode(jid) || {}
			return decode.user && decode.server && decode.user + '@' + decode.server || jid
		} else return jid
	}
	
	
		Avishka.sendProduct = async (jid, content = {}, options = {}) => {
		const { image, title, description, price, currency = 'LKR', productId = `AVI-${Date.now()}`, seller = Avishka.user.id } = content;
		const msg = await generateWAMessageFromContent(jid, {
			productMessage: {
				product: {
					productImage: image ? (await generateWAMessageContent(image, { upload: Avishka.waUploadToServer })).imageMessage : null,
					productId: productId,
					title: title,
					description: description,
					currencyCode: currency,
					priceAmount1000: (parseFloat(price) * 1000).toString(),
					retailerId: productId,
					productImageCount: 1
				},
				businessOwnerJid: Avishka.decodeJid(seller)
			}
		}, { quoted: options.quoted });
		return await Avishka.relayMessage(jid, msg.message, { messageId: msg.key.id });
	}

	
	
	
	Avishka.findJidByLid = (lid, store, resolve = false) => {
		const groupMeta = store?.groupMetadata
		if (groupMeta) {
			for (const g of Object.values(groupMeta)) {
				if (!g?.participants) continue
				for (const contact of g.participants) {
					if (((contact?.id?.includes(lid)) || (contact?.phoneNumber?.includes(lid))) && contact?.phoneNumber) {
						return contact.phoneNumber
					}
				}
			}
		}
		const contacts = store?.contacts
		if (contacts) {
			for (const contact of Object.values(contacts)) {
				if (((contact?.id?.includes(lid)) || (contact?.phoneNumber?.includes(lid))) && contact?.phoneNumber) {
					return contact.phoneNumber
				}
			}
		}
		if (resolve) return lid
		return null
	}
	
	Avishka.getName = (jid, withoutContact  = false) => {
		const id = Avishka.decodeJid(jid);
		if (id.endsWith('@g.us')) {
			const groupInfo = store.contacts[id] || (store.groupMetadata[id] ? store.groupMetadata[id] : (store.groupMetadata[id] = Avishka.groupMetadata(id))) || {};
			return Promise.resolve(groupInfo.name || groupInfo.subject || PhoneNumber('+' + id.replace('@g.us', '')).getNumber('international'));
		} else {
			if (id === '0@s.whatsapp.net') {
				return 'WhatsApp';
			}
		const contactInfo = store.contacts[id] || {};
		return withoutContact ? '' : contactInfo.name || contactInfo.subject || contactInfo.verifiedName || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international');
		}
	}
	
	Avishka.sendContact = async (jid, kon, quoted = '', opts = {}) => {
		let list = []
		for (let i of kon) {
			list.push({
				displayName: await Avishka.getName(i + '@s.whatsapp.net'),
				vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Avishka.getName(i + '@s.whatsapp.net')}\nFN:${await Avishka.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Avi\nitem2.ADR:;;Sri Lanka;;;;\nitem2.X-ABLabel:Region\nEND:VCARD` //vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Avishka.getName(i + '@s.whatsapp.net')}\nFN:${await Avishka.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:whatsapp@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/Avishka_dev\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
			})
		}
		Avishka.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted, ephemeralExpiration: quoted?.expiration || quoted?.metadata?.ephemeralDuration || store?.messages[jid]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0 });
	}
	
	Avishka.profilePictureUrl = async (jid, type = 'image', timeoutMs) => {
		const result = await Avishka.query({
			tag: 'iq',
			attrs: {
				target: jidNormalizedUser(jid),
				to: '@s.whatsapp.net',
				type: 'get',
				xmlns: 'w:profile:picture'
			},
			content: [{
				tag: 'picture',
				attrs: {
					type, query: 'url'
				},
			}]
		}, timeoutMs);
		const child = getBinaryNodeChild(result, 'picture');
		return child?.attrs?.url;
	}
	
	Avishka.setStatus = (status) => {
		Avishka.query({
			tag: 'iq',
			attrs: {
				to: '@s.whatsapp.net',
				type: 'set',
				xmlns: 'status',
			},
			content: [{
				tag: 'status',
				attrs: {},
				content: Buffer.from(status, 'utf-8')
			}]
		})
		return status
	}
	
	Avishka.relayMessageV2 = async (jid, message, options) => {
		const msg = generateWAMessageFromContent(jid, message, {
			upload: Avishka.waUploadToServer,
			messageId: generateMessageID(),
			...options
		});
		const hasil = await Avishka.relayMessage(jid, msg.message, {
			messageId: msg.key.id,
			...options
		});
		return hasil;
	}

	Avishka.sendPoll = (jid, name = '', values = [], quoted, selectableCount = 1) => {
		return Avishka.sendMessage(jid, { poll: { name, values, selectableCount }}, { quoted, ephemeralExpiration: quoted?.expiration || quoted?.metadata?.ephemeralDuration || store?.messages[jid]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0 })
	}
	
	Avishka.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
		const quotedOptions = { quoted, ephemeralExpiration: quoted?.expiration || quoted?.metadata?.ephemeralDuration || store?.messages[jid]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0 }
		try {
			const res = await axios.head(url);
			let mime = res.headers['content-type'];
			if (mime && mime.includes('gif')) {
				return Avishka.sendMessage(jid, { video: { url }, caption: caption, gifPlayback: true, ...options }, quotedOptions);
			} else if (mime && mime === 'application/pdf') {
				return Avishka.sendMessage(jid, { document: { url }, mimetype: 'application/pdf', caption: caption, ...options }, quotedOptions);
			} else if (mime && mime.includes('image')) {
				return Avishka.sendMessage(jid, { image: { url }, caption: caption, ...options }, quotedOptions);
			} else if (mime && mime.includes('video')) {
				return Avishka.sendMessage(jid, { video: { url }, caption: caption, mimetype: 'video/mp4', ...options }, quotedOptions);
			} else if (mime && mime.includes('audio')) {
				return Avishka.sendMessage(jid, { audio: { url }, mimetype: 'audio/mpeg', ...options }, quotedOptions);
			} else {
				return Avishka.sendMessage(jid, { document: { url }, caption: caption, mimetype: mime, ...options }, quotedOptions);
			}
		} catch (e) {
			return Avishka.sendMessage(jid, { text: url, ...options }, quotedOptions);
		}
	}
	
	Avishka.sendGroupInviteV4 = async (jid, participant, inviteCode, inviteExpiration, groupName = 'Unknown Subject', caption = 'Invitation to join my WhatsApp group', jpegThumbnail = null, options = {}) => {
		const msg = proto.Message.create({
			groupInviteMessage: {
				inviteCode,
				inviteExpiration: parseInt(inviteExpiration) || + new Date(new Date + (3 * 86400000)),
				groupJid: jid,
				groupName,
				jpegThumbnail: Buffer.isBuffer(jpegThumbnail) ? jpegThumbnail : null,
				caption,
				contextInfo: {
					mentionedJid: options.mentions || []
				}
			}
		});
		const message = generateWAMessageFromContent(participant, msg, options);
		const invite = await Avishka.relayMessage(participant, message.message, { messageId: message.key.id })
		return invite
	}
	
	Avishka.sendFromOwner = async (jids, text, quoted, options = {}) => {
		for (const a of jids) {
			const jid = a.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
			await Avishka.sendMessage(jid, { text, ...options }, { quoted, ephemeralExpiration: quoted?.expiration || quoted?.metadata?.ephemeralDuration || store?.messages[jid]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0 })
		}
	}
	
	Avishka.sendText = async (jid, text, quoted, options = {}) => Avishka.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted, ephemeralExpiration: quoted?.expiration || quoted?.metadata?.ephemeralDuration || store?.messages[jid]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0 })
	
	Avishka.sendAsSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? path : Buffer.alloc(0);
		const result = await writeExif(buff, options);
		try {
			let anu = await Avishka.sendMessage(jid, { sticker: { url: result }, ...options }, { quoted, ephemeralExpiration: quoted?.expiration || quoted?.metadata?.ephemeralDuration || store?.messages[jid]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0 });
			return anu;
		} finally {
			if (fs.existsSync(path)) fs.unlinkSync(path);
			if (fs.existsSync(result)) fs.unlinkSync(result);
		}
	}
	
	Avishka.downloadMediaMessage = async (message) => {
		const msg = message.msg || message;
		msg.mediaKey = fixBytes(msg.mediaKey);
		msg.fileSha256 = fixBytes(msg.fileSha256);
		msg.fileEncSha256 = fixBytes(msg.fileEncSha256);
		const mime = msg.mimetype || '';
		const messageType = (message.type || mime.split('/')[0]).replace(/Message/gi, '');
		const stream = await downloadContentFromMessage(msg, messageType);
		let buffer = Buffer.from([]);
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk]);
		}
		return buffer
	}
	
	Avishka.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
	    const msg = message.msg || message;
	    msg.mediaKey = fixBytes(msg.mediaKey);
	    msg.fileSha256 = fixBytes(msg.fileSha256);
	    msg.fileEncSha256 = fixBytes(msg.fileEncSha256);
	    const mime = msg.mimetype || '';
	    const messageType = (message.type || mime.split('/')[0]).replace(/Message/gi, '');
	    const ext = mime.split('/')[1]?.split(';')[0] || 'bin';
	    const dir = './database/temp';
	    await fs.promises.mkdir(dir, { recursive: true });
	    const trueFileName = attachExtension ? `${dir}/${filename ? filename : Date.now()}.${ext}` : filename;
	    const stream = await downloadContentFromMessage(msg, messageType);
	    return new Promise((resolve, reject) => {
	        const writeStream = fs.createWriteStream(trueFileName);
	        stream.pipe(writeStream);
	        writeStream.on('finish', () => resolve(trueFileName));
	        writeStream.on('error', (err) => {
	            if (fs.existsSync(trueFileName)) fs.unlinkSync(trueFileName);
	            reject(err);
	        });
	    });
	}
	
	Avishka.getFile = async (PATH) => {
		let filename;
		let mime = 'application/octet-stream';
		let ext = 'bin';
		let isTemp = false;
		if (Buffer.isBuffer(PATH)) {
			let type = await FileType.fromBuffer(PATH) || { mime, ext };
			mime = type.mime; ext = type.ext;
			filename = path.join(__dirname, '../database/temp/' + Date.now() + '.' + ext);
			fs.writeFileSync(filename, PATH);
			isTemp = true;
		} else if (/^data:.*?\/.*?;base64,/i.test(PATH)) {
			let buffer = Buffer.from(PATH.split`,`[1], 'base64');
			let type = await FileType.fromBuffer(buffer) || { mime, ext };
			mime = type.mime; ext = type.ext;
			filename = path.join(__dirname, '../database/temp/' + Date.now() + '.' + ext);
			fs.writeFileSync(filename, buffer);
			isTemp = true;
		} else if (typeof PATH === 'string' && /^https?:\/\//.test(PATH)) {
			const res = await axios.get(PATH, { responseType: 'stream' });
			mime = res.headers['content-type'] || 'application/octet-stream';
			ext = mime.split('/')[1]?.split(';')[0] || 'tmp';
			if (ext === 'jpeg') ext = 'jpg';
			filename = path.join(__dirname, '../database/temp/' + Date.now() + '.' + ext);
			const writeStream = fs.createWriteStream(filename);
			res.data.pipe(writeStream);
			await new Promise((resolve, reject) => {
				writeStream.on('finish', resolve);
				writeStream.on('error', reject);
			});
			isTemp = true;
		} else if (typeof PATH === 'string' && fs.existsSync(PATH)) {
			let type = await FileType.fromFile(PATH) || { mime, ext };
			mime = type.mime; ext = type.ext;
			filename = PATH;
			isTemp = false;
		} else {
			throw new Error("Format media tidak didukung");
		}
		return { filename, mime, ext, isTemp };
	}
	
	Avishka.appendResponseMessage = async (m, text) => {
		let apb = await generateWAMessage(m.chat, { text, mentions: m.mentionedJid }, { userJid: Avishka.user.id, quoted: m.quoted && m.quoted.fakeObj(), ephemeralExpiration: m.expiration || m?.metadata?.ephemeralDuration || store?.messages[m.chat]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0 });
		apb.key = m.key
		apb.key.id = [...Array(32)].map(() => '0123456789ABCDEF'[Math.floor(Math.random() * 16)]).join('');
		apb.key.fromMe = areJidsSameUser(m.sender, Avishka.user.id);
		if (m.isGroup) apb.participant = m.sender;
		Avishka.ev.emit('messages.upsert', {
			...m,
			messages: [proto.WebMessageInfo.create(apb)],
			type: 'append'
		});
	}
	
	Avishka.sendMedia = async (jid, pathMedia, fileName = '', caption = '', quoted = '', options = {}) => {
		const { mime, filename, isTemp } = await Avishka.getFile(pathMedia);
		const botNumber = Avishka.decodeJid(Avishka.user.id);
		const isWebpSticker = options.asSticker || /webp/.test(mime);
		let type = 'document', mimetype = mime, pathFile = filename;
		let filesToDelete = [];
		if (isTemp) filesToDelete.push(filename);
		try {
			if (isWebpSticker) {
				pathFile = await writeExif(filename, {
					packname: options.packname || db?.set?.[botNumber]?.packname || 'Bot WhatsApp',
					author: options.author || db?.set?.[botNumber]?.author || 'Avishkadev',
					categories: options.categories || [],
				});
				filesToDelete.push(pathFile);
				type = 'sticker';
				mimetype = 'image/webp';
			} else if (/image|video|audio/.test(mime)) {
				type = mime.split('/')[0];
				mimetype = type == 'video' ? 'video/mp4' : type == 'audio' ? 'audio/mpeg' : mime;
			}
			let anu = await Avishka.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ephemeralExpiration: quoted?.expiration || quoted?.metadata?.ephemeralDuration || store?.messages[jid]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0, ...options });
			return anu;
		} finally {
			filesToDelete.forEach(file => {
				if (fs.existsSync(file)) fs.unlinkSync(file);
			});
		}
	}
	
	Avishka.sendAlbumMessage = async (jid, content = {}, options = {}) => {
		const { album, mentions, contextInfo, ...others } = content;
		for (const media of album) {
			if (!media.image && !media.video) throw new TypeError(`album[i] must have image or video property`);
		}
		if (album.length < 2) throw new RangeError("Minimum 2 media");
		const medias = await generateWAMessageFromContent(jid, {
			albumMessage: {
				expectedImageCount: album.filter(m => m.image).length,
				expectedVideoCount: album.filter(m => m.video).length,
			}
		}, { quoted: options?.quoted || null });
		await Avishka.relayMessage(jid, medias.message, { messageId: medias.key.id });
		for (const media of album) {
			const msg = await generateWAMessage(jid, { ...others, ...media }, { upload: Avishka.waUploadToServer });
			msg.message.messageContextInfo = {
				messageAssociation: {
					associationType: 1,
					parentMessageKey: medias.key
				}
			}
			await Avishka.relayMessage(jid, msg.message, { messageId: msg.key.id });
		}
		return medias;
	}
	
	Avishka.sendListMsg = async (jid, content = {}, options = {}) => {
		const { text, caption, footer = '', title, subtitle, ai, contextInfo = {}, buttons = [], messageParamsJson = {}, mentions = [], ...media } = content;
		const msg = await generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					messageContextInfo: {
						deviceListMetadata: {},
						deviceListMetadataVersion: 2,
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						body: proto.Message.InteractiveMessage.Body.create({ text: text || caption || '' }),
						footer: proto.Message.InteractiveMessage.Footer.create({ text: footer }),
						header: proto.Message.InteractiveMessage.Header.create({
							title,
							subtitle,
							hasMediaAttachment: Object.keys(media).length > 0,
							...(media && typeof media === 'object' && Object.keys(media).length > 0 ? await generateWAMessageContent(media, {
								upload: Avishka.waUploadToServer
							}) : {})
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
							...(messageParamsJson && typeof messageParamsJson === 'object' && Object.keys(messageParamsJson).length > 0 ? messageParamsJson : {}),
							buttons: buttons.map(a => {
								return {
									name: a.name,
									buttonParamsJson: JSON.stringify(a.buttonParamsJson ? (typeof a.buttonParamsJson === 'string' ? JSON.parse(a.buttonParamsJson) : a.buttonParamsJson) : '')
								}
							})
						}),
						contextInfo: {
							...contextInfo,
							...options.contextInfo,
							mentionedJid: options.mentions || mentions,
							...(options.quoted ? {
								stanzaId: options.quoted.key.id,
								remoteJid: options.quoted.key.remoteJid,
								participant: options.quoted.key.participant || options.quoted.key.remoteJid,
								fromMe: options.quoted.key.fromMe,
								quotedMessage: options.quoted.message
							} : {})
						}
					})
				}
			}
		}, {});
		const hasil = await Avishka.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id,
			additionalNodes: [{
				tag: 'biz',
				attrs: {},
				content: [{
					tag: 'interactive',
					attrs: {
						type: 'native_flow',
						v: '1'
					},
					content: [{
						tag: 'native_flow',
						attrs: {
							v: '9',
							name: 'mixed'
						}
					}]
				}]
			}, ...(ai ? [{ attrs: { biz_bot: '1' }, tag: 'bot' }] : [])]
		})
		return hasil
	}
	
	Avishka.sendButtonMsg = async (jid, content = {}, options = {}) => {
		const { text, caption, footer = '', headerType = 1, ai, contextInfo = {}, buttons = [], mentions = [], ...media } = content;
		const msg = await generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					messageContextInfo: {
						deviceListMetadata: {},
						deviceListMetadataVersion: 2,
					},
					buttonsMessage: {
						...(media && typeof media === 'object' && Object.keys(media).length > 0 ? await generateWAMessageContent(media, {
							upload: Avishka.waUploadToServer
						}) : {}),
						contentText: text || caption || '',
						footerText: footer,
						buttons,
						headerType: media && Object.keys(media).length > 0 ? Math.max(...Object.keys(media).map((a) => ({ document: 3, image: 4, video: 5, location: 6 })[a] || headerType)) : headerType,
						contextInfo: {
							...contextInfo,
							...options.contextInfo,
							mentionedJid: options.mentions || mentions,
							...(options.quoted ? {
								stanzaId: options.quoted.key.id,
								remoteJid: options.quoted.key.remoteJid,
								participant: options.quoted.key.participant || options.quoted.key.remoteJid,
								fromMe: options.quoted.key.fromMe,
								quotedMessage: options.quoted.message
							} : {})
						}
					}
				}
			}
		}, {});
		const hasil = await Avishka.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id,
			additionalNodes: [{
				tag: 'biz',
				attrs: {},
				content: [{
					tag: 'interactive',
					attrs: {
						type: 'native_flow',
						v: '1'
					},
					content: [{
						tag: 'native_flow',
						attrs: {
							v: '9',
							name: 'mixed'
						}
					}]
				}]
			}, ...(ai ? [{ attrs: { biz_bot: '1' }, tag: 'bot' }] : [])]
		})
		return hasil
	}
	
	Avishka.newsletterMsg = async (key, content = {}, timeout = 5000) => {
		const { type: rawType = 'INFO', name, description = '', picture = null, react, id, newsletter_id = key, ...media } = content;
		const type = rawType.toUpperCase();
		if (react) {
			if (!(newsletter_id.endsWith('@newsletter') || !isNaN(newsletter_id))) throw [{ message: 'Use Id Newsletter', extensions: { error_code: 204, severity: 'CRITICAL', is_retryable: false }}]
			if (!id) throw [{ message: 'Use Id Newsletter Message', extensions: { error_code: 204, severity: 'CRITICAL', is_retryable: false }}]
			const hasil = await Avishka.query({
				tag: 'message',
				attrs: {
					to: key,
					type: 'reaction',
					'server_id': id,
					id: generateMessageID()
				},
				content: [{
					tag: 'reaction',
					attrs: {
						code: react
					}
				}]
			});
			return hasil
		} else if (media && typeof media === 'object' && Object.keys(media).length > 0) {
			const msg = await generateWAMessageContent(media, { upload: Avishka.waUploadToServer });
			const anu = await Avishka.query({
				tag: 'message',
				attrs: { to: newsletter_id, type: 'text' in media ? 'text' : 'media' },
				content: [{
					tag: 'plaintext',
					attrs: /image|video|audio|sticker|poll/.test(Object.keys(media).join('|')) ? { mediatype: Object.keys(media).find(key => ['image', 'video', 'audio', 'sticker','poll'].includes(key)) || null } : {},
					content: proto.Message.encode(msg).finish()
				}]
			})
			return anu
		} else {
			if ((/(FOLLOW|UNFOLLOW|DELETE)/.test(type)) && !(newsletter_id.endsWith('@newsletter') || !isNaN(newsletter_id))) return [{ message: 'Use Id Newsletter', extensions: { error_code: 204, severity: 'CRITICAL', is_retryable: false }}]
			const _query = await Avishka.query({
				tag: 'iq',
				attrs: {
					to: 's.whatsapp.net',
					type: 'get',
					xmlns: 'w:mex'
				},
				content: [{
					tag: 'query',
					attrs: {
						query_id: type == 'FOLLOW' ? '9926858900719341' : type == 'UNFOLLOW' ? '7238632346214362' : type == 'CREATE' ? '6234210096708695' : type == 'DELETE' ? '8316537688363079' : '6563316087068696'
					},
					content: new TextEncoder().encode(JSON.stringify({
						variables: /(FOLLOW|UNFOLLOW|DELETE)/.test(type) ? { newsletter_id } : type == 'CREATE' ? { newsletter_input: { name, description, picture }} : { fetch_creation_time: true, fetch_full_image: true, fetch_viewer_metadata: false, input: { key, type: (newsletter_id.endsWith('@newsletter') || !isNaN(newsletter_id)) ? 'JID' : 'INVITE' }}
					}))
				}]
			}, timeout);
			const res = JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter || JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter_join_v2 || JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter_leave_v2 || JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter_create || JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter_delete_v2 || JSON.parse(_query.content[0].content)?.errors || JSON.parse(_query.content[0].content)
			res.thread_metadata ? (res.thread_metadata.host = 'https://mmg.whatsapp.net') : null
			return res
		}
	}
	
	Avishka.sendCarouselMsg = async (jid, body = '', footer = '', cards = [], options = {}) => {
		async function getImageMsg(url) {
			const { imageMessage } = await generateWAMessageContent({ image: { url } }, { upload: Avishka.waUploadToServer });
			return imageMessage;
		}
		const cardPromises = cards.map(async (a) => {
			const imageMessage = await getImageMsg(a.url);
			return {
				header: {
					imageMessage: imageMessage,
					hasMediaAttachment: true
				},
				body: { text: a.body },
				footer: { text: a.footer },
				nativeFlowMessage: {
					buttons: a.buttons.map(b => ({
						name: b.name,
						buttonParamsJson: JSON.stringify(b.buttonParamsJson ? JSON.parse(b.buttonParamsJson) : '')
					}))
				}
			};
		});
		
		const cardResults = await Promise.all(cardPromises);
		const msg = await generateWAMessageFromContent(jid, {
			viewOnceMessage: {
				message: {
					messageContextInfo: {
						deviceListMetadata: {},
						deviceListMetadataVersion: 2
					},
					interactiveMessage: proto.Message.InteractiveMessage.create({
						body: proto.Message.InteractiveMessage.Body.create({ text: body }),
						footer: proto.Message.InteractiveMessage.Footer.create({ text: footer }),
						carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
							cards: cardResults,
							messageVersion: 1
						})
					})
				}
			}
		}, {});
		const hasil = await Avishka.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
		return hasil
	}
	
	if (Avishka.user && Avishka.user.id) {
		const botNumber = Avishka.decodeJid(Avishka.user.id);
		if (global.db?.set[botNumber]) {
			Avishka.public = global.db.set[botNumber].public
		} else Avishka.public = true
	} else Avishka.public = true

	return Avishka
}

/*
	* Create By Avishka
	* Follow https://github.com/Avishkadev
	* Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
*/

async function Serialize(Avishka, msg, store) {
	const botLid = Avishka.decodeJid(Avishka.user.lid);
	const botNumber = Avishka.decodeJid(Avishka.user.id);
	const m = { ...msg };
	if (!m) return m
	if (m.key) {
		m.id = m.key.id
		m.chat = m.key.remoteJidAlt || m.key.remoteJid
		m.fromMe = m.key.fromMe
		m.isBot = ['HSK', 'BAE', 'B1E', '3EB0', 'B24E', 'WA'].some(a => m.id.startsWith(a) && [12, 16, 20, 22, 40].includes(m.id.length)) || /(.)\1{5,}|[^a-zA-Z0-9]|[^0-9A-F]/.test(m.id) || false
		m.isGroup = m.chat.endsWith('@g.us')
		if (!m.isGroup && m.chat.endsWith('@lid')) m.chat = Avishka.findJidByLid(m.chat, store) || m.chat;
		m.sender = Avishka.decodeJid(m.fromMe && Avishka.user.id || m.key.participantAlt || m.key.participant || m.chat || '')
		if (m.isGroup) {
			if (!store.groupMetadata) store.groupMetadata = await Avishka.groupFetchAllParticipating().catch(e => ({}));
			let metadata = store.groupMetadata[m.chat] ? store.groupMetadata[m.chat] : (store.groupMetadata[m.chat] = await Avishka.groupMetadata(m.chat).catch(e => ({ ...store.groupMetadata[m.chat] })));
			if (!metadata) {
				metadata = await Avishka.groupMetadata(m.chat).catch(e => ({ ...store.groupMetadata[m.chat] }));
				store.groupMetadata[m.chat] = metadata
			}
			m.metadata = metadata
			m.metadata.size = (metadata.participants || []).length;
			if (metadata.addressingMode === 'lid') {
				const participant = metadata.participants.find(a => a.id === m.sender || a.phoneNumber === m.sender)
				m.sender = participant?.phoneNumber || m.key.participantAlt || m.sender;
				m.metadata.owner = m.metadata?.participants?.find(p => p.id === m.metadata.owner)?.id || m.metadata.owner;
				m.metadata.subjectOwner = m.metadata?.participants?.find(p => p.id === m.metadata.subjectOwner)?.id || m.metadata.subjectOwner;
				if(!m.sender.endsWith('@g.us')) store.contacts[m.sender] = { ...(store.contacts[m.sender] || {}), id: jidNormalizedUser(m.fromMe && Avishka.user.lid || participant?.id || store.contacts[m.sender]?.id || m.sender), phoneNumber: jidNormalizedUser(m.fromMe && Avishka.user.id || participant?.phoneNumber || store.contacts[m.sender]?.phoneNumber || m.sender), name: (m.fromMe && Avishka.user.name) || m.pushName };
			}
			m.admins = m.metadata.participants ? m.metadata.participants.filter(p => p.admin).map(p => ({ id: p.id, phoneNumber: p.phoneNumber, admin: p.admin })) : [];
			m.isAdmin = m.admins.some(a => a.id === m.sender || a.phoneNumber === m.sender);
			m.isBotAdmin = m.admins.some(a => [botNumber, botLid].includes(a.id) || [botNumber, botLid].includes(a.phoneNumber));
		}
	}
	if (m.message) {
		m.type = getContentType(m.message) || Object.keys(m.message)[0]
		m.msg = (/viewOnceMessage|viewOnceMessageV2Extension|editedMessage|ephemeralMessage/i.test(m.type) ? m.message[m.type].message[getContentType(m.message[m.type].message)] : (extractMessageContent(m.message[m.type]) || m.message[m.type]))
		m.body = m.message?.conversation || m.msg?.text || m.msg?.conversation || m.msg?.caption || m.msg?.selectedButtonId || m.msg?.singleSelectReply?.selectedRowId || m.msg?.selectedId || m.msg?.contentText || m.msg?.selectedDisplayText || m.msg?.title || m.msg?.name || ''
		m.mentionedJid = m.msg?.contextInfo?.mentionedJid?.map(a => Avishka.findJidByLid(a, store, true)) || []
		m.text = m.msg?.text || m.msg?.caption || m.message?.conversation || m.msg?.contentText || m.msg?.selectedDisplayText || m.msg?.title || '';
		m.prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(m.body) ? m.body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(m.body) ? m.body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : ''
		m.command = m.body && m.body.replace(m.prefix, '').trim().split(/ +/).shift()
		m.args = m.body?.trim().replace(new RegExp("^" + m.prefix?.replace(/[.*=+:\-?^${}()|[\]\\]|\s/g, '\\$&'), 'i'), '').replace(m.command, '').split(/ +/).filter(a => a) || []
		m.device = getDevice(m.id)
		m.expiration = m.msg?.contextInfo?.expiration || m?.metadata?.ephemeralDuration || store?.messages?.[m.chat]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0
		m.timestamp = (typeof m.messageTimestamp === "number" ? m.messageTimestamp : m.messageTimestamp.low ? m.messageTimestamp.low : m.messageTimestamp.high) || m.msg.timestampMs * 1000
		m.isMedia = !!m.msg?.mimetype || !!m.msg?.thumbnailDirectPath
		if (m.isMedia) {
			m.mime = m.msg?.mimetype
			m.size = m.msg?.fileLength
			m.height = m.msg?.height || ''
			m.width = m.msg?.width || ''
			if (/webp/i.test(m.mime)) {
				m.isAnimated = m.msg?.isAnimated
			}
		}
		m.quoted = m.msg?.contextInfo?.quotedMessage || null
		if (m.quoted) {
			let qMsg = JSON.parse(JSON.stringify(m.msg?.contextInfo?.quotedMessage));
			if (m.msg?.contextInfo?.participant?.endsWith('@lid')) m.msg.contextInfo.participant =  m?.metadata?.participants?.find(a => a.id === m.msg.contextInfo.participant)?.phoneNumber || m.msg.contextInfo.participant;
			m.quoted = {
				...qMsg,
				message: extractMessageContent(qMsg) || qMsg,
				type: getContentType(qMsg) || Object.keys(qMsg)[0],
				id: m.msg.contextInfo.stanzaId,
				chat: m.msg.contextInfo.remoteJid || m.chat,
				sender: Avishka.decodeJid(m.msg.contextInfo.participant),
				fromMe: Avishka.decodeJid(m.msg.contextInfo.participant) === Avishka.decodeJid(Avishka.user.id),
				text: qMsg?.conversation || qMsg?.caption || '',
			};
			m.quoted.msg = extractMessageContent(qMsg[m.quoted.type]) || qMsg[m.quoted.type];
			m.quoted.device = getDevice(m.quoted.id)
			m.quoted.isBot = m.quoted.id ? ['HSK', 'BAE', 'B1E', '3EB0', 'B24E', 'WA'].some(a => m.quoted.id.startsWith(a) && [12, 16, 20, 22, 40].includes(m.quoted.id.length)) || /(.)\1{5,}|[^a-zA-Z0-9]|[^0-9A-F]/.test(m.quoted.id) : false
			m.quoted.fromMe = m.quoted.sender === Avishka.decodeJid(Avishka.user.id)
			m.quoted.mentionedJid = m.quoted?.msg?.contextInfo?.mentionedJid?.map(a => Avishka.findJidByLid(a, store, true)) || []
			m.quoted.body = m.quoted.msg?.text || m.quoted.msg?.caption || m.quoted?.message?.conversation || m.quoted.msg?.selectedButtonId || m.quoted.msg?.singleSelectReply?.selectedRowId || m.quoted.msg?.selectedId || m.quoted.msg?.contentText || m.quoted.msg?.selectedDisplayText || m.quoted.msg?.title || m.quoted?.msg?.name || ''
			m.getQuotedObj = async () => {
				if (!m.quoted.id) return null
				let q = await global.loadMessage(m.chat, m.quoted.id, Avishka)
				if (q) {
					return await Serialize(Avishka, q, store)
				} else {
					return null
				}
			}
			m.quoted.key = {
				remoteJid: m.msg?.contextInfo?.remoteJid || m.chat,
				participant: m.quoted.sender,
				fromMe: areJidsSameUser(Avishka.decodeJid(m.msg?.contextInfo?.participant), Avishka.decodeJid(Avishka?.user?.id)),
				id: m.msg?.contextInfo?.stanzaId
			}
			m.quoted.isGroup = m.quoted.chat.endsWith('@g.us')
			m.quoted.mentions = m.quoted.msg?.contextInfo?.mentionedJid || []
			m.quoted.body = m.quoted.msg?.text || m.quoted.msg?.caption || m.quoted?.message?.conversation || m.quoted.msg?.selectedButtonId || m.quoted.msg?.singleSelectReply?.selectedRowId || m.quoted.msg?.selectedId || m.quoted.msg?.contentText || m.quoted.msg?.selectedDisplayText || m.quoted.msg?.title || m.quoted?.msg?.name || ''
			m.quoted.prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(m.quoted.body) ? m.quoted.body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(m.quoted.body) ? m.quoted.body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : ''
			m.quoted.command = m.quoted.body && m.quoted.body.replace(m.quoted.prefix, '').trim().split(/ +/).shift()
			m.quoted.isMedia = !!m.quoted.msg?.mimetype || !!m.quoted.msg?.thumbnailDirectPath
			if (m.quoted.isMedia) {
				m.quoted.fileSha256 = m.quoted[m.quoted.type]?.fileSha256 || ''
				m.quoted.mime = m.quoted.msg?.mimetype
				m.quoted.size = m.quoted.msg?.fileLength
				m.quoted.height = m.quoted.msg?.height || ''
				m.quoted.width = m.quoted.msg?.width || ''
				if (/webp/i.test(m.quoted.mime)) {
					m.quoted.isAnimated = m?.quoted?.msg?.isAnimated || false
				}
			}
			m.quoted.fakeObj = () => ({
				key: {
					remoteJid: m.quoted.chat,
					fromMe: m.quoted.fromMe,
					id: m.quoted.id
				},
				message: m.quoted,
				...(m.isGroup ? { participant: m.quoted.sender } : {})
			});
			m.quoted.download = () => Avishka.downloadMediaMessage(m.quoted)
			m.quoted.delete = () => {
				Avishka.sendMessage(m.quoted.chat, {
					delete: {
						remoteJid: m.quoted.chat,
						fromMe: m.isBotAdmins ? false : true,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
			}
		}
	}
	
	m.download = () => Avishka.downloadMediaMessage(m)
	
	m.copy = () => Serialize(Avishka, JSON.parse(JSON.stringify(m)), store)
	
	m.react = (u) => Avishka.sendMessage(m.chat, { react: { text: u, key: m.key }})
	
	m.reply = async (content, options = {}) => {
		const { quoted = m, chat = m.chat, caption = '', mentions = [], ephemeralExpiration = m.expiration || m?.metadata?.ephemeralDuration || store?.messages[m.chat]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0, ...validate } = options;
		const textBody = typeof content === 'string' ? content : (content.text || content.caption || '');
		const providedMentions = Array.isArray(mentions) ? mentions : [];
		const extractedMentions = [...textBody.matchAll(/@(\d{5,16})/g)].map(v => v[1] + '@s.whatsapp.net');
		const fixMentions = [...new Set([...providedMentions, ...extractedMentions])];
		if (typeof content === 'object') {
			return Avishka.sendMessage(chat, content, { ...validate, quoted, ephemeralExpiration })
		} else if (typeof content === 'string') {
			try {
				if (/^https?:\/\//.test(content)) {
					const res = await axios.head(content).catch(() => null);
					const mime = res?.headers['content-type'] || '';
					if (/gif|image|video|audio|pdf|stream/i.test(mime)) {
						let type = /image/.test(mime) ? 'image' : /video/.test(mime) ? 'video' : /audio/.test(mime) ? 'audio' : 'document';
						return Avishka.sendMessage(chat, { [type]: { url: content }, caption, mimetype: mime, ...validate }, { quoted, ephemeralExpiration })
					} else {
						return Avishka.sendMessage(chat, { text: content, mentions: fixMentions, ...validate }, { quoted, ephemeralExpiration })
					}
				} else {
					return Avishka.sendMessage(chat, { text: content, mentions: fixMentions, ...validate }, { quoted, ephemeralExpiration })
				}
			} catch (e) {
				return Avishka.sendMessage(chat, { text: content, mentions: fixMentions, ...validate }, { quoted, ephemeralExpiration })
			}
		}
	}

	return m
}

module.exports = {
	GroupUpdate,
	GroupParticipantsUpdate,
	LoadDataBase,
	MessagesUpsert,
	Solving
};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellowBright(`[UPDATE] ${__filename}`))
	delete require.cache[file]
	require(file)
});