"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../styles/BusinessPartner.sass";

const BusinessPartner: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (card) card.classList.add("enter");

    // Detecta mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 700);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
            {isMobile ? (
              <>
                <strong>Automação Comercial para o seu negócio crescer.</strong><br /><br />
                Ganhe tempo e controle tudo em um só sistema. <strong>Aproveite condições exclusivas para clientes indicados!</strong><br />
                <span style={{ color: "#FFDD48", fontWeight: 700 }}>Fale comigo e descubra os benefícios especiais.</span>
              </>
            ) : (
<>
  <strong>SmartSYS – Automação Comercial para sua empresa crescer</strong>
  <br /><br />
  Torne sua gestão mais eficiente: controle estoque, vendas, finanças e notas fiscais em uma plataforma fácil e rápida.
  <br /><br />


  <strong>Condições especiais:<span style={{ color: "#FFDD48", fontWeight: 700 }}> Fale comigo antes de fechar com a SmartSys e garanta benefícios exclusivos para seu negócio.</span></strong>
</>

            )}
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
