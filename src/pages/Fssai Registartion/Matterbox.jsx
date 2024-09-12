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
                  FSSAI Registration ( FSSAI Licence)
                  </h1>
                </BoxReveal>
              </div>
            </div>
            <div className="paralinebox justify-center items-center ">
              <div className="patalines mt-5 text-xl">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p>
                    {" "}
                    All food business operators (FBO) in India are eligible to apply for a food license from the Food Safety and Standards Authority of India (FSSAI), a legal body. For the purpose of controlling food quality, all FBOs are required to abide by all FSSAI norms and regulations.
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="mt-4">
                    {" "}
                    A Food Business Organization (FBO) is required to obtain an FSSAI License or Registration, which is contingent upon many aspects such as production volume, food business activity management, and scope of operations. The FBO will receive a 14-digit number during the FSSAI Registration process, which must be printed on food packaging.
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="mt-4">
                    {" "}
                    FSSAI Registration, which is essentially a food safety certificate distributed by the Indian food authority, guarantees the security of food goods. An FSSAI License may be issued to any factory, trader, restaurant, supermarket, importer, exporter, etc. By ensuring that food goods go through particular quality inspections, FSSAI Licensing helps to reduce the number of occurrences of adulteration and subpar products.
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="mt-4">
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