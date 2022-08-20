import { Planet } from "phosphor-react";

import styles from "./styles.module.css";

export function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <Planet size={128} color="#593C8F" />
    </div>
  );
}
