const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="kitsubfox@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/H1mvkCxzY1PCoj8UgkIpi9";
global.website =process.env.GURL || "https://chat.whatsapp.com/H1mvkCxzY1PCoj8UgkIpi9" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/BY4fDjB/showcase-3.jpg" || "https://i.ibb.co/671dGx0Y/showcase1.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Griffith" 


global.devs = "6283817901856" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254784457886";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/BY4fDjB/showcase-3.jpg" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_27_02_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgwLFxuICAgICAgICA5NixcbiAgICAgICAgMTg0LFxuICAgICAgICA3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNixcbiAgICAgICAgMTgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0LFxuICAgICAgICA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAxLFxuICAgICAgICA0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDk4LFxuICAgICAgICA3MixcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxJUDh5bTBXWHlmRE9xN29IQi8rc3hGaWhQQWRCeVJVd0RxdjIwOGlUSDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4Mzg5MTEzOTk4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkI2NkMyN0VFNkFDRjM1NTk5MzM2NzQwNjY4N0Y2NjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQwNzEzMjIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4Mzg5MTEzOTk4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0I0RDhDRERFRkUxMUY3MEUwQzJERjdEMEY5QTYyQ0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQwNzEzMjIxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFoOW93a2RQVEZ1RGtkUmxQTnZZV0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzZjMTc0ZmMtZWVlMC00N2ZjLWFkNmEtOTBkMTM3ZjEwZGRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMCxcbiAgICAgIDIwNyxcbiAgICAgIDE3OCxcbiAgICAgIDY3LFxuICAgICAgMTMyLFxuICAgICAgMjM3LFxuICAgICAgNDAsXG4gICAgICAyNTIsXG4gICAgICAxODEsXG4gICAgICAxOTksXG4gICAgICAzMSxcbiAgICAgIDE2NixcbiAgICAgIDE2NixcbiAgICAgIDk4LFxuICAgICAgMTY3LFxuICAgICAgMjIwLFxuICAgICAgNDYsXG4gICAgICA0LFxuICAgICAgMTg2LFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDQ4LFxuICAgICAgNTQsXG4gICAgICAyMTcsXG4gICAgICAxODIsXG4gICAgICAyMDcsXG4gICAgICAyMjgsXG4gICAgICAxMjAsXG4gICAgICA2OCxcbiAgICAgIDExOSxcbiAgICAgIDc5LFxuICAgICAgOTEsXG4gICAgICA5MCxcbiAgICAgIDc0LFxuICAgICAgMTcsXG4gICAgICAxMTIsXG4gICAgICAxMzQsXG4gICAgICAyNDksXG4gICAgICA4MyxcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFSSE5OS1ZBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI2MjgzODkxMTM5OTg4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMTAxMTI0MDQ5MzA5Mjo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIu+4v1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05YRHFMZ0VFUDNaaEw0R0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWlZYYkw5eVp5WDk3QUxNaGFJbGZRNXhCT2VuZUFNTGM5SDVHd3NLZ0pSWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBa2FCN2hTQjNRUnpsZXZxRVliaGxtclh5Q0hGQm1tSzY0WFVzWDRKeCtHbVFCS3h0UWJGNTN2dU5YemR4dzg3ZzZSQjNmVlR3MHp4a0J1T3V0U1VCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrT094UzJaV01LNVR1SnhRVXFpdVV3Rk90K0w5Wis2Tm9tNFZxSkdwdHJpZUhNdU5qSDFFNmJzL2hWT0xNMll5Ti85bkFJalk3K2ZTOTdUd1c4b1hDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI2MjgzODkxMTM5OTg4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQwNzEzMjE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBUUFBSEh0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFRQUFISHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjQmpkUU9KTXZqK016VGQ2RllpaEg0SkdYbm04Vm5WTHp6UXFFMVJmczBRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExOTE4NDYzNTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDRdfSxcInRpbWVzdGFtcFwiOlwiMTczODEzNDc2MzI5OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "maiki" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Maiki",
  packname: process.env.PACK_NAME || "little.fox's.notebook",
  botname : process.env.BOT_NAME  || "R̶i̶z̶z̶🄷🅄🄱.",
  ownername:process.env.OWNER_NAME|| "one above all",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "NEZUKO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
