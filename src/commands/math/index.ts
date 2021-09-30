import 'dotenv/config'
import axios from 'axios';
import { Command } from "discord.js";
const newton = process.env.NEWTON

const command: Command = {
    name: "math",
    description: "solve math operation",
    async execute(message, args) {
        const [operation, question]: Array<string> = args
        const response = await axios.get(`${newton}/${operation}/${question}`)
        const answer = response.data
        message.reply(`operation : ${answer.operation}\nquestion : ${answer.expression}\n\ranswer : ${answer.result}`)
    },
};

export = command;