import os
import random

import discord
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')


intents = discord.Intents.all()
client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'{client.user.name} has connected to Discord!')

@client.event
async def on_member_join(member):
    await member.create_dm()
    await member.dm_channel.send
    (
        f'Greetings {member.name}, Welcome to D24!'
    )

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    message_contents = [
        'hello i am Timothy, i am the best bot in this server, i love you all and we are all family',
        'Hiiii',
        'Lightweight loot is my best friend',
        'Reettqq is the best person in the world and she loves ass',
        'I am better now that your here',
        'Dipsy has the nicest cake in the land',
        'Tats is the queen of hell dont fuck with her and she is mellows lover',
        'Thai is loots favourite',
        'Has the best girl in the world and she will kick all of your ass',
        'Worshipper of tats and the ground she walks on, they are such a cute couple',
        'Boo they are trash and DN24 is the best in the world',
        'Torch is My Best Friend!',
        'I Just got an Upgrade to Python YAY!'
    ]

    if message.content == 'hello':
        response = message_contents[0]
        await message.channel.send(response)
    
    elif message.content == 'Hi!':
        response = message_contents[1]
        await message.channel.send(response)
    
    elif message.content == 'Hex':
        response = message_contents[2]
        await message.channel.send(response)
    
    elif message.content == 'Ree':
        response = message_contents[3]
        await message.channel.send(response)

    elif message.content == 'How is everyone?':
        response = message_contents[4]
        await message.channel.send(response)

    elif message.content == 'Dipsy':
        response = message_contents[5]
        await message.channel.send(response)

    elif message.content == 'Tats':
        response = message_contents[6]
        await message.channel.send(response)

    elif message.content == 'Thai':
        response = message_contents[7]
        await message.channel.send(response)

    elif message.content == 'JP':
        response = message_contents[8]
        await message.channel.send(response)

    elif message.content == 'Mello':
        response = message_contents[9]
        await message.channel.send(response)

    elif message.content == 'S420':
        response = message_contents[10]
        await message.channel.send(response)

    elif message.content == 'Torch':
        response = message_contents[11]
        await message.channel.send(response)
    
    elif message.content == 'Timothy Status':
        response = message_contents[12]
        await message.channel.send(response)

client.run(TOKEN)

