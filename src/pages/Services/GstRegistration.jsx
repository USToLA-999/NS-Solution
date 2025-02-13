
import { Footers } from '../../components/Footer'
import Navbars from '../../components/Navbars'
import IconBars from '../../serviceComponent/IconBars'
import { AccordionGst } from '../gstfilling/AccordionGst'
import Headlinebox from '../gstfilling/Headlinebox'
import Benifitbox from '../GstRegistration/Benifitbox'
import Fourbox from '../GstRegistration/Fourbox'
import Hero from '../GstRegistration/Hero'
import Infobox from '../GstRegistration/Infobox'
import Package from '../GstRegistration/Package'
import Requiredbox from '../GstRegistration/Requiredbox'

const GstRegistration = () => {
  return (
    <>
      <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
      </div>
      <Hero />
      <Requiredbox />
      <Headlinebox/>
      <Package />
      <Infobox />
      {/* <Fourbox /> */}
      
      <Benifitbox />
      <IconBars/>
      <AccordionGst />
      <Footers />
    </>
  )
}

export default GstRegistration
