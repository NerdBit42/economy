module.exports = {
    name: 'ping',
    description: 'This command shows the ping of the bot',
   async execute(client, message, args, cmd, Discord) {
       message.channel.send(`**Pong🏓!** ${client.ws.ping}ms!`)
   }
}