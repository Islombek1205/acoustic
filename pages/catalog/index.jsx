import { useLanguage } from '@/components/languageContext'
import React from 'react'

function catalog() {
  const {t} = useLanguage()
  return (
    <div className='catalog-container'>
      <div className="nih-bread">
        <span><a href="/">{t.Home}</a> » {t.catalog} </span>
      </div>
      <h1>{t.catalog}</h1>
      <div className="content">
        <div className="left">
          <p>{t.CatalogText}</p>
          <div className="cards-container">
            <a href="">
              <div className="card">
                <img src="/catalog_hearing-aids.jpg.webp" alt="" />
                <div className="txt">
                  <p>{t.HearingAids}</p>
                  <span>{t.HearingAidstext}</span>
                </div>
              </div>
            </a>
            <a href="">
              <div className="card">
                <img src="/baby_hearing_aids.jpg.webp" alt="" />
                <div className="txt">
                  <p>{t.HearingAidsForChildren}</p>
                  <span>{t.HearingAidsForChildrenText}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="">
                <img src="/hearing_aid2.jpg" alt="" />
                <div className="text">
                  <p>{t.catalog}</p>
                  <span>слуховых аппаратов</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <img src="/batareiky.jpg" alt="" />
                <p>Батарейки для слуховых аппаратов</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="/hearing_aids_clean.jpg" alt="" />
                <p>Средства по уходу</p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="/hearing_wireless.jpg" alt="" />
                <p>Беспроводные аксессуары</p>
              </a>
            </li>
          </ul>
          <ul className='brends'>
            <li><a href=""><img src="/oticon_brand_new.gif" alt="" /></a></li>
            <li><a href=""><img src="/resound_brand_new.gif" alt="" /></a></li>
            <li><a href=""><img src="/brand01rc.gif" alt="" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default catalog