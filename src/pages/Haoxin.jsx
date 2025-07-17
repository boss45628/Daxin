import { useEffect } from 'react';
import './background.css';

export default function Haoxin() {
  useEffect(() => {
    document.title = '浩信聯合會計師事務所';
    const titleimg = document.querySelector("link[rel='icon']");
    if (titleimg) {
      titleimg.href = '/img/浩信Logo.png';
    }
  }, []);

  return (
    <div className='team-hero'>
      <img className='image' src='/img/Haofu背景.png' alt='專業團隊' />
      <div className='overlay'>
        <h2>浩信聯合會計師事務所</h2>
        <p>專業．誠信．信賴</p>
      </div>
    </div>
  );
}
