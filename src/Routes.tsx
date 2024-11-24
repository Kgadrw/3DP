import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx"; // Import your pages
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Service from "./pages/Service.tsx";
import Data from "./pages/Data.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  );
};

export default AppRoutes;
