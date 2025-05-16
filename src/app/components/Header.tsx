import React from 'react';
import '../styles/Header.sass';
import Link from 'next/link'; // Importando o Link do Next.js

const Header: React.FC = () => {
  return (
    <header className="cabecalho">
      <nav className="cabecalho__menu">
        <Link href="/" passHref>
          <a className="cabecalho__menu__link">Home</a>
        </Link>
        <Link href="/about" passHref>
          <a className="cabecalho__menu__link">Sobre mim</a>
        </Link>
        <Link href="/portfolio" passHref>
          <a className="cabecalho__menu__link">Portfólio</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
