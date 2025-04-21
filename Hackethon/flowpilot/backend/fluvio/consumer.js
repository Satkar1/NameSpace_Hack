const { Fluvio } = require('@fluvio/client');
const config = require('./fluvio.config');
const writeLog = require('../supabase/logWriter');

async function startConsumer() {
  const fluvio = await Fluvio.connect();
  const consumer = await fluvio.partitionConsumer(config.topic, 0);

  await consumer.stream(async (record) => {
    const data = JSON.parse(record.valueString());
    await writeLog(data); // Store in Supabase
  });
}

startConsumer();
