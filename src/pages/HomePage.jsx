import './HomePage.css';

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
            '審計及確信服務'
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

      {/* 事務所簡介區塊 */}
      <div className='bg-light py-5'>
        <div className='container'>
          <div className='text-center mb-5'>
            <h1 className='display-5 fw-bold' style={{ color: '#003366' }}>
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

          <div className='row g-4'>
            {[
              {
                name: '浩富會計師事務所',
                img: '浩富Logo.png',
                desc: '提供企業與個人稅務規劃與報稅服務。'
              },
              {
                name: '浩信會計師事務所',
                img: '浩信Logo.png',
                desc: '協助公司快速完成設立流程與變更登記。'
              },
              {
                name: '富信會計師事務所',
                img: '富信Logo.png',
                desc: '富信聯合會計師事務所是大信國際的成員所，秉持「服務來自於專業」的精神，由執業會計師帶領，結合財務、稅務、會計等專業人才組成優質團隊。提供企業會計帳務處理、財務稅務審計、稅務規劃、跨國投資規劃諮詢、各式稅務申報、公開發行、企業併購、投資專案申請、工商登記、薪資管理、內稽內控制度、會計制度建立等相關管理顧問諮詢服務，協助客戶在全球化競爭市場中永續經營，與客戶共同追求卓越，為國內知名的會計師事務所之一。'
              },
              {
                name: '安德信會計師事務所',
                img: '安德信Logo.png',
                desc: '林陣蒼會計師/律師帶領安德信國際財稅服務團隊，擁有豐富產業服務經驗，提供中小企業財務、會計記帳、財稅報簽證及法務等全方位的專業服務。此外，服務團隊還為中小企業主及高資產人士提供資產跨境移轉、贈與繼承規劃、財產信託、剩餘財產分配、股份資產稅務優化等資產守護與傳承規劃方案。所長目前為台北市會計師公會理事、全國律師聯合會副秘書長兼財務主任、台北市會計師公會稅制稅務副主任委員、會計師全國聯合會職業道德委員會委員、​會計師全聯會會員紛爭協調委員會副主委，111-112年度經濟部中小企業榮譽律師。'
              },
              {
                name: '力安會計師事務所',
                img: '力安Logo.png',
                desc: '會計事務所在蔡宜庭會計師加入之前，係由資深稅務代理人林采灼女士及林朝專先生帶領並成立於1970年，靠著長期執業的老經驗及口耳相傳的好聲譽，經營至今已將近50年，其專長在於個人及企業稅務規劃，個人及企業稅務定期申報，遺產贈與稅規劃及申報等。2015年起，蔡宜庭會計師及呂柏峰記帳士加入事務所的團隊，正式成立力安會計師事務所，除了原本的服務之外更延伸提供台灣企業對外投資架構諮詢規劃、企業流程規劃再造、個人及公司節稅規劃等，期許在稅務風險越來越高且複雜的環境下，能為客戶帶來更專業更多元化的服務。'
              },
              {
                name: '友士會計師事務所',
                img: '友士Logo.png',
                desc: '友士為一群擁有會計師，記帳士、內部稽核師等證照的專業人員所組成的團隊，具有多年協助及服務台灣中小企業、外商公司包含德、英、美、日本、韓國、中國、馬來西亞等多國知名企業有關財會、稅務、人事管理、薪資、出納相關等委外工作的經驗。從公司一開始設立，委外工作平台的建置，到後續資料的收集及處理，皆有一套標準作業程序，並考量客戶的需求及狀況，予以配合修正，成為企業在處理財務、會計、人事方面最優質的幫手。有鑑於台灣人口下降，財會、稅務、人資等專業人員短缺，中小企業的員工流動性大，加上勞基法不斷修改，勞動成本增加等因素，深知企業因為找不到合適穩定的員工，常導致在財務人事工作的交接過程不完整，或人員因為對財務及勞動法令的不熟悉，造成企業有形及無形的營運成本增加或營業損失。'
              }
            ].map((item, i) => (
              <div className='col-12 col-sm-6 col-md-4' key={i}>
                <div className='card h-100 shadow-sm border-0 rounded-4 hover-shadow'>
                  <div className='card-body text-center p-4 d-flex flex-column'>
                    <img
                      src={`/img/${item.img}`}
                      className='card-img-top img-fluid mb-3'
                      style={{ height: '120px', objectFit: 'contain' }}
                      alt={item.name}
                    />
                    <h5 className='card-title fw-bold'>{item.name}</h5>
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
    </div>
  );
}
