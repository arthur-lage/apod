import { IAPOD } from "../../interfaces/APOD";

import styles from "./styles.module.css";

type Props = {
  data: IAPOD;
};

export function PictureComponent({ data }: Props) {
  return (
    <section className={styles.todaysPicture}>
      <div className={styles.picture}>
        <img className={styles.pictureImage} src={data.url} alt={data.title} />
        <div className={styles.pictureInfo}>
          <span className={styles.pictureBy}>Picture by: {data.copyright ? data.copyright : "Unknown"}</span>
          <span className={styles.pictureDate}> Date: {data.date} </span>
          <span className={styles.pictureName}>Name: {data.title}</span>
          <span className={styles.pictureDescription}>
            Description: {data.explanation}
          </span>
          <a className={styles.seeFullPicture} href={data.url} target="_blank">
            See full picture
          </a>
        </div>
      </div>
    </section>
  );
}
