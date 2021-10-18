import { Command } from "discord.js"

const command: Command = {
    name: "random",
    description: "random number",
    async execute(message, args) {
        let number = Number(args)
        let randomNumber = Number((Math.random() * number).toFixed())
        if (randomNumber == NaN) {
            message.reply('Its not a number')
        } else {
            message.reply(randomNumber.toString())
        }
    },
};
export = command;

