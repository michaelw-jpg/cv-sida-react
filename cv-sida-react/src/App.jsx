import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/portfolio";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import CV from "./pages/Cv";
import Navbar from "./components/navbar";
// import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> // navigeringen hamnar ovanför! sidans innehåll!
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
