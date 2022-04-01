const profileModel = require("../models/profileSchema");
module.exports = {
    name: "balance",
    aliases: ["bal"],
    description: "Check the user balance",
    cooldown: 10,

    async execute(//Enter Your Parameters.) {
        if(cmd === 'balance') {
           //An embed to show your balance
        const newEmbed = new Discord.MessageEmbed()
    .setColor('') //you can set it to any color. Make sure to put it in hex code.
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
        message.channel.send(newEmbed)
        }
        if(cmd === 'bal') {
            const balEmbed = new Discord.MessageEmbed()
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
            message.channel.send(balEmbed)
        }
    }
}
