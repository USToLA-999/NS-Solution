
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
                    For Whom Is GST Registration Required?
                </h1>
              </BoxReveal>
            </div>
          </div>
          <div className="paralinebox justify-center items-center ">
            <div className="patalines mt-5 text-2xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  All organizations engaged within buying or selling goods or providing services, or both, should register for GST. However, for below-listed persons, GST Registration is mandatory.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  1. <b>Previous Law Converted Taxpayer</b>
                  : Any individual or entity registered under any of the pre-GST tax legislation, including VAT, excise, service tax, and so on.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  2. <b>Turnover for products Provider</b> : Should your annual sales or turnover of products above Rs. 40 lakh, you must register for GST. The annual cap is set at Rs. 20 lakh for specific Category States.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  3. <b>Turnover for Service Providers :</b>
                </p>
                <p>
                  {" "}
                   GST Registration is required if your annual sales or turnover as a service provider exceeds Rs. 20 lakh. The annual cap for the Special Category Status is Rs. 10 lakh.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  4. <b>Casual Taxpayer:</b>
                </p>
                <p>
                  {" "}
                   If you participate in events or exhibits as a supplier of products or services without having a permanent workplace. Under such circumstances, GST is assessed using a 90-day forecasted turnover. The enrollment is likewise good for ninety days.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  5. <b>Agents of Suppliers or Input Service Distributors (ISD):</b>
                </p>
                <p>
                  {" "}
                   GST Registration is required for all supplier agents and ISD in order to obtain the benefit of Input Tax Credit. If you are an NRI or the owner of an NRI-owned firm in India, you are an NRI taxable person.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                   <b></b>
                </p>
                <p>
                  {" "}
                 6. Portals for e-commerce and sellers Products are sold by each of the many merchants on e-commerce portals like Amazon or Flipkart. However, for all sellers. A GST registration is necessary.
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