Wallet.md — Web3Pay

Last Updated: September 10, 2025  
Purpose: Documenting supported wallets and integration methods  
Developer: Web3Pay Team  
Email: webpay603@gmail.com  

---

1. 🧭 Supported Wallets

Web3Pay currently supports the following wallets:

| Wallet Name   | Network         | Type        | Status     |
|---------------|------------------|-------------|------------|
| Pi Wallet     | Pi Network       | Native      | ✅ Active   |
| Stellar Wallet| Stellar          | Native      | ✅ Active   |
| MetaMask      | Ethereum, BSC    | Extension   | ✅ Active   |
| Trust Wallet  | Multi-chain      | Mobile      | ✅ Active   |
| TronLink      | TRON             | Extension   | ✅ Active   |

---

2. 🔗 Integration Methods

- Connection: Web3 modal, QR code, or deep link  
- Verification: Wallet address validated before transaction  
- Authentication: Biometric required before wallet actions  
- Compatibility: Wallet must support selected network and asset

---

3. 🔐 Security Protocols

- Web3Pay does not store private keys  
- Multi-signature support for advanced users  
- Vault/HSM recommended for enterprise wallets  
- All wallet actions are logged with timestamp  
- Failed connections trigger alerts and retry options

---

4. 🧪 Wallet Testing

- Each wallet integration is tested on staging before production  
- Test cases include:
  - Connection latency  
  - Transaction success/failure  
  - Fee deduction accuracy  
  - Biometric trigger validation

---

5. 📜 Legal Notice

Web3Pay does not store or manage user wallets.  
Users are responsible for securing their private keys and recovery phrases.  
Refer to Legal.md for full terms and conditions.
