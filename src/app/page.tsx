import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Importando todos os componentes relevantes
import MaintenanceOverlay from './components/MaintenanceOverlay';
export default function Page() {
  return (
    <div>
        <MaintenanceOverlay />
      <Header /> {/* Cabeçalho */}
      <Home />   {/* Seção principal (Home) */}
      <Portfolio /> {/* Portfólio */}
      <ScrollToTopButton /> {/* Botão de scroll para o topo */}
      <Footer /> {/* Rodapé */}
    </div>
  );
}
