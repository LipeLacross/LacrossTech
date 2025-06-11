import React from 'react';
import '../styles/About.sass';
import ScrollToTopButton from './ScrollToTopButton';
import Image from 'next/image';

function About() {
    return (
        <main className="sobre">
            <section className="sobre__conteudo">
                <h1 className="sobre__titulo">Sobre mim</h1>
                <p className="sobre__texto">
                    Sou <span className="texto-destaque">Desenvolvedor Fullstack</span> com experiência em <span className="texto-destaque">JavaScript</span>, <span className="texto-destaque">TypeScript</span>, <span className="texto-destaque">React</span>, <span className="texto-destaque">Vue.js</span>, <span className="texto-destaque">Express.js</span>, <span className="texto-destaque">Python</span> e <span className="texto-destaque">Flask</span>. Trabalho com banco de dados <span className="texto-destaque">MySQL</span>, <span className="texto-destaque">PostgreSQL</span> e <span className="texto-destaque">MongoDB</span>. Graduando em Engenharia da Computação pela <span className="texto-destaque">UFRPE</span>, foco em entregar soluções web escaláveis, seguras e eficientes.
                </p>
            </section>
            <Image
                className="sobre__imagem"
                src="/Photo_Profile.png"
                alt="Foto de Felipe"
                width={300}
                height={300}
                quality={100}
                priority
            />
            <ScrollToTopButton />
        </main>
    );
}

export default About;
