"use client";

import React, { useEffect, useState } from "react";
import { FaCode, FaDatabase, FaPaintBrush, FaTools, FaSyncAlt, FaServer  } from "react-icons/fa";
import "../styles/Services.sass";
const services = [
  {
    icon: <FaCode color="#FFDD48" size={28} />,
    name: 'Desenvolvimento de Site (Institucional)',
    initial: 'R$ 1.000,00 – R$ 3.000,00',
    annual: '-',
    monthly: '-',
    details: 'Criação de páginas web para apresentar sua empresa, produtos ou serviços, com foco em design e conteúdo. Inclui revisão.',
  },
  {
    icon: <FaDatabase color="#FFDD48" size={28} />,
    name: 'Desenvolvimento de Aplicação Web',
    initial: 'R$ 3.000,00 – R$ 8.000,00',
    annual: '-',
    monthly: '-',
    details: 'Desenvolvimento de softwares web com funcionalidades dinâmicas, como cadastro, autenticação e integração com outros serviços. Inclui revisão.',
  },
  /*{
    icon: <FaServer color="#FFDD48" size={28} />,
    name: 'Sistemas Integrados',
    initial: 'Sob consulta',
    annual: '-',
    monthly: '-',
    details: 'Soluções robustas e personalizadas para automação de processos, gestão de dados e integração entre diferentes áreas da sua empresa.',
  },*/
  {
    icon: <FaPaintBrush color="#FFDD48" size={28} />,
    name: 'Artes de Design Gráfico',
    initial: 'R$ 200,00 por item',
    annual: '-',
    monthly: '-',
    details: 'Criação de logo, cartão de visita, catálogo, banner, fardamento, slides etc. Inclui revisão.',
  },
  {
    icon: <FaPaintBrush color="#FFDD48" size={28} />,
    name: 'Postagem para Redes Sociais',
    initial: 'R$ 50,00 por postagem',
    annual: '-',
    monthly: '-',
    details: 'Design e publicação de postagens personalizadas para Instagram, Facebook, entre outras plataformas.',
  },
  {
    icon: <FaTools color="#FFDD48" size={28} />,
    name: 'Manutenção Adicional',
    initial: 'A partir de R$ 50,00',
    annual: '-',
    monthly: '-',
    details: 'Alterações no design, inclusão de novas seções ou funcionalidades. Inclui revisão.',
  },
  {
    icon: <FaSyncAlt color="#FFDD48" size={28} />,
    name: 'Manutenção Mensal para Sites',
    initial: '-',
    annual: '-',
    monthly: 'R$ 50,00 – R$ 100,00',
    details: 'Renovação de domínio, hospedagem, e-mail e SSL. Inclui suporte técnico básico.',
  },
  {
    icon: <FaSyncAlt color="#FFDD48" size={28} />,
    name: 'Manutenção Mensal para Aplicações Web',
    initial: '-',
    annual: '-',
    monthly: 'R$ 50,00 – R$ 400,00',
    details: 'Suporte contínuo e renovação de serviços, conforme a complexidade da aplicação.',
  },
];


const MOBILE_BREAKPOINT = 700;

const Services: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="service-table-container">
      <h2 className="service-table-title">Tabela de Serviços</h2>
      {isMobile ? (
        <div className="service-cards-list">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-card-icon">{service.icon}</div>
              <div className="service-card-content">
                <div className="service-card-title">{service.name}</div>
                <div className="service-card-detail"><b>Custo Único:</b> {service.initial}</div>
                <div className="service-card-detail"><b>Custo Anual:</b> {service.annual}</div>
                <div className="service-card-detail"><b>Custo Mensal:</b> {service.monthly}</div>
                <div className="service-card-detail"><b>Detalhes:</b> {service.details}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table className="service-table animated-table">
          <thead>
            <tr>
              <th></th>
              <th>Serviço</th>
              <th>Custo Único</th>
              <th>Custo Anual</th>
              <th>Custo Mensal</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, idx) => (
              <tr key={idx} className="service-row">
                <td>{service.icon}</td>
                <td>{service.name}</td>
                <td>{service.initial}</td>
                <td>{service.annual}</td>
                <td>{service.monthly}</td>
                <td>{service.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Services;
