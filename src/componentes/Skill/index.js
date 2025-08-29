import styles from "./Skill.module.css";
import * as motion from "motion/react-client";

export default function Skill({ nome, srcIcon, alt, escuro }) {
  return (
    <motion.div
      className={`${styles.skill} ${escuro ? styles.escuro : ""}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <p>{nome}</p>
      <img src={srcIcon} alt={alt} />
    </motion.div>
  );
}
