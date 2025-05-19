import React from 'react';
import '../styles/Footer.sass';

const Footer: React.FC = () => {
  return (
    <footer className="rodape">
      <p>
        &copy; 2025 <span className="footer-nome">Felipe Moreira Rios</span>. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
