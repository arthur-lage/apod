import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type Props = {
  pageIndex: number;
};

export function Header({ pageIndex }: Props) {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">APOD</Link>

      <nav>
        <ul>
          <li className={`${pageIndex == 0 ? "active" : ""}`}>
            <Link to="/">Today's Picture</Link>
          </li>
          <li className={`${pageIndex == 1 ? "active" : ""}`}>
            <Link to="/custom-date">Custom Date</Link>
          </li>
          <li className={`${pageIndex == 2 ? "active" : ""}`}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
