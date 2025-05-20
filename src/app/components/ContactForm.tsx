"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.sass";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_60si7y9",       // substitua pelo seu Service ID do EmailJS
        "template_el6zake",      // substitua pelo seu Template ID do EmailJS
        form.current,
        "Ai_tl6w2eT1iWXjcO"        // substitua pelo seu Public Key do EmailJS
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          console.error("Erro ao enviar email:", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section className="contact-form-section" aria-labelledby="contact-form-title">
      <h2 id="contact-form-title" className="contact-form-title">Fale Conosco</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
        <label htmlFor="user_name">Nome</label>
        <input id="user_name" name="user_name" type="text" placeholder="Seu nome" required minLength={3} />

        <label htmlFor="user_email">Email</label>
        <input id="user_email" name="user_email" type="email" placeholder="seu@email.com" required />

        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" placeholder="Escreva sua mensagem aqui" required rows={5} />

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar"}
        </button>

        {status === "success" && <p className="success-message">Mensagem enviada com sucesso! Obrigado.</p>}
        {status === "error" && <p className="error-message">Erro ao enviar. Tente novamente mais tarde.</p>}
      </form>
    </section>
  );
};

export default ContactForm;
