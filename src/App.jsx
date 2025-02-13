import { Route,  Routes } from "react-router-dom";
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
import BulkReturn from "./pages/Services/BulkReturn";
import TdsFilling from "./pages/Services/TdsFilling";
import IecRegistration from "./pages/Services/IecRegistration";
import PrivateLimited from "./pages/Services/PrivateLimited";
import OpcRegistration from "./pages/Services/OpcRegistration";
import LlpRegistration from "./pages/Services/LlpRegistration";
import SoleProprieter from "./pages/Services/SoleProprieter";
import Partnership from "./pages/Services/Partnership";
import Trademark from "./pages/Services/Trademark";
import FssaiRegistration from "./pages/Services/FssaiRegistration";
import GstRegistration from "./pages/Services/GstRegistration";
import Privacy from "./pages/Services/Privacy";
import Refund from "./pages/Services/Refund";

const App = () => {
  return (
    


    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incom-tax-return" element={<Service />} />
        <Route path="/gst-filling" element={<GstFilling />} />
        <Route path="/gst-registration" element={<GstRegistration />} />
        <Route path="/company-compliance" element={<CompanyCompliance />} />
        <Route path="/bulk-return-filling" element={<BulkReturn />} />
        <Route path="/tds-return-filling" element={<TdsFilling />} />
        <Route path="/fssai-registration" element={<FssaiRegistration />} />
        <Route path="/employee-state-insurance" element={<EsiRegistration />} />
        <Route path="/iso-registration" element={<IsoRegistration/>} />
        <Route path="/tan-registration" element={<TanRegistration/>} />
        <Route path="/iec-registration" element={<IecRegistration/>} />
        <Route path="/private-limited-company-registration" element={<PrivateLimited/>} />
        <Route path="/one-person-company-registration" element={<OpcRegistration/>} />
        <Route path="/llp-registration" element={<LlpRegistration/>} />
        <Route path="/sole-proprietorship-registration" element={<SoleProprieter/>} />
        <Route path="/partnership-registration" element={<Partnership/>} />
        <Route path="/trademark-registration" element={<Trademark/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/refund-policy" element={ <Refund /> } />
      </Routes>
      
    
  );
};

export default App;
