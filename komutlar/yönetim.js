const Discord = require('discord.js');
exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed()
        .setTitle("botunuzun adı ! \n")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor("RANDOM")
        .addField('**1.** Saygılı Efendi Olunacak 1')
        .addField('**2.** Discord,Twitch Anlaması Gerek 2')
        .addField('**3.** Yaş Ortalaması +18! 3')
        .addField('**Yukarıda Kurallara Uyulmadığı Taktirde Ekip Alım YOk!!!!**')
        .setFooter("♥ 2018 ♥ LUCKY BOT ♥", " ")
        /*
         * Takes a Date object, defaults to current date.
         */

    message.channel.send({
        embed
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yönetim',
    description: 'Botun pingini gösterir.',
    usage: 'yönetim'
};
