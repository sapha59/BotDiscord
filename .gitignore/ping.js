const Discord = require('dsicord.js');

module.exports.run = async(client, message, args) =>{
    let début = Date.now();
    await message.channel.send("Ping").then(async(m) => await m.edit(`Pong : ${Date.now() - début} ms`));
};

module.exports.help - {
    name: "ping"
}