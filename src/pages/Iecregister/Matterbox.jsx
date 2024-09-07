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
              Import Export Code
              </h1>
            </BoxReveal>
          </div>
        </div>
        <div className="paralinebox justify-center items-center ">
          <div className="patalines mt-5 text-2xl">
            {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p>
                {" "}
                
              </p>
            </BoxReveal> */}

            
          </div>
          <div className="explainboxpara mt-5 text-xl">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p>
                {" "}
                A company or individual must have an Import Export Code, or IEC, which is a 10-digit code, in order to import or export products or services. The Indian government's Ministry of Commerce and Industries, under the direction of the Director General of Foreign Trade (DGFT), issuing this code. This code has perpetual validity, thus it does not need to be renewed. After the necessary modifications are made and the papers are submitted, this code is generated in a timeframe of 5 to 15 working days.
              </p>
            </BoxReveal>
          </div>
          <div className="explainboxpara mt-5 text-xl">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p>
                {" "}
                There are numerous names for this code, including IE code, IE license, importer exported code, import-export code, import-export license, and so on. This code may be issued under your name or the name of the business. It is valid for all divisions, units, factories, and branches once it is issued.
              </p>
            </BoxReveal>
          </div>
          <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
          <div className="biglines  mt-10">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              When is IEC code required?
              </h1>
            </BoxReveal>
          </div>
        </div>

          <div className="explainboxpara mt-5 text-xl">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p>
                {" "}
                1. It is needed by the customs authorities to clear the shipments in the case of any imports.
              </p>
            </BoxReveal>
          </div>
          <div className="explainboxpara mt-5 text-xl">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              
              <p>
                {" "}
                2.Also, it is needed by the bank to transfer the amount in the case of any imports made.
              </p>
            </BoxReveal>
          </div>
          <div className="explainboxpara mt-5 text-xl">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              
              <p>
                {" "}
                3.A visa is essential if an exporter needs to send shipments.
              </p>
            </BoxReveal>
          </div>
          <div className="explainboxpara mt-5 text-xl">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              
              <p>
                {" "}
                4.Alternatively, if the exporter is anticipated to receive funds in foreign currency and they are transferred immediately into his bank account.
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

export default Matterbox