import React from 'react';
import '../styles/Home.sass';
import ScrollToTopButton from './ScrollToTopButton';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <main className="apresentacao">
      <section className="apresentacao__imagens">
        <Image
          className="apresentacao__imagem"
          src="/portfolio_photo_1.png"
          alt="Equipe LacrossTech"
          width={500}
          height={500}
        />
        <Image
          className="apresentacao__imagem"
          src="/portfolio_photo_2.png"
          alt="Projetos LacrossTech"
          width={500}
          height={500}
        />
        <Image
          className="apresentacao__imagem"
          src="/portfolio_photo_3.jpg"
          alt="Projetos LacrossTech"
          width={500}
          height={500}
        />
      </section>
      <section className="apresentacao__conteudo">
        <h1 className="apresentacao__conteudo__titulo">
          <span className="titulo-brilhante">Soluções digitais para transformar ideias em resultados.</span><br />
          <strong className="titulo-destaque">LacrossTech</strong>
        </h1>

        <p className="apresentacao__conteudo__texto">
          <span style={{ color: "#FFDD48", fontWeight: 600 }}>
            Fundada por Felipe Moreira (<b>Dev Lipelacross</b>)
          </span>, a LacrossTech nasceu e está em ascensão, focada no desenvolvimento de sites, aplicações web e design gráfico sob medida para pequenas e médias empresas que querem se destacar no digital.<br /><br />
          <strong>Pronto para tirar sua ideia do papel?</strong> Fale com a LacrossTech e veja como podemos elevar sua presença online a um novo patamar.
        </p>
        <div className="apresentacao__links">
          <h2 className="apresentacao__links__subtitulo">Conecte-se comigo</h2>
          <a className="apresentacao__links__navegacao" href="https://github.com/LipeLacross" target="_blank" rel="noopener noreferrer">
            <Image src="/github.svg" alt="GitHub" width={30} height={30} unoptimized />
            GitHub
          </a>
          <a className="apresentacao__links__navegacao" href="https://www.instagram.com/lipelacross/" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.svg" alt="Instagram" width={30} height={30} unoptimized />
            Instagram
          </a>
          <a className="apresentacao__links__navegacao" href="https://www.youtube.com/@DevLipeLacross" target="_blank" rel="noopener noreferrer">
            <Image src="/youtube.svg" alt="YouTube" width={30} height={30} unoptimized />
            YouTube
          </a>
          <a className="apresentacao__links__navegacao" href="https://wa.me/74981256120" target="_blank" rel="noopener noreferrer">
            <Image src="/whatsapp.svg" alt="WhatsApp" width={30} height={30} unoptimized />
            WhatsApp
          </a>
          <a className="apresentacao__links__navegacao" href="https://www.linkedin.com/in/lipelacross-developer" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} unoptimized />
            LinkedIn
          </a>
        </div>
      </section>
      <ScrollToTopButton />
    </main>
  );
};

export default Home;
