// TeamList.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './TeamList.css';

const allMembers = [
  {
    nameZh: '謝字翔',
    nameEn: 'Eric Hsieh',
    photo: '/img/Eric.png',
    office: 'fuxin',
    experience: [
      '富信聯合會計師事務所所長',
      '台灣執業會計師、台灣稅務代理人',
      '曾任四大會計師事務所資深經理',
      '曾任中型會計師事務所合夥會計師',
      '曾任新創產業財務長',
      '擅長金融業、一般行業、上市櫃公司、財團法人等審計服務、國內稅務簽證申報服務、國內營利及非營利事業之稅務檢查、營業稅及所得稅稅務諮詢、各項租稅優惠適用分析及申請、協助公司IPO申請及內控內稽制度之建置、專案審查、虛擬通貨洗錢防制專案法遵聲明簽證及申請、ESG規劃及輔導'
    ],
    Education: ['輔仁大學會計研究所碩士']
  },
  {
    nameZh: '林易徵',
    nameEn: 'Kurt Lin',
    photo: '/img/Kurt.png',
    office: 'fuxin',
    experience: [
      '富信聯合會計師事務所 會計師',
      '曾任四大會計師事務所審計部經理',
      '曾任醫療科技集團、百貨零售集團會計經、副理',
      '專業資格：台灣註冊會計師',
      '專長領域：擅長製造業、上市櫃公司、財團法人等審計服務、國內稅務簽證服務以及輔導內部控制制度建立與專案審查'
    ],
    Education: ['東吳大學會計學學士']
  },
  {
    nameZh: '林維婕',
    nameEn: 'Rima Lin',
    photo: '/img/Rima.png',
    office: 'haofu',
    experience: [
      '台灣註冊會計師',
      '曾任四大會計師事務所審計服務部副理',
      '具跨國審計合作經驗，擅於輔助客戶轉換會計準則，進行查核規劃，建立內控制度',
      '擅長家族資產傳承的公司股權規劃、投資架構調整與財產標的評估，以及個人稅務規劃牽涉之境內外控股公司、民事信託、資金移轉流程等'
    ],
    Education: ['中央大學 會計研究所碩士']
  },
  {
    nameZh: '徐維廷',
    nameEn: 'Joseph',
    photo: '/img/Joseph.png',
    office: 'haoxin',
    experience: [
      '台灣註冊會計師，曾任四大會計師事務所審計服務部副理',
      '中國大陸公、私募基金管理人執照',
      '曾任中資晶圓代工及上市台資藥品製造之財務主管、烘焙食品集團審計副理',
      '擅長公司財務分析；相關稅務、財務會計工作的規劃與遵循指引；企業內部控制的設計、建立及流程再造等'
    ],
    Education: ['國立中正大學  會計與資訊科技研究所碩士']
  }
];

export default function TeamList() {
  const location = useLocation();
  const path = location.pathname.toLowerCase(); // 全部轉成小寫處理
  const office = path.includes('haoxin')
    ? 'haoxin'
    : path.includes('haofu')
    ? 'haofu'
    : path.includes('fuxin')
    ? 'fuxin'
    : '';

  const teamMembers = allMembers.filter(m => m.office === office);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    setStartIndex(0);
    setSelectedIndex(0);
  }, [office]);

  if (!teamMembers.length) return <p>目前尚無資料</p>;

  const visible = teamMembers.slice(startIndex, startIndex + visibleCount);
  const selected = teamMembers[selectedIndex] || teamMembers[0];

  const handlePrev = () => {
    const newStart =
      startIndex === 0
        ? Math.max(teamMembers.length - visibleCount, 0)
        : startIndex - 1;
    setStartIndex(newStart);
    setSelectedIndex(newStart);
  };

  const handleNext = () => {
    const newStart =
      startIndex + visibleCount >= teamMembers.length ? 0 : startIndex + 1;
    setStartIndex(newStart);
    setSelectedIndex(newStart);
  };

  return (
    <div className='team-section'>
      <div className='carousel-wrapper'>
        <button className='arrow' onClick={handlePrev}>
          {'<'}
        </button>
        {visible.map((member, i) => {
          const actualIndex = startIndex + i;
          return (
            <div
              key={actualIndex}
              className='hover-card'
              onClick={() => setSelectedIndex(actualIndex % teamMembers.length)}
            >
              <img src={member.photo} alt={member.nameEn} />
              <div className='overlay'>
                <p>{member.nameZh}</p>
                <small>{member.nameEn}</small>
              </div>
            </div>
          );
        })}
        <button className='arrow' onClick={handleNext}>
          {'>'}
        </button>
      </div>

      <div className='profile-detail'>
        <img src={selected.photo} alt={selected.nameEn} />
        <div className='profile-card'>
          <h2>
            {selected.nameZh} <span>{selected.nameEn}</span>
          </h2>
          <h5>主要經歷</h5>
          <ul>
            {selected.experience.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h5>學歷</h5>
          <ul>
            {selected.Education.map((edu, idx) => (
              <li key={idx}>{edu}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
