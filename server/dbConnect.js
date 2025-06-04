import mysql from 'mysql2/promise'

//建立資料庫連結
const pool = mysql.createPool({
    host:'127.0.0.1',
    port:'3307',
    user:'root',
    password:'2016Horwath260IKE2',
    database:'horwath'
});
//共用資料庫連線
export default pool;




