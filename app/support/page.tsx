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
      question: "How do I create an account?",
      answer: "Click the 'Sign Up' button in the top right corner of our homepage. Fill in your details and follow the instructions to complete your registration."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual subscriptions."
    },
    {
      question: "How can I reset my password?",
      answer: "Click on 'Forgot Password' on the login page. You'll receive an email with instructions to reset your password. Be sure to check your spam folder."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard encryption and security practices to ensure your data remains private and protected."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account settings. Navigate to 'Billing' and click 'Cancel Subscription'."
    }
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
          <iframe
            src="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform?embedded=true"
            width="100%"
            height="650"
            title="Support Request Form"
          >
            Loading form...
          </iframe>
        </div>
      </section>
    </div>
  );
}