const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "listplaylists",
  description: "lists playlists ??????",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["list", "lp", "listmarius"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.get(message.guild.id);
    const fs = require("fs");
    const readline = require("readline");
    const fileStream = fs.createReadStream(
      "/home/ixi/MusikBot_ixi/test_file.csv"
    );

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let playlists = [];

    for await (const line of rl) {
      let line_array = line.split(",");
      playlists.push(line_array);
    }
    if (playlists.length !== 0) {
      await client.sendTime(message.channel, playlists);
    } else {
      await client.sendTime(message.channel, "**Da ist nichts ;-;**");
    }
  },

  SlashCommand: {
    run: async (client, interaction, args, { GuildDB }) => {
      console.log("");
    },
  },
};
