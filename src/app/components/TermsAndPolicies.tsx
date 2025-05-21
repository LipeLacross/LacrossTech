"use client";

import React from "react";
import "../styles/TermsAndPolicies.sass";

const TermsAndPolicies: React.FC = () => {
  return (
    <section className="terms-policies-section" aria-labelledby="terms-policies-title">
      <h2 id="terms-policies-title" className="terms-policies-title">
        Políticas e Termos de Uso
      </h2>

      <article className="policy-block">
        <h3>Propriedade Intelectual e Entrega</h3>
        <p>
          Todo o desenvolvimento realizado, incluindo código-fonte, layout, design, textos e imagens produzidos sob demanda, será entregue ao cliente somente após a quitação integral dos valores acordados em contrato. O cliente terá pleno direito de acesso, uso e alteração do código-fonte entregue, exceto materiais de terceiros devidamente licenciados.
        </p>
      </article>

      <article className="policy-block">
        <h3>Pagamentos e Cancelamento</h3>
        <p>
          Os pagamentos pelos serviços devem seguir as condições estabelecidas em contrato. Caso o produto (site, aplicação ou serviço) esteja concluído e pronto para entrega, não será possível cancelar o contrato, sendo devido o pagamento integral do valor acordado, independentemente de aviso prévio ou justificativa.
        </p>
      </article>

      <article className="policy-block">
        <h3>Prazos de Execução</h3>
        <p>
          O prazo para desenvolvimento de sites é de 15 a 30 dias úteis após o pagamento inicial. Para aplicações web, o prazo é de 2 a 4 meses úteis, conforme a complexidade do projeto. O registro de domínio é realizado após o pagamento final e confirmação do nome escolhido.
        </p>
      </article>

      <article className="policy-block">
        <h3>Confidencialidade</h3>
        <p>
          Todas as informações técnicas, comerciais e estratégicas compartilhadas entre as partes são confidenciais e não poderão ser divulgadas a terceiros sem autorização prévia e expressa.
        </p>
      </article>

      <article className="policy-block">
        <h3>Privacidade e Proteção de Dados</h3>
        <p>
          Comprometemo-nos a tratar os dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD), responsabilizando-nos pela segurança e uso adequado das informações coletadas durante a prestação dos serviços.
        </p>
      </article>

      <article className="policy-block">
        <h3>Garantia</h3>
        <p>
          Após a entrega do produto final, oferecemos garantia de 30 dias para correção de eventuais falhas ou bugs identificados, sem custos adicionais ao cliente.
        </p>
      </article>
        <article className="policy-block">
        <h3>Limitação de Responsabilidade</h3>
        <p>
        Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso inadequado dos produtos ou serviços fornecidos, incluindo, mas não se limitando a, perda de dados, lucros cessantes ou interrupção de negócios.
        </p>
    </article>
      <article className="policy-block">
        <h3>Atualizações dos Termos</h3>
        <p>
          Reservamo-nos o direito de alterar estes termos a qualquer momento. As atualizações serão publicadas nesta página. Recomendamos revisitar periodicamente para estar informado sobre eventuais mudanças.
        </p>
      </article>
    </section>
  );
};

export default TermsAndPolicies;
