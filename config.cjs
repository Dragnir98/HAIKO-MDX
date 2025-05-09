


// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "HAIKO~MDX~DNwhhSRC#RSrsuUHwr3SwF8n0v-APeEVPrGK9SqSC3VgulBIZICA",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'false : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '🤞',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ == 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'false' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'false : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'falseĺ' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false' : false,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'false : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  BOT_NAME: process.env.BOT_NAME || "🧛‍♂️MɌX🩸 ĐȺɌꝀ🐦‍🔥 𝔇ℜ𝔄𝔊𝔑ℑℜ👀🧛🏻‍♂️",
  MENU_IMAGE: process.env.MENU_IMAGE || "https://files.catbox.moe/pcb7ya.jpg",
  DESCRIPTION: process.env.DESCRIPTION || "WELCOME TO Mr AFRIKEN",
  OWNER_NAME: process.env.OWNER_NAME || "MR AFRIKEN SAID",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "50932844372",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'false' : false, 
};


module.exports = config;

  
