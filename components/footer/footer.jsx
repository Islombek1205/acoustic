import React from 'react'
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare, FaFacebookSquare  } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { useLanguage } from '../languageContext';


function Footer() {
  const {t} = useLanguage()
  return (
    <div className='footer-container'>
      <div className="footer-top">
        <ul>
          <li>{t.CenterForGoodHearing}</li>
          <li><a href="">{t.AboutTheCenter}</a></li>
          <li><a href="">{t.AddressesOfTheCenters}</a></li>
          <li><a href="">{t.MakeAnAppointment}</a></li>
          <li><a href="">{t.RequestCall}</a></li>
          <li><a href="">{t.AskQuestion}</a></li>
          <li><a href="">{t.LeaveFeedback}</a></li>
        </ul>

        <ul>
          <li>{t.catalog}</li>
          <li><a href="">{t.HearingAidsForAdults}</a></li>
          <li><a href="">{t.HearingAidsForChildren}</a></li>
          <li><a href="">{t.WirelessAccessories}</a></li>
          <li><a href="">{t.HearingAidBatteries}</a></li>
          <li><a href="">{t.EarPlugs}</a></li>
          <li><a href="">{t.CareProducts}</a></li>
        </ul>

          <ul>
            <li>{t.WeAreInTouch}</li>
            <li><a href="https://t.me/acousticuz_bot"><FaTelegram /></a> <a href="mailto:info@acoustic.uz">info@acoustic.uz</a></li>
            <li><a href="">{t.PersonalDataProcessingPolicy}</a></li>
            <li><a href="">{t.RegulationsonTheVideoSurveillanceSystem}</a></li>
          </ul>

      </div>
      <div className="footer-bottom">
        <ul>
          <li><a href="https://www.youtube.com/@acousticuz"><IoLogoYoutube className='footer-icon'/>You Tube</a></li>
          <li><a href="https://www.instagram.com/acoustic.uz/"><FaInstagramSquare className='footer-icon' /> Instagram</a></li>
          <li><a href="https://www.facebook.com/acoustic.uz"><FaFacebookSquare className='footer-icon'/> Facebook</a></li>
          <li><a href="https://t.me/acousticuz_bot"><FaTelegram className='footer-icon'/> Telegram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer