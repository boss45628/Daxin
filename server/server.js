import express from 'express';      // 引入 Express 套件（建構 web server）
import cors from 'cors';            // 引入 cors 套件，允許跨來源請求（前端可以連後端）
import dotenv from 'dotenv';        // 引入 dotenv，用來載入 .env 環境變數檔案
import db from './dbConnect.js'

dotenv.config();                    // 啟用 .env 設定檔（例如 PORT 設定）

const app = express();              // 建立一個 Express 應用程式實例

app.use(cors());                    // 啟用 CORS（跨來源資源共享）
app.use(express.json());            // 讓後端可以解析 JSON 請求（例如 POST）

// 建立一個 GET API：前端如果訪問 /api/user_profile，就會回傳這段 JSON
app.get('/api/user_profile',async (req, res) => {

  try {
    const [rows] = await db.query('SELECT * FROM horwath.user_profile');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
 
// 啟動伺服器，監聽在指定 port（預設是 5000）
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
