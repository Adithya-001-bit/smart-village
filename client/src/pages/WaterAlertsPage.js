import React, { useEffect, useState } from 'react';
import { fetchWaterAlerts } from '../api';

export default function WaterAlertsPage() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWaterAlerts()
      .then(setAlerts)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading water alerts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Water Alerts</h2>
      {alerts.length === 0 ? (
        <p>No water alerts available.</p>
      ) : (
        <ul>
          {alerts.map(alert => (
            <li key={alert._id}>
              <strong>{alert.message}</strong>: {alert.scheduleTime}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
