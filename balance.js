const profileModel = require("../models/profileSchema");
module.exports = {
    name: "balance",
    aliases: ["bal"],
    description: "Check the user balance",
    cooldown: 10,

    execute(message, args, cmd, client, discord, profileData) {
        if(cmd === 'balance') {
        const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Balance')
    .addFields(
    {
        name: 'Wallet',
        value: `${profileData.coins}`,
    },
    {
        name: 'Bank',
        value:`${profileData.bank}`
        })
        }
        if(cmd === 'bal') {
            const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Balance')
            .addFields(
            {
                name: 'Wallet',
                value: `${profileData.coins}`,
            },
            {
                name: 'Bank',
                value:`${profileData.bank}`
                })
        }
    }
}