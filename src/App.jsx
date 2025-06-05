import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Haofu from './pages/Haofu';
import Haoxin from './pages/Haoxin';
import Fuxin from './pages/Fuxin';
import Services from './pages/Services';
import HaofuNavbar from './components/HaofuNavbar';
import HaofuFooter from './components/HaofuFooter';

function LayoutWrapper({ children }) {
  const location = useLocation();
  const isHaofuPage = location.pathname === '/Haofu';

  return (
    <div className='d-flex flex-column min-vh-100'>
      {/* 選擇對應的 Navbar */}
      {isHaofuPage ? <HaofuNavbar /> : <Navbar />}

      {/* 內容區塊 */}
      <main className='flex-fill'>
        <div className='w-100'>{children}</div>
      </main>

      {/* 專屬 Footer */}
      {isHaofuPage ? <HaofuFooter /> : <Footer />}
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
          <Route path='/Services' element={<Services />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}
