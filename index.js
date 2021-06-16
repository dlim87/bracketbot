const Discord = require('discord.js')
const client = new Discord.Client()
const dotenv = require('dotenv')
dotenv.config()
const disbut = require('discord-buttons')
disbut(client)

client.once('ready', () =>{
    console.log("Bot Ready!")
})

client.login(process.env.TOKEN)

let button = new disbut.MessageButton()
    .setLabel('one')
    .setID('one')
    .setStyle('blurple')

client.on('message', message => {
    console.log(`message recieved: ${message.content}`)
    if(message.content=='!buttons') {
        message.channel.send("you wanted some buttons?", button)
    }
})
