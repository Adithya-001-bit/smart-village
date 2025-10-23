export const API_BASE = 'http://localhost:5000/api';

export async function fetchHealthCamps() {
  const response = await fetch(`${API_BASE}/healthcamps`);
  if (!response.ok) {
    throw new Error('Failed to fetch health camps');
  }
  return response.json();
}
export async function fetchIssues() {
  const response=await fetch(`${API_BASE}/issues`);
  if(!response.ok){
    throw new Error('Failed to fetch check server');
  }
  return response.json();
  
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


// Fetch fund usage records
export async function fetchFundUsage() {
  const res = await fetch(`${API_BASE}/fundusages`);
  if (!res.ok) throw new Error('Failed to fetch fund usage');
  return res.json();
}

// Create a new fund usage record
export async function createFundUsage(record) {
  const res = await fetch(`${API_BASE}/fundusages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record),
  });
  if (!res.ok) throw new Error('Failed to create fund usage');
  return res.json();
}
export async function fetchNotifications() {
  const res = await fetch(`${API_BASE}/notifications`);
  if (!res.ok) throw new Error('Failed to fetch notifications');
  return res.json();
}

export async function createNotification(notification) {
  const res = await fetch(`${API_BASE}/notifications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(notification),
  });
  if (!res.ok) throw new Error('Failed to create notification');
  return res.json();
}

export async function fetchStockItems() {
  const res = await fetch(`${API_BASE}/stockitems`);
  if (!res.ok) throw new Error('Failed to fetch stock items');
  return res.json();
}

export async function createStockItem(item) {
  const res = await fetch(`${API_BASE}/stockitems`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  if (!res.ok) throw new Error('Failed to create stock item');
  return res.json();
}
export async function fetchWaterAlerts() {
  const res = await fetch(`${API_BASE}/wateralerts`);
  if (!res.ok) throw new Error('Failed to fetch water alerts');
  return res.json();
}

export async function createWaterAlert(alert) {
  const res = await fetch(`${API_BASE}/wateralerts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(alert),
  });
  if (!res.ok) throw new Error('Failed to create water alert');
  return res.json();
}
