import { DefaultAccordion } from "../../components/AccordianPages"
import { Footers } from "../../components/Footer"

import Navbars from "../../components/Navbars"
import Cards from "../../serviceComponent/Cards"
import FourBox from "../../serviceComponent/FourBox"
import Hero from "../../serviceComponent/Hero"
import IconBars from "../../serviceComponent/IconBars"
import Matterbox from "../../serviceComponent/Matterbox"
import Worksbox from "../../serviceComponent/Worksbox"
import './Services.css'

const Service = () => {
  return (
    <>
    <div className=" bg-orange-500">
        <Navbars/>
    </div>
    <Hero/>
    <FourBox/>
    <Matterbox/>
    <IconBars/>
    <Worksbox/>
    <DefaultAccordion/>
    <Cards/>
    <Footers/>
    </>
  )
}

export default Service