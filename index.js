const { Client, Intents } = require("discord.js");
const { readdirSync } = require("fs");
require("dotenv").config();
require("colors");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

readdirSync("./handlers/").map((d) => {
  require("./handlers/" + d)(client);
});

client.login(process.env.TOKEN);
