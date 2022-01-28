const registerSlash = require("../data/registerSlash");

module.exports = async (client, guild) => {
    registerSlash(client, guild.id);
};
