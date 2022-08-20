import { useEffect, useState } from "react";

import axios from "axios";

import { Header } from "../../components/Header";

import { IAPOD } from "../../interfaces/APOD";
import { PictureComponent } from "../../components/PictureComponent";

export function Home() {
  const [todaysPicture, setTodaysPicture] = useState<IAPOD | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTodaysPicture() {
      try {
        const res = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=" +
            import.meta.env.VITE_API_KEY
        );

        setTodaysPicture(res.data);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    fetchTodaysPicture();
  }, []);

  return (
    <div>
      <Header pageIndex={0} />

      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          {todaysPicture ? (
            <>
              <PictureComponent data={todaysPicture} />
            </>
          ) : (
            <h2>Couldn't fetch data of today's picture!</h2>
          )}
        </>
      )}
    </div>
  );
}
