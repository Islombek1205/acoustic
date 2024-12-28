import { IoSearch } from "react-icons/io5";
import { FaPhoneAlt, FaBars } from "react-icons/fa";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../languageContext"; // Importing the hook

function Navbar() {
  const { t, toggleLanguage, language, isHydrated } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
    <div className="navContainer">
      <div className="nav-top">
        <a href="/">
          <img src="/logo-acoustic.png" alt="logo" />
        </a>
        <div className="search-form">
          <input
            type="text"
            placeholder={isHydrated ? t.searchPlaceholder : ""}
          />
          <button type="submit" className="search-btn">
            <IoSearch className="search-icon" />
          </button>
        </div>
        <div className="new-infoline">
          <div className="main-phone">
            <FaPhoneAlt className="phone-icon" />
            <a href="tel:+998712021441">{isHydrated ? t.phone : ""}</a>
          </div>
        </div>
        <button className="language-toggle" onClick={toggleLanguage}>
          {isHydrated ? (language === "ru" ? "Uzb" : "Rus") : ""}
        </button>
        <button className="bar-btn" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
      <div className="nav-bottom">
        <ul>
          <li>
            <Link href={"/services"} className="pages">
              {t.services || ""}
            </Link>
          </li>
          <li>
            <Link href={"/catalog"} className="pages">
              {t.catalog || ""}
            </Link>
          </li>
          <li>
            <Link href={"/doctors"} className="pages">
              {t.doctors || ""}
            </Link>
          </li>
          <li>
            <Link href={"/tinnitus"} className="pages">
              {t.patients || ""}
            </Link>
          </li>
          <li>
            <Link href={"/deti-i-sluh"} className="pages">
              {t.childrenAndHearing || ""}
            </Link>
          </li>
          <li>
            <Link href={"/aboutUs"} className="pages">
              {t.aboutUs || ""}
            </Link>
          </li>
          <li>
            <Link href={"/centers"} className="pages">
              {t.ourAddresses || ""}
            </Link>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <ul className="navbar-menu" ref={menuRef}>
          <li>
            <Link href={"/services"} className="pages">
              {t.services}
            </Link>
          </li>
          <li>
            <Link href={"/catalog"} className="pages">
              {t.catalog}
            </Link>
          </li>
          <li>
            <Link href={"/doctors"} className="pages">
              {t.doctors}
            </Link>
          </li>
          <li>
            <Link href={"/tinnitus"} className="pages">
              {t.patients}
            </Link>
          </li>
          <li>
            <Link href={"/detiISluh"} className="pages">
              {t.childrenAndHearing}
            </Link>
          </li>
          <li>
            <Link href={"/aboutUs"} className="pages">
              {t.aboutUs}
            </Link>
          </li>
          <li>
            <Link href={"/centers"} className="pages">
              {t.ourAddresses}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
