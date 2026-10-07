/*==============================================================================================
 *  Developer  : Avishka Shavinda (Avi)
 *  Brand      : Alpha Vision Infinite
 *  Contact    : +94 77 283 6332
 *  Copyright (c) 2026 Avishka Shavinda. All Rights Reserved.
 *  Unauthorized copying or distribution of this file is strictly prohibited.
 * ==============================================================================================*/

global.owner = ["94772836332"];
global.packname = "© 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢";
global.author = "Avishka shavinda";
global.botname = "Avi";
global.listprefix = ["+", "!", "."];
process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);
require("./settings");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const fs = require("fs");
const os = require("os");
const qs = require("qs");
const util = require("util");
const gis = require("g-i-s");
const jimp = require("jimp");
const path = require("path");
const scp2 = require("./lib/xnxx");
const fg = require("api-dylux");
const https = require("https");
const axios = require("axios");
const chalk = require("chalk");
const yts = require("yt-search");
const ytdl = require("ytdl-core");
const cron = require("node-cron");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
const FileType = require("file-type");
const { Chess } = require("chess.js");
const google = require("googlethis");
const similarity = require("similarity");
const PDFDocument = require("pdfkit");
const webp = require("node-webpmux");
const ffmpeg = require("fluent-ffmpeg");
const speed = require("performance-now");
const didYouMean = require("didyoumean");
const { performance } = require("perf_hooks");
const moment = require("moment-timezone");
const translate = require("translate-google-api");
const { Akinator, AkinatorAnswer } = require("aki-api");
const PhoneNum = require("awesome-phonenumber");
const { exec, spawn, execSync } = require("child_process");
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  getBinaryNodeChildren,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("baileys");
const menfesTimeouts = new Map();
const TicTacToe = require("./lib/tictactoe");
const { antiSpam } = require("./src/antispam");
const { TelegraPh, ConMedia } = require("./lib/uploader");
const { toAudio, toPTT, toVideo } = require("./lib/converter");
const { GroupUpdate, LoadDataBase } = require("./src/hnd");
const { RentBot, StopRentBot, ListRentBot } = require("./src/RentBot");
const {
  imageToWebp,
  videoToWebp,
  gifToWebp,
  writeExif,
} = require("./lib/exif");
const {
  cmdAdd,
  cmdDel,
  cmdAddHit,
  addExpired,
  getPosition,
  getExpired,
  getStatus,
  checkStatus,
  getAllExpired,
  checkExpired,
} = require("./src/database");
const {
  rdGame,
  iGame,
  tGame,
  gameSlot,
  gameCasinoSolo,
  gameSamgongSolo,
  gameMerampok,
  gameBegal,
  daily,
  buy,
  setLimit,
  addLimit,
  addMoney,
  setMoney,
  transfer,
  Blackjack,
  SnakeLadder,
} = require("./lib/game");

