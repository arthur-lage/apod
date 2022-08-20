import { useState } from "react";

import axios from "axios";

import { Header } from "../../components/Header";
import { PictureComponent } from "../../components/PictureComponent";

import { IAPOD } from "../../interfaces/APOD";

import styles from "./styles.module.css";

export function CustomDate() {
  const [customDateInput, setCustomDateInput] = useState("");
  const [customDatePicture, setCustomDatePicture] = useState<IAPOD | null>(
    null
  );

  async function fetchCustomDate() {
    const res = await axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=" +
        import.meta.env.VITE_API_KEY +
        "&start_date=" +
        customDateInput +
        "&end_date=" +
        customDateInput
    );

    setCustomDatePicture(res.data[0]);
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

      {customDatePicture ? <PictureComponent data={customDatePicture} /> : ""}
    </div>
  );
}
