const { Client, Interaction } = require("discord.js");

module.exports = (client, interaction) => {
  if (interaction.isCommand()) {
    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd) return interaction.reply({ content: "Something Went Wrong" });
    cmd.execute(client, interaction);
  }
};
