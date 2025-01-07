import React from 'react'
import { useState, useEffect } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {regionsData} from "../../data/centersData"
import { useLanguage } from '@/components/languageContext';

function centers() {
  const {t} = useLanguage()

  const [selectedRegion, setSelectedRegion] = useState(
    regionsData.find((regionsData) => regionsData.name === "Toshkent") || null
  );

  useEffect(() => {
    const defaultRegion = regionsData.find((region) => region.name === "Tashkent");
    setSelectedRegion(defaultRegion || null);
  }, []);

  const handleRegionChange = (e) => {
    const regionName = e.target.value;
    const region = regionsData.find((r) => r.name === regionName);
    setSelectedRegion(region || null);
  };

  // Karusel sozlamalari
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div className='centers-container'>
      <div className="nih-bread">
        <span>
          <a href="/">{t.Home}</a> » {t.ourAddresses}
        </span>
      </div>
      <h1>{t.ourAddresses}</h1>
      <div className="content">
        <label htmlFor="region-select">Viloyatni tanlang: </label>
          <select
            id="region-select"
            onChange={handleRegionChange}
            value={selectedRegion ? selectedRegion.name : ""}
          >
            {regionsData.map((region, index) => (
              <option key={index} value={region.name}>
                {region.name}
              </option>
            ))}
          </select>
          {selectedRegion && (
          <div className='filial-container'>
            <h2 className='region-name'>{selectedRegion.name}</h2>
            <p>{selectedRegion.info}</p>

            <div>
              {selectedRegion.branches.length > 0 ? (
                selectedRegion.branches.map((branch, index) => (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    <h3>{branch.name}</h3>

                    {/* Karusel */}
                    <div className="carusel-location">
                        {branch.images && branch.images.length > 0 && (
                        <Slider className='carusel' {...sliderSettings}>
                          {branch.images.map((image, imgIndex) => (
                            <div key={imgIndex}>
                              <img
                                src={image}
                                alt={`Filial image ${imgIndex + 1}`}
                                style={{
                                  width: "100%",
                                  height: "300px",
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                }}
                              />
                            </div>
                          ))}
                        </Slider>
                      )}

                      {/* Geolokatsiya */}
                      <div className='location'>
                        <p><b>Tel:</b> {branch.phoneNumber}</p>
                        <p>{branch.address}</p>
                        <iframe
                          src={`https://www.google.com/maps?q=${branch.coordinates.lat},${branch.coordinates.lng}&hl=es;z=14&output=embed`}
                          style={{ width: "100%", height: "200px", border: "none", marginTop: "10px" }}
                          title={`Map of ${branch.name}`}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Filiallar mavjud emas</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default centers