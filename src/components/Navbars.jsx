import { Link } from "react-router-dom"
import NavLinks from "./NavLinks"
import { useState } from "react"




const Navbars = () => {

    const [open, setOpen] = useState(false)


  return (
    <nav className="">
        <div className="flex items-center font-medium justify-around">
            <div className="z-50 p-4 md:w-auto w-full flex justify-between ">
                <span className="text-4xl font-bold ">
                    <Link to='/' >
                         CA Solution
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
                    md:hidden absolute bg-orange-400 z-20  w-full h-105 top-0 py-24 pl-4
                    duration-500 ${open ? "left-0" : "left-[-100%]"}
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