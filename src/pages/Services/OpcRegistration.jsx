
import Navbars from '../../components/Navbars'
import Hero from '../OPCregistartion/Hero'
import Matterbox from '../OPCregistartion/Matterbox'
import Benifitbox from '../OPCregistartion/Benifitbox'
import Advantangebox from '../OPCregistartion/Advantangebox'
import IconBars from '../../serviceComponent/IconBars'
import { Accordionopc } from '../OPCregistartion/Accordionopc'
import { Footers } from '../../components/Footer'

const OpcRegistration = () => {
  return (
    <>
    <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
    </div>
      <Hero/>
      <Matterbox/>
      <Benifitbox/>
      <Advantangebox/>
      <IconBars/>
      <Accordionopc/>
      <Footers/>
    </>
  )
}

export default OpcRegistration