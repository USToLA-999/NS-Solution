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
                    What is Employee State Insurance Corporation
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
                  Employee State Insurance Corporation (ESIC): This self-financing social security and health insurance program offers a variety of benefits, including free physical aid, burial fees, and more. It also provides medical, maternity, disability, and illness benefits. To the workers and their families as well.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  According to the ESI Act of 1948, units or establishments with ten or more employees that pay up to Rs. 15,000 a month must be registered for ESIC. The benefits provided by the program are backed by pledges made by companies and covered employees at a certain wage percentage. Currently, covered businesses contribute 4.75% of earnings owed to their employees, and covered employees contribute 1.75% of wages to the ESIC. Additionally, the state bears a 1/8th portion of the cost of medical benefits. CA Solution handles ESI Registration.
                </p>
              </BoxReveal>
            </div>
            <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
            <div className="biglines  mt-10">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                    Documents Required For ESI Registration
                </h1>
              </BoxReveal>
            </div>
          </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  1. A license or registration certificate granted in accordance with the Factories Act or the Shops and Establishment Acts.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                  2. Address Proof: The most recent rent receipt for the space you are using, together with, if relevant, a note on the space's capacity.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                
                <p>
                  {" "}
                  3. Latest building Tax/Property Tax receipt (Photocopy).
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                 4. Note and Articles of Association, Partnership Deed, or Trust Deed, based on the type of entity submitting the registration request.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                 5. a photocopy of the CST/ST registration number or certificate of commencement of production (or, if appropriate, the GST registration number).
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                 6. Copy of PAN Card
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                 7. Evidence in support of the date of commencement of production/business/first sale (e.g. Copy of First Invoice).
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                 8.Month wise employment position, salary, etc.
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                 9.Copy of bank statement
                </p>
              </BoxReveal>
            </div>
            <div className="explainboxpara mt-5 text-xl">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p>
                  {" "}
                 10.Family Photo in Duplicate
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