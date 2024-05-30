require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);

    client.user.setActivity({
        name: 'DN24 BRRRRRRRRRRRRRR',
    });
});

client.on('messageCreate', (message) => {
  
    if (message.author.bot) {
        return;
    }

   if (message.content === 'hello') {
    message.reply('hello i am Timothy, i am the best bot in this server, i love you all and we are all family');
   }

   if (message.author.bot) {
    return;
}

   if (message.content === 'Hi!') {
    message.reply('Hiiii');
   }

   if (message.author.bot) {
    return;
}

   if (message.content === 'Hex') {
    message.reply('Lightweight loot is my best friend');
   }
   
   if (message.author.bot) {
    return;
}

   if (message.content === 'Ree') {
    message.reply('Reettqq is the best person in the world and she loves ass');
   }

   if (message.author.bot) {
    return;
}

   if (message.content === 'How is everyone?') {
    message.reply('I am better now that your here');
   }

   if (message.author.bot) {
    return;
}

   if (message.content === 'Dipsy') {
    message.reply('Dipsy has the nicest cake in the land');
   }

   if (message.author.bot) {
    return;
}

   if (message.content === 'Tats') {
    message.reply('Tats is the queen of hell dont fuck with her and she is mellows lover');
   }
   if (message.author.bot) {
    return;
}

   if (message.content === 'Thai') {
    message.reply('Thai loves Hex, isnt he a cutie');
   }
   
   if (message.author.bot) {
    return;
   }

   if (message.content === 'JP') {
    message.reply('Has the best girl in the world and she will kick all of your ass');
   }

    if (message.author.bot) {
     return;
    }

   if (message.content === 'Mello') {
    message.reply('Worshipper of tats and the ground she walks on, they are such a cute couple');
   }

   if (message.author.bot) {
    return;
   }

  if (message.content === 'S420') {
   message.reply('Boo they are trash and DN24 is the best in the world');
  }

  if (message.author.bot) {
    return;
   }

  if (message.content === 'Excellent') {
   message.reply('Excellent_Torch is an OG and is an amazing games developer');
  }
});

client.login(process.env.TOKEN);