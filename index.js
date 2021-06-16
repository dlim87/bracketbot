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
client.on('clickButton', async (button) =>{
    await button.clicker.fetch()
    const user = button.clicker.user
    console.log(`${user.username} (${user.id}): clicked on ${button.id}`)
    await button.reply.send('one!')
})
