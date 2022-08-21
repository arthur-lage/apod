import { Planet } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Hamburger } from "../Hamburger";
import styles from "./styles.module.css";

type Props = {
  pageIndex: number;
};

export function Header({ pageIndex }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (!isMenuOpen == true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        APOD
      </Link>

      <nav className={styles.desktopMenu}>
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

      <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {isMenuOpen && (
        <nav className={styles.mobileMenu}>
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
      )}
    </header>
  );
}
