import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HaofuNavbar from './components/HaofuNavbar';
import HaoxinNavbar from './components/HaoxinNavbar';
import FuxinNavbar from './components/FuxinNavbar';

import HaofuFooter from './components/HaofuFooter';
import HaoxinFooter from './components/HaoxinFooter';
import FuxinFooter from './components/FuxinFooter';

import HomePage from './pages/HomePage';
import Haofu from './pages/Haofu';
import Haoxin from './pages/Haoxin';
import Fuxin from './pages/Fuxin';
import ServicesHaofu from './pages/ServicesHaofu';
import ServicesHaoxin from './pages/ServicesHaoxin';
import ServicesFuxin from './pages/ServicesFuxin';
import Services from './pages/Services';
import Teams from './pages/TeamList';

function LayoutWrapper({ children }) {
  const location = useLocation();
  //取得當下頁面名稱
  const path = location.pathname.toLowerCase(); //全部轉換小寫

  // 預設共用元件
  let CurrentNavbar = Navbar;
  let CurrentFooter = Footer;

  // 根據路徑切換專屬元件
  if (path.startsWith('/haofu')) {
    CurrentNavbar = HaofuNavbar;
    CurrentFooter = HaofuFooter;
  } else if (path.startsWith('/haoxin')) {
    CurrentNavbar = HaoxinNavbar;
    CurrentFooter = HaoxinFooter;
  } else if (path.startsWith('/fuxin')) {
    CurrentNavbar = FuxinNavbar;
    CurrentFooter = FuxinFooter;
  }

  return (
    <div className='d-flex flex-column min-vh-100'>
      <CurrentNavbar />
      <main className='flex-fill'>
        <div className='w-100'>{children}</div>
      </main>
      <CurrentFooter />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/Haofu' element={<Haofu />} />
          <Route path='/Haoxin' element={<Haoxin />} />
          <Route path='/Fuxin' element={<Fuxin />} />
          <Route path='/Haofu/ServicesHaofu' element={<ServicesHaofu />} />
          <Route path='/Haoxin/ServicesHaoxin' element={<ServicesHaoxin />} />
          <Route path='/Fuxin/ServicesFuxin' element={<ServicesFuxin />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Haofu/Teams' element={<Teams />} />
          <Route path='/Haoxin/Teams' element={<Teams />} />
          <Route path='/Fuxin/Teams' element={<Teams />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}
