import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UrlShortener from "./pages/UrlShortener";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/url-shortener" element={<UrlShortener />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
