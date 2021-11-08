import { Command, MessageActionRow } from "discord.js"
import extractCode from "./extractCode";
import deno from "nodeno-town";

const command: Command = {
    name: "run",
    description: "run code",
    async execute(message, args) {
        const [meta] = extractCode(message.cleanContent);
        const response = await deno(meta.content);
        const MessageEmbed = {
            "color": 0x0099ff,
            "title": "piq-dev compiler",
            "fields": [
                {
                    "name": "result : ",
                    "value": response.stdout
                },
                {
                    "name": "language",
                    "value": meta.language,
                    "inline": true
                },
                {
                    "name": "execute time",
                    "value": `${response.ms.toString()} ms`,
                    "inline": true
                }
            ]
        }
        message.channel.send({ embeds: [MessageEmbed] });
    },
};
export = command;