import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import BotaoPrincipal from "componentes/BotaoPrincipal";

export default function PostCard({ post, escuro }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={`${styles.post} ${escuro ? styles.escuro : ""}`}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="post capa"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>

        <BotaoPrincipal escuro>Conferir</BotaoPrincipal>
      </div>
    </Link>
  );
}
