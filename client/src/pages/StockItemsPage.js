import React, { useEffect, useState } from 'react';
import { fetchStockItems } from '../api';

export default function StockItemsPage() {
  const [stockItems, setStockItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStockItems()
      .then(setStockItems)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading stock items...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Stock Items</h2>
      {stockItems.length === 0 ? (
        <p>No stock items found.</p>
      ) : (
        <ul>
          {stockItems.map(item => (
            <li key={item._id}>
              <strong>{item.itemName}</strong>: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
