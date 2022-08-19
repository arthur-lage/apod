import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PictureOfTheDay } from "./pages/PictureOfTheDay";

import "./styles/global.css"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/custom-date" element={<PictureOfTheDay />} />
      <Route path="/day/:date" element={<PictureOfTheDay />} />
    </Routes>
  );
}
