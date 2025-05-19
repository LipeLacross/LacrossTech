"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "../styles/BusinessPartner.sass";

const BusinessPartner: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.classList.add("enter");
    }
  }, []);

  return (
    <section className="partner-highlight-section" aria-labelledby="partner-title">
      <h2 id="partner-title" className="partner-highlight-title">
        Empresas Parceiras
      </h2>
      <div
        ref={cardRef}
        className="partner-card"
        aria-label="SmartSys - Automação Comercial de Alto Impacto"
      >
        <div className="partner-logo-glow">
          <Image
            src="/smartsys.jpg"
            alt="Logo SmartSys"
            width={140}
            height={140}
            className="partner-logo-img"
            priority
          />
        </div>
        <div className="partner-info">
          <span className="partner-name">SmartSys</span>
          <span className="partner-desc">
            <strong>SmartSYS – O Futuro da Automação Comercial no Agreste</strong>
            <br /><br />
            Sente que sua empresa poderia ser mais eficiente, mas falta tempo ou ferramentas para avançar? A SmartSYS nasceu para ajudar negócios como o seu, em Caruaru e toda a região agreste, a crescerem com tecnologia de verdade.
            <strong> Simplifique. Automatize. Cresça.</strong> Com o sistema iSoft, você controla estoque, vendas, finanças e notas fiscais em uma única plataforma intuitiva e rápida.
            <br /><br />
            <strong>Oferta exclusiva:</strong> Solicite agora uma demonstração gratuita e descubra condições especiais para sua empresa. <span style={{ color: "#FFDD48", fontWeight: 700 }}>Fale comigo antes de fechar com a SmartSys!</span> Entre em contato pelas minhas redes sociais ou WhatsApp e eu faço sua indicação para garantir benefícios exclusivos.
          </span>
          <a
            href="https://www.instagram.com/smartsys_sistemas/"
            target="_blank"
            rel="noopener noreferrer"
            className="partner-link"
            aria-label="Conheça a SmartSys no Instagram"
          >
            Conheça a SmartSys
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFDD48"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: 8, verticalAlign: "middle" }}
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessPartner;
