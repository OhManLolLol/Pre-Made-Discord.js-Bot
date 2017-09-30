
const discord = require('discord.js')
const bot = new discord.Client()

let config = require('./config.json')
let owner = require("./config.json").ownerid

bot.login(config.token)


bot.on('ready', () => {
    console.log('Logged in as ' + bot.user.username + ' and I am on ' + bot.guilds.size + ' guilds!')
});
bot.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    console.log(message.author.username + '#' + message.author.discriminator + ' (' + message.author.id + ') did the command: ' + command + " on " + message.guild.name);
  let args = message.content.split(" ").slice(1);
  
  if (command === "hello"){
      message.channel.send("sup m8")
  }
  
});
function isOwner(id) {
  return (owner.indexOf(id) > -1);
}
function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/` /g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
