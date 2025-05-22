"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaGlobe,
  FaWhatsapp,
} from "react-icons/fa";

const ICONS = [
  { icon: <FaGithub size={36} color="#FFDD48" />, key: "github" },
  { icon: <FaLinkedin size={36} color="#FFDD48" />, key: "linkedin" },
  { icon: <FaInstagram size={36} color="#FFDD48" />, key: "instagram" },
  { icon: <FaGlobe size={36} color="#FFDD48" />, key: "globe" },
  { icon: <FaWhatsapp size={36} color="#FFDD48" />, key: "whatsapp" },
];

const AnimatedProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div
    className="progress-bar-outer"
    role="progressbar"
    aria-valuenow={progress}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div className="progress-bar-inner" style={{ width: `${progress}%` }} />
    <style jsx>{`
      .progress-bar-outer {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 5px;
        background: transparent;
        z-index: 10001;
      }
      .progress-bar-inner {
        height: 100%;
        background: linear-gradient(90deg, #ffdd48 0%, #fffbe8 80%);
        box-shadow: 0 0 12px 2px #ffdd48;
        border-radius: 8px;
        transition: width 0.33s cubic-bezier(0.4, 0, 0.2, 1);
      }
    `}</style>
  </div>
);

const AnimatedIconsCircle: React.FC = () => (
  <div className="icons-circle">
    {ICONS.map((item, idx) => (
      <span
        className="icon-item"
        key={item.key}
        style={
          {
            "--i": idx,
            "--total": ICONS.length,
          } as React.CSSProperties
        }
      >
        {item.icon}
      </span>
    ))}
    <style jsx>{`
      .icons-circle {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 180px;
        height: 180px;
        pointer-events: none;
        z-index: 2;
      }
      .icon-item {
        position: absolute;
        left: 35%;
        top: 40%;
        transform: rotate(calc(360deg / var(--total) * var(--i)))
          translate(80px)
          rotate(calc(-360deg / var(--total) * var(--i)));
        animation: iconOrbit 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        animation-delay: calc(var(--i) * 0.14s);
        filter: drop-shadow(0 0 10px #ffdd48);
      }
      @keyframes iconOrbit {
        0% {
          filter: brightness(0.95) drop-shadow(0 0 8px #000000);
        }
        50% {
          filter: brightness(1.25) drop-shadow(0 0 18px #fffbe8);
        }
        100% {
          filter: brightness(0.95) drop-shadow(0 0 8px #FFDD48);
        }
      }
      @media (max-width: 600px) {
        .icons-circle {
          width: 110px;
          height: 110px;
        }
        .icon-item {
          transform: rotate(calc(360deg / var(--total) * var(--i)))
            translate(48px)
            rotate(calc(-360deg / var(--total) * var(--i)));
        }
      }
    `}</style>
  </div>
);

const WelcomeMessage: React.FC = () => (
  <div className="welcome-message">
    <span className="text">
      <span className="bemvindo-preto">Bem-vindo</span>
      <span className="bemvindo-dourado"> à <b>LacrossTech</b>!</span>
    </span>
    <style jsx>{`
      .welcome-message {
        margin-top: 2.7rem;
        font-family: 'Krona One', 'Montserrat', sans-serif;
        font-size: 1.35rem;
        letter-spacing: 1.2px;
        text-align: center;
        animation: welcomeFadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0.98;
        display: flex;
        justify-content: center;
      }
      .welcome-message .text {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
      }
      .bemvindo-preto {
        color: #000;
        font-weight: 700;
        text-shadow: 0 2px 16px #ffdd4855, 0 1px 0 #fffbe8;
        letter-spacing: 1.5px;
      }
      .bemvindo-dourado {
        background: #000000;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-shadow: 0 2px 18px #ffdd4888;
        animation: gradientMove 2.8s linear infinite;
      }
      @keyframes welcomeFadeIn {
        from {
          opacity: 0;
          transform: translateY(24px);
        }
        to {
          opacity: 0.98;
          transform: translateY(0);
        }
      }
      @keyframes gradientMove {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: 0 0;
        }
      }
      @media (max-width: 600px) {
        .welcome-message {
          font-size: 1rem;
        }
      }
    `}</style>
  </div>
);

const SpectacularLoading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let value = 0;
    let raf: number;
    const animate = () => {
      if (value < 98) {
        value += (100 - value) * 0.07 + Math.random() * 1.7;
        setProgress(Math.min(value, 98));
        raf = requestAnimationFrame(animate);
      }
    };
    animate();
    const finish = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setShow(false), 650);
    }, 1800);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(finish);
    };
  }, []);

  if (!show) return null;

  return (
    <>
      <AnimatedProgressBar progress={progress} />
      <div className="spectacular-loading">
        <div className="center-content">
          <div className="logo-flare">
            <Image
              src="/logo.svg"
              alt="Logo LacrossTech"
              width={100}
              height={100}
              priority
              className="logo-img"
            />
            <div className="flare" />
            <AnimatedIconsCircle />
          </div>
          <WelcomeMessage />
        </div>
      </div>
      <style jsx>{`
        .spectacular-loading {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: linear-gradient(
            120deg,
            #fffbe8 0%,
            #ffdd48 60%,
            #fff 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeOutBg 0.7s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards;
          overflow: hidden;
        }
        .center-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .logo-flare {
          position: relative;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        .logo-img {
          z-index: 3;
          border-radius: 50%;
          filter: drop-shadow(0 0 28px #ffdd48)
            drop-shadow(0 0 18px #fffbe8);
          animation: logoPop 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .flare {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 200px;
          height: 200px;
          background: radial-gradient(
            circle,
            #fff 0%,
            #ffdd48 12%,
            transparent 60%
          );
          transform: translate(-50%, -50%) scale(0.7);
          opacity: 0.16;
          pointer-events: none;
          animation: flarePulse 1.2s ease-in;
          z-index: 2;
        }
        @keyframes fadeOutBg {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
        @keyframes logoPop {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }
          60% {
            opacity: 1;
            transform: scale(1.08);
          }
          100% {
            opacity: 0.96;
            transform: scale(1);
          }
        }
        @keyframes flarePulse {
          0% {
            opacity: 0.1;
            transform: scale(0.5);
          }
          60% {
            opacity: 0.23;
            transform: scale(1);
          }
          100% {
            opacity: 0.05;
            transform: scale(1.3);
          }
        }
        @media (max-width: 600px) {
          .logo-flare {
            width: 70px;
            height: 70px;
          }
          .flare {
            width: 110px;
            height: 110px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .spectacular-loading,
          .logo-img,
          .flare,
          .icon-item {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default SpectacularLoading;
