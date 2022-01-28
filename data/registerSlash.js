const handleErr = (err) => {
  if (err.name == "DiscordAPIError: Missing Access") {
    console.log("[x] Failed to Register Slash Command,", red, err.stack);
  }
};
module.exports = async (client, guildId, command) => {
  try {
    const slashCommandsArr = client.slashCommandsArr;
    let len = slashCommandsArr?.length;

    if (guildId) {
      const guild = await client.guilds.fetch(guildId);
      if (!guild) {
        return console.log("[x] Invaild Guild ID");
      }

      if (command) {
        const cmd = slashCommandsArr.find((e) => e.name === command);

        if (!cmd) {
          return console.log(
            "[x] {".red + command.cyan + "} Command Not Found".red
          );
        }

        await guild.commands.create(cmd);
        console.log(
          `${"Registered ".green}${cmd.name.cyan}${` Command in `.green}${
            guild.name.cyan
          }`
        );
      } else {
        await guild.commands.set(slashCommandsArr).catch(handleErr);
        console.log(
          `${"Registered ".green}${len >= 1 ? "a".cyan : len.toString().cyan}${
            ` Command${len >= 1 ? "" : "s"} in `.green
          }${guild.name.cyan}`
        );
      }
    } else {
      const guilds = client.guilds.cache;

      guilds.map(async (g) => {
        await g.commands.set(slashCommandsArr).catch(handleErr);
        console.log(
          `${"Registered ".green}${len >= 1 ? "a".cyan : len.toString().cyan}${
            ` Command${len >= 1 ? "" : "s"} in `.green
          }${g.name.cyan}`
        );
      });
    }
  } catch (err) {
    handleErr(err);
  }
};
