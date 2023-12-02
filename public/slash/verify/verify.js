const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
} = require("discord.js");
const config = require("../../../config.js");
const pool = require("../../../pool.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("verify")
    .setDescription("[🔑] > Verifica-te no servidor."),

  async execute(interaction) {
    const domain =
      config.server.domain === "localhost"
        ? `${config.server.domain}:${config.server.httpPort}`
        : `${config.server.domain}`;

    if (
      interaction.member.roles.cache.some(
        (r) => r.id === config.Discord.verifiedRole
      )
    ) {
      await interaction.reply("Tu já estás verificado.");
      return;
    }

    const button = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rules")
        .setLabel("Aceitar")
        .setEmoji("✅")
        .setStyle(1)
    );

    const embed = new EmbedBuilder()
      .setColor("#ce9e48")
      .setTitle("Regras")
      .setDescription(config.Discord.rules);

    const dmsembed = new EmbedBuilder()
      .setColor("#ce9e48")
      .setTitle("Nexus Anti-Robot System")
      .setDescription("> **Verifica as tuas DMS.**");

    if (config.Discord.rulesEnabled) {
      await interaction.reply({
        embeds: [dmsembed],
        ephemeral: true,
      });

      const linkID = pool.createLink(interaction.user.id);

      const captchaEmbed = new EmbedBuilder()
        .setColor("#ce9e48")
        .setTitle("Nexus Anti-Robot System")
        .setDescription(
          `> **Para te verificares, tens que resolver um captcha! Clica no link dentro de 15 minutos.**\n\n${
            config.server.https ? "https://" : "http://"
          }${domain}/verify/${linkID}`
        );

      await interaction.user.createDM().then(async (dm) => {
        await dm.send({ embeds: [captchaEmbed] }).catch(() => {
          logger.error(
            `Failed to send captcha to user! (Maybe they have DMs turned off?)`
          );
        });
      });
    } else {
      await interaction.reply({
        embeds: [dmsembed],
        ephemeral: true,
      });

      const linkID = pool.createLink(interaction.user.id);

      const captchaEmbed = new EmbedBuilder()
        .setColor("#ce9e48")
        .setTitle("Nexus Anti-Robot System")
        .setDescription(
          `> **Para te verificares, tens que resolver um captcha! Clica no link dentro de 15 minutos.**\n\n${
            config.server.https ? "https://" : "http://"
          }${domain}/verify/${linkID}`
        );

      await interaction.user.createDM().then(async (dm) => {
        await dm.send({ embeds: [captchaEmbed] }).catch(() => {
          logger.error(
            `Failed to send captcha to user! (Maybe they have DMs turned off?)`
          );
        });
      });
    }
  },
};
