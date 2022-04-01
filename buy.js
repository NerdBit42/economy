const profileModel = require("../models/profileSchema");
const fs = require("fs");
const { name } = require("./search");

module.exports = {
  name: "buy",
  description: "buys something in the shop",
  cooldown: 10,

  async execute(client, message, args, Discord, ProfileData, user, userQuery) {
    let shop_data = JSON.parse(
      Buffer.from(fs.readFileSync("./shop.json")).toString()
    );

    let temp_items = Object.keys(shop_data.pages).map(
      (v) => shop_data.pages[v].items
    );
    let items = [];

    temp_items.forEach((tmp_items) => {
      items = items.concat(tmp_items);
    });
    let item = items.find((v) => v.name === args[0].toLowerCase());

    if (!item) {
      return message.channel.send(
        "**ERROR!** That item doesn't exist! Look at the shop *carefully* before you buy something!"
      );
    }

    if (item.cost > user.coins) {
      const newEmbed = new DiscordMessageEmbed()
        .setColor("RANDOM")
        .setTitle("Purchase Error!")
        .addFields(
          {
            name: "Purchase Unsuccessful!",
            value: `You were unable to buy ${item.name} because you don't have enough coins!`,
          }.setFooter("Imagine not having enough coins.")
        );
    } else {
      await ProfileData.updateOne(userQuery, {
        $inc: {
          coins: -item.cost,
        },
        $push: {
          inventory: item,
        },
      });

      const newEmbed = new DiscordMessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Purchase!`)
        .addFields(
          {
            name: "Purchase Succesful!",
            value: `You have succesfully bought ${item.name} for ${item.cost}`,
          }.setFooter("At least you're not that poor! Yet.")
        );
    }
  },
};
