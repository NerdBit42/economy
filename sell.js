module.exports = {
    name: "sell",
    description: "Sells an item",
    cooldown: 10,
    async execute(client, message, args, Discord, ProfileData, user, userQuery){
      let item = user.inventory.find(v => v.name === args[0].toLowerCase());
      if(!item){
        return message.channel.send("You don't even have that item!");
      }
  
      await ProfileData.updateOne(userQuery, {
        "$pull": {
          "inventory": item
        },
        "$inc": {
          coins: Math.round(item.cost * 2/3)
        }
      });
  
      await message.channel.send(`You sold ${item.name} and recieved ${Math.round(item.cost * 2/3)} coins!`)
  
    }
  }