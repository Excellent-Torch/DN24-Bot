require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'replies with hey!',
    },
];

const rest = new REST({ version: '11' }).setToken(process.env.TOKEN);
(async () => {
    try {
      console.log('Regestering slash commands...');

     await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
        { body: commands}
     )
       
      console.log('Slash commands were registered successfully!');
    } catch (error) {
      console.log('There was an error: ${error}');
    }
})();
