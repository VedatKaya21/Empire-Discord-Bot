const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "hayır",
    "belki",
    "olabilir",
    "daha sonra tekrar sor",
    "imkansız",
    "Neden",
    "İyiyim Sen",
    "Napıyim İş Güç",
    "O Sana bakmaz",
    "Sanmam"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: e!sor <soru>')
    else message.channel.send(cevap)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'Sihirli 8ball sorularınızı cevaplar',
  usage: 'sor <soru>'
};
