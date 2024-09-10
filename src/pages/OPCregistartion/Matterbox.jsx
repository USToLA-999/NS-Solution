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
                  What is a One Person Company (OPC)?
                  </h1>
                </BoxReveal>
              </div>
            </div>
            <div className="paralinebox justify-center items-center ">
              <div className="patalines mt-5 text-xl">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p>
                    {" "}
                    The term "One Person Company (OPC)" was first used in 2013 with the introduction of the Companies Act, 2013. This opened up a whole new world of possibilities for aspiring business owners who want to launch their own one-person economic entity and launch a firm on their own. A sole proprietorship is refined into a one-person business (OPC).
                  </p>
                   <p className="mt-2">

                    {" "}
                    An OPC limits a promoter's responsibility for contributions to the business by giving them total control over the enterprise. A nominee for a director is present, but they have no power until the actual director is unable to continue. The Company's Act of 2013 allows a company to be founded with just one director and one member, per Section 2 (62). There are less compliance requirements for a One Person organization Registration in India than for any other kind of organization. Since an OPC is operated by just one person, it is easy to handle. An OPC can be registered in India if you are an entrepreneur seeking unique success.
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