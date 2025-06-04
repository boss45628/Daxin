export default function Haoxin() {
  const users = [
    { id: 1, name: '小明', email: 'ming@example.com' },
    { id: 2, name: '小美', email: 'mei@example.com' },
    { id: 3, name: '小王', email: 'wang@example.com' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>使用者清單</h2>
      {/* 用 map 把每個 user 渲染出來 */}
      {users.map(user => (
        <div
          key={user.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '8px'
          }}
        >
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
