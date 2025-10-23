import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../api';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotifications()
      .then(setNotifications)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading notifications...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications available.</p>
      ) : (
        <ul>
          {notifications.map(n => (
            <li key={n._id}>
              <strong>{n.type}</strong>: {n.text} ({n.status})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
