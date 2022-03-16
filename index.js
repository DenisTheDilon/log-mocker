const r = require('randomstring');
const cron = require('node-cron');

const cronTime = process.env.CRON || '* * * * *';
const minLogSize = process.env.MIN_MESSAGE_SIZE || 1000;
const maxLogSize = process.env.MAX_MESSAGE_SIZE || 20000;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

cron.schedule(cronTime, () => {
  const n = getRandomInt(minLogSize, maxLogSize);
  console.log(`{ "message_length": ${n}, "message": "${r.generate(n)}" }`);
});