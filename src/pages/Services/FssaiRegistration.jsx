
import Hero from '../Fssai Registartion/Hero'
import Navbars from '../../components/Navbars'
import Matterbox from '../Fssai Registartion/Matterbox'
import Benifitbox from '../Fssai Registartion/Benifitbox'
import MatterboxSecond from '../Fssai Registartion/MatterboxSecond'
import BenifitboxSecond from '../Fssai Registartion/BenifitboxSecond'
import IconBars from '../../serviceComponent/IconBars'
import { AccordionFssai } from '../Fssai Registartion/AccordionFssai'
import { Footers } from '../../components/Footer'

const FssaiRegistration = () => {
  return (
    <>
    <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
    </div>
    <Hero/>
    <Matterbox/>
    <Benifitbox/>
    <MatterboxSecond/>
    <BenifitboxSecond/>
    <IconBars/>
    <AccordionFssai/>
    <Footers/>
    </>
  )
}

export default FssaiRegistration