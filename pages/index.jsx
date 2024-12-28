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
import { useLanguage } from '../components/languageContext';


function Index() {
      const { t } = useLanguage();
    
  return (
    <div home-container>
        <div className="slider">
            
        </div>
        <div className="for-content">
            <h1>{t.OurServices}</h1>
            <div className="uslugi-cards">
                <div className="card">
                    <img src="/diagnostika.png.webp" alt="diagnostika" />
                    <h2>{t.HearingDiagnosticsInAdults}</h2>
                    <p>{t.HearingDiagnosticsInAdultsText}</p>
                </div>
                <div className="card">
                    <img src="/deti.png.webp" alt="diagnostika" />
                    <h2>{t.HearingDiagnosticsInChildren}</h2>
                    <p>{t.HearingDiagnosticsInChildrenText}</p>
                </div>
                <div className="card">
                    <img src="/otoplastik-1.png.webp" alt="diagnostika" />
                    <h2>{t.EarPlugs}</h2>
                    <p>{t.ManufacturingOfIndividualEarMoldsForHearingAidsForAdultsAndChildren}</p>
                </div>
                <div className="card">
                    <img src="/our_adresses.png.webp" alt="diagnostika" />
                    <h2>{t.FindTheNearestCenter}</h2>
                    <p>{t.AddressesOfMedicalCentersForDiagnosticsAndHearingCorrectionInBelarus}</p>
                </div>
            </div>
        </div>
        <div className="for-content-new">
            <h1>{t.HearingAids}</h1>
            <div className="apparati-cards">
                <div className="card">
                    <img src="/hearing-degree_2.png.webp" alt="hearing-degree_2" />
                    <div className="txt">
                        <h2> {t.ForGrade2HearingLoss}</h2>
                        <p>{t.AWideRangeOfModels}</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/baby_hearing_aids.jpg.webp" alt="baby_hearing_aids" />
                    <div className="txt">
                        <h2> {t.ForChildrenAndTeenagers}</h2>
                        <p>{t.ForChildrenAndTeenagersText}</p>
                </div>
                    </div>
                <div className="card">
                    <img src="bte_hearing_aids-1.jpg.webp" alt="bte_hearing_aids-1" />
                    <div className="txt">
                        <h2>{t.BTE}</h2>
                        <p>{t.BTEText}</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/hearing_aids_for_adults.jpg.webp" alt="" />
                    <div className="txt">
                        <h2> {t.ForTheElderly}</h2>
                        <p>{t.ForTheElderlyText}</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/hearing_aids_for_tinnitus_main.jpg.webp" alt="" />
                    <div className="txt">
                        <h2> {t.TinnitusManagement}</h2>
                        <p>{t.TinnitusManagementText}</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/aids_made_foriphone.jpg.webp" alt="" />
                    <div className="txt">
                        <h2> {t.MadeForIPhoneAndroid}</h2>
                        <p>{t.MadeForIPhoneAndroidText}</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/bte_hearing_aids.jpg.webp" alt="" />
                    <div className="txt">
                        <h2> {t.PowerfulAndSuperPowerful}</h2>
                        <p>{t.PowerfulAndSuperPowerfulText}</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/invisible_hearing_aids_main-1.jpg.webp" alt="" />
                    <div className="txt">
                        <h2> {t.Invisible}</h2>
                        <p>{t.InvisibleText}</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/charge-hearing-aids.png.webp" alt="" />
                    <div className="txt">
                        <h2> {t.Rechargeable}</h2>
                        <p>{t.RechargeableText}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="for-situacia">
            <h1>{t.StartYourJourneyToBetterHearing}</h1>
            <div className="situacia-cards">
                <div className="card">
                    <img src="/frame-6-5.jpg.webp" alt="" />
                    <h2>{t.CheckYourHearing}</h2>
                    <p>{t.CheckYourHearingText}</p>
                </div>
                <div className="card">
                    <img src="/about_hearing_loss_1.png.webp" alt="" />
                    <h2>{t.LearnAboutHearingLoss}</h2>
                    <p>{t.LearnAboutHearingLossText}</p>
                </div>
                <div className="card">
                    <img src="/zapis-k-surdologu.png.webp" alt="" />
                    <h2>{t.MakeAnAppointmentWithAnAudiologist}</h2>
                    <p>{t.MakeAnAppointmentWithAnAudiologistText}</p>
                </div>
            </div>
        </div>
        <div className="for-news">
            <h1>{t.News}</h1>
            <div className="news-cards">
                <div className="card">
                    <h2>{t.TheLegendaryOticonMore}</h2>
                    <p>{t.TheLegendaryOticonMoreText}</p>
                </div>
                <div className="card">
                    <h2>{t.PreferentialLoanFromBelarusbank}</h2>
                    <p>{t.PreferentialLoanFromBelarusbankText}</p>
                </div>
                <div className="card">
                    <h2>{t.OticonOpnSInGoodHearingCenters}</h2>
                    <p>{t.OticonOpnSInGoodHearingCentersText}</p>
                </div>
                <div className="card">
                    <h2>{t.HearingLossAndDementia}</h2>
                    <p>{t.HearingLossAndDementiaText}</p>
                </div>
                <div className="card">
                    <h2>{t.DiabetesAndHearingLoss}</h2>
                    <p>{t.DiabetesAndHearingLossText}</p>
                </div>
                <div className="card">
                    <h2>{t.WorkOfTheCenter}</h2>
                    <p>{t.WorkOfTheCenterText}</p>
                </div>
            </div>
        </div>
        <div className="industry-news">
            <h1>{t.IndustryNews}</h1>
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
                                <h2>{t.OticonCompanion}</h2>
                                <p>{t.OticonCompanionText}</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="/">
                        <div className="card">
                            <img src="/oticon-own-450-392.png.webp" alt="" />
                            <h2>{t.OticonOwn}</h2>
                            <p>{t.OticonOwnText}</p>
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="/">
                        <div className="card">
                            <img src="/oticon-more-450-392.png.webp" alt="" />
                            <h2>{t.OticonMore}</h2>
                            <p>{t.OticonMoreText}</p>
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="/">
                        <div className="card">
                            <img src="/frame-2-11.jpg.webp" alt="" />
                            <h2>{t.OticonZircon}</h2>
                            <p>{t.OticonZirconText}</p>
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="/">
                        <div className="card">
                            <img src="/cochlear-news-main-page.jpg.webp" alt="" />
                            <h2>{t.CochlearBelarus}</h2>
                            <p>{t.CochlearBelarusText}</p>
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
            <h1>{t.FrequentlyAskedQuestions}</h1>
            <FAQ/>
        </div>
    </div>
  )
}

export default Index