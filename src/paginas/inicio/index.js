import styles from "./inicio.module.css";

import posts from "json/posts.json"
import PostCard from "componentes/PostCard";

export default function Inicio({ escuro }) {
  return (
    <main>
      <ul className={`${styles.posts} ${escuro ? styles.escuro : ""}`}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard escuro post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
