"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const FlashEffect: React.FC = () => {
  const [flash, setFlash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlash(false);
    }, 1100); // duração total do efeito
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {flash && (
        <div className="flash-effect">
          {/* Opcional: coloque seu logo aqui para um efeito ainda mais marcante */}
          <div className="flash-logo">
            <Image
              src="/logo.svg" // Substitua pelo caminho do seu logo
              alt="Logo"
              width={90}
              height={90}
              priority
            />
          </div>
          <div className="flash-flare" />
        </div>
      )}
      <style jsx>{`
        .flash-effect {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(120deg, #fffbe8 0%, #ffe066 60%, #fff 100%);
          animation: flashBg 1.1s cubic-bezier(0.4,0,0.2,1) forwards;
          overflow: hidden;
        }
        .flash-logo {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.95;
          filter: drop-shadow(0 0 28px #ffe066) drop-shadow(0 0 18px #fffbe8);
          animation: logoPop 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .flash-flare {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 200vw;
          height: 200vw;
          background: radial-gradient(circle, #fff 0%, #ffe066 12%, transparent 60%);
          transform: translate(-50%, -50%) scale(0.7);
          opacity: 0.18;
          pointer-events: none;
          animation: flarePulse 1s ease-in;
        }
        @keyframes flashBg {
          0% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes logoPop {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.7);}
          60% { opacity: 1; transform: translate(-50%, -50%) scale(1.08);}
          100% { opacity: 0.96; transform: translate(-50%, -50%) scale(1);}
        }
        @keyframes flarePulse {
          0% { opacity: 0.10; transform: translate(-50%, -50%) scale(0.5);}
          60% { opacity: 0.23; transform: translate(-50%, -50%) scale(1);}
          100% { opacity: 0.05; transform: translate(-50%, -50%) scale(1.3);}
        }
      `}</style>
    </>
  );
};

export default FlashEffect;


