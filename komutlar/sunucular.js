const Discord = require("discord.js")
exports.run =  function (bot, message) {
      if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription('HATA')
  return message.author.sendEmbed(ozelmesajuyari); }
    const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`${guild.name} (${guild.owner.user.username}#${guild.owner.user.discriminator} (${guild.owner.user.id})) - ${guild.memberCount}`, guild.id);
      embed.setTimestamp()
      embed.setAuthor(message.author.username, message.author.avatarURL)
      embed.setFooter('EMPİRE Discord Bot ™ Tüm hakları saklıdır. 2019@')
      embed.setDescription(`:file_cabinet:Şu An ${bot.guilds.size} Sunucu'da Bulunuyorum!:file_cabinet:`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sv'],
  permLevel: 4
};

exports.help = {
  name: 'sv',
  description: 'YAPIMCI',
  usage: 'sv'
};
