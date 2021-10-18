import { Command } from "discord.js"

import axios from "axios";

const command: Command = {
    name: "github",
    description: "Find Github User",
    async execute(message, args) {
        const [username]: Array<any> = args
        const response = await axios.get(`https://api.github.com/users/${username}`)
        const data = response.data
        const embbedMessage = {
            "thumbnail": {
                "url": data.avatar_url
            },
            "author": {
                "name": data.login,
                "url": data.url,
                "icon_url": data.avatar_url
            },
            "fields": [
                {
                    "name": "Name",
                    "value": data.name,
                    "inline": true
                },
                {
                    "name": "Location",
                    "value": data.location,
                    "inline": true
                },
                {
                    "name": "Bio",
                    "value": data.bio,
                    "inline": true
                },
                {
                    "name": "Followers",
                    "value": `${data.followers}`,
                    "inline": true
                },
                {
                    "name": "Repository",
                    "value": `${data.public_repos}`,
                    "inline": true
                },
                {
                    "name": "Website",
                    "value": `${data.blog}`,
                    "inline": true
                }
            ],
        }
        message.channel.send({ embeds: [embbedMessage] });
    },
};
export = command;

