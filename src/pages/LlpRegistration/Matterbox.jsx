import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import BoxReveal from "../../components/magicui/BoxReveal";
import Particles from "../../components/magicui/particles";


const Matterbox = () => {
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
                  Limited Liability Partnership (LLP)
                  </h1>
                </BoxReveal>
              </div>
            </div>
            <div className="paralinebox justify-center items-center ">
              <div className="patalines mt-5 text-xl">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p>
                    {" "}
                    Established in India, Limited Liability Partnerships (LLPs) are protected from liability for the wrongdoing of their participants under the "Limited Liability Partnership Act, 2008". Experts, Micro and Small Businesses" that are closely held or family-owned prefer LLP.
                  </p>
                   <p className="mt-4">
                        {" "}
                        While limited liability partnerships offer their partners the benefit of restricted responsibility, they also require special attention. A private limited company's partners' liability to creditors is restricted. Banks and creditors can only sell the organization's assets in the event of bankruptcy; they cannot sell the directors' personal holdings.
                    </p>
                  <p className="mt-4">
                        {" "}
                        As a result, every participant in an LLP benefits from a form of "limited liability" that serves as the partnership's safeguard for them. "CA Solution," located in "Delhi " is responsible for LLP registration.
                  </p>
                </BoxReveal>
              </div>
            </div>
          </div>
          <Particles
            className="absolute inset-0 "
            quantity={200}
            ease={90}
            // eslint-disable-next-line no-undef
            color={color}
            refresh
          />
        </div>
      );

}

export default Matterbox