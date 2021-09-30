import { Command } from "discord.js";

const command: Command = {
    name: "quote",
    description: "get random quote",
    async execute(message, args) {
        message.reply('hello from quote')
    },
};

export = command;