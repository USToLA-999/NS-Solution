import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./pages/Services/Service";
import Contact from "./pages/Contact/Contact";
import About from "./pages/AboutUs/About";
import Home from "./pages/Home/Home";
import GstFilling from "./pages/Services/GstFilling";
import CompanyCompliance from "./pages/Services/CompanyCompliance";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Incomtaxreturn" element={<Service />} />
        <Route path="/Gstfilling" element={<GstFilling />} />
        <Route path="/companycompliance" element={<CompanyCompliance />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
