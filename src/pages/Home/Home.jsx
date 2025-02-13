
import { Footers } from "../../components/Footer"
import Hero from "../../components/Hero"
import Main from "../../components/Main"
// import Navbar from "../../components/Navbar"
import Navbars from "../../components/Navbars"
import Steping from "../../components/Steping"
import './home.css'
import Review from "./Review"


const Home = () => {
  return (
    <>
    <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
    </div>
    <Hero/>
    <Main/>
    <Steping />
    <Review/>
    <Footers />
    </>
  )
}

export default Home