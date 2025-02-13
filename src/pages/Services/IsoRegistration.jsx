
import Navbars from '../../components/Navbars'
import Hero from '../IsoRegistration/Hero'
import Infobox from '../IsoRegistration/Infobox'
import IconBars from '../../serviceComponent/IconBars'
import Workbox from '../IsoRegistration/Workbox'
import { AccordionIso } from '../IsoRegistration/AccordionIso'
import { Footers } from '../../components/Footer'

const IsoRegistration = () => {
  return (
    <>
        <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
    </div>
      <Hero/>
      <Infobox/>
      <IconBars/>
      <Workbox/>
      <AccordionIso/>
      <Footers/>
    </>
  )
}

export default IsoRegistration