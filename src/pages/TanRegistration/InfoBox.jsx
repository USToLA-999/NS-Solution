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
                TAN Registration
                </h1>
              </BoxReveal>
            </div>
          </div>
          <div className="paralinebox justify-center items-center ">
            {/* <div className="patalines mt-5 text-2xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                </p>
              </BoxReveal>
            </div> */}
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  The 10-digit alphanumeric Tax Deduction and Collection Account Number, or TAN Number, is a shorter version of this number. Every assessee who plans to deduct TDS must apply for a TAN and provide this number in all TDS returns, installment payments, and other communications with the Income Tax Department regarding TDS.
                </p>

                <p>
                  {" "}
                  Failing to do so could result in a severe penalty of up to Rs. 10,000. The Banks will not get TDS Returns and Payments if the TAN is not quoted. LegalRaasta can help you quickly register for your TAN online.
                </p>
              </BoxReveal>
            </div>
            {/* <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  According to the ESI Act of 1948, units or establishments with ten or more employees that pay up to Rs. 15,000 a month must be registered for ESIC. The benefits provided by the program are backed by pledges made by companies and covered employees at a certain wage percentage. Currently, covered businesses contribute 4.75% of earnings owed to their employees, and covered employees contribute 1.75% of wages to the ESIC. Additionally, the state bears a 1/8th portion of the cost of medical benefits. CA Solution handles ESI Registration.
                </p>
              </BoxReveal>
            </div> */}
            <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
            <div className="biglines  mt-10">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                Features of TAN Registration
                </h1>
              </BoxReveal>
            </div>
          </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  1. Once a TAN is issued, it is valid for a lifetime.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  2. TDS Payments-TAN must be quoted when depositing TDS in the authorized bank.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                
                <p>
                  {" "}
                  3. Individuals running a proprietorship are required to obtain TAN and deduct tax at the source when required
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                 4. TAN is a 10 character alpha-numeric code issued by the Tax Department for persons responsible for deducting or collecting tax at source.
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