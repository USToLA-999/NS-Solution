
import  { DefaultAccordion } from "../../components/AccordianPages"
import { Footers } from "../../components/Footer"
import Hero from "../../components/Hero"
import Main from "../../components/Main"
import Navbar from "../../components/Navbar"
import Steping from "../../components/Steping"
import './home.css'


const Home = () => {
  return (
    <>
    <div className=" bg-orange-500">
        <Navbar/>
    </div>
    <Hero/>
    <Main/>
    <Steping />
    <DefaultAccordion />
    <Footers />
    </>
  )
}

export default Home