import NumberTicker from "./magicui/number-ticker";

import { cn } from "../lib/utils";
import DotPattern from "../components/magicui/dot-pattern";

import Meteors from "../components/magicui/meteors";

import VerticalLinearStepper from "./Stepper";

import RetroGrid from "../components/magicui/retro-grid";

const Steping = () => {
  return (
    <div className="steppingbox relative overflow-x-clip pb-20 sm:pb-20 bg-white">
      <RetroGrid />
      <DotPattern className={cn()} />
      <div className="container sm:container mx-auto md:container md:auto">
        <div className="headlinesboix lg:pt-5 lg:pb-10 flex mx-auto justify-center">
          <div className="biglines  mt-10">
            <h1 className="fonting mx-auto max-w-5xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-5xl">
              Loved by our tax payers
            </h1>
          </div>
        </div>
        <div className="justify-center  mx-auto mt-5 ">
          <Meteors number={50} />
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8 mt-2 mx-auto  justify-center  sm:grid-cols-1  ">
            <div className=" justify-center text-center flex ">
              <div className="countingbox text-center justify-center">
                <div className={"flex  w-full flex-col gap-4  "}>
                  <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white">
                      <NumberTicker value={4} />
                      .5+
                    </p>
                    <p>Reviews of Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" justify-center text-center flex ">
              <div className="countingbox text-center justify-center">
                <div className={"flex  w-full flex-col gap-4  "}>
                  <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white">
                      ₹ <NumberTicker value={50} />
                      Cr+
                    </p>
                    <p>worth taxes filed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" justify-center text-center flex ">
              <div className="countingbox text-center justify-center">
                <div className={"flex  w-full flex-col gap-4  "}>
                  <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white">
                      ₹ <NumberTicker value={50} />
                      Cr+
                    </p>
                    <p>worth taxes saved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <div className={"flex  w-full overflow-hidden  "}>
              <div className="grid lg:grid-cols-1 md:grid-cols-1 mx-auto gap-8 mt-2 justify-center  sm:grid-cols-1  ">
                <div>
                  <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                    <h1 className="fonting mx-auto max-w-5xl mb-5 font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                      Loved by our tax payers
                    </h1>
                    <VerticalLinearStepper className=" mt-5 " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steping;
