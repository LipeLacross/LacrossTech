"use client";

import React from "react";
import { FaRegHandshake, FaFileContract, FaPix, FaCreditCard } from "react-icons/fa6";
import "../styles/PaymentsContracts.sass";

const PaymentsContracts: React.FC = () => {
  return (
    <section className="payments-contracts-section" aria-labelledby="payments-contracts-title">
      <h2 id="payments-contracts-title" className="payments-contracts-title">
        Pagamentos e Contratos
      </h2>
      <div className="payments-contracts-content">
        <div className="payments-info-block">
          <span className="icon animated-icon"><FaRegHandshake /></span>
          <div className="info-text">
            <h3>Pague Só Após o Serviço</h3>
            <p>
              Você só realiza o pagamento após a entrega e aprovação do serviço. Nosso compromisso é garantir sua satisfação total antes de qualquer cobrança.
            </p>
          </div>
        </div>
        <div className="payments-info-block">
          <span className="icon animated-icon"><FaFileContract /></span>
          <div className="info-text">
            <h3>Contrato Formalizado</h3>
            <p>
              Formalizamos o acordo por contrato, oferecendo máxima segurança e transparência para ambas as partes durante todo o processo.
            </p>
          </div>
        </div>
        <div className="payments-info-block">
          <span className="icon animated-icon"><FaPix /></span>
          <div className="info-text">
            <h3>Pagamento via PIX</h3>
            <p>
              Pagamento rápido, seguro e prático. Aceitamos PIX para sua comodidade.
            </p>
          </div>
        </div>
        <div className="payments-info-block">
          <span className="icon animated-icon"><FaCreditCard /></span>
          <div className="info-text">
            <h3>Pagamento via Cartão de Crédito</h3>
            <p>
              Pague com cartão de crédito usando um link seguro do banco parceiro. Parcelamento disponível.
            </p>
            <span className="payment-taxes-warning">
              <strong>Atenção:</strong> As taxas de cartão, conforme o banco emissor, são repassadas ao cliente.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentsContracts;
