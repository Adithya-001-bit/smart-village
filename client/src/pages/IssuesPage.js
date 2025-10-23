import React, { useEffect, useState } from 'react';
import { fetchIssues } from '../api';

const IssuesPage = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchIssues()
      .then(setIssues)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading issues...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: 16 }}>
      <h2>Village Issues</h2>
      {issues.length === 0 ? (
        <p>No issues reported yet.</p>
      ) : (
        <ul>
          {issues.map(issue => (
            <li key={issue._id}>
              <strong>{issue.title}</strong> - {issue.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IssuesPage;
