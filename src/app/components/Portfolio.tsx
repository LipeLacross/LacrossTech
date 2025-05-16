import React from 'react';
import '../styles/Portfolio.sass';
import ScrollToTopButton from './ScrollToTopButton';
import Image from 'next/image'; // Importando o componente Image do Next.js

import imgLipeLacross from '../assets/redes-sociais-lipelacross.jpeg';
import imgCertificados1 from '../assets/Sistema de Geração de Certificados 1.png';

const Portfolio: React.FC = () => {
  const projetos = [
    {
      titulo: "LipeLacross - Redes Sociais",
      imagem: imgLipeLacross,
      descricao: "Uma página feita com Vue para disponibilizar links de redes sociais.",
      funcionalidades: [
        "Visualização de Perfil: Exibe a foto de perfil, nome e profissão.",
        "Links de Redes Sociais: Fornece links para diversas redes sociais, como Instagram, LinkedIn, YouTube e GitHub.",
        "Animações: Inclui animações suaves para elementos ao passar o mouse e durante a renderização inicial."
      ],
      link: "https://github.com/LipeLacross/Links-Social-Media",
      site: "https://lipelacrosslinks.netlify.app"
    },
    {
      titulo: "Sistema de Geração de Certificados",
      imagem: imgCertificados1,
      descricao: "Um projeto desenvolvido com Django e SQLite para controle de eventos e geração de certificados.",
      funcionalidades: [
        "Controle de Eventos: Gerenciamento de eventos com informações detalhadas.",
        "Geração de Certificados: Criação e armazenamento de certificados personalizados em formato PNG.",
        "Busca de Certificados: Funcionalidade para procurar certificados por e-mail.",
        "Visualização de Certificados: Exibição de certificados gerados para os participantes e administradores."
      ],
      link: "https://github.com/LipeLacross/PyStackWeek-6.0",
      site: "https://certificados.com (Hospedagem não disponível)"
    }
  ];

  return (
    <main className="portfolio">
      <section className="portfolio__conteudo">
        <div className="portfolio__sobre">
          <h1 className="portfolio__titulo">Meus Projetos</h1>
          <p className="portfolio__texto">Aqui estão alguns dos projetos em que trabalhei.</p>
          <h2 className="portfolio__destaque-titulo">Projetos em Destaque</h2>
        </div>
        <div className="portfolio__projetos">
          <div className="portfolio__lista-projetos">
            {projetos.map((projeto) => (
              <div className="projeto" key={projeto.titulo}>
                <h3 className="projeto__titulo">{projeto.titulo}</h3>
                <Image
                  className="projeto__imagem"
                  src={projeto.imagem}
                  alt={`Imagem do projeto ${projeto.titulo}`}
                  width={500}
                  height={300}
                  objectFit="cover"
                />
                <p className="projeto__descricao">{projeto.descricao}</p>
                <ul className="projeto__funcionalidades">
                  {projeto.funcionalidades.map((funcionalidade, i) => (
                    <li key={i}>{funcionalidade}</li>
                  ))}
                </ul>
                <div className="projeto__links">
                  <a className="projeto__link" href={projeto.link} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Ver no GitHub
                  </a>
                  {projeto.site && (
                    <a className="projeto__link" href={projeto.site} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Visitar Site
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </main>
  );
};

export default Portfolio;
