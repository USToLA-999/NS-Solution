import Hero from "../../components/contactcomponents/Hero"
import { Footers } from "../../components/Footer"

import Navbars from "../../components/Navbars"




const Contact = () => {
  return (
    <>
      <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
    </div>
     <Hero/>
     <Footers/>
    </>
  )
}

export default Contact