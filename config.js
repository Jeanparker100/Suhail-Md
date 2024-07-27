const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Togo,Lome."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://parker_i4ey_user:suaG2xs9m0hY9ocC8nINeqSzLrRekihD@dpg-cq98j2jv2p9s73cfbrtg-a.oregon-postgres.render.com/parker_i4ey"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Togo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/IAto4swnSi78hTHy9Rin61";
global.website=process.env.GURL || "https://chat.whatsapp.com/IAto4swnSi78hTHy9Rin61" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ee20e4320f9b39c2b7d7a.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "¹⁴³ ᴬˡᵉᵐᵃᵖ 🧸💜 𝙹𝚎𝚊𝚗 𝙿𝚊𝚛𝚔𝚎𝚛 ©" 


global.devs = "22898133388" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22898133388";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "log" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/ee20e4320f9b39c2b7d7a.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_26_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDg3LFxuICAgICAgICA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMixcbiAgICAgICAgNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU4LFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDYwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDE4LFxuICAgICAgICA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTksXG4gICAgICAgIDkxLFxuICAgICAgICA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMixcbiAgICAgICAgNzksXG4gICAgICAgIDM2LFxuICAgICAgICA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDksXG4gICAgICAgIDkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDc5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMxLFxuICAgICAgICA3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJFZ2lab3Fvd3JXcWFEMTVocmgzNlU2STRxaVFTdW4rdTVrbEhvVVFRZlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1RZmVOaUhBVDVLdVZpT201ZkJuZ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTU5OGQ4YTktNzY4Ny00Nzk2LWIwMzktODNmODdjZGYyNTU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgNDMsXG4gICAgICAyNyxcbiAgICAgIDQ2LFxuICAgICAgMTQ0LFxuICAgICAgMTg2LFxuICAgICAgMTU4LFxuICAgICAgODEsXG4gICAgICAxNjcsXG4gICAgICAxNDIsXG4gICAgICAyNDMsXG4gICAgICA4OSxcbiAgICAgIDE1MixcbiAgICAgIDcyLFxuICAgICAgMjUsXG4gICAgICA5MixcbiAgICAgIDEyNyxcbiAgICAgIDEwLFxuICAgICAgMTUsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgMTM1LFxuICAgICAgNTgsXG4gICAgICAyMjgsXG4gICAgICAyNTEsXG4gICAgICAxNDAsXG4gICAgICAxODYsXG4gICAgICAxNTgsXG4gICAgICAxMSxcbiAgICAgIDcxLFxuICAgICAgMzIsXG4gICAgICAxNjIsXG4gICAgICAxNTEsXG4gICAgICAxMTcsXG4gICAgICAxMDYsXG4gICAgICA0MyxcbiAgICAgIDI0MixcbiAgICAgIDE5LFxuICAgICAgMTI4LFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRNN0U1UjNCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjg5ODEzMzM4ODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZufCdmo7wnZqK8J2alyDwnZm/8J2aivCdmpvwnZqU8J2ajvCdmptcIixcbiAgICBcImxpZFwiOiBcIjY5MTIzNzU3MzI2NDE0OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0NTbjVVRUVLemJsTFVHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGK2xpZTJZUkhXUzBFeGJ4OFpBeHZNSlR6RDFIZzc4VHE3SGJkVzBvb2dBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImR5eVNERkorOE9kWUVsTjd5M0tDaStGa0NmM3ppc3BTNWovWm15YXZ6Q3pqWW1VNjJGQnZpY1BwTEx4OUNZMXBua0RpWHdjZmdHcnFUeHRMRm11eUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVFWkxWQ3JrSzNLQTZvR1pCdkowZUNKYm1qcnJrbDJuSlFGcXZWYXVyQTBoT0NxYlI5eXowZ3JnY25pMHVCNkN3c0VjSVE4L2t2VjFZc3M1Q3ovY2lBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyODk4MTMzMzg4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTAxMTY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBREdLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFER0suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1ZW52T3R4Q3RxYVVNNGRzc3BzQ1QxaXJlN3JDRW15TTMvWjBLaUExQ0lvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTgyOTIzMjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTkxMzM3NjQwNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ¹⁴³ ᴬˡᵉᵐᵃᵖ 🧸💜 𝙹𝚎𝚊𝚗 𝙿𝚊𝚛𝚔𝚎𝚛-ᴍᴅ 』```", //*『𝙹𝚎𝚊𝚗 𝙿𝚊𝚛𝚔𝚎𝚛 • 𝙹𝚎𝚊𝚗 𝙿𝚊𝚛𝚔𝚎𝚛 ©』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝙹𝚎𝚊𝚗 𝙿𝚊𝚛𝚔𝚎𝚛",
  packname: process.env.PACK_NAME || "¹⁴³ ᴬˡᵉᵐᵃᵖ 🧸💜",
  botname : process.env.BOT_NAME  || "𝙹𝚎𝚊𝚗 𝙿𝚊𝚛𝚔𝚎𝚛-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝙹𝚎𝚊𝚗 𝙿𝚊𝚛𝚔𝚎𝚛",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "bmkCFm1VJHibcHbxhDbrVRXA",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-am25I3Dok4Ngg1Cr7MxBT3BlbkFJfUQHvyksouYxWpxSeIjZ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_004602e3e672c5bbb1cd0fee2b4a068e8fb32917320bea32";
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
