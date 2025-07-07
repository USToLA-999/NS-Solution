
import { IoCall } from "react-icons/io5";
import aboutimagepng from "../assets/aboutimagepng.png";

const Hero = () => {
 
  return (
    <div className="maincontainer  overflow-x-clip pb-20 sm:pb-20 bg-blue-100">
      <div className="container sm:container mx-auto md:container md:mx-auto">
        <div className=" grid lg:grid-cols-2 md:grid-cols-1 items-center pt-4  justify-center  sm:grid-cols-1 ">
          <div className="  lg:mt-10 sm:mt-10">
            <div className="headerlines pt-5 pb-2 mx-auto lg::mx-auto text-wrap  justify-center items-center ">
              <h1 className="text-5xl sm:text-7xl font-bold">
                We are <span className="text-orange-500 font-bold">CA Solution.</span>{" "}
                Connected finances for Indian tax payers.
              </h1>
            </div>
            <div className="paralines mt-5 md:mt-5 sm:mt-5 ">
              <p className="text-2xl ">
                Our goal is to help millions of Indian consumers and businesses
                by streamlining financial processes and saving money and time.
                We are a technology firm that creates reliable, practical, and
                enlightening platforms to help our clients manage their money
                and strengthen their bond with it.
              </p>
            </div>
          </div>
          <div className="  lg:mt-10 sm:mt-10">
            <div className="headerlines pt-5 pb-2 mx-auto lg::mx-auto text-wrap  justify-center items-center ">
              <img src={aboutimagepng} alt="image" className=" mx-auto" />
            </div>
          </div>
        </div>
      </div>
       <a href="tel:+91 9899971517"  target="_blank" className="whatsapp_float items-start fixed z-50 bottom-6 left-10 "> <IoCall  className='text-5xl text-green-600' /> </a>
    </div>
  );
};

export default Hero;
