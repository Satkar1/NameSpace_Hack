const ethers = require('ethers');
const jwt = require('jsonwebtoken');

function verifySignature(wallet, message, signature) {
  const signer = ethers.utils.verifyMessage(message, signature);
  return signer.toLowerCase() === wallet.toLowerCase();
}

function generateJWT(wallet) {
  return jwt.sign({ wallet }, 'SECRET_KEY', { expiresIn: '2d' });
}

// Example
const wallet = '0xabc...';
const sig = '0xsigned...';
if (verifySignature(wallet, 'FlowPilot Login', sig)) {
  const token = generateJWT(wallet);
  console.log("🎟️ Token:", token);
}
