import React from 'react'

function Index() {
  return (
    <div home-container>
        <div className="slider">
            
        </div>
        <div className="for-content">
            <h1>Наши услуги</h1>
            <div className="grid-cards">
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
    </div>
  )
}

export default Index