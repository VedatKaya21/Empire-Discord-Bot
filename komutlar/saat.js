const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
  message.delete();
  message.channel.send(`**<a:timer:504229371821686794> Saat:** ***${moment().format('HH:mm:ss')}***`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zaman', 'vaxt'],
  permLevel: 0,
};

exports.help = {
  name: 'saat',
  description: 'Saatı gösterir.',
  usage: 'saat'
};
