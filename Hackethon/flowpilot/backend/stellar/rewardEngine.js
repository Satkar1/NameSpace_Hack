require('dotenv').config();
const { Keypair, Server, TransactionBuilder, Networks, Operation, Asset } = require('stellar-sdk');

const server = new Server('https://horizon-testnet.stellar.org');
const sourceKeys = Keypair.fromSecret(process.env.STELLAR_SECRET);

async function sendReward(targetPublicKey) {
  const account = await server.loadAccount(sourceKeys.publicKey());
  const transaction = new TransactionBuilder(account, {
    fee: await server.fetchBaseFee(),
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(Operation.payment({
      destination: targetPublicKey,
      asset: Asset.native(),
      amount: '0.1',
    }))
    .setTimeout(30)
    .build();

  transaction.sign(sourceKeys);
  await server.submitTransaction(transaction);
  console.log(`Reward sent to ${targetPublicKey}`);
}

module.exports = sendReward;
