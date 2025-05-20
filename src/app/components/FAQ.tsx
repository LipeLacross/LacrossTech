"use client";

import React, { useState } from "react";
import "../styles/FAQ.sass";

const faqs = [
  {
    question: "Qual o prazo para desenvolvimento de um site?",
    answer:
      "O prazo médio varia de 7 a 21 dias úteis, dependendo da complexidade do projeto e da agilidade no fornecimento do conteúdo pelo cliente.",
  },
  {
    question: "Qual o prazo para desenvolvimento de uma aplicação web?",
    answer:
      "O prazo de execução para aplicações web é de 2 a 4 meses úteis, conforme a complexidade e os requisitos do projeto.",
  },
  {
    question: "O site será responsivo para dispositivos móveis?",
    answer:
      "Sim, todos os sites desenvolvidos são totalmente responsivos, garantindo uma excelente experiência em smartphones, tablets e computadores.",
  },
  {
    question: "Existe garantia após a entrega do site ou aplicação?",
    answer:
      "Sim. Oferecemos garantia de 30 dias após a entrega para correção de eventuais bugs ou problemas técnicos identificados. Durante esse período, todos os ajustes necessários para o pleno funcionamento do sistema são realizados sem custo adicional.",
  },
  {
    question: "Terei acesso ao código-fonte do site/aplicação se eu quiser?",
    answer:
      "Sim. Após a quitação integral dos valores acordados, o código-fonte e a documentação técnica do projeto serão entregues ao cliente, caso queiram.",
  },
  {
    question: "Como funciona o suporte e a manutenção?",
    answer:
      "Oferecemos planos de manutenção mensal, que incluem suporte técnico básico, atualizações e renovação de serviços conforme contratado.",
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (idx: number) => setOpen(open === idx ? null : idx);

  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <h2 id="faq-title" className="faq-title">Dúvidas Frequentes</h2>
      <div className="faq-list">
        {faqs.map((item, idx) => (
          <div className={`faq-item ${open === idx ? "open" : ""}`} key={idx}>
            <button
              className="faq-question"
              onClick={() => toggle(idx)}
              aria-expanded={open === idx}
            >
              {item.question}
              <span className={`faq-arrow ${open === idx ? "open" : ""}`}>▼</span>
            </button>
            <div
              className="faq-answer-wrapper"
              style={{ maxHeight: open === idx ? 200 : 0 }}
            >
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
