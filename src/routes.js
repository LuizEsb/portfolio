import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./paginas/about";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import Footer from "componentes/Footer";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}


export default AppRoutes;
