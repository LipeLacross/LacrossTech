"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/Header.sass";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

// Links principais (maiores, à esquerda)
const MAIN_LINKS = [
  { to: "apresentacao", label: "Home" },
  { to: "diferenciais", label: "Diferenciais" },
  { to: "service-table-container", label: "Serviços" },
  { to: "pagamentos", label: "Pagamentos" },
];

// Links extras (drawer)
const MENU_LINKS = [
  { to: "sobre", label: "Sobre" },
  { to: "faq", label: "FAQ" },
  { to: "contact", label: "Contato" },
  { to: "termos", label: "Termos" },
  { to: "partner-highlight-section", label: "Parceiros" },
];

const MOBILE_BREAKPOINT = 900;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="cabecalho">
      <div className="cabecalho__glow" />
      <div className="cabecalho__branding">
        <ScrollLink
          to="apresentacao"
          smooth={true}
          duration={500}
          className="cabecalho__logo-link"
          onClick={handleLinkClick}
        >
          <Image
            src="/logo.png"
            alt="LacrossTech Logo"
            width={68}
            height={68}
            className="cabecalho__logo"
            priority
          />
          <span className="cabecalho__brand-name"></span>
        </ScrollLink>
      </div>
      {/* Menu principal: maior, mais à esquerda */}
      {!isMobile && (
        <nav className="cabecalho__menu">
          {MAIN_LINKS.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="cabecalho__menu__link cabecalho__menu__link--main"
              onClick={handleLinkClick}
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>
      )}
      {/* Hamburger sempre à direita */}
      <button
        className="cabecalho__menu-toggle"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
      </button>
      {/* Drawer: extras no desktop, tudo no mobile */}
      {menuOpen && (
        <nav className="cabecalho__menu-drawer open">
              {/* Close 'X' inside the drawer */}
          <button
            className="cabecalho__menu-drawer__close"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
            tabIndex={0}
          >
            <FiX size={32} />
          </button>
          <div className="cabecalho__menu-drawer__links">
            {(isMobile ? [...MAIN_LINKS, ...MENU_LINKS] : MENU_LINKS).map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="cabecalho__menu__link"
                onClick={handleLinkClick}
              >
                {link.label}
              </ScrollLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
