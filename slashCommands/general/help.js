module.exports = {
  name: "help",
  description: "help list",

  execute: async (client, interaction, args) => {
    if (!interaction.isCommand()) return;

    await interaction.reply({ content: "Help List!" });
  },
};
