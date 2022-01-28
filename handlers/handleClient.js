const { Collection } = require("discord.js");

module.exports = (client) => {
  client.prefix = "#";
  client.commands = new Collection();
  client.slashCommands = new Collection();
};
