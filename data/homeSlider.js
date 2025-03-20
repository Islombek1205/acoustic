import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronCircleLeft, FaChevronLeft } from "react-icons/fa";

const Slider = () => {
  const slides = [
    {
        id: 1,
        title: "Проверка слуха в подарок!",
        subtitle: "Узнайте насколько хорошо Вы слышите.",
        image: "/hearing-test-sale.png.webp",
        link: "/more-info",
    },
    {
      id: 2,
      title: "Слуховые аппараты в кредит",
      subtitle: "На льготных условиях от Беларусбанка.",
      image: "/belarusbank-800-400.jpg.webp",
      link: "/more-info",
    },
    {
      id: 3,
      title: "Oticon More",
      subtitle: "Слуховые аппараты нового поколения со встроенным искусственным интеллектом.",
      image: "/oticon-more-1600-800-slide.png.webp",
      link: "/catalog",
    },
    {
      id: 4,
      title: "Диагностика слуха экспертного уровня",
      subtitle: "Все услуги по улучшению слуха.",
      image: "/slide-1600-800.jpg.webp",
      link: "/discounts",
    },
    {
        id: 5,
        title: "Проверка статуса заказа",
        subtitle: "Узнайте, готов ли ваш вкладыш или слуховой аппарат.",
        image: "/service-online.png.webp",
        link: "/discounts",
    },
    {
        id: 6,
        title: "Центр диагностики и коррекции слуха",
        subtitle: "Ваш слух - это наша забота!",
        image: "/slide_video.png",
        link: "/discounts",
    },
    {
        id: 7,
        title: "В наличии!",
        subtitle: "Система кохлеарной имплантации Cochlear Nucleus.",
        image: "/cochlear-v-nalichii.png.webp",
        link: "/discounts",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Autoplay funksiyasi uchun useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Har 5 sekundda o'zgaradi

    return () => clearInterval(interval); // Tozalash
  }, [slides.length]);

  return (
    <div className="slider">
      <div className="slides">
        <div className="content">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].subtitle}</p>
          <a href={slides[currentSlide].link} className="btn">
            Подробнее »
          </a>
        </div>
        <img src={slides[currentSlide].image} alt="" />
      </div>
      <button className="prev" onClick={prevSlide}>
        <FaChevronLeft/>
      </button>
      <button className="next" onClick={nextSlide}>
        <FaChevronRight/>
      </button>
      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
