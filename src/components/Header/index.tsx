import { Planet } from "phosphor-react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type Props = {
  pageIndex: number;
};

export function Header({ pageIndex }: Props) {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        APOD
      </Link>

      <nav>
        <ul>
          <li>
            {pageIndex == 0 && <Planet color="#fff" size={32} />}
            <Link to="/">Today's Picture</Link>
          </li>
          <li>
            {pageIndex == 1 && <Planet color="#fff" size={32} />}
            <Link to="/custom-date">Custom Date</Link>
          </li>
          <li>
            {pageIndex == 2 && <Planet color="#fff" size={32} />}
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
