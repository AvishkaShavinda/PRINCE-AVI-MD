/*═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

												 Avishka shavinda 
												 Sri lanka  
												 © 𝙰𝚕𝚙𝚑𝚊 𝚅𝚒𝚜𝚒𝚘𝚗 𝙸𝚗𝚏𝚒𝚗𝚒𝚝𝚢   

/═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════*/





const fs = require('fs');
const chalk = require('chalk');

global.authors = 'Avishka shavinda'
global.botname = 'Avi'
global.listprefix = ['+','!','.'] 
global.listv = ['✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json' 
global.tempatStore = 'baileys_store.json' 
global.pairing_code = true
global.number_bot = '' //
global.auto_react = true // හැම මැසේජ් එකකටම රියැක්ට් වෙන්න ඕන නම් true, නැත්නම් false
global.react_emojis = ['❤️', '🩵', '🦄', '👻', '🧚', '💐', '🪄', '⭐', '🅰️', '🇱🇰'] // රියැක්ට් වෙන්න ඕන ඉමෝජි ටික මෙතනට දාන්න






let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});


