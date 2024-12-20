import { IoSearch } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import React from 'react'


function Navbar() {
  return (
    <div className='navContainer'>
        <div className="nav-top">
            <img src="/logo-acoustic.png" alt="logo" width={150}/>
            <div className='search-form'>
                <input type="text" />
                <button type="submit" className="search-btn"><IoSearch className="search-icon"/></button>
            </div>
            <div className="new-infoline">
                <div className="main-phone">
                    <FaPhoneAlt className="phone-icon"/>
                    <a href="#">+998712021441</a>
                </div>
                <button className="chervon-down"><FaChevronDown /></button>
            </div>
        </div>
        <div className="nav-bottom">
            <ul>
                <li><Link href={'/services'} className="pages">Услуги</Link></li>
                <li><Link href={'/catalog'} className="pages">Каталог</Link></li>
                <li><Link href={'/doctors'} className="pages">Врачи</Link></li>
                <li><Link href={'/tinnitus'} className="pages">Пациентам</Link></li>
                <li><Link href={'/detiISluh'} className="pages">Дети и слух</Link></li>
                <li><Link href={'/aboutUs'} className="pages">О нас</Link></li>
                <li><Link href={'/centers'} className="pages">Наши адреса</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar