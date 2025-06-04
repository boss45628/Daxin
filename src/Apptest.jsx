import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/user_profile')
      .then(res => {
        console.log('✅ res.status:', res.status);
        if (!res.ok) {
          throw new Error('❌ HTTP 錯誤：' + res.status);
        }
        return res.json();
      })
      .then(data => {
        console.log('⚠️ API 回傳內容：', data);
        setUsers(data);
      })
      .catch(err => {
        console.error('🔥 API 請求失敗：', err.message);
        setUsers([]); // 避免畫面崩潰
      });
  }, []);

  return (
    <>
       <div style={{ padding: '2rem' }}>
      <h1>使用者清單</h1>
      {users.length === 0 ? (
        <p>載入中...</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>ID</th>
              <th>姓名</th>
              <th>建立時間</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{new Date(u.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  )
}

export default App
