import Hero from "../../components/contactcomponents/Hero"
import { Footers } from "../../components/Footer"
import Navbar from "../../components/Navbar"




const Contact = () => {
  return (
    <>
      <div className=" bg-orange-500">
        <Navbar />
     </div>
     <Hero/>
     <Footers/>
    </>
  )
}

export default Contact