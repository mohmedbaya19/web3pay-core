import React, { useState } from 'react';
import { Keypair } from 'stellar-sdk';

export default function Identity() {
  const [identity, setIdentity] = useState(null);

  const generateIdentity = () => {
    const pair = Keypair.random();
    const symbolicId = pair.publicKey();
    const secret = pair.secret();

    const payload = {
      symbolicId,
      secret,
      timestamp: Date.now(),
    };

    localStorage.setItem('identity', JSON.stringify(payload));
    setIdentity(payload);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🧬 Create Symbolic Identity</h2>
      <p>Your symbolic identity is generated locally and never shared.</p>
      <button onClick={generateIdentity} style={{ padding: '10px', fontWeight: 'bold' }}>
        Generate Identity
      </button>

      {identity && (
        <div style={{ marginTop: '20px' }}>
          <h4>🔐 Your Symbolic ID:</h4>
          <code>{identity.symbolicId}</code>
          <h4>🗝️ Your Secret (Keep Safe):</h4>
          <code>{identity.secret}</code>
        </div>
      )}
    </div>
  );
}
