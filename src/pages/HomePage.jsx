import './HomePage.css';
import TaiwanMap from '../components/TaiwanMap';

export default function HomePage() {
  return (
    <div>
      {/* 輪播區 */}
      <div
        id='carouselExampleRide'
        className='carousel slide'
        data-bs-ride='carousel'
        data-bs-interval='3000'
      >
        <div className='carousel-inner'>
          {[
            '投資諮詢及工商登記服務',
            '家族企業傳承及財富管理',
            '稅務服務',
            '會計及薪資委外服務',
            '審計及確信服務',
            'ESG專業服務'
          ].map((title, i) => (
            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
              <img
                src={`/img/${title}.png`}
                className='d-block w-100 img-fluid'
                alt={title}
              />
            </div>
          ))}
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleRide'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleRide'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      {/* 地圖區塊 */}
      <TaiwanMap />
    </div>
  );
}
