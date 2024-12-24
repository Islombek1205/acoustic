import React from 'react'
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare, FaFacebookSquare  } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-top">
        <ul>
          <li>Центр хорошего слуха</li>
          <li><a href="">О Центре</a></li>
          <li><a href="">Адреса центров</a></li>
          <li><a href="">Запись на прием</a></li>
          <li><a href="">Заказать звонок</a></li>
          <li><a href="">Задать вопрос</a></li>
          <li><a href="">Оставить отзыв</a></li>
        </ul>

        <ul>
          <li>Каталог</li>
          <li><a href="">Слуховые аппараты для взрослых</a></li>
          <li><a href="">Слуховые аппараты для детей</a></li>
          <li><a href="">Беспроводные аксессуары</a></li>
          <li><a href="">Батарейки для слуховых аппаратов</a></li>
          <li><a href="">Ушные вкладыши</a></li>
          <li><a href="">Средства по уходу</a></li>
        </ul>

        <div className="in-touch">
          <ul>
            <li>Мы на связи</li>
            <li><a href="https://t.me/acousticuz_bot"><FaTelegram /></a> <a href="mailto:info@acoustic.uz">info@acoustic.uz</a></li>
            <li><a href="">Политика обработки персональных данных</a></li>
            <li><a href="">Положение о системе видеонаблюдения</a></li>
          </ul>

        </div>
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