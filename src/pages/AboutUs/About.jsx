import Hero from "../../aboutcomponents/Hero"
import { Footers } from "../../components/Footer";
import Navbar from "../../components/Navbar"


const About = () => {
  return (
    <>
      <div className=" bg-orange-500">
          <Navbar/>
      </div>
      <Hero />
      <Footers/>
    </>
  );
}

export default About