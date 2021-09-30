import 'dotenv/config'
import axios from 'axios';
import { Command } from "discord.js";
const quote = process.env.QUOTE

const command: Command = {
    name: "quote",
    description: "get random quote",
    async execute(message, args) {
        const response = await axios.get(`${quote}`)
        const { quoteText, quoteAuthor } = response.data.data[0]
        message.reply(`${quoteText} -  ${quoteAuthor}`)
    },
};

export = command;