import { BsFillShieldLockFill } from "react-icons/bs";
import { IoShieldHalfOutline } from "react-icons/io5";
import { RiFileCheckFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "../magicui/particles";

const Hero = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="maincontainer relative overflow-x-clip pb-20 sm:pb-20 bg-blue-100">
      <div className="container sm:container mx-auto md:container md:auto">
        <div className="headlinesboix lg:pt-5 lg:pb-5  flex justify-center">
          <div className="biglines text-center  mt-10">
            <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-6xl">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="paralinebox justify-center text-center items-center ">
          <div className="patalines mt-4 text-3xl">
            <p>
              Please contact us and let us know how we can be of assistance.
            </p>
          </div>
        </div>
        <div className="justify-center items-center  mx-auto mt-5 ">
          <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
            <div className="biglines mx-auto justify-center align-center  ">
              <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <p>
                  We are here to assist you with any questions, feedback, or
                  support you may need. Please feel free to reach out to us via
                  email at NSSOLUTION@example.com or call us at XXXXXXXX95. Our
                  team is dedicated to responding to all inquiries within 24
                  hours. Your satisfaction is our top priority, and we are
                  committed to providing you with the best service possible. For
                  specific questions about our products or services, please
                  provide detailed information so we can help you more
                  effectively. We look forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="headlinesboix lg:pt-5 lg:pb-5  flex justify-center">
          <div className="biglines text-center  mt-10">
            <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-6xl">
              Welcome to <span className="text-orange-500 font-bold">NS</span>{" "}
              trust and safety center.
            </h1>
          </div>
        </div>
        <div className="paralinebox justify-center text-center items-center ">
          <div className="patalines mt-4 text-2xl">
            <p>
              We protect your data so that you can use our services worry-free.
            </p>
          </div>
        </div>
        <div className="justify-center  mx-auto mt-5 ">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8 mt-2 justify-center  sm:grid-cols-1  ">
            <div className=" justify-center  flex ">
              <div className="relative flex  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="biglines mx-2  mt-10">
                  <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                    We safeguard your data
                  </h1>
                </div>
                <div className="patalines mt-4 mx-3 text-lg">
                  <p>
                    We treat your data with the utmost care. Following extensive
                    examination of our systems and many VAPT audits, we were
                    granted all of our licenses and certifications, including
                    GSP.
                  </p>
                </div>
              </div>
            </div>
            <div className=" justify-center  flex ">
              <div className="relative flex  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="biglines mx-2  mt-10">
                  <h1 className="fonting mx-2 max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                    <IoShieldHalfOutline className="text-green-500" />
                  </h1>
                  <h1 className="fonting mx-2 max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                    Security
                  </h1>
                </div>
                <div className="patalines mt-4 mx-3 text-lg">
                  <p>
                    The first of our main pillars, security, is woven across all
                    of our apps. We protect your apps and data so you can focus
                    on the things that are important to you without worrying.
                  </p>
                </div>
              </div>
            </div>
            <div className=" justify-center  flex ">
              <div className="relative flex  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="biglines mx-2  mt-10">
                  <h1 className="fonting mx-2 max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                    <BsFillShieldLockFill className="text-pink-400" />
                  </h1>
                  <h1 className="fonting mx-2 max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                    Privacy
                  </h1>
                </div>
                <div className="patalines mt-4 mx-3 text-lg">
                  <p>
                    We safeguard your data from unauthorized access by adhering
                    to industry best practices. Your information is encrypted so
                    that only our apps can access it with your permission.
                  </p>
                </div>
              </div>
            </div>
            <div className=" justify-center  flex ">
              <div className="relative flex  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="biglines mx-2  mt-10">
                  <h1 className="fonting mx-2 max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                    <RiFileCheckFill className="text-blue-400" />
                  </h1>
                  <h1 className="fonting mx-2 max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                    Compliance
                  </h1>
                </div>
                <div className="patalines mt-4 mx-3 text-lg">
                  <p>
                    To gain our clients trust, we are compliant with SOC2 Type 2
                    . We have SSL security and are a GSP (GST Suvidha Provider)
                    accredited company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Particles
        className="absolute inset-0 "
        quantity={200}
        ease={100}
        color={color}
        refresh
      />
    </div>
  );
};

export default Hero;
