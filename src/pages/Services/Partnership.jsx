import { Footers } from "../../components/Footer"
import Navbars from "../../components/Navbars"
import IconBars from "../../serviceComponent/IconBars"
import { AccordionPartner } from "../Partnership/AccordionPartner"
import Benifitbox from "../Partnership/Benifitbox"
import Hero from "../Partnership/Hero"
import Matterbox from "../Partnership/Matterbox"


const Partnership = () => {
  return (
    <>
        <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
    </div>
      <Hero/>
      <Matterbox/>
      <Benifitbox/>
      <IconBars/>
      <AccordionPartner/>
      <Footers/>
      
    </>
  )
}

export default Partnership