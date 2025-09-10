API.md — Web3Pay

Last Updated: September 10, 2025  
Purpose: Documenting public API endpoints for Web3Pay  
Developer: Web3Pay Team  
Email: webpay603@gmail.com  

---

1. 🔐 Authentication

- Method: JWT Token  
- Header: Authorization: Bearer <token>  
- Token Expiry: 24 hours  
- Refresh Endpoint: POST /api/refresh-token  

---

2. 📤 Send Transaction

`http
POST /api/send
`

Payload:

`json
{
  "from": "0xUserWallet",
  "to": "0xRecipientWallet",
  "amount": 100,
  "network": "Stellar",
  "asset": "XLM"
}
`

Response:

`json
{
  "status": "success",
  "txHash": "0xABC123DEF456",
  "fee": 1,
  "netAmount": 99
}
`

---

3. 📥 Receive Transaction

`http
GET /api/receive?wallet=0xUserWallet
`

Response:

`json
{
  "incoming": [
    {
      "from": "0xSenderWallet",
      "amount": 250,
      "asset": "Pi",
      "timestamp": "2025-09-10T14:00:00Z"
    }
  ]
}
`

---

4. 📊 Get Fees

`http
GET /api/fees
`

Response:

`json
{
  "standardFee": "1%",
  "destination": "0xFounderWalletMAIN123456789"
}
`

---

5. 🧾 Transaction History

`http
GET /api/history?wallet=0xUserWallet
`

Response:

`json
{
  "transactions": [
    {
      "type": "send",
      "amount": 100,
      "fee": 1,
      "net": 99,
      "timestamp": "2025-09-10T13:30:00Z"
    }
  ]
}
`

---

6. ⚠️ Error Codes

| Code | Message               | Meaning                        |
|------|------------------------|--------------------------------|
| 401  | Unauthorized           | Invalid or expired token       |
| 403  | Forbidden              | Wallet not allowed             |
| 500  | Internal Server Error  | Unexpected system failure      |

---
