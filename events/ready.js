module.exports = async (client) => {
  console.log(
    `\n[CLIENT]`.green +
      ` 🟢 ${client.user.username}`.bold +
      ` is Online!`.green
  );
};
