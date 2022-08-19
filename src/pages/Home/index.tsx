import { useEffect, useState } from "react";

import axios from "axios";

import { Header } from "../../components/Header";

import { IAPOD } from "../../interfaces/APOD";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export function Home() {
  const [todaysPicture, setTodaysPicture] = useState<IAPOD | null>(null);

  useEffect(() => {
    async function fetchTodaysPicture() {
      const res = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=" +
          import.meta.env.VITE_API_KEY
      );

      setTodaysPicture(res.data);
    }

    fetchTodaysPicture();
  }, []);

  return (
    <div>
      <Header pageIndex={0} />

      {todaysPicture ? (
        <>
          <section className={styles.todaysPicture}>
            <h1 className={styles.title}>Today's Picture</h1>
            <div className={styles.picture}>
              <img
                className={styles.pictureImage}
                src={todaysPicture.url}
                alt={todaysPicture.title}
              />
              <div className={styles.pictureInfo}>
                <span className={styles.pictureBy}>
                  Picture by {todaysPicture.copyright}
                </span>
                <span className={styles.pictureDate}>
                  Date: {todaysPicture.date}
                </span>
                <span className={styles.pictureName}>
                  Name: {todaysPicture.title}
                </span>
                <span className={styles.pictureDescription}>
                  Description: {todaysPicture.explanation}
                </span>
                <a className={styles.seeFullPicture} href={todaysPicture.url} target="_blank">See full picture</a>
              </div>
            </div>
          </section>
        </>
      ) : (
        <h2>Couldn't fetch data of today's picture!</h2>
      )}
    </div>
  );
}
