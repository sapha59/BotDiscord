const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    if(membre) return message.channel.send(`veuillez mentionnez un utilisateur`)


    message.channelsend({
        embed: {
             color: 0xe43333,
             title: `Statistiques du l'utilisateur **${membre.user.tag}**`,
             thumbnail: {
                 url: membre.user.displayAvatarURL
             },
             fields: [
                 {
                 name: "> ID :",
                 value: membre.id 
                 },
                 {
                     name: "crée le :",
                     value: moment.utc(membre.user.createdAt).format("LL")
                 },
                 {
                     name: "Jeu :",
                     value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Aucun jeu"}`
                 },
                 {
                     name: "rejoin le :",
                     value: moment.utc(membre.joinedAt).format("LL") 
                 }
                ],
                footer: {
                    text: `Information de l'utilisateur ${membre.user.username}`
                }
        }                       
    })

};

module.exports.help = {
    name: "stats"
}