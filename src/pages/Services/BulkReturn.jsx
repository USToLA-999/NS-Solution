
import Navbars from '../../components/Navbars'
import Hero from '../bulkreturn/Hero'
import IconBars from '../../serviceComponent/IconBars'
import Workbox from '../IsoRegistration/Workbox'
import { AccordionBulk } from '../bulkreturn/AccordionBulk'
import { Footers } from '../../components/Footer'

const BulkReturn = () => {
  return (
    <>
        <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
        </div>
        <Hero/>
        <IconBars />
        <Workbox />
        <AccordionBulk/>
        <Footers/>
    </>
  )
}

export default BulkReturn