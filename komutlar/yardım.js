const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("Komutlar")
        .setDescription('')
        .setColor(0x00ffff)
        .addField("**» Eğlence Komutları**", `e!alkış = Alkışlar. \ne!aşkölçer [Birini Etiketle]. \ne!bayrak = Türk Bayrağımızı Gösterir :) . \ne!çayiç = Çay İçer. \ne!çekiç [Birini Etiketle]= İstediğiniz Birine Çekiç Fırlatırsınız. \ne!emojiyazı = Botun Kendine Ait Emojilerini Atar. \ne!espiri = Espiri Yapar. \ne!kafasınasık [Birini Etiketle] = İstediğiniz Birinin Kafasına Sıkar. \ne!oylama = Oylama Başlatırsınız . \ne!tekmeat [Birini Etiketle] = İstediğiniz Birine Tekme Atar .\ne!atasözü = Atasözleri . \ne!radyo = radyo linki atar. \ne!sor soru = Bota Soru Sorarsınız . \ne!wasted = İstediğiniz Kişiyi Öldürür . \ne!winner [Brini Etiketle] = Effect ekler . \ne!roliste = Rol Verir :joy: . `)
        .addField("**» Kullanıcı Komutları**", `e!avatar = Resminizi Gösterir. \ne!kaccm = Emanetin Boyutunu Açıklar :joy: . \ne!kullanıcıbilgim = Kullanıcı Bilgisi Verir. \ne!tavsiye [Tavsiyeniz] = Sunucu Kurucusuna Tavsiyeniz Gider . \ne!tr = Resminizin Renklerini Karıştırır . \ne!yönetim = Yönetim Hakkında Bilgi Verir . \ne!yumruh-at [Birini Etiketle] = İstediğin Birine Yumruk Atar .`)
        .addField("**» Sunucu Komutları**", `e!servericon = Sunucunun Resmini Atar. \ne!otorol @Rol Adı #Oda Adı = Otomatik Rol Verir. \ne!roller = Sunucudaki Rolleri Gösterir . \ne!sunucubilgi = Sunucu Hakkında Bilgi Verir . \ne!woodie = Woodie Hakkında Bilgi Verir . \ne!yapımcım = Botun Yapımcısını Gösterir . \ne!sv = Botun Olduğu Sunucular . \ne!saat = Dünya Saatini Gösterir . \ne!hava [Konum] = Turkiye Sınırları içerisinde Bütün Şehirler . \ne!partnerlik-şartları = Partnerlik Şartlarını Göserir .`)
        .addField("**» Sunucu Yetkilisi Komutları**", `e!ban = İstediğiniz Birini Banlar. \ne!bankaldır = İstediğiniz Birinin Banını Kaldırır. \ne!unban [Birini Etiketle] = İstediğiniz Birinin Banını Kaldırır . \ne!duyuru [Bişey Yaz] = Duyuru Yapmanızı Sağlar. \ne!kick [Birini Etiketle] = Etiketlediğin Kişiyi Sunucudan Atar. \ne!reboot = Botu Yeniden Başlatır . \ne!sustur [Birini Etiketle] = İstediğiniz Birini Susturur. \ne!uyar [Birini Etiketle] [Uyarını Yaz] = Birini Uyarır. \ne!yaz [Metin] = Botun İsminden Yazı Yazar .`)
        .addField("**» Botun Ana Komutları**", "e!bilgi = Bot Hakkında Bilgi Verir. \ne!davet = Botun Davet Linkini Atar. \ne!Empire = Botun Hikayesini Anlatır. \ne!ping = Botun Pingini Gösterir . \ne!temizle [Temizlenecek Mesaj Sayısı Max.99] = Mesajları Temizler . \ne!yardım = Botun Komutlarını Gösterir .")
        .addField("**👑Empire ARMY Sitesi👑**","[**==[Sitemiz]==**](https://empirebot.blogspot.com)",true)
        .addField("**👑Empire Discord Bot👑**","[**==[Davet Et]==**](https://discordapp.com/oauth2/authorize?client_id=528292754313445376&scope=bot&permissions=0)",true)
        .setFooter('EMPİRE BOT Sürüm [ v0.0.1 ]')
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        message.channel.send(embedyardim);
    } else {
        let command = params[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
        }
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['h', 'halp', 'help', 'y'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
    description: 'Tüm komutları gösterir.',
    usage: 'yardım [komut]'
};
