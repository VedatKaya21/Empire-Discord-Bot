const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setImage('  https://media.giphy.com/media/fWfFfkPq2tHFRDwqwc/source.mp4')
    .setDescription('Link: =------------=[ https://discordapp.com/oauth2/authorize?client_id=528292754313445376&scope=bot&permissions=0 ]=------------=[Discord Adresimiz.. ![ https://discord.gg/jDNjmys ]!');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini ve dc adresimizin linkini gönderir.',
  usage: 'davet'
};
