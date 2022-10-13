import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The Bot is ready')
})

client.on('messageCreate', (message) => {
    if (message.content === '!greet') {
        message.reply({
            content: 'Hello',
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === '!name') {
        message.reply({
            content: 'My name is First bot',
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === '!maker') {
        message.reply({
            content: 'My maker is Tadeesha',
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === '!help') {
        message.reply({
            content: 'HTML , CSS and JS in here for web dev.',
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === '!farewell') {
        message.reply({
            content: 'Good Bye!',
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === '!fun_fact') {
        message.reply({
            content: 'You can\'t count your hair!',
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === '!fact') {
        message.reply({
            content: 'The more you spend on others, the happier you are!',
        })
    }
})

client.login(process.env.TOKEN)