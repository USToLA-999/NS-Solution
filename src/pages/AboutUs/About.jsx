import Hero from "../../aboutcomponents/Hero"
import { Footers } from "../../components/Footer";

import Navbars from "../../components/Navbars";


const About = () => {
  return (
    <>
      <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
    </div>
      <Hero />
      <Footers/>
    </>
  );
}

export default About