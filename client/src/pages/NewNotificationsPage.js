import React, { useState } from 'react';
import { createNotification } from '../api';

export default function NewNotificationPage({ onSuccess }) {
  const [text, setText] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNotification({ text, type, status });
      alert('Notification added successfully!');
      setText('');
      setType('');
      setStatus('');
      if (onSuccess) onSuccess();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Add Notification</h2>
      <label>Text:</label><br />
      <textarea value={text} onChange={e => setText(e.target.value)} required /><br /><br />
      <label>Type:</label><br />
      <input value={type} onChange={e => setType(e.target.value)} required /><br /><br />
      <label>Status:</label><br />
      <input value={status} onChange={e => setStatus(e.target.value)} required /><br /><br />
      <button type="submit">Add Notification</button>
    </form>
  );
}
