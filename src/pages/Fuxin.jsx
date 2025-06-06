import { useEffect } from 'react';
import './background.css';

export default function Fuxin() {
  useEffect(() => {
    document.title = '富信聯合會計師事務所';
    const titleimg = document.querySelector("Link[rel='icon']");
    if (titleimg) {
      titleimg.href = '/img/富信Logo.png';
    }
  }, []);

  return (
    <div className='team-hero'>
      <img className='image' src='/img/Haofu背景.png' alt='專業團隊' />
      <div className='overlay'>
        <h2>富信聯合會計師事務所</h2>
        <p>專業．誠信．信賴</p>
      </div>
    </div>
  );
}
