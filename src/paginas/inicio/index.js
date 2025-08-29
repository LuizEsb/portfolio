import styles from "./inicio.module.css";

import posts from "json/posts.json"
import PostCard from "componentes/PostCard";
import Banner from "componentes/Banner";

export default function Inicio({ escuro }) {
  return (
    <main>
      <Banner escuro={escuro} />
      <ul className={`${styles.posts} ${escuro ? styles.escuro : ""}`}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard escuro={escuro} post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
