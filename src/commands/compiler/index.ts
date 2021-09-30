import { Command } from "discord.js";
import deno from 'nodeno-town'

const command: Command = {
    name: "compiler",
    description: "Compile code",
    async execute(message, args) {
        message.reply('hello from compiler')
    },
};

export = command;