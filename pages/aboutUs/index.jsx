import { useLanguage } from '@/components/languageContext'
import React from 'react'
import { aboutCards } from './aboutCards'

function aboutUs() {
  const {t} = useLanguage()
  return (
    <div className='aboutPage-container'>
      <div className="nih-bread">
        <span>
          <a href="/">{t.Home}</a> » {t.aboutUs}
        </span>
      </div>
        <h1>{t.aboutUs}</h1>
        <div className="content">
          <img src="/frame-22-8.jpg.webp" alt="" />
          <h2>{t.OurMission}</h2>
          <p>{t.OurMissionText1}</p>
          <p>{t.OurMissionText2}</p>
        </div>
        <div className="about-cards">
          {
            aboutCards.map((card, index) => (
              <a href={card.link} key={index}>
                <div className="card">
                  <img src={card.img} alt="" />
                  <p>{t[card.titleText]}</p>
                  <span>{t[card.text]}</span>
                </div>
              </a>
            ))
          }
        </div>
    </div>
  )
}

export default aboutUs