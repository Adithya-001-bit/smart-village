import React, { useState } from 'react';
import { createStockItem } from '../api';

export default function NewStockItemPage({ onSuccess }) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStockItem({ itemName, quantity: Number(quantity) });
      alert('Stock item added successfully!');
      setItemName('');
      setQuantity('');
      if (onSuccess) onSuccess();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Add Stock Item</h2>
      <label>Item Name:</label><br />
      <input value={itemName} onChange={e => setItemName(e.target.value)} required /><br /><br />
      <label>Quantity:</label><br />
      <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} required /><br /><br />
      <button type="submit">Add Item</button>
    </form>
  );
}
