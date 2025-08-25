import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./paginas/about";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import Footer from "componentes/Footer";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="about" element={<About />} />
          <Route path="posts/:id" element={<Post />}/>
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
