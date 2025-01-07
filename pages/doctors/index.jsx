import { useLanguage } from '@/components/languageContext'
import React from 'react'
import {doctors} from "../../data/doctorsCards"

function Doctors() {
  const {t} = useLanguage()
  return (
    <div className='doctors-container'>
      <div className="nih-bread">
        <span>
          <a href="/">{t.Home}</a> » {t.doctors}
        </span>
      </div>
      <h1>{t.doctors}</h1>
      <h2>{t.OurDoctors}</h2>
      <div className="doctors-cards">
        {doctors.map((card, index) => (
          <a href={card.link} key={index}>
          <div className="card">
            <img src={card.img} alt="" />
            <div className="txt">
              <p>{t[card.doctorsName]}</p>
              <span>{t[card.aboutDoctor]}</span>
              <span>{t[card.experience]}</span>
            </div>
          </div>
        </a>
        ))

        }
      </div>
    </div>
  )
}

export default Doctors