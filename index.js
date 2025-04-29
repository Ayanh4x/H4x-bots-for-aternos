const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'playzypvp.aternos.me', // your server IP
    port: 52920,                  // your server PORT
    username: 'AFK_Bot',           // bot name (can change)
    version: false,                // auto-detect server version
  });

  bot.on('spawn', () => {
    console.log('Bot has spawned!');
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2;
      bot.look(yaw, 0); // randomly looks around
      bot.setControlState('forward', true);
      setTimeout(() => bot.setControlState('forward', false), 1000);
    }, 6000); // walks every 6 seconds
  });

  bot.on('end', () => {
    console.log('Bot disconnected! Reconnecting...');
    setTimeout(createBot, 5000); // Reconnect after 5 seconds
  });

  bot.on('error', (err) => {
    console.log('Bot Error:', err);
  });
}

createBot();
