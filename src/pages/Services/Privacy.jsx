import { Footers } from "../../components/Footer"
import Navbars from "../../components/Navbars"
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy"



const Privacy = () => {
  return (
    <>
    <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
        </div>
        <PrivacyPolicy />
        <Footers />
    </>
  )
}

export default Privacy