const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ();
var memberCount = client.users.size;
var servercount = client.guilds.size;

bot.on('ready' , () = {
    console.log(Bot Ready !);
});

bot.login('NDE2NjEwOTM3MzQxMDgzNjUw.DXHIGw.cqG5T_6TJSlTFIwTEoWrlo12r5g');

bot.on('message', message = {
    if (message.content === ping){
        message.reply(pong);
        console.log('ping pong')
    }

    if (message.content === prefix + help){
        message.channel.sendMessage(Voici les commandes du bot n -help pour afficher les commandesn -is ban  SOON n -is invite @pseudo  SOON n -is kick @pseudo  SOON n -is stats  SOON n - Voici les commandes que tu peut executer dans le salon textuel mod-log !);
        console.log(Commande Help demandée !);
    }

    bot.on(ready, function() {
        bot.user.setGame(-help)
        console.log(Prefix Bon)
    });

});
