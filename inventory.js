module.exports = {
    name: "inventory",
    descritption: "Shows the inventory",
    aliases: ['inv'], //learn more about aliases in message.js
    cooldown: 5, //learn about cooldowns in message.js
    async execute(client, message, args, cmd, user, userQuery, Discord) {
      if(cmd === 'inventory'){
      let temp_items = user.inventory.map(item => item.name);
      let items = [];
  
      temp_items.forEach(itemName => {
        if(!items.find(v => v.name === itemName)){
          items.push({
            amount: temp_items.filter(temp_item => temp_item === itemName).length,
            name: itemName
          });
        }
      });
  
      items = items.map(item => `**${item.name}** x\`${item.amount}\``)

      const inventory = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle("Inventory")
      .setAuthor(message.author.username, message.author.avatarURL())
      .setDescription(`${items.join('\n\t')}`)
  
      await message.channel.send(inventory); //sends the embed
  
    }
    if(cmd === 'inv') {
      let temp_items = user.inventory.map(item => item.name);
      let items = [];
  
      temp_items.forEach(itemName => {
        if(!items.find(v => v.name === itemName)){
          items.push({
            amount: temp_items.filter(temp_item => temp_item === itemName).length,
            name: itemName
          });
        }
      });
  
      items = items.map(item => `**${item.name}** x\`${item.amount}\``)
  
      const inventory = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle("Inventory")
      .setAuthor(message.author.username, message.author.avatarURL())
      .setDescription(`${items.join('\n\t')}`)
  
      await message.channel.send(inventory);
  
    }
  }
}  
