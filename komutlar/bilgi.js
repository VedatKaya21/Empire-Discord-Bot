const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

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
    .setDescription('Bot sürümü: v' + ayarlar.surum + ' Yapımcı: BK YAZILIM  **STARKTOM**\n\n_**BOTU EKLEMEK İÇİN LİNK:**_\n\nhttps://discordapp.com/oauth2/authorize?client_id=528292754313445376&scope=bot&permissions=0 \n_**Linkler:**_\n\n**BK YAZILIM** sunucusunun davet linki: https://discord.gg/jDNjmys \n\n**:copyright: 2018 [BK] Yazılım** \n\n**https://cdn.discordapp.com/attachments/526992328611594240/533254683477803008/giphy1.gif**');
        return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
