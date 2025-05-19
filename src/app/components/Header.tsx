"use client";

import React from 'react';
import Image from 'next/image';
import '../styles/Header.sass';
import { Link as ScrollLink } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header className="cabecalho">
      <div className="cabecalho__glow" />
      <div className="cabecalho__branding">
        <ScrollLink to="apresentacao" smooth={true} duration={500} className="cabecalho__logo-link">
          <Image
            src="/logo.svg"
            alt="LacrossTech Logo"
            width={42}
            height={42}
            className="cabecalho__logo"
            priority
          />
          <span className="cabecalho__brand-name">LacrossTech</span>
        </ScrollLink>
      </div>
      <nav className="cabecalho__menu">
        <ScrollLink to="apresentacao" smooth={true} duration={500} className="cabecalho__menu__link">Home</ScrollLink>
        <ScrollLink to="service-table-container" smooth={true} duration={500} className="cabecalho__menu__link">Serviços</ScrollLink>
        <ScrollLink to="sobre" smooth={true} duration={500} className="cabecalho__menu__link">Sobre</ScrollLink>
        <ScrollLink to="partner-highlight-section" smooth={true} duration={500} className="cabecalho__menu__link">Parceiros</ScrollLink>
      </nav>
    </header>
  );
};

export default Header;
