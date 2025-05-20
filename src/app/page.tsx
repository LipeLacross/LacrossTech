import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "@/app/components/About";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Services from "./components/Services";
import BusinessPartner from "@/app/components/BusinessPartner";
import Opening from "@/app/components/Opening";
import Diferenciais from "@/app/components/Diferenciais";
import FAQ from "@/app/components/FAQ";
import ContactForm from "@/app/components/ContactForm";
import PaymentsContracts from "@/app/components/PaymentsContracts";
import TermsAndPolicies from "@/app/components/TermsAndPolicies";

export default function Page() {
  return (
    <div>
      {/* <MaintenanceOverlay /> */}
      <Opening />
      <Header />

      {/* Apresentação / Home */}
      <section id="apresentacao">
        <Home />
      </section>

      {/* Diferenciais */}
      <section id="diferenciais">
        <Diferenciais />
      </section>

      {/* Serviços */}
      <section id="service-table-container">
        <Services />
      </section>

      {/* Pagamentos e Contratos */}
      <section id="pagamentos">
        <PaymentsContracts />
      </section>

      {/* Sobre */}
      <section id="sobre">
        <About />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Contato */}
      <section id="contact">
        <ContactForm />
      </section>

      {/* Termos e Políticas */}
      <section id="termos">
        <TermsAndPolicies />
      </section>

      {/* Parceiros */}
      <section id="partner-highlight-section">
        <BusinessPartner />
      </section>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
