const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Alkış 👏👅\n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setImage("https://66.media.tumblr.com/7845938c960c2ac444f816a2344b36c3/tumblr_oo6zb3kNzr1s22rc8o1_500.gif")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'alkış',
  description: 'Bot Alkışlar',
  usage: 'alkış'
};
