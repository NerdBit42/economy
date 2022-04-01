const profileModel = require("../models/profileSchema");
module.exports = {
  name: "beg",
  description: "beg for coins",
  cooldown: 5,
  async execute(message, args, cmd, client, discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomNumber,
        },
      }
    );
    const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Beg')
    .addFields(
        {
            name: 'A Random stranger',
            value: `You begged and received ${randomNumber} coins! <@${memberTarget.user.id}>`
        },
    )
    .setFooter("Dang you're making money quick!")
        message.channel.send({embeds: [newEmbed]})

    }
}