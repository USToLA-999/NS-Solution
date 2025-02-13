
import { Footers } from "../../components/Footer";
import Navbars from "../../components/Navbars";
import FourBox from "../../serviceComponent/FourBox";
import IconBars from "../../serviceComponent/IconBars";
import Hero from "../EsiRegistration/Hero";
import Infobox from "../EsiRegistration/Infobox";

const EsiRegistration = () => {
  return (
    <>
      <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
    </div>
      <Hero/>
      <FourBox/>
      <Infobox/>
      <IconBars/>
      <Footers/> 
    </>
  );
};

export default EsiRegistration;
