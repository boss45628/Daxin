import { useState } from 'react';
import './Services.css';

export default function Haoxin() {
  const [activeTab, setActiveTab] = useState('tax');

  const tabs = [
    {
      id: 'tax',
      label: '稅務服務',
      content: 'Tax Services',
      cards: [
        {
          number: '01',
          title: '常年稅務顧問',
          items: []
        },
        {
          number: '02',
          title: '台灣稅務諮詢',
          items: [
            '個人稅務申報與諮詢服務',
            '企業稅務申報與諮詢服務',
            '稅務爭議及糾紛',
            '稅務行政救濟',
            '各項稅務法令諮詢',
            '各項公司設立及稅務規劃'
          ]
        },
        {
          number: '03',
          title: '中國稅務與商務諮詢',
          items: [
            '個人稅務規劃與申報',
            '企業稅務規劃與申報',
            '稅務年檢申報',
            '出口退稅申報代辦',
            '駐辦事處事前評估、註銷清算',
            '增值稅、關稅、所得稅稅務法令諮詢',
            '高新技術企業投資節稅專案'
          ]
        },
        {
          number: '04',
          title: '美國稅務諮詢',
          items: [
            '個人與家庭所得稅申報與諮詢服務',
            '企業稅務申報與諮詢服務',
            '稅務交涉服務',
            '肥咖（FATCA）、肥爸（FBAR）條件申報與諮詢',
            '投資或民間租稅規劃服務',
            '非美籍遺產諮詢',
            '海外內外國報稅申報'
          ]
        },
        {
          number: '05',
          title: '國際租稅諮詢',
          items: [
            '租稅協定費用稅優標準諮詢',
            '租稅協定之避免雙重課稅',
            '稅務協會簽訂稅賦協議',
            '境外公司設立與設立服務',
            '境外公司設計'
          ]
        },
        {
          number: '06',
          title: '全球移轉訂價服務',
          items: [
            '移轉訂價諮詢與風險評估',
            '移轉訂價報告與文獻準備',
            '移轉訂價爭議解決',
            '預先訂價協議談判服務'
          ]
        }
      ]
    },
    {
      id: 'payroll',
      label: '會計及薪資委外服務',
      content: 'Accounting and Payroll',
      cards: [
        {
          number: '01',
          title: '會計服務',
          items: [
            '會計帳務處理服務',
            '財務報表編製',
            '營利事業所得稅結算申報',
            '代辦加值型及非加值型營業稅申報',
            '各類所得扣繳申報',
            '兩稅合一規劃及輔導',
            '國際財務會計準則（IFRS）導入諮詢'
          ]
        },
        {
          number: '02',
          title: '薪資委外服務',
          items: [
            '薪資架構及組成之檢視',
            '薪資作業制度之建置',
            '薪資制度與福利制度之諮詢',
            '員工勞保、健保加退保作業',
            '薪資處理',
            '相關薪資及勞工法令諮詢'
          ]
        }
      ]
    }
  ];

  const activeContent = tabs.find(t => t.id === activeTab);

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

      {/*服務項目*/}

      <div className='container py-5'>
        {/* 按鈕區 */}
        <div className='d-flex justify-content-center flex-wrap gap-3 mb-4'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              style={{
                fontSize: '20px'
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* 圖片區 */}
        <img
          src={`/img/${tabs.find(t => t.id === activeTab).label}_1.png`}
          className='img-fluid d-block mx-auto'
          style={{
            width: '1000px', // 固定寬度
            height: '300px', // 固定高度
            objectFit: 'cover',
            padding: '20px'
          }}
          alt={tabs.find(t => t.id === activeTab).label}
        />

        {/* 內容區 */}
        <div className='service-container'>
          <div className='service-box'>
            <div className='cutout-text'>
              <h3>{tabs.find(t => t.id === activeTab).label}</h3>
              <p c>{tabs.find(t => t.id === activeTab).content}</p>
            </div>
          </div>
        </div>
        {/* card區 */}
        <div className='row g-4'>
          {activeContent.cards.map((card, i) => (
            <div className='col-12 col-md-4' key={i}>
              <div className='card h-100 shadow-sm border-0 rounded-3 p-4 card-hover'>
                <div className='d-flex justify-content-end align-items-start mb-3'>
                  <span className='display-6 text-muted'>{card.number}</span>
                </div>
                <hr />
                <h5 className='fw-bold mb-0' style={{ paddingBottom: '10px' }}>
                  {card.title}
                </h5>
                <ul
                  className='list-unstyled text-muted small'
                  style={{ paddingLeft: '10px' }}
                >
                  {card.items.map((text, idx) => (
                    <li key={idx} className='mb-1'>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