const metaQuote = {
  key: {
    remoteJid: "status@broadcast",
    participant: "0@s.whatsapp.net",
    fromMe: false,
    id: "META_AI_GETDP",
  },
  message: {
    contactMessage: {
      displayName: "Avi",
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Avi;;;;\nFN:Avi\nORG:Meta Platforms\nTEL;type=CELL;type=VOICE;waid=13135550002:+1 313 555 0002\nEND:VCARD`,
    },
  },
};

const {
  pinterest,
  wallpaper,
  remini,
  wikimedia,
  hitamkan,
  yanzGpt,
  mediafireDl,
  ringtone,
  styletext,
  instagramDl,
  tiktokDl,
  facebookDl,
  instaStalk,
  telegramStalk,
  tiktokStalk,
  genshinStalk,
  instaStory,
  bk9Ai,
  spotifyDl,
  ytMp4,
  ytMp3,
  NvlGroup,
  quotedLyo,
  youSearch,
  gptLogic,
  savetube,
  simi,
  geminiAi,
} = require("./lib/screaper");
const {
  unixTimestampSeconds,
  generateMessageTag,
  processTime,
  webApi,
  getRandom,
  getBuffer,
  fetchJson,
  runtime,
  clockString,
  sleep,
  isUrl,
  getTime,
  formatDate,
  formatp,
  jsonformat,
  reSize,
  toHD,
  logic,
  generateProfilePicture,
  bytesToSize,
  errorCache,
  normalize,
  getSizeMedia,
  parseMention,
  getGroupAdmins,
  readFileTxt,
  readFileJson,
  getHashedPassword,
  generateAuthToken,
  cekMenfes,
  generateToken,
  batasiTeks,
  randomText,
  isEmoji,
  getTypeUrlMedia,
  pickRandom,
  convertTimestampToDate,
  getAllHTML,
  tarBackup,
} = require("./lib/function");

module.exports = Avishka = async (Avishka, m, msg, store, groupCache) => {
  try {
    const Avi = Avishka;
    await LoadDataBase(Avishka, m);
    await GroupUpdate(Avishka, m, store);
    const botNumber = await Avishka.decodeJid(Avishka.user.id);
    const body =
      (m.type === "conversation"
        ? m.message.conversation
        : m.type == "imageMessage"
          ? m.message.imageMessage.caption
          : m.type == "videoMessage"
            ? m.message.videoMessage.caption
            : m.type == "extendedTextMessage"
              ? m.message.extendedTextMessage.text
              : m.type == "reactionMessage"
                ? m.message.reactionMessage.text
                : m.type == "buttonsResponseMessage"
                  ? m.message.buttonsResponseMessage.selectedButtonId
                  : m.type == "listResponseMessage"
                    ? m.message.listResponseMessage.singleSelectReply
                        .selectedRowId
                    : m.type == "templateButtonReplyMessage"
                      ? m.message.templateButtonReplyMessage.selectedId
                      : m.type == "interactiveResponseMessage" &&
                          m.quoted &&
                          m.quoted.fromMe
                        ? m.message.interactiveResponseMessage
                            ?.nativeFlowResponseMessage
                          ? JSON.parse(
                              m.message.interactiveResponseMessage
                                .nativeFlowResponseMessage.paramsJson,
                            ).id
                          : ""
                        : m.type == "messageContextInfo"
                          ? m.message.buttonsResponseMessage
                              ?.selectedButtonId ||
                            m.message.listResponseMessage?.singleSelectReply
                              .selectedRowId ||
                            ""
                          : m.type == "editedMessage"
                            ? m.message.editedMessage?.message?.protocolMessage
                                ?.editedMessage?.extendedTextMessage?.text ||
                              m.message.editedMessage?.message?.protocolMessage
                                ?.editedMessage?.conversation ||
                              ""
                            : m.type == "protocolMessage"
                              ? m.message.protocolMessage?.editedMessage
                                  ?.extendedTextMessage?.text ||
                                m.message.protocolMessage?.editedMessage
                                  ?.conversation ||
                                m.message.protocolMessage?.editedMessage
                                  ?.imageMessage?.caption ||
                                m.message.protocolMessage?.editedMessage
                                  ?.videoMessage?.caption ||
                                ""
                              : "") || "";
    const budy = typeof m.text == "string" ? m.text : "";
    const isCreator = (isOwner = [botNumber, ...owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender));
    const cases = db.cases
      ? db.cases
      : (db.cases = [
          ...fs
            .readFileSync("./Avishka.js", "utf-8")
            .matchAll(/case\s+['"]([^'"]+)['"]/g),
        ].map((match) => match[1]));
    const prefix = isCreator
      ? /^[°•π÷×¶∆£¢€ꦾ®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body)
        ? body.match(/^[°•π÷×¶∆£¢€ꦾ®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0]
        : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body)
          ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0]
          : listprefix.find((a) => body?.startsWith(a)) || ""
      : db.set[botNumber].multiprefix
        ? /^[°•π÷×¶∆£¢€ꦾ®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body)
          ? body.match(/^[°•π÷×¶∆£¢€ꦾ®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0]
          : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body)
            ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0]
            : listprefix.find((a) => body?.startsWith(a)) || "¿"
        : listprefix.find((a) => body?.startsWith(a)) || "¿";

    const isCmd = body.startsWith(prefix);

    const args = body.trim().split(/ +/).slice(1);

    const quoted = m.quoted ? m.quoted : m;

    const command = isCreator
      ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
      : isCmd
        ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
        : "";

    const text = (q = args.join(" "));
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    const hari = moment.tz("Asia/colombo").locale("id").format("dddd");
    const Avidate = moment.tz("Asia/colombo").locale("id").format("DD/MM/YYYY");
    const Times = moment.tz("Asia/colombo").locale("id").format("HH:mm:ss");

    const Timeslot =
      Times < "05:00:00"
        ? "Good Morning 🌄"
        : Times < "11:00:00"
          ? "Good Morning 🌄"
          : Times < "15:00:00"
            ? "Good Afternoon 🌅"
            : Times < "18:00:00"
              ? "Good Evening 🌃"
              : Times < "19:00:00"
                ? "Good Evening 🌃"
                : Times < "23:59:00"
                  ? "Good Night ☄️"
                  : "Good Night ☄️";

    const almost = 0.72;
    const time = Date.now();
    const time_now = new Date();
    const time_end =
      60000 - (time_now.getSeconds() * 1000 + time_now.getMilliseconds());
    const readmore = String.fromCharCode(8206).repeat(999);
    const setv = pickRandom(listv);

    // Read Database
    const sewa = db.sewa;
    const premium = db.premium;
    const set = db.set[botNumber];

    // Database Game
    let suit = db.game.suit;
    let chess = db.game.chess;
    let chat_ai = db.game.chat_ai;
    let menfes = db.game.menfes;
    let tekateki = db.game.tekateki;
    let akinator = db.game.akinator;
    let tictactoe = db.game.tictactoe;
    let tebaklirik = db.game.tebaklirik;
    let kuismath = db.game.kuismath;
    let blackjack = db.game.blackjack;
    let tebaklagu = db.game.tebaklagu;
    let tebakkata = db.game.tebakkata;
    let family100 = db.game.family100;
    let susunkata = db.game.susunkata;
    let tebakbom = db.game.tebakbom;
    let ulartangga = db.game.ulartangga;
    let tebakkimia = db.game.tebakkimia;
    let caklontong = db.game.caklontong;
    let tebakangka = db.game.tebakangka;
    let tebaknegara = db.game.tebaknegara;
    let tebakgambar = db.game.tebakgambar;
    let tebakbendera = db.game.tebakbendera;

    const isVip = db.users[m.sender] ? db.users[m.sender].vip : false;
    const isBan = db.users[m.sender] ? db.users[m.sender].ban : false;
    const isLimit = db.users[m.sender] ? db.users[m.sender].limit > 0 : false;
    const isPremium = isCreator || checkStatus(m.sender, premium) || false;
    const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false;

    // Fake
    const fkontak = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        participant: "0@s.whatsapp.net",
        fromMe: false,
        id: "Avishka",
      },
      message: {
        contactMessage: {
          displayName: m.pushName || author,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Avishka shavinda\nEND:VCARD`,
          sendEphemeral: true,
        },
      },
    };

    //auto recording all
    if (global.autoRecord) {
      if (m.chat) {
        Avishka.sendPresenceUpdate("recording", m.chat);
      }
    }

    // Auto Set Bio
    if (set.autobio) {
      if (new Date() * 1 - set.status > 60000) {
        await Avishka.updateProfileStatus(
          `𝙷𝙸 👋🏻 𝙸'𝙼 𝙰𝚅𝙸 🥷🏻 𝙷4𝙲𝙺3𝚁 𝚃𝙴𝙰𝙼 𝙼𝙴𝙼𝙱𝙴𝚁 🗡️ | 🪄 Runtime : ${runtime(process.uptime())}`,
        ).catch((e) => {});
        set.status = new Date() * 1;
      }
    }

    if (!isCreator) {
      if (!Avishka.public && !m.key.fromMe) return;
    }

    //main switch statement
    switch (command) {
      /*|⬡════════════════════════════════════════════|❝   𝙰vi -  Add Case..  ™ ❞|═══════════════════════════════════════════⬡|*/

      case "20":
        {
          console.log(".");
        }
        break;

      case "menu":
        m.react("⏳");
        {
          await Avishka.sendButtonMsg(
            m.chat,
            {
              text: `\n
> 口 PRINCE-AVI-MD _ !!

  *𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡* 


❒ 𝙱𝚘𝚝 𝚗𝚊𝚖𝚎 : 𝙿𝚁𝙸𝙽𝙲𝙴-𝙰𝚅𝙸-𝙼𝙳
❒ 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 : 𝙰𝚟𝚒𝚜𝚑𝚔𝚊 𝚂𝚑𝚊𝚟𝚒𝚗𝚍𝚊
❒ 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : 5.0.0𝚟
❒ 𝚂𝚝𝚊𝚝𝚞𝚜 : *𝙵𝚛𝚎𝚎*
口 𝚃𝚒𝚖𝚎 : ${Times} 
口 𝙳𝚊𝚝𝚎 : ${Avidate} 

© 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢`,
              footer:
                "𝚜𝚌𝚛𝚒𝚙𝚝 𝚘𝚏  " + botname + " 𝚒𝚜 𝚘𝚗 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 @𝙰𝚟𝚒𝚜𝚑𝚔𝚊 𝚜𝚑𝚊𝚟𝚒𝚗𝚍𝚊",
              buttons: [
                {
                  buttonId: ".owner",
                  buttonText: { displayText: "Owner" },

                  type: 1,
                },
                {
                  buttonId: ".donate",
                  buttonText: { displayText: "Support" },

                  type: 1,
                },
                {
                  buttonId: ".allmenu",
                  buttonText: { displayText: "All-menu" },
                  type: 1,
                },
              ],
              headerType: 3,
              image: { url: "https://github.com/AvishkaShavinda/PRINCE-AVI-MD/blob/main/AMedia/v5.jpeg?raw=true" },
            },
            { quoted: m },
          );
        }
        m.react("✅");
        break;
      /*|⬡════════════════════════════════════════════|❝   𝙰vi -   Owner Menu..  ™ ❞|═══════════════════════════════════════════⬡|*/

      case "as":
        {
          let target =
            text.split("|")[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";

          const asf =
            `\u200EA\u200FV\u202A​V\u202B\u0000A\u202C\u202D​\u202E\u0000\u0000\u0000`.repeat(
              100,
            );
          //Avishka shavinda
          await Avishka.sendMessage(target, { text: asf });
        }
        break;

      case "wastalk":
      case "whatsappstalk":
        {
          if (!isLimit) return m.reply(mess.limit);
          if (!text)
            return m.reply(`Example: ${prefix + command} @tag / 9477xxx`);
          try {
            let num = m.quoted?.sender || m.mentionedJid?.[0] || text;
            if (!num)
              return m.reply(`Example : ${prefix + command} @tag / 9477xxx`);
            num = num.replace(/\D/g, "") + "@s.whatsapp.net";
            if (!(await Avishka.onWhatsApp(num))[0]?.exists)
              return m.reply("Nomer tidak terdaftar di WhatsApp!");
            let img = await Avishka.profilePictureUrl(num, "image").catch(
              (_) =>
                "https://github.com/AvishkaShavinda/PRINCE-AVI-MD/blob/main/AMedia/v5.jpeg?raw=true",
            );
            let bio = await Avishka.fetchStatus(num).catch((_) => {});
            let name = await Avishka.getName(num);
            let business = await Avishka.getBusinessProfile(num);
            let format = PhoneNum(`+${num.split("@")[0]}`);
            let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
            let country = regionNames.of(format.getRegionCode("international"));
            let wea = `*PRINCE-AVI-MD*\n *WhatsApp Stalk*\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : "-"}\n*° Format Number :* ${format.getNumber("international")}\n*° Url Api :* wa.me/${num.split("@")[0]}\n*° Mentions :* @${num.split("@")[0]}\n*° Status :* ${bio?.status || "-"}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale("id").format("LL") : "-"}\n\n${business ? `*WhatsApp Business Stalk*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : "-"}\n*° Email :* ${business.email ? business.email : "-"}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : "-"}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : "-"}\n*° Description* : ${business.description ? business.description : "-"}` : "*Standard WhatsApp Account*"}\n \n _© 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢_ <𝙰𝚅𝙸>`;
            img
              ? await Avishka.sendMessage(
                  m.chat,
                  { image: { url: img }, caption: wea, mentions: [num] },
                  { quoted: m },
                )
              : m.reply(wea);
          } catch (e) {
            m.reply("Nomer Tidak ditemukan!");
          }
        }
        break;

      default:
        // ----------------------------------

        if (budy.startsWith(">")) {
          if (!isCreator) return;
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await m.reply(evaled);
          } catch (err) {
            await m.reply(String(err));
          }
        }
        if (budy.startsWith("<")) {
          if (!isCreator) return;
          try {
            let evaled = await eval(`(async () => { ${budy.slice(2)} })()`);
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await m.reply(evaled);
          } catch (err) {
            await m.reply(String(err));
          }
        }
        if (budy.startsWith("$")) {
          if (!isCreator) return;
          if (!text) return;
          exec(budy.slice(2), (err, stdout) => {
            if (err) return m.reply(`${err}`);
            if (stdout) return m.reply(stdout);
          });
        }
    }
  } catch (e) {
    let msg;
    console.log(e);
    const errorKey =
      e?.code || e?.name || e?.message?.slice(0, 100) || "unknown_error";
    const now = Date.now();
    if (!errorCache[errorKey]) errorCache[errorKey] = [];
    errorCache[errorKey] = errorCache[errorKey].filter(
      (ts) => now - ts < 600000,
    );
    if (errorCache[errorKey].length >= 3) return;
    errorCache[errorKey].push(now);
    if (e?.status === 404) msg = "Resource not found (404).";
    else if (e?.status === 403) msg = "Access restricted (403).";
    else if (e?.code === "ETIMEDOUT")
      msg =
        "It seems like the server is taking too long to respond. Try checking your internet connection..";
    else if (e?.code === "ENOTFOUND")
      msg =
        "It looks like the server was not found. Check your internet connection..";
    else if (e?.code === "ERR_OSSL_BAD_DECRYPT")
      msg =
        "It looks like an error occurred while decrypting the data. Make sure the key is valid.";
    else if (e?.name === "TypeError")
      msg = "There seems to be a problem with the data type being used.";
    else if (e?.name === "ReferenceError")
      msg = "It looks like there is a variable that has not been defined yet.";
    else if (e?.name === "SessionError")
      msg =
        "There seems to be a problem with the session. Make sure everything is connected properly.";
    else if (e?.name === "AxiosError")
      msg =
        "There seems to be a problem with data retrieval, please check the connection.";
    else if (e?.message?.includes("not-acceptable") || e?.data === 406)
      msg =
        "The request was not accepted by the server (406 Not Acceptable). Check that the format and content of the request are correct.";
    else if (e?.output?.statusCode === 408 || e?.message?.includes("Timed Out"))
      msg =
        "It looks like the request has exceeded the time limit, please try again later.";
    else if (
      e?.output?.statusCode === 404 ||
      e?.message?.includes("myAppStateKey")
    )
      msg =
        "It looks like the state key was not found, please try again later.";
    else if (
      e?.output?.statusCode === 500 ||
      e?.message?.includes("internal-server-error")
    )
      msg =
        "It seems there was an error in the server, please try again later.";
    else if (e?.message?.includes("Media upload failed on all hosts"))
      msg = "It seems like media upload failed, try checking server settings.";
    else if (e?.message?.includes("No sessions"))
      msg =
        "It looks like the session was not found, maybe the bot will not respond.";
    else if (e?.message?.includes("Cannot find ffmpeg"))
      msg =
        "It seems that ffmpeg is not installed on the system, please install it first.";
    else if (e?.message?.includes("Cannot find module"))
      msg =
        "It seems that there is a module that is not installed in the system, please install it first.";
    if (msg) {
      m.reply(
        msg +
          "\n\nError: " +
          (e?.name ||
            e?.code ||
            e?.output?.statusCode ||
            e?.status ||
            "Unknown") +
          "\nLog Error Telah dikirim ke Owner\n\n",
      );
    }
    return Avishka.sendFromOwner(
      owner,
      `Hi dear, it seems like there is an error, don't forget to fix it, okay?\n\nVersion : *${require("./package.json").version}*\n\n*Log error:*\n\n` +
        util.format(e),
      m,
      { contextInfo: { isForwarded: true } },
    );
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
