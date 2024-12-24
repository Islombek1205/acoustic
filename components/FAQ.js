import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Сколько стоит хороший слуховой аппарат?',
      answer:
        'От 1250.00 BYN. Цена зависит от степени потери слуха, типа и размера корпуса аппарата, уровня технологий и дополнительных функций, а также образа жизни и индивидуальных предпочтений пользователя.',
    },
    { question: 'Слуховой аппарат может ухудшить слух?', answer: 'Нет, правильно подобранный слуховой аппарат не ухудшит слух.' },
    { question: 'Как купить слуховой аппарат без врача?', answer: 'Рекомендуется проконсультироваться с врачом перед покупкой.' },
    { question: 'У меня шум в ушах. Поможет ли слуховой аппарат?', answer: 'Да, слуховые аппараты могут помочь при шуме в ушах.' },
    { question: 'Что входит в проверку слуха?', answer: 'Проверка слуха включает аудиометрию и консультацию специалиста.' },
    { question: 'Как проверить слух у ребенка?', answer: 'Обратитесь к детскому отоларингологу для профессиональной диагностики.' },
    { question: 'Можно ли восстановить слух при тугоухости?', answer: 'В некоторых случаях возможно улучшение слуха с помощью слуховых аппаратов.' },
    { question: 'Как вылечить тиннитус?', answer: 'Тиннитус можно лечить с помощью терапии и слуховых аппаратов.' },
  ];

  return (
    <div style={styles.faqContainer}>
      <h2 style={styles.title}>Часто задаваемые вопросы</h2>
      <div style={styles.faqGrid}>
        {faqData.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <button style={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{openIndex === index ? '▲' : '▼'}</span>
            </button>
            {openIndex === index && <p style={styles.faqAnswer}>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  faqContainer: {
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
  },
  faqItem: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  faqQuestion: {
    backgroundColor: '#003366',
    color: '#fff',
    width: '100%',
    textAlign: 'left',
    padding: '10px',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqAnswer: {
    padding: '10px',
    backgroundColor: '#fff',
    fontSize: '14px',
    borderTop: '1px solid #ddd',
  },

  // Responsive Styles (media query qo'shish)
  '@media (maxWidth: 768px)': {
    faqGrid: {
      gridTemplateColumns: '1fr',
    },
  },
};

export default FAQ;