import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoFerramentas from "assets/gitgithubvscwin.png";
import Skill from "componentes/Skill";
import reactIcon from "assets/react-icon.png";
import nodeIcon from "assets/node-icon.png";
import jsIcon from "assets/js-icon.png";
import gitIcon from "assets/git-icon.png";
import vsCodeIcon from "assets/vscode-icon.png";
import winIcon from "assets/windows-icon.png";
import sqlIcon from "assets/sql-icon.png";
import officeIcon from "assets/ofiice-icon.png";
import sqliteIcon from "assets/sqlite-icon.png"
import firebirdIcon from "assets/firebird-icon.png"
import delphiIcon from "assets/delphi-icon.png"

import styles from "./about.module.css";
import React from "react";

export default function About({ escuro }) {
  return (
    <>
      <PostModelo escuro={escuro} fotoCapa={fotoCapa} titulo="Sobre mim">
        <section className={styles.curriculum}>
          <div className={`${styles.card} ${escuro ? styles.escuro : ""}`}>
            <h3 className={`${styles.subtitulo} ${styles.skillsSubt}`}>
              Principais Habilidades
            </h3>

            <div className={styles.skills}>
              <Skill
                escuro={escuro}
                nome="React.js"
                srcIcon={reactIcon}
                alt="icone react"
              />
              <Skill
                escuro={escuro}
                nome="Node.js"
                srcIcon={nodeIcon}
                alt="icone node"
              />
              <Skill
                escuro={escuro}
                nome="JavaScript"
                srcIcon={jsIcon}
                alt="icone js"
              />
              <Skill escuro={escuro} srcIcon={sqlIcon} alt="icone sql" />
              <Skill
                escuro={escuro}
                nome="Git(Hub)"
                srcIcon={gitIcon}
                alt="icone git"
              />
              <Skill
                escuro={escuro}
                nome="VSCode"
                srcIcon={vsCodeIcon}
                alt="icone vscode"
              />
              <Skill
                escuro={escuro}
                nome="Windows"
                srcIcon={winIcon}
                alt="icone windows"
              />
            </div>
          </div>

          <div className={`${styles.card} ${escuro ? styles.escuro : ""}`}>
            <h3 className={`${styles.subtitulo} ${styles.skillsSubt}`}>
              Outros Conhecimentos
            </h3>

            <div className={styles.skills}>
              <Skill
                escuro={escuro}
                nome="Delphi"
                srcIcon={delphiIcon}
                alt="icone delphi"
              />
              <Skill
                escuro={escuro}
                nome="FirebirdSQL"
                srcIcon={firebirdIcon}
                alt="icone firebird"
              />
              <Skill
                escuro={escuro}
                nome="SQLite"
                srcIcon={sqliteIcon}
                alt="icone sqlite"
              />
              <Skill escuro={escuro} nome="C" srcIcon={winIcon} alt="icone C" />
              <Skill
                escuro={escuro}
                nome="Office"
                srcIcon={officeIcon}
                alt="icone office"
              />
            </div>
          </div>

          <div className={`${styles.card} ${escuro ? styles.escuro : ""}`}>
            <h3 className={`${styles.subtitulo} ${styles.skillsSubt}`}>
              Formação
            </h3>

            <ul className={styles.paragrafo}>
              <li>
                Bacharelado em Sistemas de Informação - UNESP | (2025 - 2028)
              </li>

              <li>Técnico em Administração - ETEC | (2022 - 2024)</li>
            </ul>

            <h3 className={`${styles.subtitulo} ${styles.skillsSubt}`}>
              Formações Complementares
            </h3>

            <ul className={styles.paragrafo}>
              <li>
                <a
                  href="https://cursos.alura.com.br/degree/certificate/7b0d168b-a13f-4b22-8630-1d8a024b1520?lang=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Formação React: JSX e Hooks (7 cursos - 58 horas)
                </a>
              </li>

              <li>
                <a
                  href="https://cursos.alura.com.br/degree/certificate/074005cc-55ef-4732-be43-3430cabcf6fb?lang=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Formação JavaScript (8 cursos - 61 horas)
                </a>
              </li>

              <li>
                <a
                  href="https://cursos.alura.com.br/degree/certificate/eb5fd50d-f8d9-4dc8-a4c1-36bbdcb241d0?lang=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Formação SQL (4 cursos - 41 horas)
                </a>
              </li>
            </ul>
          </div>
        </section>
      </PostModelo>
      <PostModelo escuro={escuro} fotoCapa={fotoCapa} titulo="Minha história">
        <div className={`${styles.card} ${escuro ? styles.escuro : ""}`}>
          <h3 className={styles.subtitulo}>Olá, eu sou o Luiz!</h3>

          <p className={styles.paragrafo}>
            Sou Desenvolvedor de Software e fico feliz que tenha se interessado!
          </p>
          <p className={styles.paragrafo}>
            Comecei a programar no ensino médio. No finalzinho do curso técnico
            de Administração a necessidade de escolher um caminho pra trilhar e
            o interesse por tecnologia despertaram em mim a vontade de ser
            desenvolvedor. Me matriculei em uma escola online de tecnologia, a
            Alura, e busquei me aprimorar constantemente.
          </p>
          <p className={styles.paragrafo}>
            Com muito esforço e uma grande jornada de meditação nas aulas de
            boxe, eu consegui passar em Sistemas de Informação na UNESP, uma das
            melhores faculdades da América Latina e múltiplas vezes indicada
            como a segunda melhor universidade do Brasil, segundo o Academic
            Ranking of World Universities, publicado por uma consultoria chinesa
            especializada em ensino superior.
          </p>
          <p className={styles.paragrafo}>
            Também encontrei meu primeiro estágio com suporte de ERPs em Delphi
            na Simbolus Sistemas de Informação e aprimorei minhas habilidades
            como desenvolvedor. Desde então, aprendi a utilizar diversas
            ferramentas e tecnologias, principalmente voltadas ao front-end, mas
            almejo me tornar um desenvolvedor Full Stack!
          </p>
        </div>
      </PostModelo>
    </>
  );
}
