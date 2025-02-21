import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import BoxReveal from "../../components/magicui/BoxReveal";
import Particles from "../../components/magicui/particles";


const Infobox = () => {
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
                    ISO Certificate
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
                  ISO certificate is one of the ways that provide standards to the organizations and thus lead way to innovation and development of trade. These standards also ensure that the products and services of the organization meet the customer and regulatory requirements. In addition to this, it also demonstrates continuous improvement. ISO is an independent, non-governmental, international organization that creates standards to ensure the quality, safety, and efficiency of the products, services, and systems. It also certifies that the management system, manufacturing process, service, or the documentation process has fulfilled all the requirements for standardization and quality assurance.
                </p>
              </BoxReveal>
            </div>
            {/* <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  According to the ESI Act of 1948, units or establishments with ten or more employees that pay up to Rs. 15,000 a month must be registered for ESIC. The benefits provided by the program are backed by pledges made by companies and covered employees at a certain wage percentage. Currently, covered businesses contribute 4.75% of earnings owed to their employees, and covered employees contribute 1.75% of wages to the ESIC. Additionally, the state bears a 1/8th portion of the cost of medical benefits. Online Texas handles ESI Registration.
                </p>
              </BoxReveal>
            </div> */}
            <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
            <div className="biglines  mt-10">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                Documents required for ISO Registration
                </h1>
              </BoxReveal>
            </div>
          </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  1. Copy of PAN Card.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  2. Passport size photograph
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                
                <p>
                  {" "}
                  3. Copy of Aadhaar Card/ Voter identity card
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                 4. Two copies of sales bill/purchase bill
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

export default Infobox