# Fees.md — Web3Pay

**Last Updated:** September 10, 2025  
**Purpose:** Documenting transaction fees, deduction logic, and transparency policies  
**Developer:** Web3Pay Team  
**Email:** webpay603@gmail.com  

---

## 1. 💸 Fee Structure

- **Standard Fee:** 1% deducted from each transaction (send or sell)  
- **Fee Destination:** Founder’s wallet `0xFounderWalletMAIN123456789`  
- **Fee Timing:** Deducted instantly upon transaction confirmation  
- **Fee Visibility:** Displayed clearly before user approval  

---

## 2. 🧾 Fee Breakdown Example

| Transaction Type | Amount | Fee (1%) | Net Received | Status |
|------------------|--------|----------|--------------|--------|
| Sell Pi          | 100 Pi | 1 Pi     | 99 Pi        | ✅ Confirmed |
| Send Stellar     | 250 XLM| 2.5 XLM  | 247.5 XLM    | ✅ Confirmed |

---

## 3. 🔍 Transparency Protocols

- All fees are logged with timestamp and transaction ID  
- Users can export fee history from their dashboard  
- Fee logic is open-source and auditable in `core/fees.js`  
- No hidden charges or dynamic pricing  

---

## 4. ⚠️ Dispute Handling

- Users can raise fee-related disputes via `/support/fees`  
- Escrow system available for large transactions  
- Refunds only issued in case of system error or double deduction  
- All disputes are reviewed within 72 hours  

---

## 5. 📜 Legal Notice

Web3Pay reserves the right to adjust fee percentages with 30-day public notice.  
All fee deductions comply with digital asset regulations and are documented in [Legal.md](./Legal.md).  
Users are advised to review fee terms before initiating any transaction.
