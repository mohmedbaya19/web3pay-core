# API.md

## Web3Pay Wallet API — Version 1.0

This API allows symbolic wallet creation and retrieval within the Web3Pay ecosystem. Each wallet is linked to a unique digital identity (`userId`) and generated locally using Stellar SDK.

---

### 🔧 Endpoint: Create Wallet

**Method:** `POST`  
**URL:** `/api/wallet/create`

**Request Body:**
```json
{
  "userId": "string (minLength: 5)"
}
