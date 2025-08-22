import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png"

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá mundo!</h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu portfólio! <br/> Eu sou{" "}
          <strong>Luiz Felipe Esboldrim</strong>, estudante universitário e
          Desenvolvedor Web.<br/> Fique à vontade e veja alguns de meus projetos!
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt="circulo colorido"
          aria-hidden={true}
        />
        <img alt="minha foto" src={minhaFoto} className={styles.minhaFoto}/>
      </div>
    </section>
  );
}
