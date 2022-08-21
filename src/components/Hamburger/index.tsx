import { List, X } from "phosphor-react";

import styles from "./styles.module.css";

type Props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export function Hamburger({ isMenuOpen, toggleMenu }: Props) {
  return (
    <button onClick={toggleMenu} className={styles.hamburger}>
      {isMenuOpen ? (
        <X size={32} color="#fff" weight="bold" />
      ) : (
        <List size={32} color="#fff" weight="bold" />
      )}
    </button>
  );
}
