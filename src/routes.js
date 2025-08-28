import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./paginas/about";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import Footer from "componentes/Footer";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/post";
import NaoEncontrada from "paginas/naoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
