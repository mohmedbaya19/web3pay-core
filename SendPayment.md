SendPayment.md

Web3Pay Payment API — Version 1.0

This API enables symbolic payment transfers between wallets within the Web3Pay ecosystem. Each transaction is signed locally and linked to the sender’s digital identity.

---

🔧 Endpoint: Send Payment

Method: POST  
URL: /api/payment/send

Request Body:
`json
{
  "from": "GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "to": "GYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY",
  "amount": "10.5",
  "asset": "XLM",
  "userId": "symbolic ID of sender",
  "secret": "SXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
`

Response:
`json
{
  "status": "success",
  "transactionId": "abcdef1234567890",
  "timestamp": 1694371200000
}
`

---

🧩 Transaction Structure

- Sender Address (from): Public key of the sender.
- Recipient Address (to): Public key of the receiver.
- Amount: Decimal value of the asset to transfer.
- Asset: Token symbol (e.g., XLM, USDC).
- Secret Key (secret): Used to sign the transaction locally.
- Digital ID (userId): Symbolic identity of the sender.

---

🔐 Security Notes

- Transactions are signed locally using stellar-sdk.
- Secret keys are never transmitted or stored remotely.
- Only public data is sent to the Stellar network.
- The system does not rely on centralized authentication.

---

📎 Identity Binding

Each payment is linked to a symbolic digital identity (userId) to ensure traceability and ownership without exposing personal data.

This identity may be:
- An encrypted email address  
- A symbolic ID within the Web3Pay ecosystem  
- A digital signature from another wallet  

> Web3Pay ensures symbolic sovereignty over every transaction.
