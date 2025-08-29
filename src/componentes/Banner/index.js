import styles from "./Banner.module.css";
import minhaFoto from "assets/minha_foto.png";
import ImgAnimada from "componentes/ImgAnimada";

export default function Banner({ escuro }) {
  return (
    <section className={`${styles.banner} ${escuro ? styles.escuro : ""}`}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá mundo!</h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu portfólio! <br /> Eu sou{" "}
          <strong>Luiz Felipe Esboldrim</strong>, estudante universitário e
          Desenvolvedor Web.
          <br /> Fique à vontade e veja alguns de meus projetos!
        </p>
      </div>

      <div className={styles.imagens}>
        <ImgAnimada
          src={minhaFoto}
          alt={"minha foto"}
          style={{
            right: 40,
            bottom: 0,
            borderRadius: "50%",
          }}
        />
      </div>
    </section>
  );
}
