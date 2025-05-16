import React from 'react';
import '../styles/Home.sass';
import ScrollToTopButton from './ScrollToTopButton';

// Usando o componente Image do Next.js
import Image from 'next/image';

import githubImg from '../assets/github.png';
import instagramImg from '../assets/instagram.png';
import youtubeImg from '../assets/youtube.png';
import whatsappImg from '../assets/whatsapp.png';
import linkedinImg from '../assets/linkedin.png';
import profileImg1 from '../assets/portfolio_photo_1.png';
import profileImg2 from '../assets/portfolio_photo_2.png';

const Home: React.FC = () => {
  return (
    <main className="apresentacao">
      <section className="apresentacao__imagens">
        {/* Alterado para o componente Image */}
        <Image className="apresentacao__imagem" src={profileImg1} alt="Foto de Felipe" width={500} height={500} />
        <Image className="apresentacao__imagem" src={profileImg2} alt="Foto de Felipe" width={500} height={500} />
      </section>
      <section className="apresentacao__conteudo">
        <h1 className="apresentacao__conteudo__titulo">
          Eleve seu negócio digital a outro nível <strong className="titulo-destaque">com um Sistema Web de qualidade!</strong>
        </h1>
        <p className="apresentacao__conteudo__texto">
          Olá! Sou Felipe Moreira, desenvolvedor Fullstack especializado. Ajudo pequenos negócios a colocarem em prática boas ideias. Vamos conversar?
        </p>
        <div className="apresentacao__links">
          <h2 className="apresentacao__links__subtitulo">Acesse minhas redes</h2>
          <a className="apresentacao__links__navegacao" href="https://github.com/LipeLacross">
            <Image src={githubImg} alt="GitHub" width={30} height={30} />
            GitHub
          </a>
          <a className="apresentacao__links__navegacao" href="https://www.instagram.com/lipelacross/">
            <Image src={instagramImg} alt="Instagram" width={30} height={30} />
            Instagram
          </a>
          <a className="apresentacao__links__navegacao" href="https://www.youtube.com/@DevLipeLacross">
            <Image src={youtubeImg} alt="YouTube" width={30} height={30} />
            YouTube
          </a>
          <a className="apresentacao__links__navegacao" href="https://wa.me/74981256120">
            <Image src={whatsappImg} alt="WhatsApp" width={30} height={30} />
            WhatsApp
          </a>
          <a className="apresentacao__links__navegacao" href="https://www.linkedin.com/in/lipelacross-developer">
            <Image src={linkedinImg} alt="LinkedIn" width={30} height={30} />
            LinkedIn
          </a>
        </div>
      </section>
      <ScrollToTopButton />
    </main>
  );
};

export default Home;
