const {Client} = require("discord.js");
const bot = new Client();
const gamedig = require('gamedig');
async function online() {
	gamedig.query({type: 'dayz', host: '212.22.93.111', port: '2325'
		}).then((state) => {
			bot.user.setActivity(`🎮 Онлайн: ${state.raw.numplayers}/${state.maxplayers}`, {type: 0});
		}).catch((error) => {
			bot.user.setActivity(`🎮 Сервер offline`, {type: 0});
		});
}
bot.login("MTAzMzAxMjAyNjM1MzY1MTcyMg.GjMp0b.WPuGw90JaCQENQG5vp3yUvzcv7rqg9_6eguQQw")
bot.on('ready', async () => {
	console.log('BOT UP')
	online()
	setInterval(online, 10000)
});