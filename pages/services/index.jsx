import { useLanguage } from '@/components/languageContext'
import React from 'react'
import { servicesData } from '@/data/servicesData'

function Services() {
  const {t} = useLanguage()
  
  return (
    <div className='services-container'>
      <div className="nih-bread">
        <span><a href="/">{t.Home}</a> » {t.services} </span>
      </div>
      <h1>{t.services}</h1>
      <div className="content">
        <p>{t.ContentText}</p>
        <div className="content-cards">
          {servicesData.map((service) => (
            <a href={service.link} key={service.id}>
              <div className="card">
                <img src={service.img} alt="" />
                <div className="txt">
                  <p className='nih-header'>{t[service.title]}</p>
                  <p className="nih-text">{t[service.text]}</p>
                </div>
              </div>
            </a>
          ))

          }
          
        </div>
      </div>
    </div>
  )
}

export default Services