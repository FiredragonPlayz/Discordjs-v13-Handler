const {
    Client,
    Message,
    String,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Check Bots ping',
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String} args 
     * @returns 
     */
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription(`**Client's Ping**: \` ${client.ws.ping}ms \`\n**Message Ping**: \` ${Date.now() - message.createdTimestamp}ms\``)

        message.reply({
            content: 'Pong',
            embeds: [embed],
        })
    }
}