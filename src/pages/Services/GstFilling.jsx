import {AccordionGst} from "../../pages/gstfilling/AccordionGst"
import { Footers } from "../../components/Footer"
import Navbars from "../../components/Navbars"


import Benifitbox from "../gstfilling/Benifitbox"
import Hero from "../gstfilling/Hero"
import InfoBox from "../gstfilling/InfoBox"
import Cards from "../gstfilling/Cards"
import Headlinebox from "../gstfilling/Headlinebox"
import IconBars from "../../serviceComponent/IconBars"
import FourBox from "../gstfilling/FourBox"




const GstFilling = () => {
  return (
    <>
      <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
    </div>
      <Hero/>
      <Headlinebox/>
      <Cards/>
      <FourBox />
      <InfoBox/>
      <IconBars/>
      <Benifitbox/>
      <AccordionGst/>
      <Footers />
    </>
  )
}

export default GstFilling