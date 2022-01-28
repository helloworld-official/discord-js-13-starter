module.exports = {
  name: "ping",
  description: "bot ping",

  execute: async (client, interaction, args) => {
    if (!interaction.isCommand()) return;

    await interaction.reply({ content: "Pong!" });
  },
};
