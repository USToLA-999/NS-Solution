import image from "../assets/image.png";
import imag2 from "../assets/imag2.png";
import { Button } from "./Button";
import { IoCall } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="maincontainer relative overflow-x-clip pb-10 sm:pb-1">
      <img
        src={image}
        alt="gg"
        className="absolute lg:block md:hidden sm: hidden -z-50  "
      />
      <img
        src={imag2}
        alt="gg"
        className="absolute right-0 lg:block md:hidden sm: hidden -z-50  "
      />
      <div className="lg:container lg:pb-24 md:pb-10 md:container md:mx-auto  ">
        <div className="headelines justify-center flex align-middle">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  pt-20  text-center lg:pt-32 ">
            <div className="boardline">
              <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-6xl ">
                Accounting
                <span className="relative whitespace-nowrap text-orange-600">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute left-0 top-2/3 h-[0.58em] w-full fill-orange-300/70"
                    preserveAspectRatio="none"
                  >
                    {" "}
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                      {" "}
                    </path>{" "}
                  </svg>
                  <span className="relative"> made simple </span>
                </span>{" "}
                <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-8xl">
                  for small Businesses
                </h1>
              </h1>
            </div>
            <div className=" md:container mx-auto max-w-7xl  sm:px-5 lg:px-8  pt-10 text-center justify-center lg:pt-10 ">
              <p className="mx-auto  max-w-2xl text-lg text-center  text-black">
                Most bookkeeping software is accurate, but hard to use. We make
                the opposite trade-off, and hope you don’t get audited.
              </p>
            </div>
            <div className="buttonbox mt-4 ">
              
                <a href="tel:+91 9899971517" className=" text-black "><Button >Call for details</Button></a>
              
            </div>
            <div className=" md:container mx-auto max-w-7xl  sm:px-5 lg:px-8  pt-4 text-center justify-center lg:pt-5 ">
              <p className="mx-auto  max-w-2xl text-lg tracking-tight text-slate-700">
                File your Taxes now in 3 easy steps, on India’s most trusted
                Income Tax filing portal
              </p>
            </div>
            <div className="justify-center align-center mt-2 relative ">
              <hr />
              <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4 mt-2 justify-center  sm:grid-cols-1    ">
                <div className="">
                  
                  <p className=" text-lg text-center">
                   1. 10+ year data-entry filing experience
                  </p>
                </div>

                <div>
                  
                  <p className=" text-lg text-center">
                   2. Auto-selection of ITR type and regime
                  </p>
                </div>
                <div>
                 
                  <p className=" text-lg text-center">
                    3. Free notice management from us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="tel:+91 9899971517"  target="_blank" className="whatsapp_float items-start fixed z-50 bottom-6 left-10 "> <IoCall  className='text-5xl text-green-600' /> </a>
    </div>
  );
};

export default Hero;
