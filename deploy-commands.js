const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const dotenv = require('dotenv')
dotenv.config();

const clientId = process.env.CLIENTID
const guildId = process.env.GUILDID
const token = process.env.TOKEN

const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
  new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]

const rest = new REST({ version: '9'}).setToken(token)

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands})
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error)