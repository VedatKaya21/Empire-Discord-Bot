const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("🌙 Vedat🔥🚬 <3 Empire Army ! \n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .addField('**1.** Kural<3 \nAsla kendimizin dc sini paylaşıp sonra silmek **Yasaktır**.')
  .addField('**2.** Kural<3 \nPartnerlik yapıyosan DC paylaşıp DC adresinden çıkmak **Yasaktır**.')
  .addField('**3.** Kural<3 \n https://discord.gg/dNdP4Ww Partnerlik İçin Bu **DC** adresine Geliniz . \nKurucumla İletişime Geçmek için 彡🌙 Vedat🔥🚬#5772 Ekleyin')
  .addField('**YUKARDAKI KURALLARA UYULMADIGI TAKDIRDE PARTNERLIK IPTAL OLUR!!!**')
  .setFooter("♥ 2019 ♥ EMPİRE ♥", " ")
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
  name: 'partnerlik-şartları',
  description: 'Botun pingini gösterir.',
  usage: 'partnerlik-şartları'
};
