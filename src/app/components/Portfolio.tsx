// src/app/components/Portfolio.tsx
"use client";

import React from "react";
import Image from "next/image";
import "../styles/Portfolio.sass";

type Projeto = {
  titulo: string;
  descricao: string;
  imagem: string;
  funcionalidades?: string[];
  link?: string;
  tipo: "design" | "site" | "sistema";
};

const projetos: Projeto[] = [
  // Design Gráfico
  {
    titulo: "Identidade Visual - Loja Exemplo",
    descricao: "Criação de logo, cartão de visita e material promocional para loja de moda.",
    imagem: "/portfolio_photo_1.png",
    tipo: "design",
    funcionalidades: [
      "Logo vetorizado",
      "Cartão de visita digital e impresso",
      "Banner promocional para redes sociais"
    ]
  },
  // Sites e Aplicações
  {
    titulo: "Site Institucional - Clínica Saúde",
    descricao: "Site responsivo para clínica médica, com agendamento online.",
    imagem: "/portfolio_photo_2.png",
    tipo: "site",
    funcionalidades: [
      "Layout personalizado",
      "Formulário de contato e agendamento",
      "SEO otimizado"
    ],
    link: "https://exemplo-clinica.com"
  },
  {
    titulo: "Aplicação Web - Gestão de Tarefas",
    descricao: "Aplicação para controle de tarefas e produtividade de equipes.",
    imagem: "/portfolio_photo_3.jpg",
    tipo: "site",
    funcionalidades: [
      "Login seguro",
      "Dashboard interativo",
      "Notificações em tempo real"
    ]
  },
  // Sistemas
  {
    titulo: "Sistema Comercial - SmartSys",
    descricao: "Sistema completo de automação comercial, estoque, vendas e relatórios.",
    imagem: "/smartsys.jpg",
    tipo: "sistema",
    funcionalidades: [
      "Gestão de estoque e vendas",
      "Emissão de notas fiscais",
      "Relatórios financeiros detalhados"
    ],
    link: "https://www.instagram.com/smartsys_sistemas/"
  }
];

const categorias = [
  { key: "design", label: "Design Gráfico" },
  { key: "site", label: "Sites e Aplicações" },
  { key: "sistema", label: "Sistemas" }
] as const;

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio__sobre" id="portfolio">
      <h2 className="portfolio__titulo">Portfólio LacrossTech</h2>
      <p className="portfolio__texto">
        Conheça alguns projetos de <b>design gráfico</b>, <b>sites institucionais</b> e <b>sistemas sob medida</b> desenvolvidos para empresas que buscam se destacar no digital.
      </p>

      {categorias.map((cat) => (
        <section className="portfolio__projetos" key={cat.key}>
          <h3 className="portfolio__destaque-titulo">{cat.label}</h3>
          <div className="portfolio__lista-projetos">
            {projetos
              .filter((p) => p.tipo === cat.key)
              .map((projeto, idx) => (
                <div className="projeto" key={idx}>
                  <Image
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    width={350}
                    height={150}
                    className="projeto__imagem"
                  />
                  <div className="projeto__titulo">{projeto.titulo}</div>
                  <div className="projeto__descricao">{projeto.descricao}</div>
                  {projeto.funcionalidades && (
                    <div className="projeto__funcionalidades">
                      <ul>
                        {projeto.funcionalidades.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {projeto.link && (
                    <div className="projeto__links">
                      <a
                        className="projeto__link"
                        href={projeto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Projeto
                      </a>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </section>
      ))}
    </section>
  );
};

export default Portfolio;
