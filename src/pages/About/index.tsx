import { Header } from "../../components/Header";

export function About() {
  return (
    <div>
      <Header pageIndex={2} />

      <section className="about">
        <h1 className="title">About</h1>
        <p>This project was made using ReactJS, Typescript and NASA's APOD API</p>
        <small>API by NASA APOD</small>
        <span className="made-by">
          Made with 💜 by{" "}
          <a href="https://github.com/arthur-lage">Arthur Lage</a>
        </span>
      </section>
    </div>
  );
}
