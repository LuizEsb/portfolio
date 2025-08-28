import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to, escuro }) {
  const localizacao = useLocation();
  return (
    <Link
      className={`
        ${styles.link} 
        ${localizacao.pathname === to ? styles.linkDestacado : ""}
        ${escuro? styles.escuro : ""}
        `}
      to={to}
    >
      {children}
    </Link>
  );
}
