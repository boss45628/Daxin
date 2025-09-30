import { useState, useEffect } from 'react';
import './Services.css';

export default function ServicesHaofu() {
  const [activeTab, setActiveTab] = useState('tax');

  useEffect(() => {
    document.title = '浩富會計師事務所';
    // 切換 titleimg
    const titleimg = document.querySelector("link[rel='icon']");
    if (titleimg) {
      titleimg.href = '/img/浩富Logo.png'; // 換成你的專屬 icon 路徑
    }
  }, []);

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
      id: 'inherit',
      label: '家族企業傳承及財富管理',
      content: 'Succession and  Management',
      cards: [
        {
          number: '01',
          title: '財富規劃',
          items: ['退休規劃', '家醫服務', '教育基金規劃', '個人財產風險管理']
        },
        {
          number: '02',
          title: '稅務規劃',
          items: ['台灣稅務規劃', '跨國稅務規劃']
        },
        {
          number: '03',
          title: '投資規劃',
          items: [
            '境內／外信託諮詢與設立',
            '投資組合與費用控管',
            '公益基金會規劃',
            '境外控股公司規劃'
          ]
        },
        {
          number: '04',
          title: '財務規劃',
          items: [
            '融資規劃',
            '財務風險管理',
            '財務報表與績效',
            '資產管理',
            '營運資金管理規劃'
          ]
        },
        {
          number: '05',
          title: '贈與及財產分配規劃',
          items: ['海外資產遺產規劃', '遺產稅及贈與稅之申報及節稅規劃']
        }
      ]
    },
    {
      id: 'audit',
      label: '審計及確信服務',
      content: 'Audit and Assurance',
      cards: [
        {
          number: '01',
          title: '審計簽證服務',
          items: [
            '財務報表查核簽證',
            '稅務報表查核簽證',
            '年報及公開資訊之複核',
            '購併或投資之查核',
            '特殊目的之專案查核',
            '財務盡職調查',
            '鑑識會計服務'
          ]
        },
        {
          number: '02',
          title: '公開發行及上市（櫃）專案輔導與規劃IPO',
          items: [
            '台灣企業公開發行及上市（櫃）規劃與輔導',
            '海外公司來台上市（櫃）規劃與諮詢'
          ]
        },
        {
          number: '03',
          title: '內稽內控及會計制度之建立',
          items: [
            '內部稽核制度設計、講導及諮詢',
            '內部控制制度設計、講導及諮詢',
            '中小企業會計制度規劃'
          ]
        }
      ]
    },
    {
      id: 'investment',
      label: '投資諮詢及工商登記服務',
      content: 'Investment and Registration',
      cards: [
        {
          number: '01',
          title: '投資諮詢服務',
          items: [
            '國內外投資架構規劃諮詢',
            '外商外僑來台投資規劃與申請',
            '投資法令之諮詢',
            '各項投審會申報事項',
            '企業併購諮詢與盡職調查服務',
            '公司解散註銷清算'
          ]
        },
        {
          number: '02',
          title: '工商登記服務',
          items: [
            '公司設立型態及公司法規諮詢',
            '台灣公司行號、台灣子公司、分公司、辦事處、工廠設立及變更登記',
            '國外公司設立及變更登記',
            '特許行業之設立登記',
            '外籍人員工作許可及居留申請'
          ]
        }
      ]
    },
    {
      id: 'ESG',
      label: 'ESG專業服務',
      content: 'ESG Professional Services',
      cards: [
        {
          number: '01',
          title: '永續報告代編服務',
          items: [
            '輔導永續報告書大綱架構設計',
            'ESG數據及資訊蒐集方法諮詢',
            '永續報告書編制與諮詢（GRI）',
            '永續會計準則資訊揭露（SASB）',
            '永續報告書編製指導',
            '提供報告書揭露優化建議'
          ]
        },
        {
          number: '02',
          title: '永續報告確信服務',
          items: [
            '永續保告書之確信',
            '報告書 、 內控及管理辦法之優化建議',
            '協助內部稽核及公司治理推行'
          ]
        },
        {
          number: '03',
          title: '淨零碳排管理諮詢服務',
          items: [
            '溫室氣體盤查及淨零排放減量規劃',
            '碳權與碳會計處理機制諮詢顧問',
            '協助政府補助申請'
          ]
        },
        {
          number: '04',
          title: '企業永續管理服務諮詢',
          items: [
            '永續治理現況盤點',
            '永續治理機制與委員會建立',
            '提供改善、優化建議',
            '協助政府補助申請'
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
          {['家族企業傳承及財富管理', '稅務服務'].map((title, i) => (
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
            width: '100%',
            maxWidth: '1000px', // 最大寬度限制，桌機不會超過
            height: 'auto', // 自動等比例縮放高度
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
