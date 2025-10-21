import { useEffect, useState } from 'react';
import DashboardCard from '../components/DashboardCard';
import { fetchHealthCamps } from '../api';

export default function Homepage() {
  const [camps, setCamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const data = await fetchHealthCamps();
        if (!cancelled) {
          setCamps(data);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Failed to load');
          setLoading(false);
        }
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  if (loading) return <main style={{ padding: 16 }}><h1> village Dashboard</h1>
    <p>Loading...</p></main>;
  if (error) return <main style={{ padding: 16 }}><p>Error: {error}</p></main>;

  const nextCamp = camps.length > 0 ? camps[0] : null;

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
      <h2>Village Dashboard</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <DashboardCard
          title="Next Health Camp"
          value={nextCamp ? nextCamp.title : 'No upcoming'}
          description={
            nextCamp
              ? `${new Date(nextCamp.date).toLocaleDateString()} — ${nextCamp.location || 'TBA'}`
              : 'Add a new camp to see it here'
          }
        />
      </div>
    </main>
  );
}
