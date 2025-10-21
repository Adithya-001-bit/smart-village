export default function DashboardCard({ title, value, description, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: 16,
        margin: 8,
        maxWidth: 260,
        flex: '1 1 240px',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
      }}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {value !== undefined && (
        <div style={{ fontSize: 22, fontWeight: 'bold' }}>{value}</div>
      )}
      {description && <p style={{ marginBottom: 0 }}>{description}</p>}
    </div>
  );
}
