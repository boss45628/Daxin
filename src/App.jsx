import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Haofu from './pages/Haofu';
import Haoxin from './pages/Haoxin';
import Fuxin from './pages/Fuxin';
import Services from './pages/Services';

export default function App() {
  return (
    <BrowserRouter>
      {/* 整頁結構 */}
      <div className='d-flex flex-column min-vh-100'>
        <Navbar />

        {/* 中間內容區塊會自動撐開 */}
        <main className='flex-fill'>
          <div className='.w 100'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/HomePage' element={<HomePage />} />
              <Route path='/Haofu' element={<Haofu />} />
              <Route path='/Haoxin' element={<Haoxin />} />
              <Route path='/Fuxin' element={<Fuxin />} />
              <Route path='/Services' element={<Services />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
