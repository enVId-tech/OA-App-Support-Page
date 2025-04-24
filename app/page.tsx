'use client';

import React, {JSX, useState} from 'react';
import styles from './page.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}

export default function SupportPage(): JSX.Element {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number): void => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "Can you create accounts?",
      answer: "Not at the moment. Currently, the feature set is limited to local storage, and we do not support account creation. However, this feature is on our roadmap for future releases."
    },
    {
      question: "What features are available?",
      answer: "The most notable features include a simple bell schedule, a calendar of all district events, and a link page where there are easy and quick to access links. This will definitely be expanded in the future, but this is what is available for now."
    },
    {
      question: "What is the purpose of this app?",
      answer: "The primary and original purpose of this app was to provide a simple and easy way to access bell schedules online without having to go to an official school or district website. This objective has expanded to accommodate for multiple different feature sets."
    },
    {
      question: "How do I get in contact with you?",
      answer: "You can reach out to me through the contact form on the app or by emailing me at erick.tran@etran.dev",
    },
  ];

  return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Support Center</h1>
          <p>Find answers to common questions or reach out for help</p>
        </header>

        <section className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqItems.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.faqItem} ${activeQuestion === index ? styles.active : ''}`}
                >
                  <button
                      className={styles.questionBtn}
                      onClick={() => toggleQuestion(index)}
                      aria-expanded={activeQuestion === index}
                  >
                    {item.question}
                    <span className={styles.icon}>{activeQuestion === index ? '−' : '+'}</span>
                  </button>
                  <div className={styles.answerWrapper}>
                    <div className={styles.answer}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </section>

        <section className={styles.formSection}>
          <h2>Still Need Help?</h2>
          <p>Submit a request and our support team will get back to you shortly.</p>
          <div className={styles.formContainer}>
            <iframe src="https://forms.gle/8dkHZvCLyNFYdogW8" name="myiFrame"
                    height="800px" width="1000px"
                    allowFullScreen>
            Loading form...
          </iframe>
      </div>
</section>
</div>
)
  ;
}