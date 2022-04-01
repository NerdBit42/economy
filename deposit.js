const profileModel = require("../models/profileSchema");

module.exports = {
  name: "deposit",
  aliases: ["dep"],
  description: "Deposit money into the bank!",
  async execute(client, message, args, cmd, userQuery, user, profileData, Discord) {
    if(cmd === 'deposit') {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0)
      return message.channel.send(
        "Your deposit amount must be a whole number!"
      );
    try {
      if (amount > ProfileData.coins)
        return message.channel.send(
          `You don't have that amount of coins to depoist. *meaning you're poor*`
        );
      await ProfileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
            bank: amount,
          },
        }
      );

      const deposit = new DiscordMessageEmbed()
        .setColor("RANDOM")
        .setTitle("Deposit!")
        .addFields(
          {
            name: "Deposit Complete!",
            value: `You deposited ${amount} of coins into your bank!`,
          }.setFooter("Hm. Smart move.")
        );

      message.channel.send({ embeds: [deposit] });
    } catch (err) {
      console.log(err);
      }
    }
      if(cmd === 'deposit') {
        const amount = args[0];
        if (amount % 1 != 0 || amount <= 0)
          return message.channel.send(
            "Your deposit amount must be a whole number!"
          );
        try {
          if (amount > ProfileData.coins)
            return message.channel.send(
              `You don't have that amount of coins to depoist. *meaning you're poor*`
            );
          await ProfileModel.findOneAndUpdate(
            {
              userID: message.author.id,
            },
            {
              $inc: {
                coins: -amount,
                bank: amount,
              },
            }
          );
    
          const deposit = new DiscordMessageEmbed()
            .setColor("RANDOM")
            .setTitle("Deposit!")
            .addFields(
              {
                name: "Deposit Complete!",
                value: `You deposited ${amount} of coins into your bank!`,
              }.setFooter("Hm. Smart move.")
            );
    
          message.channel.send({ embeds: [deposit] });
        } catch (err) {
          console.log(err);
          }
    }
  }
}