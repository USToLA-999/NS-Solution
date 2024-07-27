import NeonGradientCard from "../components/magicui/neon-gradient-card";
import { AiOutlineStock } from "react-icons/ai";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import { FaMoneyBill } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { LuFileClock } from "react-icons/lu";
import { MdFamilyRestroom } from "react-icons/md";
import { TbUserDollar } from "react-icons/tb";
import Meteors from "./magicui/meteors";

const Main = () => {
  return (
    <div className="maincontainer relative overflow-x-clip pb-20 sm:pb-20 bg-blue-100">
      <Meteors number={50} />
      <div className="container sm:container mx-auto md:container md:auto">
        <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
          <div className="biglines  mt-10">
            <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Who can file Income Tax Returns (ITR) on NS Solution?
            </h1>
          </div>
        </div>
        <div className="paralines  flex justify-center">
          <p className="mx-auto  max-w-2xl text-lg mt-2 sm:mt-2 tracking-tight text-slate-700">
            No matter what your source of income is, weve got you covered.
            Theres a plan for everybody!
          </p>
        </div>
        <div className="justify-center  mx-auto mt-5 ">
          <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-8 mt-2 justify-center  sm:grid-cols-1  ">
            <div className=" justify-center text-center flex ">
              <NeonGradientCard className="max-w-sm  items-center flex  justify-center text-center">
                <CiFileOn className="text-blue-500 bg-blue-100 rounded-xl text-center align-middle sm:text-center mx-auto  text-5xl" />

                <p className=" text-blue-500  z-10  underline mt-2 text-3xl  ">
                  Revised ITR
                </p>
                <p className=" mt-3 text-slate-500 text-[18px] ">
                  For tax filers who have already filed for FY 2022-23, but seek
                  to edit and file a revised return
                </p>
              </NeonGradientCard>
            </div>
            <div className=" justify-center text-center flex ">
              <NeonGradientCard className="max-w-sm  items-center flex  justify-center text-center">
                <LuFileClock className="text-orange-500 bg-orange-100 rounded-xl text-center align-middle sm:text-center mx-auto  text-5xl" />

                <p className=" text-orange-500  z-10  underline mt-2 text-3xl  ">
                  Belated ITR
                </p>
                <p className=" mt-3 text-slate-500 text-[18px] ">
                  For taxpayers who missed the filing deadline of 31st July. Do
                  easy filing of your Belated ITR
                </p>
              </NeonGradientCard>
            </div>
            <div className=" justify-center text-center flex ">
              <NeonGradientCard className="max-w-sm  items-center flex  justify-center text-center">
                <FaMoneyBill className="text-green-600 bg-green-100 rounded-xl text-center align-middle sm:text-center mx-auto  text-5xl" />

                <p className=" text-green-600  z-10  underline mt-2 text-3xl  ">
                  Salaried
                </p>
                <p className=" mt-3 text-slate-500 text-[18px] ">
                  For taxpayers with salary income from a single/multiple
                  sources. Upload Form16 or enter the details manually.
                </p>
              </NeonGradientCard>
            </div>
            <div className=" justify-center text-center flex ">
              <NeonGradientCard className="max-w-sm  items-center flex  justify-center text-center">
                <TbUserDollar className="text-yellow-500 bg-yellow-100 rounded-xl text-center align-middle sm:text-center mx-auto  text-5xl" />

                <p className=" text-yellow-400  z-10  underline mt-2 text-3xl  ">
                  Revised ITR
                </p>
                <p className=" mt-3 text-slate-500 text-[18px] ">
                  For tax filers who have already filed for FY 2022-23, but seek
                  to edit and file a revised return
                </p>
              </NeonGradientCard>
            </div>
            <div className=" justify-center text-center flex ">
              <NeonGradientCard className="max-w-sm  items-center flex  justify-center text-center">
                <IoIosBusiness className="text-orange-800 bg-orange-100 rounded-xl text-center align-middle sm:text-center mx-auto  text-5xl" />

                <p className=" text-orange-700 z-10  underline mt-2 text-3xl  ">
                  Business
                </p>
                <p className=" mt-3 text-slate-500 text-[18px] ">
                  For SME/MSME businesses where books of accounts are maintained
                  on Tally or other ERPs
                </p>
              </NeonGradientCard>
            </div>
            <div className=" justify-center text-center flex ">
              <NeonGradientCard className="max-w-sm  items-center flex  justify-center text-center">
                <BsGlobeAsiaAustralia className="text-green-800 bg-green-100 rounded-xl text-center align-middle sm:text-center mx-auto  text-5xl" />

                <p className=" text-green-700 z-10  underline mt-2 text-3xl  ">
                  Foreign Currency
                </p>
                <p className=" mt-3 text-slate-500 text-[18px] ">
                  For Individuals with Foreign Income or Foreign Assets, or NRI
                  (Non-Resident-Indian) or RNOR
                  (Resident-Not-Ordinarily-Resident)
                </p>
              </NeonGradientCard>
            </div>
            <div className=" justify-center text-center flex ">
              <NeonGradientCard className="max-w-sm  items-center flex  justify-center text-center">
                <AiOutlineStock className="text-red-500 bg-red-100 rounded-xl text-center align-middle sm:text-center mx-auto  text-5xl" />

                <p className=" text-red-500 z-10  underline mt-2 text-3xl  ">
                  Stocks
                </p>
                <p className=" mt-3 text-slate-500 text-[18px] ">
                  For Individuals with Foreign Income or Foreign Assets, or NRI
                  (Non-Resident-Indian) or RNOR
                  (Resident-Not-Ordinarily-Resident)
                </p>
              </NeonGradientCard>
            </div>
            <div className=" justify-center text-center flex ">
              <NeonGradientCard className="max-w-sm  items-center flex  justify-center text-center">
                <MdFamilyRestroom className="text-blue-800 bg-blue-100 rounded-xl text-center align-middle sm:text-center mx-auto  text-5xl" />

                <p className=" text-blue-800 z-10  underline mt-2 text-3xl  ">
                  HUF
                </p>
                <p className=" mt-3 text-slate-500 text-[18px] ">
                  For HUF having income from house property, interest income,
                  capital gains from shares & mutual funds, business income and
                  others.
                </p>
              </NeonGradientCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
