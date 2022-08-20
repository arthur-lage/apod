import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CustomDate } from "./pages/CustomDate";

import "./styles/global.css"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/custom-date" element={<CustomDate />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
