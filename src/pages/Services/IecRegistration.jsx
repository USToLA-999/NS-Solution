import { Footers } from "../../components/Footer"
import Navbars from "../../components/Navbars"
import IconBars from "../../serviceComponent/IconBars"
import { AccordionIce } from "../Iecregister/AccordionIce"
import Fourbox from "../Iecregister/Fourbox"
import Hero from "../Iecregister/Hero"
import Matterbox from "../Iecregister/Matterbox"
import Workbox from "../Iecregister/Workbox"


const IecRegistration = () => {
  return (
    <>
    <div className=" bg-orange-500">
        <Navbars />
      </div>
      <Hero/>
      <Fourbox/>
      <Matterbox/>
      <Workbox/>
      <IconBars/>
      <AccordionIce/>
      <Footers/>
    </>
  )
}

export default IecRegistration