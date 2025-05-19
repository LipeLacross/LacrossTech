import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "@/app/components/About";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Services from "./components/Services";
import BusinessPartner from "@/app/components/BusinessPartner";
import Opening from "@/app/components/Opening";
import { montserrat, kronaOne } from './fonts';

export default function Page() {
  return (
    <div>
      {/* <MaintenanceOverlay /> */}
      <Opening />
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="servicos">
        <Services />
      </section>
      <section id="sobre">
        <About />
      </section>
      <section id="parceiros">
        <BusinessPartner />
      </section>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
