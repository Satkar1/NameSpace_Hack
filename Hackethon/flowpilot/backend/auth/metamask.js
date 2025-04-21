const { ethers } = require('ethers');

function verifySignature(message, signature, expectedAddress) {
  const signer = ethers.verifyMessage(message, signature);
  return signer.toLowerCase() === expectedAddress.toLowerCase();
}

module.exports = verifySignature;
