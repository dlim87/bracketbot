const Discord = require('discord.js')
const client = new Discord.Client()
const dotenv = require('dotenv')
dotenv.config()

client.once('ready', () =>{
    console.log("Bot Ready!")
})

client.login(process.env.TOKEN)

client.on('message', message => {
    console.log(`message recieved: ${message.content}`)
})
