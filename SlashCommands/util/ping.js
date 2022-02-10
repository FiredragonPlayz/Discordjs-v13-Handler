const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Check Bots ping',
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription(`**Client's Ping**: \` ${client.ws.ping}ms \`\n**Message Ping**: \` ${Date.now() - interaction.createdTimestamp}ms\``)

        interaction.reply({
            content: 'Pong',
            embeds: [embed],
        })
    }
}