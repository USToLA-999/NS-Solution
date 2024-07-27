import { BorderBeam } from "../../src/components/magicui/border-beam";
import { BiUser, BiWallet } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { cn } from "../lib/utils";
import AnimatedGridPattern from "../components/magicui/animated-grid-pattern";

const IconBars = () => {
  return (
    <div className="maincontainer relative overflow-x-clip pb-20 sm:pb-20 ">
      <div className="container sm:container mx-auto md:container md:auto">
        <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
          <div className="biglines  mt-10">
            <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
              Why Use NS Solution?
            </h1>
          </div>
        </div>
        <div className="justify-center  mx-auto mt-5 ">
          <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-8 mt-2 justify-center  sm:grid-cols-1  ">
            <div className=" justify-center text-center flex ">
              <div className="relative flex  w-full md:w-80  flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <CiGlobe className="text-slate-900  rounded-xl text-center align-middle sm:text-center mx-auto mt-4  text-8xl" />

                <p className=" text-slate-900 mb-3  z-10 mt-3 text-3xl  ">
                  Easy To Operate
                </p>

                <BorderBeam size={250} duration={10} delay={9} />
              </div>
            </div>
            <div className=" justify-center text-center flex ">
              <div className="relative flex  w-full md:w-80 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <BsClock className="text-slate-900  rounded-xl text-center align-middle sm:text-center mx-auto mt-4  text-8xl" />

                <p className=" text-slate-900 mb-3  z-10 mt-3 text-3xl  ">
                  Time Saving
                </p>
                <BorderBeam size={250} duration={11} delay={9} />
              </div>
            </div>
            <div className=" justify-center text-center flex ">
              <div className="relative flex  w-full md:w-80 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <BiUser className="text-slate-900  rounded-xl text-center align-middle sm:text-center mx-auto mt-4  text-8xl" />

                <p className=" text-slate-900 mb-3  z-10 mt-3 text-3xl  ">
                  Time Saving
                </p>
                <BorderBeam size={250} duration={12} delay={9} />
              </div>
            </div>
            <div className=" justify-center text-center flex ">
              <div className="relative flex  w-full md:w-80 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <BiWallet className="text-slate-900  rounded-xl text-center align-middle sm:text-center mx-auto mt-4  text-8xl" />

                <p className=" text-slate-900 mb-3  z-10 mt-3 text-3xl  ">
                  Tax Saving
                </p>
                <BorderBeam size={250} duration={13} delay={9} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.8}
        duration={3}
        repeatDelay={5}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-x-0  mt-3 skew-y-2"
        )}
      />
    </div>
  );
};

export default IconBars;
