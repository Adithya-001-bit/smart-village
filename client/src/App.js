import React, { useState } from 'react';
import Homepage from './pages/HomePage';
import IssuesPage from './pages/IssuesPage';
import NewIssuePage from './pages/NewIssuePage';
import FundUsagePage from './pages/FundUsagePage';
import NewFundUsagePage from './pages/NewFundUsagePage';
import NotificationsPage from './pages/NotificationsPage';
import NewNotificationPage from './pages/NewNotificationsPage';
import StockItemsPage from './pages/StockItemsPage';
import NewStockItemPage from './pages/NewStockItemsPage';
import WaterAlertsPage from './pages/WaterAlertsPage'
import NewWaterAlertPage from './pages/NewWaterAlertsPage';
function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <nav style={{ padding: 16, backgroundColor: '#f0f0f0', marginBottom: 20 }}>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('issues')}>Issues</button>
        <button onClick={() => setPage('newIssue')}>Report Issue</button>
        <button onClick={() => setPage('fundUsage')}>Fund Usage</button>
        <button onClick={() => setPage('newFundUsage')}>Add Fund Usage</button>
        <button onClick={() => setPage('notifications')}>Notifications</button>
        <button onClick={() => setPage('newNotification')}>Add Notification</button>
        <button onClick={() => setPage('stockItems')}>Stock Tracker</button>
        <button onClick={() => setPage('newStockItem')}>Add Stock Item</button>
        <button onClick={() => setPage('waterAlerts')}>Water Alerts</button>
        <button onClick={() => setPage('newWaterAlert')}>Add Water Alert</button>
      </nav>

      {page === 'home' && <Homepage />}

      {page === 'issues' && <IssuesPage />}

      {page === 'newIssue' && <NewIssuePage onSuccess={() => setPage('issues')} />}

      {page === 'fundUsage' && <FundUsagePage />}

      {page === 'newFundUsage' && <NewFundUsagePage onSuccess={() => setPage('fundUsage')} />}
      
      {page === 'notifications' && <NotificationsPage />}

      {page === 'newNotification' && <NewNotificationPage onSuccess={() => setPage('notifications')} />}

      {page === 'stockItems' && <StockItemsPage />}
{page === 'newStockItem' && <NewStockItemPage onSuccess={() => setPage('stockItems')} />}

  {page === 'waterAlerts' && <WaterAlertsPage />}
{page === 'newWaterAlert' && <NewWaterAlertPage onSuccess={() => setPage('waterAlerts')} />}
    </div>
  );
}

export default App;
