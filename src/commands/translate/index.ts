import { Command } from "discord.js"
import translate from '@vitalets/google-translate-api'

const command: Command = {
    name: "translate",
    description: "translate lang",
    async execute(message, args) {
        const [lang, ...words]: Array<string> = args
        const word = words.join(' ')
        translate(word, { to: lang }).then(res => {
            message.reply(res.text)
        }).catch(err => {
            console.error(err);
        });
    },
};

export = command;

