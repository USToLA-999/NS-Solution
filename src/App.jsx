import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Service from "./pages/Services/Service";
import Contact from "./pages/Contact/Contact";
import About from "./pages/AboutUs/About";
import Home from "./pages/Home/Home";
import GstFilling from "./pages/Services/GstFilling";
import CompanyCompliance from "./pages/Services/CompanyCompliance";
import EsiRegistration from "./pages/Services/EsiRegistration";
import IsoRegistration from "./pages/Services/IsoRegistration";
import TanRegistration from "./pages/Services/TanRegistration";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incom-tax-return" element={<Service />} />
        <Route path="/gst-filling" element={<GstFilling />} />
        <Route path="/company-compliance" element={<CompanyCompliance />} />
        <Route path="/employee-state-insurance" element={<EsiRegistration />} />
        <Route path="/iso-registration" element={<IsoRegistration/>} />
        <Route path="/tan-registration" element={<TanRegistration/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
