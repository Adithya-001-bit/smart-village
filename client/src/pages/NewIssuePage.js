import React, { useState } from 'react';
import { createIssue } from '../api';

const NewIssuePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createIssue({ title, description });
      alert('Issue reported successfully');
      setTitle('');
      setDescription('');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 16 }}>
      <h2>Report a New Issue</h2>
      <label>Title:</label><br />
      <input value={title} onChange={e => setTitle(e.target.value)} required /><br />
      <label>Description:</label><br />
      <textarea value={description} onChange={e => setDescription(e.target.value)} required /><br />
      <button type="submit">Report Issue</button>
    </form>
  );
};

export default NewIssuePage;
