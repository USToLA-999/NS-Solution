import Hero from "../../aboutcomponents/Hero"
import { Footers } from "../../components/Footer";

import Navbars from "../../components/Navbars";


const About = () => {
  return (
    <>
      <div className=" bg-orange-500">
          <Navbars/>
      </div>
      <Hero />
      <Footers/>
    </>
  );
}

export default About