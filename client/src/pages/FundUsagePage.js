import React, { useEffect, useState } from 'react';
import { fetchFundUsage } from '../api';

export default function FundUsagePage() {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFundUsage()
      .then(data => setFunds(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading fund usage...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Fund Usage Records</h2>
      {funds.length === 0 ? (
        <p>No fund usage records yet.</p>
      ) : (
        <ul>
          {funds.map(fund => (
            <li key={fund._id}>
              <strong>₹{fund.amount}</strong> - {fund.description} (on {new Date(fund.date).toLocaleDateString()})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
