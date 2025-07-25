import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  // 設定關於我們的開關
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className='navbar navbar-expand-lg shadow-sm custom-navbar'>
      <div className='container'>
        {/* LOGO / 事務所名稱 */}
        <Link className='navbar-brand text-white fw-bold fs-5' to='/HomePage'>
          大信台灣會計事務所
        </Link>

        {/* 手機選單按鈕 */}
        <button
          className='navbar-toggler border-0'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link text-white' to='/HomePage'>
                首頁
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white' to='Services'>
                服務項目
              </Link>
            </li>

            <li
              className={`nav-item dropdown hover-dropdown ${
                isDropdownOpen ? 'show' : ''
              }`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a
                className='nav-link dropdown-toggle text-white'
                href='#'
                role='button'
              >
                關於我們
              </a>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <li>
                  <a
                    className='dropdown-item'
                    href='/Haofu'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    浩富聯合會計師事務所
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='https://www.youth-cpa.com.tw/web/index/index.jsp'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    友士會計師事務所
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='https://www.andrewstw.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    安德信會計師事務所
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='/Fuxin'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    富信聯合會計師事務所
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='https://www.eehscpafirm.com.tw/contact-us.html'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    力安會計師事務所
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='/Haoxin'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    浩信聯合會計師事務所
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
