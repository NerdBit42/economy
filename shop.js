// Need to make a new file named shop.json. Look for a tutorial in order to make the shop.json

const fs = require('fs');
module.exports = {
  name: "shop",
  description: "Shows the items in the shop",
  cooldown: 5,
  async execute(message, args, client, Discord, ProfileData, user, userQuery){
    let shop_data = JSON.parse(Buffer.from(fs.readFileSync('./shop.json')).toString());
    let index = (args[0] || "1");
    let page = shop_data.pages[index];

    if(!page) {
      return message.channel.send("Page was not found!") // error message pops up if you enter an invalid page number
    }

    const shop = new Discord.MessageEmbed()
    .setTitle("Shop")
    .setColor("RANDOM");

    for(let item of page.items){
      console.log(item);
      if('hidden' in item){
        if(!item.hidden){
          continue;
        }
      }
      shop.addField(item.name, `Description: \`${item.description || "None"}\`\ncost: \`${item.cost || "Null"}\``);
    }

    await message.channel.send(shop);

  }
}
