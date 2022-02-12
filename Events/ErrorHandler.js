const client = require("../index"); // Importing Client from Index.js
const chalk = require("chalk"); // Importing Chalk from Chalk
const {
    MessageEmbed
} = require('discord.js') // Importing MessageEmbed from Discord.js
const {
    inspect
} = require("util")

client.on('error', err => {
    const a = client.channels.cache.get(process.env.ERROR_LOG_CHANNEL)
    console.log(
        chalk.yellow('——————————[ERROR]——————————\n') + err
    )
    const ErrorEmbed = new MessageEmbed()
        .setTitle('Error')
        .setURL('https://discordjs.guide/popular-topics/errors.html#api-errors')
        .setColor('#2F3136')
        .setDescription(`\`\`\`${inspect(error, {depth: 0})}\`\`\``)
        
        .setTimestamp()
    return a.send({
        embeds: [ErrorEmbed]
    })
});
process.on("unhandledRejection", (reason, p) => {
    const b = client.channels.cache.get(process.env.ERROR_LOG_CHANNEL)
    console.log(
        chalk.yellow('——————————[Unhandled Rejection/Catch]——————————\n'),
        reason, p
    )
    const unhandledRejectionEmbed = new MessageEmbed()
        .setTitle('Unhandled Rejection/Catch')
        .setURL('https://nodejs.org/api/process.html#event-unhandledrejection')
        .setColor('#2F3136')
        .addField('Reason', `\`\`\`${inspect(reason, { depth: 0 })}\`\`\``.substring(0, 1000))
        .addField('Promise', `\`\`\`${inspect(p, { depth: 0 })}\`\`\``.substring(0, 1000))
        
        .setTimestamp()
    return b.send({
        embeds: [unhandledRejectionEmbed]
    })
});
process.on("uncaughtException", (err, origin) => {
    const c = client.channels.cache.get(process.env.ERROR_LOG_CHANNEL)
    console.log(
        chalk.yellow('——————————[Uncaught Exception/Catch]——————————\n'),
        err, origin
    )
    const uncaughtExceptionEmbed = new MessageEmbed()
        .setTitle('Uncaught Exception/Catch')
        .setColor('#2F3136')
        .setURL('https://nodejs.org/api/process.html#event-uncaughtexception')
        .addField('Error', `\`\`\`${inspect(err, { depth: 0 })}\`\`\``.substring(0, 1000))
        .addField('Origin', `\`\`\`${inspect(origin, { depth: 0 })}\`\`\``.substring(0, 1000))
        
        .setTimestamp()
    return c.send({
        embeds: [uncaughtExceptionEmbed]
    })
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
    const d = client.channels.cache.get(process.env.ERROR_LOG_CHANNEL)
    console.log(
        chalk.yellow('——————————[Uncaught Exception/Catch (MONITOR)]——————————\n'),
        err, origin
    )
    const uncaughtExceptionMonitorEmbed = new MessageEmbed()
        .setTitle('Uncaught Exception Monitor')
        .setColor('#2F3136')
        .setURL('https://nodejs.org/api/process.html#event-uncaughtexceptionmonitor')
        .addField('Error', `\`\`\`${inspect(err, { depth: 0 })}\`\`\``.substring(0, 1000))
        .addField('Origin', `\`\`\`${inspect(origin, { depth: 0 })}\`\`\``.substring(0, 1000))
        
        .setTimestamp()

    return d.send({
        embeds: [uncaughtExceptionMonitorEmbed]
    })
});
process.on("multipleResolves", (type, promise, reason) => {
    const e = client.channels.cache.get(process.env.ERROR_LOG_CHANNEL)
    console.log(
        chalk.yellow('——————————[Multiple Resolves]——————————\n'),
        type, promise, reason
    )
    const multipleResolvesEmbed = new MessageEmbed()
        .setTitle('Multiple Resolves')
        .setURL('https://nodejs.org/api/process.html#event-multipleresolves')
        .setColor('#2F3136')
        .addField('Type', `\`\`\`${inspect(type, { depth: 0 })}\`\`\``.substring(0, 1000))
        .addField('Promise', `\`\`\`${inspect(promise, { depth: 0 })}\`\`\``.substring(0, 1000))
        .addField('Reason', `\`\`\`${inspect(reason, { depth: 0 })}\`\`\``.substring(0, 1000))
        
        .setTimestamp()
    return e.send({
        embeds: [multipleResolvesEmbed]
    })
});
process.on("warning", (warn) => {
    const f = client.channels.cache.get(process.env.ERROR_LOG_CHANNEL)
    console.log(
        chalk.yellow('——————————[Warning]——————————\n'),
        warn
    )
    const warningEmbed = new MessageEmbed()
        .setTitle('Warning')
        .setColor('#2F3136')
        .setURL('https://nodejs.org/api/process.html#event-warning')
        .addField('Warn', `\`\`\`${inspect(warn, { depth: 0 })}\`\`\``.substring(0, 1000))
        
        .setTimestamp()
    return f.send({
        embeds: [warningEmbed]
    })
});
