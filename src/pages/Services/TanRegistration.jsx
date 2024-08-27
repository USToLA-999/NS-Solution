
import Navbars from '../../components/Navbars'
import Hero from '../TanRegistration/Hero'
import InfoBox from '../TanRegistration/InfoBox'
import IconBars from '../../serviceComponent/IconBars'
import AccordionTan from '../TanRegistration/AccordionTan'
import { Footers } from '../../components/Footer'

const TanRegistration = () => {
  return (
    <>
    <div className=" bg-orange-500">
        <Navbars />
      </div>
      <Hero/>
      <InfoBox/>
      <IconBars/>
      <AccordionTan/>
      <Footers/>
    </>
  )
}

export default TanRegistration