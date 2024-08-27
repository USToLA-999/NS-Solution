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
        <Route path="/Incomtaxreturn" element={<Service />} />
        <Route path="/Gstfilling" element={<GstFilling />} />
        <Route path="/companycompliance" element={<CompanyCompliance />} />
        <Route path="/Employeestateinsurance" element={<EsiRegistration />} />
        <Route path="/isoregistration" element={<IsoRegistration/>} />
        <Route path="/tanregistration" element={<TanRegistration/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
