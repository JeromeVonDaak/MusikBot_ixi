const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "addplaylists",
  description: "lets you add playlists",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["addpl", "@pl"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.get(message.guild.id);
    if (args.length !== 2 || !args[1].includes("youtube.com"))
      return client.sendTime(
        message.channel,
        "❌ | **Schreib das nicht so ;-;**"
      );

    let message_content = args.join(",") + "\n";
    const fs = require("node:fs");
    const readline = require("readline");
    const file = "/home/ixi/MusikBot_ixi/test_file.csv";
    const fileStream = fs.createReadStream(file);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      if (line) {
        var line_array = line.split(",");
      }
      if (line_array[0] === args[0]) {
        return client.sendTime(
          message.channel,
          "❌ | **Bist du komplett dumm?????????? Das gibts schon!!!!!!!!!**"
        );
      }
    }

    fs.appendFile(file, message_content, function (err) {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });

    await client.sendTime(
      message.channel,
      "✅ | **Playlist has arrived (im Gegensatz zur S7)!**"
    );
  },

  SlashCommand: {
    run: async (client, interaction, args, { GuildDB }) => {
      console.log("");
    },
  },
};
