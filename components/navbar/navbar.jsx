import { IoSearch } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";    
import Link from "next/link";
import React, { useEffect, useState, useRef } from 'react'


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    }

    const closeMenu = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          setIsMenuOpen(false);
        }
      };

    useEffect(() => {
         document.addEventListener("mousedown", closeMenu);
    
        return () => {
          document.removeEventListener("mousedown", closeMenu);
        };
      }, []);

  return (
    <div className='navContainer'>
        <div className="nav-top">
            <img src="/logo-acoustic.png" alt="logo"/>
            <div className='search-form'>
                <input type="text" placeholder="search"/>
                <button type="submit" className="search-btn"><IoSearch className="search-icon"/></button>
            </div>
            <div className="new-infoline">
                <div className="main-phone">
                    <FaPhoneAlt className="phone-icon"/>
                    <a href="#">+99871 202-14-41</a>
                </div>
            </div>
            <button className="bar-btn" onClick={toggleMenu}><FaBars /></button>
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
        {isMenuOpen && (
            <ul className="navbar-menu" ref={menuRef}>
                <li><Link href={'/services'} className="pages">Услуги</Link></li>
                <li><Link href={'/catalog'} className="pages">Каталог</Link></li>
                <li><Link href={'/doctors'} className="pages">Врачи</Link></li>
                <li><Link href={'/tinnitus'} className="pages">Пациентам</Link></li>
                <li><Link href={'/detiISluh'} className="pages">Дети и слух</Link></li>
                <li><Link href={'/aboutUs'} className="pages">О нас</Link></li>
                <li><Link href={'/centers'} className="pages">Наши адреса</Link></li>
            </ul>
        )}
    </div>
  )
}

export default Navbar