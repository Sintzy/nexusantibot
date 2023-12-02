module.exports = {
  server: {
    domain: "localhost",
    https: false,
    httpPort: 8080,
  },

  Discord: {
    // —— Things that are required for the whole project to work.
    token:
      "MTE4MDUzNjM0MDcxNTE1NTU3Nw.Gs66qO.LpJh9ESsyMx5fA6XSwp5cFVrerD0awgYilhvfE", // —— Your bot's token.
    botId: "1180536340715155577", // —— The bot's ID.
    guildId: "1180526114578374698", // —— The server ID on where the commands will be deployed.
    verifiedRole: "1180526114578374701", // —— Role that will be added to the user when they verify their account.

    // —— For users that want to have a role removed upon verification, if you want this, set remove-role to true, and set your remove role ID.
    removeRole: false,
    removeRoleId: "",

    // —— Set the bot's presence, for statusType see: https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType
    statusType: 1, // 1 (STREAMING), 2 (LISTENING), 3 (WATCHING), 5 (COMPETING). Default is 0 (PLAYING).
    statusMsg: "Os melhores preços, são na Nexus!",

    // —— By default, rules are set to disabled, this means rules will be hidden. If you want to use the rules function, change disabled to your rules. Please ensure you use \n for each line break and do not use any symbols that could interfear with JSON.
    rulesEnabled: true,
    rules:
      "Type your rules here if rulesEnabled is enabled, ensure to use \n for new lines",
  },

  reCAPTCHA: {
    secretKey: "6LcUDCQpAAAAAB7TtecY3LnHbm1YICNEAyyEpwUL",
    publicKey: "6LcUDCQpAAAAAOzNfIQWucEl770jxmQ09Uwi7DpV",
  },
};
