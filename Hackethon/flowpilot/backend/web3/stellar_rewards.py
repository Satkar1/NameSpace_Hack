from stellar_sdk import Keypair, Server, TransactionBuilder, Network

def send_token(receiver, amount):
    server = Server("https://horizon-testnet.stellar.org")
    source = Keypair.from_secret("SB...")  # your testnet secret
    account = server.load_account(source.public_key)

    txn = (
        TransactionBuilder(account, network_passphrase=Network.TESTNET_NETWORK_PASSPHRASE)
        .append_payment_op(destination=receiver, amount=str(amount), asset_code="XLM")
        .set_timeout(30)
        .build()
    )
    txn.sign(source)
    resp = server.submit_transaction(txn)
    print("💰 Reward sent:", resp)

# send_token("GB...", 10)
