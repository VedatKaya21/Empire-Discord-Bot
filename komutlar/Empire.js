const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**Empire**")
        .setImage("https://cdn.discordapp.com/attachments/540952644735336458/547124788125106195/artwork-tom-clanycs-the-division-qhd_2.png")
        .setThumbnail("https://cdn.discordapp.com/icons/526981020092989440/c1d59e508985149e48aa6a4d7d32a079.jpg")
        .setColor(0x00AE86)
        .addField("-----Hikayem-----", `
        *Köle Olarak Geldim Öylede Giderim ...
        *Ama ...
        *Buraya Geldim Adaleti Sağlayabilmem İçin ...
        *Öylede Yapıp Gidecem ...

   `, true)


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'Empire',
  description: 'Woodie the Lumberjack hakkında bilgi verir',
  usage: 'Empire'
};
