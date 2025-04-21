const { Fluvio } = require('@fluvio/client');
const config = require('./fluvio.config');

async function sendEvent(data) {
  const fluvio = await Fluvio.connect();
  const producer = await fluvio.topicProducer(config.topic);
  await producer.send(JSON.stringify(data));
}

module.exports = sendEvent;
