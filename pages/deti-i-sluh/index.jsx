import { useLanguage } from '@/components/languageContext'
import React from 'react'
import { detiCards } from './deti-i-sluh-cards'

function DetiISluh() {
  const {t} = useLanguage()
  return (
    <div className='deti-i-sluh'>
       <div className="nih-bread">
        <span>
          <a href="/">{t.Home}</a> » {t.childrenAndHearing}
        </span>
      </div>
        <h1>{t.childrenAndHearing}</h1>
        <div className="content">
          <p>{t.DetiISluhText}</p>
          <div className="cards-container">
            {detiCards.map((card, index) => (
              <a href={card.link} key={index}>
                <div className="card">
                  <img src={card.img} alt="" />
                  <div className="txt">
                    <p>{t[card.title]}</p>
                    <span>{t[card.text]}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
    </div>
  )
}

export default DetiISluh