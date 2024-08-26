import {AccordionGst} from "../../pages/gstfilling/AccordionGst"
import { Footers } from "../../components/Footer"
import Navbars from "../../components/Navbars"
import FourBox from "../../serviceComponent/FourBox"
import IconBars from "../../serviceComponent/IconBars"

import Benifitbox from "../gstfilling/Benifitbox"
import Hero from "../gstfilling/Hero"
import InfoBox from "../gstfilling/InfoBox"



const GstFilling = () => {
  return (
    <>
      <div className=" bg-orange-500">
        <Navbars/>
      </div>
      <Hero/>
      <FourBox/>
      <InfoBox/>
      <IconBars/>
      <Benifitbox/>
      <AccordionGst/>
      <Footers/>
    </>
  )
}

export default GstFilling