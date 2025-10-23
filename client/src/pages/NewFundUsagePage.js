import React, { useState } from 'react';
import { createFundUsage } from '../api';

export default function NewFundUsagePage({ onSuccess }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createFundUsage({ amount: Number(amount), description, date });
      alert('Fund usage record added.');
      setAmount('');
      setDescription('');
      setDate('');
      if(onSuccess) onSuccess();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Add Fund Usage Record</h2>

      <label>Amount:</label><br />
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} required /><br /><br />

      <label>Description:</label><br />
      <textarea value={description} onChange={e => setDescription(e.target.value)} required /><br /><br />

      <label>Date:</label><br />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required /><br /><br />

      <button type="submit">Add Record</button>
    </form>
  );
}
