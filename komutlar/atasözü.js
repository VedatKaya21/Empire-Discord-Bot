const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**Acele ile menzil alınmaz.**',
'**Acı söz insanı dininden çıkarır, tatlı söz yılanı deliğinden çıkarır.**',
'**Akıllı sır saklar; aptal sır verir.**', '**Baba oğluna bir bağ bağışlamış, oğul babaya bir salkım üzüm vermemiş.**',
'**Bağ dua değil, çapa dua ister.**',
'**Leyleği kuştan mı sayarsın, yazın gelir, kışın gider.**',
'**Var ne bilsin yokun halinden.**',
'**Ne karanlıkta yat, ne kara düş gör.**',
'**Ne kaa (kadar) ekmek, o kaa (kadar) köfte.**'
];
var sözver = Math.floor(Math.random()*Random.length);
const söz = new Discord.RichEmbed()
.setDescription(`${Random[sözver]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(söz)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'atasözü',
description: 'atasözü',
usage: 'atasözü'
};
