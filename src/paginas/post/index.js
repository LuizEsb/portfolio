import "./Post.css";
import styles from "./Post.module.css";

import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/naoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

export default function Post({ escuro }) {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada escuro={escuro} />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao escuro={escuro} />}>
        <Route
          index
          element={
            <PostModelo
              escuro={escuro}
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
              <h2
                className={`${styles.tituloOutrosPosts} ${
                  escuro ? styles.escuro : ""
                }`}
              >
                Outros posts que você pode gostar:
              </h2>

              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard escuro={escuro} post={post} />
                  </li>
                ))}
              </ul>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
