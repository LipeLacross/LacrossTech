## 🌐 [English Version of README](README_EN.md)

# LacrossTech

LacrossTech é uma solução digital criada por Felipe Moreira (Dev Lipelacross) para apresentar e impulsionar negócios no ambiente online. A empresa é especializada no desenvolvimento de sites, aplicações sob medida e design gráfico para pequenas e médias empresas que desejam se destacar de verdade no digital.

O projeto foi desenvolvido em **Next.js** com **TypeScript** e **Sass**, focando em performance, visual moderno, animações e experiência de usuário de alto nível.

---

## 🔨 Funcionalidades do Projeto

- Landing page institucional para a LacrossTech
- Apresentação dos serviços: sites, aplicações web e design gráfico
- Tabela de serviços e valores
- Diferenciais e garantias para o cliente
- Formulário de contato integrado ao EmailJS
- Seção de perguntas frequentes (FAQ)
- Políticas e termos de uso
- Parceiros de negócios em destaque
- Portfólio visual de projetos realizados
- Depoimentos de clientes
- Animações e efeitos visuais modernos
- Layout totalmente responsivo e otimizado para dispositivos móveis
- Botão de voltar ao topo com animação
- Overlay de manutenção (ativável)
- Cursor personalizado

---

### Exemplo Visual do Projeto

![chrome-capture-2025-5-21 (1)](https://github.com/user-attachments/assets/f4365337-68e1-4717-9715-01e2904e95c9)


## ✔️ Técnicas e Tecnologias Utilizadas

- **Next.js** (App Router)
- **TypeScript**
- **Sass (SCSS)** com variáveis e mixins customizados
- **React Icons**
- **EmailJS** (envio de e-mails pelo formulário)
- **Animações CSS personalizadas**
- **Imagens otimizadas com Next/Image**
- **Padrão de componentes reutilizáveis**
- **Responsividade avançada**
- **Acessibilidade básica**
- **Deploy pronto para Vercel**

---

## 📁 Estrutura do Projeto

- **LICENSE**: Licença do projeto.
- **README.md**: Este arquivo de documentação.
- **eslint.config.mjs**: Configuração do ESLint para padronização de código.
- **ideas.txt**: Ideias e anotações do projeto.
- **lacross-cursor.svg**: Cursor personalizado do site.
- **next.config.ts**: Configurações do Next.js (incluindo suporte a SVG e SASS).
- **package.json / package-lock.json**: Dependências e scripts do projeto.
- **tsconfig.json**: Configuração do TypeScript.

- **public/**
  - Imagens de perfil, logos, ícones sociais, imagens do portfólio e favicon.

- **src/app/components/**
  - **BusinessPartner.tsx**: Parceiros de negócio.
  - **ContactForm.tsx**: Formulário de contato com integração ao EmailJS.
  - **Diferenciais.tsx**: Lista de diferenciais da LacrossTech.
  - **FAQ.tsx**: Perguntas frequentes.
  - **Footer.tsx**: Rodapé do site.
  - **Header.tsx**: Cabeçalho com navegação responsiva.
  - **Home.tsx**: Seção de apresentação.
  - **MaintenanceOverlay.tsx**: Overlay de manutenção.
  - **Opening.tsx**: Efeito de abertura animado.
  - **PaymentsContracts.tsx**: Informações de pagamentos e contratos.
  - **Portfolio.tsx**: Portfólio de projetos realizados.
  - **ScrollToTopButton.tsx**: Botão animado de voltar ao topo.
  - **Services.tsx**: Tabela de serviços e valores.
  - **TermsAndPolicies.tsx**: Políticas e termos de uso.
  - **Testimonials.tsx**: Depoimentos de clientes.

- **src/app/styles/**
  - Arquivos `.sass` para cada componente, além de variáveis e mixins globais.

---

## 🛠️ Abrir e rodar o projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**:
   - O [Node.js](https://nodejs.org/) é necessário para rodar o projeto. Você pode verificar se já o tem instalado com:
     ```bash
     node -v
     ```
   - Se não estiver instalado, baixe e instale a versão recomendada.

2. **Clone o Repositório**:
   - Copie a URL do repositório e execute o comando abaixo no terminal:
     ```bash
     git clone 
     ```
   - Entre na pasta do projeto:
     ```bash
     cd 
     ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Rode o projeto em modo de desenvolvimento**:
   ```bash
   npm run dev
   ```
   - O site ficará disponível em [http://localhost:3000](http://localhost:3000).

---

## 🌐 Deploy

- O projeto está pronto para deploy na [Vercel](https://vercel.com/) (recomendado para projetos Next.js).
- Basta conectar o repositório no painel da Vercel e seguir as instruções automáticas.
- Alternativamente, use:
  ```bash
  npm run build
  npm start
  ```
  para rodar em produção em qualquer ambiente Node.js.

---

**Desenvolvido por Felipe Moreira (Dev Lipelacross) para a LacrossTech – Soluções Web que impulsionam ideias.**