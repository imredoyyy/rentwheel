import { Routes, Route } from "react-router-dom";

// Components(Section)
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
