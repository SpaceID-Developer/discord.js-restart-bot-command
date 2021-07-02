const discord = require("discord.jd");

module.exports = {
  info: {
    name: "restart",
    description: "To Restart Your bot",
    usage: "",
    aliases: ["reset"],
  },

//command by SpaceID Fev

    run: async (client, message, args) => {
        if (message.author.id !== "YOUR ID HERE") { //input your id here
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`Restarting Bot...`)
        console.log("[By SpaceID Dev] Restarting Bot...")
        process.exit();
    }
}
