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
                  Trademark Registration
                  </h1>
                </BoxReveal>
              </div>
            </div>
            <div className="paralinebox justify-center items-center ">
              <div className="patalines mt-5 text-xl">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p>
                    {" "}
                    A trademark is an obvious indicator, such as a word, name, number, label, or color scheme, that distinguishes a company's goods from those offered by competitors. The Controller General of Patents Designs and Trademarks, a division of the Ministry of Commerce and Industry, is responsible for overseeing trademarks in India. The Trademark Act, which was passed in 1999, allows trademarks to be registered and grants their owners the right to damages for any infringements. Corporations can prevent themselves from losing money on their branding investments by registering their trademarks or brand names.
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="mt-2">
                    {" "}
                    You must register your trademark only if it is exclusively for your goods and services.
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="mt-2">
                    {" "}
                    It is not possible to register exact replicas of trademarks that have already been registered as proposed trademarks. Furthermore, trademarks that contain explicitly protected insignia, are satirical, ambiguous, deceptive, or lack distinctiveness are ineligible for registration.
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="mt-2">
                    {" "}
                    You can begin using the R sign in front of your name after the trademark registration process is complete. This symbol is valid for ten years. To extend its registration period for a further ten years, the trademark registration period may be periodically renewed by submitting an application for trademark renewal prior to its expiration.
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