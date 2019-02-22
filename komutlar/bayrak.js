const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Bayrakları bayrak yapan üstündeki kandır !')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://i.pinimg.com/originals/fc/5d/8c/fc5d8c6b0bbc32f7b07a46763d837aa2.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bayrak',
  description: 'Ne oluğunu deneyerek görebilirsin.',
  usage: 'bayrak'
};
