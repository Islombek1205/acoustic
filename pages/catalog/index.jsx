import { useLanguage } from "@/components/languageContext";
import React from "react";
import {leftCards, rightListItems, brands} from "../../data/catalogCards"

function Catalog() {
  const { t } = useLanguage();

  return (
    <div className="catalog-container">
      {/* Nonusqa */}
      <div className="nih-bread">
        <span>
          <a href="/">{t.Home}</a> » {t.catalog}
        </span>
      </div>
      
      <h1>{t.catalog}</h1>
      
      <div className="content">
        {/* Chap tomondagi kartalar */}
        <div className="left">
          <p>{t.CatalogText}</p>
          <div className="cards-container">
            {leftCards.map((card, index) => (
              <a href={card.link} key={index}>
                <div className="card">
                  <img src={card.img} alt="" />
                  <div className="txt">
                    <p>{t[card.titleKey]}</p>
                    <span>{t[card.textKey]}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* O'ng tomondagi ro'yxatlar */}
        <div className="right">
          <ul>
            {rightListItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}>
                  <img src={item.img} alt="" />
                  <div className="text">
                    {item.titleKey ? <p>{t[item.titleKey]}</p> : null}
                    {item.subtitle ? <span>{item.subtitle}</span> : <p>{item.text}</p>}
                  </div>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Brendlar */}
          <ul className="brends">
            {brands.map((brand, index) => (
              <li key={index}>
                <a href="">
                  <img src={brand} alt={`brand-${index}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
