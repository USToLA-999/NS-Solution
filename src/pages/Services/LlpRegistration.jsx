
import Navbars from '../../components/Navbars'
import Hero from '../LlpRegistration/Hero'
import Matterbox from '../LlpRegistration/Matterbox'
import Benifitbox from '../LlpRegistration/Benifitbox'
import IconBars from '../../serviceComponent/IconBars'
import { Accordionollp } from '../LlpRegistration/Accordionllp'
import { Footers } from '../../components/Footer'


const LlpRegistration = () => {
  return (
    <>
        <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
    </div>
      <Hero/>
      <Matterbox/>
      <Benifitbox/>
      <IconBars/>
       <Accordionollp/>
      <Footers/>
    </>
  )
}

export default LlpRegistration