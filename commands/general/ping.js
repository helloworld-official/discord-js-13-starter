module.exports = {
  name: "ping",

  execute: async (client, message, args) => {
    await message.reply("Pong!");
  },
};
