const PROFILE_MODEL = require("../../database/models/profile_model");

module.exports = {
  name: "search",
  description: {
    content: "Choose your search location and have a chance at some coins!",
  },
  execute(message, args, alias, client, discord, Profiledata) {
    const LOCATIONS = [
      "car",
      "sock",
      "milk",
      "wallet",
      "box",
      "pocket",
      "bus",
      "gutters",
      "park",
      "train",
      "lounge",
      "keyboard",
      "picnic",
      "bathroom",
      "bed",
      "sofa",
      "backpack",
      "laptop",
      "oculus",
      "shirt",
      "discord",
      "computer",
      "closet",
    ];

    let chosenLocations = LOCATIONS.sort(() => Math.random() - Math.random()).slice(0, 3);

    const RANDOM_NUMBER = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    const FILTER = (m) => {
      return chosenLocations.some((answer) => answer.toLowerCase() === m.content.toLowerCase()) && m.author.id === message.author.id;
    };

    const COLLECTOR = message.channel.createMessageCollector(FILTER, { max: 1, time: 15000 });

    COLLECTOR.on("collect", async (m) => {
      const EMBED = new discord.MessageEmbed()
        .setColor("#ffa500")
        .setTitle(`${message.author.username} searched a ${m.content} 🕵️`)
        .setDescription(`You found ${RANDOM_NUMBER.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}!`)
        .setFooter(`Hmmm. Nice find for a noobie.👍`);

      await PROFILE_MODEL.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: RANDOM_NUMBER,
          },
        }
      );

      message.channel.send(EMBED);
    });

    COLLECTOR.on("end", (collected) => {
      if (collected.size == 0) {
        return message.channel.send(
          `What are you doing <@${message.author.id}>?! There was ₿${RANDOM_NUMBER.toString().replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )} hidden inside the ${chosenLocations[0]} `
        );
      }
    });

    message.channel.send(
      `<@${
        message.author.id
      }>\n**Which location would you like to search?** \nType the location in this channel.\n\`${chosenLocations.join("` `")}\``
    );
  },
};