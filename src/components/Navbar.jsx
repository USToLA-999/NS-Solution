import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {
  const content = (
    <div className=" lg:hidden z-50 block absolute top-16 w-full left-0 right-0 bg-orange-500 transition md:hidden ">
      <ul className="text-center  text-xl p-10 ">
        <Link   to="/">
          <li className="py-4 my-2 border-b border-orange-300 hover:bg-orange-300 hover:rounded  ">Home</li>
        </Link>
        <Link   to="/Service">
          <li className="py-4 my-2 border-b border-orange-300 hover:bg-orange-300 hover:rounded  ">Service</li>
        </Link>
        <Link   to="/Contact">
          <li className="py-4 my-2 border-b border-orange-300 hover:bg-orange-300 hover:rounded  ">Contact</li>
        </Link>
        <Link   to="/About">
          <li className="py-4 my-2 border-b border-orange-300 hover:bg-orange-300 hover:rounded  ">About</li>
        </Link>
      </ul>
    </div>
  );

  const [click, setClick]  = useState(false);
  const handleClick = () => {
    setClick(!click);
  }
  return (
    
    <nav className=" md:container z-50 md:mx-auto">
      <div className="  h-10vh justify-between flex z-500 text-white lg:py-5 px-5 py-4 ">
        <div className="flex-1 flex items-center  ">
        <Link   to="/">
          <span className="text-3xl font-bold ">NS Solution</span>
        </Link>
          <div className="lg:flex md:flex flex flex-1 items-center justify-end font-normal hidden ">
            <div className="flex-10  ">
              <ul className="flex gap-8 mr-16 text-[18px] ">
                <Link  to="/">
                  <li className="hover:text-gray-400 transition  cursor-pointer ">Home</li>
                </Link>
                <Link  to="/Service">
                  <li className="hover:text-gray-400 transition  cursor-pointer ">Service</li>
                </Link>
                <Link  to="/Contact">
                  <li className="hover:text-gray-400 transition  cursor-pointer ">Contact</li>
                </Link>
                <Link  to="/About">
                  <li className="hover:text-gray-400 transition  cursor-pointer ">About</li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            {click && content}
          </div>
          <button className="block md:hidden sm:hidden transition  ml-auto" onClick={handleClick}>
            {click ? <FaTimes className="text-2xl" /> : <CiMenuFries className="text-2xl" />}
          </button>
        </div>
      </div>
      
    </nav>

    
  );
};

export default Navbar;
