import React from 'react'
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import FAQ from '@/components/FAQ';


function Index() {
  return (
    <div home-container>
        <div className="slider">
            
        </div>
        <div className="for-content">
            <h1>Наши услуги</h1>
            <div className="uslugi-cards">
                <div className="card">
                    <img src="/diagnostika.png.webp" alt="diagnostika" />
                    <h2>Диагностика слуха у взрослых</h2>
                    <p>Все виды обследования слуха на новейшем оборудовании Interacoustics (Дания)</p>
                </div>
                <div className="card">
                    <img src="/deti.png.webp" alt="diagnostika" />
                    <h2>Диагностика слуха у детей</h2>
                    <p>Новейшие методы обследования слуха у детей разного возраста, в т.ч. новорожденных</p>
                </div>
                <div className="card">
                    <img src="/otoplastik-1.png.webp" alt="diagnostika" />
                    <h2>Ушные вкладыши</h2>
                    <p>Изготовление индивидуальных ушных вкладышей для слуховых аппаратов взрослым и детям</p>
                </div>
                <div className="card">
                    <img src="/our_adresses.png.webp" alt="diagnostika" />
                    <h2>Найти ближайший центр</h2>
                    <p>Адреса медицинских центров диагностики и коррекции слуха в Беларуси</p>
                </div>
            </div>
        </div>
        <div className="for-content-new">
            <h1>Слуховые аппараты</h1>
            <div className="apparati-cards">
                <div className="card">
                    <img src="/hearing-degree_2.png.webp" alt="hearing-degree_2" />
                    <div className="txt">
                        <h2> При тугоухости 2 степени</h2>
                        <p>Большой выбор моделей для помощи при нарушениях слуха умеренной степени</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/baby_hearing_aids.jpg.webp" alt="baby_hearing_aids" />
                    <div className="txt">
                        <h2> Для детей и подростков</h2>
                        <p>Слуховые решения, которые помогут обеспечить ребенку нормальное развитие речевых навыков</p>
                </div>
                    </div>
                <div className="card">
                    <img src="bte_hearing_aids-1.jpg.webp" alt="bte_hearing_aids-1" />
                    <div className="txt">
                        <h2> Заушные</h2>
                        <p>Простые в ношении, уходе и управлении эти модели легко скрываются за ушной раковиной и волосами</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/hearing_aids_for_adults.jpg.webp" alt="" />
                    <div className="txt">
                        <h2> Для пожилых людей</h2>
                        <p>Надежные, долговечные и простые в уходе слуховые решения для людей пожилого возраста</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/hearing_aids_for_tinnitus_main.jpg.webp" alt="" />
                    <div className="txt">
                        <h2> Управление шумом в ушах</h2>
                        <p>Эффективная звуковая терапия маскирует ушной шум и приносит моментальное облегчение</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/aids_made_foriphone.jpg.webp" alt="" />
                    <div className="txt">
                        <h2> Made for iPhone/Android</h2>
                        <p>Звук высокого качества с вашего смартфона напрямую в слуховые аппараты</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/bte_hearing_aids.jpg.webp" alt="" />
                    <div className="txt">
                        <h2> Мощные и супермощные</h2>
                        <p>Универсальные решения для улучшения слуха при 3 и 4 степени тугоухости</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/invisible_hearing_aids_main-1.jpg.webp" alt="" />
                    <div className="txt">
                        <h2> Невидимые</h2>
                        <p>Незаметное решение проблемы со слухом, с которым вы забудете о стеснении</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/charge-hearing-aids.png.webp" alt="" />
                    <div className="txt">
                        <h2> Перезаряжаемые</h2>
                        <p>Вам больше не придется беспокоиться, что слуховые аппараты могут разрядиться в неподходящий момент</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="for-situacia">
            <h1>Начните свой путь к хорошему слуху</h1>
            <div className="situacia-cards">
                <div className="card">
                    <img src="/frame-6-5.jpg.webp" alt="" />
                    <h2>Проверьте свой слух</h2>
                    <p>Бесплатный онлайн-тест всего за 3 минуты поможет Вам узнать, насколько хорошо Вы слышите.</p>
                </div>
                <div className="card">
                    <img src="/about_hearing_loss_1.png.webp" alt="" />
                    <h2>Узнайте о потере слуха</h2>
                    <p>Статьи и материалы о нарушении слуха помогут распознать проблему и вовремя обратиться за помощью к сурдологу.</p>
                </div>
                <div className="card">
                    <img src="/zapis-k-surdologu.png.webp" alt="" />
                    <h2>Запишитесь к сурдологу</h2>
                    <p>Запишитесь на прием к сурдологу и получите квалифицированную помощь в решении проблемы со слухом.</p>
                </div>
            </div>
        </div>
        <div className="for-news">
            <h1>Новости</h1>
            <div className="news-cards">
                <div className="card">
                    <h2>Легендарный Oticon More в Беларуси</h2>
                    <p>Слуховые аппараты нового поколения со встроенным искусственным интеллектом...</p>
                </div>
                <div className="card">
                    <h2>Льготный кредит от Беларусбанка</h2>
                    <p>Вам больше не придется ограничивать себя в выборе и откладывать решение проблемы со слухом...</p>
                </div>
                <div className="card">
                    <h2>Oticon Opn S в Центрах хорошего слуха</h2>
                    <p>Инновационные слуховые аппараты Otcion Opn S уже доступны для покупки в Центрах хорошего слуха...</p>
                </div>
                <div className="card">
                    <h2>Нарушение слуха и деменция</h2>
                    <p>Как связаны тугоухость и развитие деменции, рассказывает Главный врач Центра хорошего слуха...</p>
                </div>
                <div className="card">
                    <h2>Сахарный диабет и тугоухость</h2>
                    <p>Сахарный диабет, как фактор риска появления и развития слуховых нарушений...</p>
                </div>
                <div className="card">
                    <h2>Работа Центра в Бресте в июле</h2>
                    <p>Изменения в работе Центра в Бресте в период с 1 по 16 июля. Просим учитывать это при планировании..</p>
                </div>
            </div>
        </div>
        <div className="industry-news">
            <h1>Новости индустрии</h1>
            <div className="industry-slider">
                <Swiper
                    modules={[Navigation, A11y, Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false}}
                    spaceBetween={1}
                    breakpoints={{
                        400:{
                            slidesPerView: 1
                        },
                        670:{
                            slidesPerView: 2
                        },
                        1000:{
                            slidesPerView: 3
                        },  
                        1300: {
                            slidesPerView: 4
                        }
                    }}
                    navigation={{prevEl: ".custom-prev", nextEl: ".custom-next"}}
                    loop={true}
                    Autoplay={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='industry-swiper'
                    >
                    <SwiperSlide>
                        <a href="/">
                            <div className="card">
                                <img src="/oticon-companion-226-196.jpg.webp" alt="" />
                                <h2>Oticon Companion</h2>
                                <p>Новое мобильное приложение Oticon для управления слуховыми аппаратами...</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="/">
                        <div className="card">
                            <img src="/oticon-own-450-392.png.webp" alt="" />
                            <h2>Oticon Own</h2>
                            <p>Еще меньше размер, еще больше мощности! Технологии, которые изменит вашу жизнь...</p>
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="/">
                        <div className="card">
                            <img src="/oticon-more-450-392.png.webp" alt="" />
                            <h2>Oticon More</h2>
                            <p>Первый слуховой аппарат со встроенным искусственным интеллектом (DNN)...</p>
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="/">
                        <div className="card">
                            <img src="/frame-2-11.jpg.webp" alt="" />
                            <h2>Oticon Zircon</h2>
                            <p>Уникальные технологии Oticon BrainHearing™, которые меняют жизнь на 360 градусов...</p>
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="/">
                        <div className="card">
                            <img src="/cochlear-news-main-page.jpg.webp" alt="" />
                            <h2>Cochlear в Беларуси</h2>
                            <p>Хорошая новость для пользователей систем кохлеарной имплантации в Беларуси...</p>
                        </div>
                        </a>
                    </SwiperSlide>
                    <div className="custom-prev"><FaChevronLeft /></div>
                    <div className="custom-next"><FaChevronRight /></div>
                    <style jsx>
                    {`
                        .custom-prev, .custom-next {
                        background-color: orange;
                        border-radius: 50%;
                        color: white;
                        padding: 10px;
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: absolute;
                        top: 50%;
                        z-index: 10;
                        }

                        .custom-prev {
                        left: 0px;
                        transform: translateY(-50%);
                        }

                        .custom-next {
                        right: 0px;
                        transform: translateY(-50%);
                        }

                        .custom-prev:hover, .custom-next:hover {
                        background-color: red;
                        }
                    `}
                    </style>
                </Swiper>
            </div>
        </div>
        <div className="for-questions">
            <h1>Часто задаваемые вопросы</h1>
            <FAQ/>
        </div>
    </div>
  )
}

export default Index