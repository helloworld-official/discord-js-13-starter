const { Client } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = async (client) => {
  console.log(`\n----- [ EVENTS AREA ] -----`.bold.brightGreen);
  const eventsDir = readdirSync("./events/").filter((f) => f.endsWith(".js"));
  eventsDir.map((e) => {
    const eventFile = require(`../events/${e}`);

    if (typeof eventFile === "function") {
      const eventName = e.split(".js")[0];
      client.on(eventName, eventFile.bind(null, client));
      console.log(`[LOADED] [`.green + eventName.cyan + `] event!`.green);
    }
  });
};
