import { Routes, Route } from "react-router-dom";
import { OnePage } from "./components/OnePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OnePage sectionId={null} />} />
      <Route path="/klienti" element={<OnePage sectionId="klienti" />} />
      <Route path="/sluzby" element={<OnePage sectionId="sluzby" />} />
      <Route path="/media" element={<OnePage sectionId="media" />} />
      <Route path="/jak-to-funguje" element={<OnePage sectionId="jak-to-funguje" />} />
      <Route path="/kontakt" element={<OnePage sectionId="kontakt" />} />
      <Route path="*" element={<OnePage sectionId={null} />} />
    </Routes>
  );
}
