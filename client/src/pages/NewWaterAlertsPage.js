import React, { useState } from 'react';
import { createWaterAlert } from '../api';

export default function NewWaterAlertPage({ onSuccess }) {
  const [message, setMessage] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createWaterAlert({ message, scheduleTime });
      alert('Water alert added successfully!');
      setMessage('');
      setScheduleTime('');
      if (onSuccess) onSuccess();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Add Water Alert</h2>
      <label>Message:</label><br />
      <textarea value={message} onChange={e => setMessage(e.target.value)} required /><br /><br />
      <label>Schedule Time:</label><br />
      <input type="text" value={scheduleTime} onChange={e => setScheduleTime(e.target.value)} required /><br /><br />
      <button type="submit">Add Alert</button>
    </form>
  );
}
