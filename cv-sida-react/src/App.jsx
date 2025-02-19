import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/portfolio";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import CV from "./pages/Cv";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import EasterEgg from "./components/easterEgg";

function App() {
  return (
    <>
      {/* basename="/cv-sida-react" into browserrouter */}
      <EasterEgg />
      <BrowserRouter basename="/cv-sida-react" into browserrouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
