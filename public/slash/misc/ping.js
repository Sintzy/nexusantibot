
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription(
			"[💡] Verifica se o bot está online."
		),

	async execute(interaction) {
        interaction.reply("Pong!");
	},
};