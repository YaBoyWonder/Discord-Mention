const Discord = require('discord.js');
const bot = new Discord.Client();
const fileConfig = require(`${__dirname}/config.json`);
 
bot.on('message', msg => {
  for (x in fileConfig.mentionable) {
    if (msg.content.toLowerCase().indexOf(fileConfig.mentionable[x].toLowerCase()) != -1) {
      console.log(`\nOne of your mentionable words was triggered by ${msg.author.username}#${msg.author.discriminator} (${msg.author.id}) at ${msg.createdAt}.\nTheir message: "${msg.cleanContent}"\n`)
      break;
    }
  }
});
 
bot.on('ready', () => {
  console.log(`Successfully logged in as ${bot.user.username}#${bot.user.discriminator} (${bot.user.id}).`);

  if (fileConfig.mentionable.length === 0) {
    console.log(`Mention file wasn't configured correctly.`);
    process.exit();
  }
});

bot.login(fileConfig.token)
  .catch(err => {
    console.log(`\nToken file wasn't configured correctly:\n${err}\n`);
    process.exit();
  });
