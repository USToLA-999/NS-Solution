
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import BoxReveal from "../../components/magicui/BoxReveal";
import Particles from "../../components/magicui/particles";

const InfoBox = () => {
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
                    GST Registration - Overview
                </h1>
              </BoxReveal>
            </div>
          </div>
          <div className="paralinebox justify-center items-center ">
            
            <div className="explainboxpara mt-4 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                If annual turnover surpasses the above-mentioned threshold, the GSTIN must be generated. A business that operates without registering for GST is breaking the law and will be subject to harsh penalties.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-4 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  Usually, registering for GST takes four to six working days. Team Online Legal India can help you expedite the GST registration process in just three easy steps.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-3 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                If a business's yearly revenue surpasses the threshold of Rs. 40 lakhs for products, Rs. 20 lakhs for services, or Rs. 10 lakhs, as applicable, they are required to register as regular taxable persons under the products and Services Tax (GST). It is known as GST registration.
                </p>
              </BoxReveal>
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
}

export default InfoBox