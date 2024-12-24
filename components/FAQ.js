import { useState } from 'react';

const faqData = [
  { question: 'Сколько стоит хороший слуховой аппарат?', answer: 'Цены варьируются в зависимости от модели и характеристик устройства.' },
  { question: 'Слуховой аппарат может ухудшить слух?', answer: 'Нет, при правильном использовании слуховой аппарат не ухудшает слух.' },
  { question: 'Как купить слуховой аппарат без врача?', answer: 'Рекомендуется проконсультироваться с врачом перед покупкой.' },
  { question: 'У меня шум в ушах. Поможет ли слуховой аппарат?', answer: 'В некоторых случаях слуховой аппарат может снизить шум в ушах.' },
  { question: 'Что входит в проверку слуха?', answer: 'Проверка слуха включает анамнез, отоскопию, аудиометрию, отоакустическую эмиссию.' },
  { question: 'Как проверить слух у ребенка?', answer: 'Для детей используются специализированные методы диагностики.' },
  { question: 'Можно ли восстановить слух при тугоухости?', answer: 'В некоторых случаях слух можно улучшить при помощи слуховых аппаратов.' },
  { question: 'Как вылечить тиннитус?', answer: 'Лечение зависит от причины появления тиннитуса и требует консультации специалиста.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Savolni ochish yoki yopish funksiyasi
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Ochiq bo‘lsa, yopadi. Yopiq bo‘lsa, ochadi.
  };

  return (
    <div>
      <div style={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div key={index} style={styles.faqItem}>
            {/* Savolni ko‘rsatish */}
            <button
              onClick={() => toggleAnswer(index)}
              style={{
                ...styles.faqQuestion,
                backgroundColor: openIndex === index ? '#083366' : '#0A4478',
              }}
            >
              {item.question}
            </button>
            {/* Javobni faqat ochilgan holda ko‘rsatish */}
            {openIndex === index && (
              <div style={styles.faqAnswer}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline CSS
const styles = {
  faqContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Ikkita ustun
    gap: '20px', // Bo‘shliq
    marginTop: '20px',
  },
  faqItem: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  faqQuestion: {
    width: '100%',
    textAlign: 'left',
    padding: '10px',
    fontSize: '14px',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s ease',
  },
  faqAnswer: {
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderTop: '1px solid #ccc',
  },
};

// Media Query
const mediaStyles = `
  @media (max-width: 768px) {
    .faqContainer {
      grid-template-columns: 1fr; /* Mobilda bitta ustun */
    }
  }
`;

// Komponent eksport qilinadi
export default () => (
  <>
    <style>{mediaStyles}</style>
    <FAQ />
  </>
);
