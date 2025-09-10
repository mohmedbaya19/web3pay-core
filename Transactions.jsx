import React, { useState, useEffect } from 'react';

export default function Transactions() {
  const [userId, setUserId] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(`tx-${userId}`);
    if (saved) setTransactions(JSON.parse(saved));
  }, [userId]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>🔍 Transaction History</h2>
      <input
        type="text"
        placeholder="Enter your symbolic ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      {transactions.length > 0 ? (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>To</th>
              <th>Amount</th>
              <th>Asset</th>
              <th>Timestamp</th>
              <th>TxID</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.to}</td>
                <td>{tx.amount}</td>
                <td>{tx.asset}</td>
                <td>{new Date(tx.timestamp).toLocaleString()}</td>
                <td>{tx.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions found for this ID.</p>
      )}
    </div>
  );
}
