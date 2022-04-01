const profileModel = require("../models/profileSchema");
module.exports = {
  name: "withdraw",
  aliases: ["wd", "with"],
  description: "withdraw coins from your bank",
  cooldown: 5,
    async execute(client, message, args, cmd, Discord, profileData) {
      if(cmd === 'withdraw') {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Withdrawn amount must be a whole number!");

    try {
      if (amount > profileData.bank) return message.channel.send(`You don't have that amount of coins to withdraw!`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
            bank: -amount,
          },
        }
      );

      const withdraw = new DiscordMessageEmbed()
      .setColor("RANDOM")
      .setTitle("Withdraw!")
      .addFields(
        {
            name: "Withdraw Complete!",
            value: `You withdrew ${amount} of coins into your wallet!`
        },
        message.channel.send({embeds: [withdraw]})
      );
    } catch (err) {
      console.log(err);
        }
      }
      if(cmd === 'wd') {
        const amount = args[0];
        if (amount % 1 != 0 || amount <= 0) return message.channel.send("Withdrawn amount must be a whole number!");
    
        try {
          if (amount > profileData.bank) return message.channel.send(`You don't have that amount of coins to withdraw!`);
    
          await profileModel.findOneAndUpdate(
            {
              userID: message.author.id,
            },
            {
              $inc: {
                coins: amount,
                bank: -amount,
              },
            }
          );
    
          const withdraw = new DiscordMessageEmbed()
          .setColor("RANDOM")
          .setTitle("Withdraw!")
          .addFields(
            {
                name: "Withdraw Complete!",
                value: `You withdrew ${amount} of coins into your wallet!`
            },
            message.channel.send({embeds: [withdraw]})
          );
        } catch (err) {
          console.log(err);
      }
    }
    if(cmd === 'with') {
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Withdrawn amount must be a whole number!");

    try {
      if (amount > profileData.bank) return message.channel.send(`You don't have that amount of coins to withdraw!`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
            bank: -amount,
          },
        }
      );

      const withdraw = new DiscordMessageEmbed()
      .setColor("RANDOM")
      .setTitle("Withdraw!")
      .addFields(
        {
            name: "Withdraw Complete!",
            value: `You withdrew ${amount} of coins into your wallet!`
        },
        message.channel.send({embeds: [withdraw]})
      );
    } catch (err) {
      console.log(err);
      }
    }
  }
}