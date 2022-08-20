import { Planet } from "phosphor-react";
import { Header } from "../../components/Header";

import styles from "./styles.module.css";

export function About() {
  return (
    <div>
      <Header pageIndex={2} />

      <section className={styles.about}>
        <h1 className={styles.title}>About</h1>
        <p>
          This project was made using ReactJS, Typescript and NASA's APOD API
        </p>
        <Planet color="#593C8F" size={116} />
        <small>
          API by{" "}
          <a
            className={styles.link}
            href="https://github.com/nasa/apod-api"
            target="_blank"
          >
            NASA APOD
          </a>
        </small>
        <span className={styles.madeBy}>
          Made with 💜 by{" "}
          <a
            className={styles.link}
            target={"_blank"}
            href="https://github.com/arthur-lage"
          >
            Arthur Lage
          </a>
        </span>
      </section>
    </div>
  );
}
