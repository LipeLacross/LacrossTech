"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../styles/Testimonials.sass";

const testimonials = [
  {
    name: "Ana Souza",
    role: "Empresária",
    avatar: "/portfolio_photo_1.png",
    text: "O site ficou incrível, superou minhas expectativas! Atendimento rápido e suporte excelente.",
  },
  {
    name: "Carlos Lima",
    role: "Diretor de Marketing",
    avatar: "/portfolio_photo_2.png",
    text: "Design moderno, navegação intuitiva e entrega no prazo. Recomendo muito!",
  },
  {
    name: "Juliana Torres",
    role: "Gestora de Projetos",
    avatar: "/portfolio_photo_3.jpg",
    text: "A equipe entendeu exatamente o que eu precisava. Resultado profissional e diferenciado.",
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className="testimonials-title">Depoimentos</h2>
      <div className="testimonials-carousel">
        <button className="carousel-btn prev" onClick={prev} aria-label="Anterior">&lt;</button>
        <div className="testimonial-card animated" key={index}>
          <Image src={testimonials[index].avatar} alt={testimonials[index].name} width={70} height={70} className="testimonial-avatar" />
          <p className="testimonial-text">&ldquo;{testimonials[index].text}&rdquo;</p>
          <span className="testimonial-name">{testimonials[index].name}</span>
          <span className="testimonial-role">{testimonials[index].role}</span>
        </div>
        <button className="carousel-btn next" onClick={next} aria-label="Próximo">&gt;</button>
      </div>
    </section>
  );
};

export default Testimonials;
