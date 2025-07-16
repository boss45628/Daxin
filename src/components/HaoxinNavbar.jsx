import { Link } from 'react-router-dom';
import './Navbar.css';

export default function HaoxinNavbar() {
  return (
    <nav className='navbar navbar-expand-lg shadow-sm custom-navbar'>
      <div className='container'>
        {/* LOGO / 事務所名稱 */}
        <Link className='navbar-brand text-white fw-bold fs-5' to='/Haoxin'>
          浩信聯合會計師事務所
        </Link>

        {/* 手機選單按鈕 */}
        <button
          className='navbar-toggler text-white border-white'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link text-white' to='/Haoxin'>
                首頁
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-white' to='/Haoxin/ServicesHaoxin'>
                服務項目
              </Link>
            </li>

            <li className='nav-item '>
              <Link className='nav-link text-white' to='/Haoxin/Teams'>
                專業團隊
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
