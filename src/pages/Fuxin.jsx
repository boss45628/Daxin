import { useEffect } from 'react';
import './background.css';

export default function Fuxin() {
  useEffect(() => {
    document.title = '富信聯合會計師事務所';
    const titleimg = document.querySelector("Link[rel='icon']");
    if (titleimg) {
      titleimg.href = '/img/富信Logo.png';
    }

    // ✅ 加上這段：若使用 daxincpa.com.tw，則導向 hwcpa.com.tw
    if (window.location.hostname === 'daxincpa.com.tw') {
      window.location.href = 'https://www.hwcpa.com.tw/Fuxin';
    }
  }, []);

  return (
    <div>
      <link rel='canonical' href='https://www.hwcpa.com.tw/Fuxin' />

      <header>
        <title>富信聯合會計師事務所</title>
      </header>
      <div className='team-hero'>
        <img className='image' src='/img/Haofu背景.png' alt='專業團隊' />
        <div className='overlay'>
          <h2>富信聯合會計師事務所</h2>
          <p>專業．誠信．信賴</p>
        </div>
      </div>
    </div>
  );
}
