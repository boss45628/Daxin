import React, { useState } from 'react';
import { ReactComponent as TaiwanBase } from '../assets/taiwan.svg';
import '../pages/HomePage.css';
const points = [
  {
    id: 'point_A',
    cx: 771,
    cy: 285,
    fill: 'yellow',
    label: '浩富聯合會計師事務所',
    img: '浩富Logo.png',
    desc: '提供企業與個人稅務規劃與報稅服務。'
  },
  {
    id: 'point_B',
    cx: 763,
    cy: 295,
    fill: 'red',
    label: '友士會計師事務所',
    img: '友士Logo.png',
    desc: '友士為一群擁有會計師，記帳士、內部稽核師等證照的專業人員所組成的團隊，具有多年協助及服務台灣中小企業、外商公司包含德、英、美、日本、韓國、中國、馬來西亞等多國知名企業有關財會、稅務、人事管理、薪資、出納相關等委外工作的經驗。從公司一開始設立，委外工作平台的建置，到後續資料的收集及處理，皆有一套標準作業程序，並考量客戶的需求及狀況，予以配合修正，成為企業在處理財務、會計、人事方面最優質的幫手。有鑑於台灣人口下降，財會、稅務、人資等專業人員短缺，中小企業的員工流動性大，加上勞基法不斷修改，勞動成本增加等因素，深知企業因為找不到合適穩定的員工，常導致在財務人事工作的交接過程不完整，或人員因為對財務及勞動法令的不熟悉，造成企業有形及無形的營運成本增加或營業損失。'
  },
  {
    id: 'point_C',
    cx: 770,
    cy: 308,
    fill: 'blue',
    label: '安德信會計師事務所',
    img: '安德信Logo.png',
    desc: '林陣蒼會計師/律師帶領安德信國際財稅服務團隊，擁有豐富產業服務經驗，提供中小企業財務、會計記帳、財稅報簽證及法務等全方位的專業服務。此外，服務團隊還為中小企業主及高資產人士提供資產跨境移轉、贈與繼承規劃、財產信託、剩餘財產分配、股份資產稅務優化等資產守護與傳承規劃方案。所長目前為台北市會計師公會理事、全國律師聯合會副秘書長兼財務主任、台北市會計師公會稅制稅務副主任委員、會計師全國聯合會職業道德委員會委員、會計師全聯會會員紛爭協調委員會副主委，111-112年度經濟部中小企業榮譽律師。'
  },
  {
    id: 'point_D',
    cx: 777,
    cy: 298,
    fill: 'orange',
    label: '富信聯合會計師事務所',
    img: '富信Logo.png',
    desc: '富信聯合會計師事務所是大信國際的成員所，秉持「服務來自於專業」的精神，由執業會計師帶領，結合財務、稅務、會計等專業人才組成優質團隊。提供企業會計帳務處理、財務稅務審計、稅務規劃、跨國投資規劃諮詢、各式稅務申報、公開發行、企業併購、投資專案申請、工商登記、薪資管理、內稽內控制度、會計制度建立等相關管理顧問諮詢服務，協助客戶在全球化競爭市場中永續經營，與客戶共同追求卓越，為國內知名的會計師事務所之一。'
  },
  {
    id: 'point_E',
    cx: 570,
    cy: 508,
    fill: 'purple',
    label: '力安會計師事務所',
    img: '力安Logo.png',
    desc: '會計事務所在蔡宜庭會計師加入之前，係由資深稅務代理人林采灼女士及林朝專先生帶領並成立於1970年，靠著長期執業的老經驗及口耳相傳的好聲譽，經營至今已將近50年，其專長在於個人及企業稅務規劃，個人及企業稅務定期申報，遺產贈與稅規劃及申報等。2015年起，蔡宜庭會計師及呂柏峰記帳士加入事務所的團隊，正式成立力安會計師事務所，除了原本的服務之外更延伸提供台灣企業對外投資架構諮詢規劃、企業流程規劃再造、個人及公司節稅規劃等，期許在稅務風險越來越高且複雜的環境下，能為客戶帶來更專業更多元化的服務。'
  },
  {
    id: 'point_F',
    cx: 758,
    cy: 282,
    fill: 'pink',
    label: '浩信聯合會計師事務所',
    img: '浩信Logo.png',
    desc: '協助公司快速完成設立流程與變更登記。'
  }
];

export default function TaiwanMap() {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  return (
    <div className='page-container'>
      {/* ✅ 上方標題區：置中 */}
      <div className='page-header text-center'>
        <h1
          className='display-5 fw-bold'
          style={{ color: '#003366', paddingTop: '20px' }}
        >
          事務所簡介
        </h1>
        <div
          style={{
            width: '60px',
            height: '4px',
            backgroundColor: '#C8A95D',
            margin: '0 auto 20px'
          }}
        ></div>
        <p className='fs-5 text-muted'>Introduction to Daxin CPA Firms</p>
      </div>

      {/* ✅ 下方左右排版：地圖 + 卡片 */}
      <div className='map-content-container'>
        {/* 左側地圖 */}
        <div className='map-svg'>
          <svg viewBox='350 120 600 1000' width='100%' height='auto'>
            <TaiwanBase />
            {points.map(pt => (
              <circle
                key={pt.id}
                cx={pt.cx}
                cy={pt.cy}
                r='6'
                fill={pt.fill}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredPoint(pt)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
            ))}
          </svg>
          {/* 卡片絕對位置 */}
          {hoveredPoint && (
            <div className='hover-modal'>
              <div className='card shadow-lg border-0 rounded-4'>
                <div className='card-body text-center p-4 d-flex flex-column'>
                  <img
                    src={`/img/${hoveredPoint.img}`}
                    alt={hoveredPoint.label}
                    className='card-img-top img-fluid mb-3'
                    style={{ height: '120px', objectFit: 'contain' }}
                  />
                  <h5 className='card-title fw-bold'>{hoveredPoint.label}</h5>
                  <p className='card-text text-muted small mt-2 text-start'>
                    {hoveredPoint.desc}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 右側卡片區塊 */}
        <div className='card-list'>
          {points.map(item => (
            <div key={item.id} className='card-wrapper'>
              <div className='card h-100 shadow-sm border-0 rounded-4 hover-shadow '>
                <div className='card-body text-center p-4 d-flex flex-column'>
                  <img
                    src={`/img/${item.img}`}
                    className='card-img-top img-fluid mb-3'
                    style={{ height: '120px', objectFit: 'contain' }}
                    alt={item.label}
                  />
                  <h5 className='card-title fw-bold'>{item.label}</h5>
                  <p className='card-text text-muted small mt-2 text-start'>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
