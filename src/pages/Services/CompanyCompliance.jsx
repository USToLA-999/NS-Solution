import { Footers } from "../../components/Footer"
import Navbars from "../../components/Navbars"
import IconBars from "../../serviceComponent/IconBars"
import { AccordionBusiness } from "../companycomp/AccordionBusiness"
import Hero from "../companycomp/Hero"



const CompanyCompliance = () => {
  return (
    <>
      <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
      </div>
      <Hero/>
      <IconBars/>
      <AccordionBusiness/>
      <Footers/>
    </>
  )
}

export default CompanyCompliance