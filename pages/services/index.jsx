import { useLanguage } from '@/components/languageContext'
import React from 'react'

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
          <a href="">
            <div className="card">
              <img src="/frame-18.jpg.webp" alt="" />
              <div className="txt">
                <p className='nih-header'>{t.DiagnosticsForChildren}</p>
                <p className='nih-text'>{t.DiagnosticsForChildrenText}</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="/audiometria-rashirennaya_150.jpg.webp" alt="" />
              <div className="txt">
                <p className='nih-header'>{t.DiagnosticsForAdults}</p>
                <p className='nih-text'>{t.DiagnosticsForAdultsText}</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="/surdolog-konsultacia-150x150.jpg.webp" alt="" />
              <div className="txt">
                <p className='nih-header'>{t.ConsultationWithAudiologist}</p>
                <p className='nih-text'>{t.ConsultationWithAudiologistText}</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="/verifikacia.jpg.webp" alt="" />
              <div className="txt">
                <p className='nih-header'>{t.HearingCorrectionWithHearingAids}</p>
                <p className='nih-text'>{t.HearingCorrectionWithHearingAidsText}</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="/verifikacia.jpg.webp" alt="" />
              <div className="txt">
                <p className='nih-header'>{t.CustomEarmolds}</p>
                <p className='nih-text'>{t.CustomEarmoldsText}</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="/remont_sluhovogo_apparata-150x150.jpg.webp" alt="" />
              <div className="txt">
                <p className='nih-header'>{t.RepairAndDiagnosticsOfHearingAids}</p>
                <p className='nih-text'>{t.RepairAndDiagnosticsOfHearingAidsText}</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="/priem_inostrannyh_gragdan-150x150.jpg.webp" alt="" />
              <div className="txt">
                <p className='nih-header'>{t.ReceptionOfForeignCitizens}</p>
                <p className='nih-text'>{t.ReceptionOfForeignCitizensText}</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="/online_hearing_test-150x150.jpg.webp" alt="" />
              <div className="txt">
                <p className='nih-header'>{t.OnlineHearingTest}</p>
                <p className='nih-text'>{t.OnlineHearingTestText}</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="/rassrochka_100-models-150-150.jpg.webp" alt="" />
              <div className="txt">
                <p className='nih-header'>{t.HearingAidsInInstallments}</p>
                <p className='nih-text'>{t.HearingAidsInInstallmentsText}</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="/hearing_test_besplatno_150_150.jpg.webp" alt="" />
              <div className="txt">
                <p className='nih-header'>{t.PricesForMedicalServices}</p>
                <p className='nih-text'>{t.PricesForMedicalServicesText}</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="/audiogramma_150_150-150x150.jpg.webp" alt="" />
              <div className="txt">
                <p className='nih-header'>{t.Audiometry}</p>
                <p className='nih-text'>{t.AudiometryText}</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="card">
              <img src="/diagnostika-150-150.png.webp" alt="" />
              <div className="txt">
                <p className='nih-header'>{t.HearingDiagnosticsInAdults}</p>
                <p className='nih-text'>{t.HearingDiagnosticsInAdultsText}</p>
              </div>
            </div>
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default Services