import { useState } from "react";

import axios from "axios";

import { Header } from "../../components/Header";
import { PictureComponent } from "../../components/PictureComponent";

import { IAPOD } from "../../interfaces/APOD";

import styles from "./styles.module.css";
import { Loading } from "../../components/Loading";

export function CustomDate() {
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [customDateInput, setCustomDateInput] = useState("");
  const [customDatePicture, setCustomDatePicture] = useState<IAPOD | null>(
    null
  );

  async function fetchCustomDate() {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=" +
          import.meta.env.VITE_API_KEY +
          "&start_date=" +
          customDateInput +
          "&end_date=" +
          customDateInput
      );

      setCustomDatePicture(res.data[0]);

      setLoading(false);
      setHasFetched(true);
    } catch (err) {
      console.error(err);
      setHasFetched(true);
      setLoading(false);
    }
  }

  return (
    <div>
      <Header pageIndex={1} />

      <div className={styles.dateInputWrapper}>
        <div className={styles.left}>
          <label htmlFor="date">Choose a date:</label>
          <input
            type={"date"}
            id={"date"}
            value={customDateInput}
            onChange={(e) => setCustomDateInput(e.target.value)}
          />
        </div>
        <button onClick={fetchCustomDate}>Get Picture</button>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <>
          {hasFetched && (
            <>
              {customDatePicture ? (
                <>
                  <h1 className={styles.title}>
                    Picture of {customDatePicture.date}
                  </h1>

                  <PictureComponent data={customDatePicture} />
                </>
              ) : (
                <div className={styles.unableToFetch}>
                  <h2>Couldn't fetch data of that picture!</h2>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
