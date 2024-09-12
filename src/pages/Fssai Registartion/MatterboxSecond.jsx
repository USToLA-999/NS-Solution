import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import BoxReveal from "../../components/magicui/BoxReveal";
import Particles from "../../components/magicui/particles";


const MatterboxSecond = () => {
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
                  Benefits of applying for FSSAI Registration
                  </h1>
                </BoxReveal>
              </div>
            </div>
            <div className="paralinebox justify-center items-center ">
              <div className="patalines mt-5 text-xl">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="text-2xl font-bold">
                    {" "}
                    1. Consumer Awareness
                  </p>
                  <p>
                  Every FBO needs to be aware that having an FSSAI license gives them access to a dependable and devoted clientele.
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="mt-4 text-2xl font-bold">
                    {" "}
                    2. Legal Advantage
                  </p>
                  <p>
                  The regulatory authority oversees FSSAI registration, and noncompliance may result in consequences.
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="mt-4 text-2xl font-bold">
                    {" "}
                    3. FSSAI Logos
                  </p>
                  <p>
                  The FSSAI logo serves as a credibility seal and a guarantee to your customers that the food is safe to eat.
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="mt-4 text-2xl font-bold">
                    {" "}
                    4. Business Expansion
                  </p>
                  <p>
                  A business will become available due to the Food Safety Management Systems' (FSMS) goodwill.
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

export default MatterboxSecond