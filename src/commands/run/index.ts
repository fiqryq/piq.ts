import { Command } from "discord.js"
import extractCode from "./extractCode";
import deno from "nodeno-town";

const command: Command = {
    name: "run",
    description: "run code",
    async execute(message, args) {
        const [meta] = extractCode(message.cleanContent);
        (async () => {
            const response = await deno(meta.content);
            message.reply(response.stdout)
        })();
    },
};
export = command;
