import React, { useState } from 'react';

export default function ExportWallet() {
  const [wallet, setWallet] = useState(null);

  const handleExport = () => {
    const stored = localStorage.getItem('wallet');
    if (stored) {
      const blob = new Blob([stored], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'web3pay-wallet.json';
      link.click();
      URL.revokeObjectURL(url);
    } else {
      alert('No wallet found in localStorage.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🗂️ Export Your Wallet</h2>
      <p>This will download your symbolic wallet as a JSON file.</p>
      <button onClick={handleExport} style={{ padding: '10px', fontWeight: 'bold' }}>
        Export Wallet
      </button>
    </div>
  );
}
