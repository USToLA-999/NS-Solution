
import Navbars from '../../components/Navbars'
import Hero from '../tdsfilling/Hero'
import IconBars from '../../serviceComponent/IconBars'
import Benifitbox from '../tdsfilling/benifitbox'
import { Accordiontds } from '../tdsfilling/Accordiontds'
import { Footers } from '../../components/Footer'

const TdsFilling = () => {
  return (
    <>
        <div className=" bg-orange-500">
        <Navbars />
      </div>
      <Hero/>
      <IconBars />
        <Benifitbox/>
        <Accordiontds/>
        <Footers/>
    </>
  )
}

export default TdsFilling