"use client";

import React from "react";
import { FaStar, FaBolt, FaMobileAlt, FaSmile } from "react-icons/fa";
import "../styles/Diferenciais.sass";

const diferenciais = [
  {
    icon: <FaStar color="#FFDD48" size={28} />,
    title: "Atendimento Personalizado",
    desc: "Cada projeto é único. Você fala direto com quem desenvolve e recebe soluções sob medida.",
  },
  {
    icon: <FaBolt color="#FFDD48" size={28} />,
    title: "Entrega Ágil e Compromisso",
    desc: "Prazo cumprido e comunicação transparente do início ao fim.",
  },
  {
    icon: <FaMobileAlt color="#FFDD48" size={28} />,
    title: "Design Responsivo",
    desc: "Seu site perfeito em qualquer dispositivo, com navegação fluida e moderna.",
  },
  {
    icon: <FaSmile color="#FFDD48" size={28} />,
    title: "Suporte Próximo",
    desc: "Tire dúvidas e peça ajustes com facilidade, mesmo após a entrega.",
  },
];

const Diferenciais: React.FC = () => (
  <section className="diferenciais-section" aria-labelledby="diferenciais-title">
    <h2 id="diferenciais-title" className="diferenciais-title">Por que escolher a LacrossTech?</h2>
    <div className="diferenciais-list">
      {diferenciais.map((dif, idx) => (
        <div className="diferencial-card" key={idx}>
          <div className="diferencial-icon">{dif.icon}</div>
          <div className="diferencial-content">
            <span className="diferencial-title">{dif.title}</span>
            <span className="diferencial-desc">{dif.desc}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Diferenciais;
