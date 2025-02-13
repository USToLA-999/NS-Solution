import  { useEffect, useState } from "react";
import Particles from "../../components/magicui/particles";
import BoxReveal from "../../components/magicui/BoxReveal";
import { useTheme } from "@material-tailwind/react";
import { RiBankCardFill } from "react-icons/ri";
import { FaFileImage, FaFilePen, FaHandshake, FaMapLocationDot, FaRegIdCard, FaSheetPlastic } from "react-icons/fa6";
import { BiIdCard } from "react-icons/bi";

const Requiredbox = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="maincontainer relative overflow-x-clip pb-20 sm:pb-20 bg-blue-100">
      <div className="container sm:container mx-auto md:container md:auto">
        <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
          <div className="biglines  mt-10">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                Required Documents for GST Registration
              </h1>
            </BoxReveal>
          </div>
        </div>
        <div className="contentbox mt-5 mb-3 justify-center items-center text-center mx-auto">
          <div className="grid lg:grid-cols-4 mx-auto justify-center items-center md:grid-cols-1  gap-10 sm:grid-cols-1    ">
            <div className="justify-center mt-3  items-center">
              <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="headercontent mt-4 text-center justify-center items-center flex">
                  <BiIdCard className="text-center text-6xl text-orange-500 " />
                </div>
                <div className="paralines mt-3 mb-3">
                  <h1 className="text-2xl lg:text-2xl">Adhaar card</h1>
                </div>
              </div>
            </div>
            <div className="justify-center mt-3  items-center">
              <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="headercontent mt-4 text-center justify-center items-center flex">
                  <FaRegIdCard  className="text-center text-6xl text-orange-500 " />
                </div>
                <div className="paralines mt-3 mb-3">
                  <h1 className="text-2xl lg:text-2xl">PAN card</h1>
                </div>
              </div>
            </div>
            <div className="justify-center mt-3  items-center">
              <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="headercontent mt-4 text-center justify-center items-center flex">
                  <FaHandshake className="text-center text-6xl text-orange-500 " />
                </div>
                <div className="paralines mt-3 mb-3">
                  <h1 className="text-2xl lg:text-2xl">Rent Agreement in case the PPOB(Principal Place of Business) is rented</h1>
                </div>
              </div>
            </div>
            <div className="justify-center mt-3  items-center">
              <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="headercontent mt-4 text-center justify-center items-center flex">
                  <FaSheetPlastic className="text-center text-6xl text-orange-500 " />
                </div>
                <div className="paralines mt-3 mb-3">
                  <h1 className="text-2xl lg:text-2xl">Proof of business registration or Incorporation certificate</h1>
                </div>
              </div>
            </div>
            <div className="justify-center mt-3  items-center">
              <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="headercontent mt-4 text-center justify-center items-center flex">
                  <FaFileImage className="text-center text-6xl text-orange-500 " />
                </div>
                <div className="paralines mt-3 mb-3">
                  <h1 className="text-2xl lg:text-2xl">Identity and Address proof of Promoters/Director with Photographs</h1>
                </div>
              </div>
            </div>
            <div className="justify-center mt-3  items-center">
              <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="headercontent mt-4 text-center justify-center items-center flex">
                  <FaMapLocationDot className="text-center text-6xl text-orange-500 " />
                </div>
                <div className="paralines mt-3 mb-3">
                  <h1 className="text-2xl lg:text-2xl">Address proof of the place of business</h1>
                </div>
              </div>
            </div>
            <div className="justify-center mt-3  items-center">
              <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="headercontent mt-4 text-center justify-center items-center flex">
                  <RiBankCardFill className="text-center text-6xl text-orange-500 " />
                </div>
                <div className="paralines mt-3 mb-3">
                  <h1 className="text-2xl lg:text-2xl">Bank Account statement/Cancelled cheque</h1>
                </div>
              </div>
            </div>
            <div className="justify-center mt-3  items-center">
              <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="headercontent mt-4 text-center justify-center items-center flex">
                  <FaFilePen className="text-center text-6xl text-orange-500 " />
                </div>
                <div className="paralines mt-3 mb-3">
                  <h1 className="text-2xl lg:text-2xl">Letter of Authorization/Board Resolution for Authorized Signatory</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Particles
        className="absolute inset-0 "
        quantity={200}
        ease={90}
        color={color}
        refresh
      />
    </div>
  );
};

export default Requiredbox;
