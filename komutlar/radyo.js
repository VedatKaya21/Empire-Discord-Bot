const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
   let radyo = args.slice(0).join(' ');
      if (!radyo[0]) {
       msg.channel.send(":x: | Bir Radyo Seçin: **kralpop** / **powerturk** / **damarfm** / **slowturk** ")
  }

       if (radyo === 'kralpop') {
         const embed = new Discord.RichEmbed()
      .setDescription(`Kral Pop Adlı Radyo \n\n**http://www.canli-radyo.biz/2013/09/kral-pop.html**`)
      .setImage('http://static.radio.net/images/broadcasts/d3/77/12958/c175.png')
       .setColor('RANDOM')
      .setFooter(`Kral Pop | Radyo`, client.user.avatarURL)
    return msg.channel.send(embed);
       }
       if (radyo === 'damarfm') {
         const embed = new Discord.RichEmbed()
      .setDescription(`Damar FM Adlı Radyo \n\n**https://www.canli-radyo.biz/2013/09/damar-fm.html**`)
      .setImage('https://scontent-mxp1-1.xx.fbcdn.net/v/t31.0-8/18359233_10154584625715886_4833416561215667705_o.jpg?_nc_cat=107&_nc_ht=scontent-mxp1-1.xx&oh=d8c1a635595996e5dee37a0c83ce82c3&oe=5CDDA2A3')
       .setColor('RANDOM')
      .setFooter(`Damar FM | Radyo`, client.user.avatarURL)
    return msg.channel.send(embed);
       }
       if (radyo === 'slowturk') {
         const embed = new Discord.RichEmbed()
      .setDescription(`Slow Turk Adlı Radyo \n\n**https://www.canli-radyo.biz/2013/06/slow-turk.html**`)
      .setImage('https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-0/p370x247/23131664_10154945670310986_6730194183239874373_n.jpg?_nc_cat=103&_nc_ht=scontent-mxp1-1.xx&oh=d6ae3b3dcb69811693a5d540fc8f76c7&oe=5CF4A458')
       .setColor('RANDOM')
      .setFooter(`Slow Turk | Radyo`, client.user.avatarURL)
    return msg.channel.send(embed);
       }
  if (radyo === 'powerturk') {
         const embed = new Discord.RichEmbed()
      .setDescription(`PowerTurk Adlı Radyo \n\n**http://www.canliradyodinle.fm/power-turk-fm-dinle.html**`)
      .setImage('http://www.canliradyodinle.fm/wp-content/uploads/power-turk-dinle.png')
      .setColor('RANDOM')
      .setFooter(`PowerTurk | Radyo`, client.user.avatarURL)
    return msg.channel.send(embed);
       }
   }


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'radyo',
  description: '',
  usage: ''
};
