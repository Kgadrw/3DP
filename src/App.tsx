import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./assets/IMG-20240921-WA0000.jpg";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PowerBIDashboard from "./pages/Data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/data", label: "Data" },
  { href: "/contact", label: "Contact" },
];

const App: React.FC = () => {
  return (
    <Router>
      <Navbar logo={Logo} links={navLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/data" element={<PowerBIDashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
