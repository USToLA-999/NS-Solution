import { Link } from "react-router-dom"
import NavLinks from "./NavLinks"
import { useState } from "react"
import logo from '../assets/logonew.png';

const Navbars = () => {

    const [open, setOpen] = useState(false)


  return (
    <nav className=" ">
        <div className="  flex items-center font-medium justify-around">
            <div className="z-50 p-4 md:w-auto w-full flex justify-between ">
                <span className="">
                    <Link to='/' >
                         <img src={logo} width={120} height={100} alt="" aria-label="for coming home" />
                    </Link>
                    </span>
                <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                </div>
            </div>
            <ul className="md:flex hidden uppercase items-center gap-8 font-[poppins]  ">
                {/* <li>
                    <Link to="/" className="py-7 px-3 inline-block">Home</Link>
                </li> */}
                <NavLinks/>
                <li>
                    <Link to="/contact" className="py-7 px-3 inline-block ">Contact</Link>
                </li>
                <li>
                    <Link to="/about" className="py-7 px-3 inline-block">About</Link>
                </li>
            </ul>
            {/*mobile nav*/ }
            <ul className={`
                    md:hidden absolute bg-orange-400 z-20 w-full max-h-[calc(100vh-5rem)] top-20 pl-4
                    overflow-y-auto duration-500 ${open ? "right-0" : "right-[-100%]"}
                `}>
                {/* <li>
                    <Link to="/" className="py-7 px-3 inline-block border-b">Home</Link>
                </li> */}
                <NavLinks/>
                <li>
                    <Link to="/contact" className="py-7 px-3 inline-block border-b ">Contact</Link>
                </li>
                <li>
                    <Link to="/about" className="py-7 px-3 inline-block border-b">About</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbars