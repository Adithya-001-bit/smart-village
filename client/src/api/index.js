export const API_BASE = 'http://localhost:5000/api';

export async function fetchHealthCamps() {
  const response = await fetch(`${API_BASE}/healthcamps`);
  if (!response.ok) {
    throw new Error('Failed to fetch health camps');
  }
  return response.json();
}
export async function fetchIssues() {
  const res = await fetch(`${API_BASE}/issues`);
  if (!res.ok) throw new Error('Failed to fetch issues');
  return res.json();
}
export async function createIssue(issueData) {
  const res = await fetch(`${API_BASE}/issues`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(issueData),
  });
  if (!res.ok) throw new Error('Failed to create issue');
  return res.json();
}
