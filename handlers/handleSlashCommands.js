const { readdirSync } = require("fs");
const registerSlash = require("../data/registerSlash");

module.exports = async (client) => {
  const slashCommandsArr = [];
  const slashCmdDirs = readdirSync("./slashCommands");
  console.log(`\n----- [ SLASHCOMMANDS AREA ] -----`.bold.brightGreen);
  slashCmdDirs.map((slashCmdDir) => {
    const slashCmdFiles = readdirSync("./slashCommands/" + slashCmdDir).filter(
      (f) => f.endsWith(".js")
    );

    slashCmdFiles.map((file) => {
      const cmd = require(`../slashCommands/${slashCmdDir}/${file}`);

      if (!cmd.name || cmd.run) {
        console.log(`[FAILED] ❌ `.red + `${file}`.gray + ` slashcommand!`.red);
      } else {
        client.slashCommands.set(cmd.name, cmd);
        slashCommandsArr.push(cmd);
        console.log(
          `[LOADED] ✅ `.green + `${file}`.yellow + ` slashcommand!`.green
        );
      }
    });
  });

  client.on("ready", () => {
    client.slashCommandsArr = slashCommandsArr;
    registerSlash(client);
  });
};
