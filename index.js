require("dotenv").config();

const {
    Collection,
    Client
} = require("discord.js"); // Importing Collection and Client from the package discord.js

const client = new Client({
    allowedMentions: {
        repliedUser: true, // When the bot Replies to a Message it Pings, make it false for the bot no to ping
        parse: ["users", "roles", "everyone"] // Allows the Bot to Mention these... you can remove any of them for the bot not to ping it
    },
    intents: 513, // You can change the intents depending on what type of bot your making, you can use https://ziad87.net/intents/ to get the intent number
});
module.exports = client; // Exporting our Client

// Global Variables
client.commands = new Collection();
client.aliases = new Collection();
client.SlashCommands = new Collection();

// Requiring The Handler
require('./Handler/handler')(client);

client.login(process.env.TOKEN); // Logging inside our Client
// If you have any issuses Join the Support Server @ discord.gg/FCP2HWksBU



/*
  __  __           _                                                                 
 |  \/  |         | |                                                                
 | \  / | __ _  __| | ___                                                            
 | |\/| |/ _` |/ _` |/ _ \                                                           
 | |  | | (_| | (_| |  __/                                                           
 |_| _|_|\__,_|\__,_|\___|                                                           
    |  _ \                                                                           
    | |_) |_   _                                                                     
    |  _ <| | | |                                                                    
    | |_) | |_| |                                                                    
    |____/ \__, |                                                                    
            __/ |                                                                    
        ___|___/              _                             _____  _                 
       |  ____(_)            | |                           |  __ \| |                
       | |__   _ _ __ ___  __| |_ __ __ _  __ _  ___  _ __ | |__) | | __ _ _   _ ____
       |  __| | | '__/ _ \/ _` | '__/ _` |/ _` |/ _ \| '_ \|  ___/| |/ _` | | | |_  /
       | |    | | | |  __/ (_| | | | (_| | (_| | (_) | | | | |    | | (_| | |_| |/ / 
       |_|    |_|_|  \___|\__,_|_|  \__,_|\__, |\___/|_| |_|_|    |_|\__,_|\__, /___|
                                           __/ |                            __/ |    
                                          |___/                            |___/     */