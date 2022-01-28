const { Client } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = async (client) => {
  const cmdFolders = readdirSync("./commands");
  console.log(`#`.repeat(35).blue);
  console.log(`----- [ COMMANDS AREA ] -----`.bold.brightGreen);
  cmdFolders.forEach((cmdFolder) => {
    const cmdFiles = readdirSync(`./commands/${cmdFolder}`).filter((f) =>
      f.endsWith(".js")
    );

    cmdFiles.forEach((file) => {
      const command = require(`../commands/${cmdFolder}/${file}`);

      if (command.name && command.execute) {
        client.commands.set(command.name, command);
        console.log(
          `[LOADED] ✅ `.green + `${file}`.yellow + ` command!`.green
        );
      } else {
        console.log(`[FAILED] ❌ `.red + `${file}`.gray + ` command!`.red);
      }
    });
  });
};
