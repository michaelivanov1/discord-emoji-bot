require('dotenv').config();
// 3 params: instance of the bot, command name/aliases, what happens when someone runs the command 
module.exports = (client, aliases, callback) => {
    if (typeof aliases === 'string') aliases = [aliases]

    client.on('message', message => {
        const { content } = message;

        aliases.forEach(alias => {
            const command = `${process.env.prefix}${alias}`

            if (content.startsWith(`${command} `) || content === command) {
                console.log(`running command ${command}`);
                callback(message);
            }
        });
    });
}