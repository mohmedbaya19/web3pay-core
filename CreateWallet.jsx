jsx
import React, { useState, useEffect } from 'react';
import { Keypair } from 'stellar-sdk';
import QRCode from 'qrcode.react';

export default function CreateWallet() {
  const [userId, setUserId] = useState('');
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('wallet');
    if (saved) setWallet(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (wallet) localStorage.setItem('wallet', JSON.stringify(wallet));
  }, [wallet]);

  const handleCreate = () => {
    if (userId.trim().length < 5) {
      alert('User ID must be at least 5 characters');
      return;
    }

    const pair = Keypair.random();
    const newWallet = {
      address: pair.publicKey(),
      secret: pair.secret(),
      user: userId,
      timestamp: Date.now()
    };
    setWallet(newWallet);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Create Symbolic Wallet</h2>
      <input
        type="text"
        placeholder="Enter your digital ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>

      {wallet && (
        <div style={{ marginTop: 20 }}>
          <p><strong>User:</strong> {wallet.user}</p>
          <p><strong>Public Address:</strong> {wallet.address}</p>
          <p><strong>Secret Key:</strong> {wallet.secret}</p>
          <p><strong>Timestamp:</strong> {new Date(wallet.timestamp).toLocaleString()}</p>
          <QRCode value={wallet.address} size={128} />
          <button onClick={() => {
            navigator.clipboard.writeText(wallet.address);
            alert('Address copied');
          }}>
            Copy Address
          </button>
        </div>
      )}
    </div>
  );
}
`
          
