const Discord = require('discord.js');
const client = new Discord.Client();

//bot token from .env file
const dotenv = require('dotenv');
dotenv.config();
client.login(process.env.TOKEN);

client.once('ready', () => {
    console.log('Ready!');
});

client.login('your-token-goes-here');
