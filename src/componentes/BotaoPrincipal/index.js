import styles from "./BotaoPrincipal.module.css"

export default function BotaoPrincipal({ children, tamanho, escuro }) {
    return(
        <button className={`${styles.botao} ${escuro ? styles.escuro : ""} ${styles[tamanho]}`}>{children}</button>
    )
}