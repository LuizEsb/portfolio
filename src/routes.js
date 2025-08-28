import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./paginas/about";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import Footer from "componentes/Footer";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/post";
import NaoEncontrada from "paginas/naoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";
import { useState } from "react";

function AppRoutes() {
  const [tema, setTema] = useState(false)
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu mudaTema={() => setTema(!tema)} escuro={tema} />

      <Routes>
        <Route path="/" element={<PaginaPadrao escuro={tema} />}>
          <Route index element={<Inicio escuro={tema} />} />
          <Route path="about" element={<About escuro={tema} />} />
        </Route>

        <Route path="posts/:id/*" element={<Post escuro={tema} />} />

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
