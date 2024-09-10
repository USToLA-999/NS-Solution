
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
                  What is Private limited company?
                  </h1>
                </BoxReveal>
              </div>
            </div>
            <div className="paralinebox justify-center items-center ">
              <div className="patalines mt-5 text-xl">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p>
                    {" "}
                    A private limited corporation is the most prevalent "legal structure" in India. Incorporated under the Companies Act of 2013, a Private Limited Company Registration in India is overseen by the Ministry of Corporate Affairs. It has separate legal status from its owners. It is popular because it offers a host of advantages to its directors, including restricted liability, which limits the amount of personal assets that bank or creditors may seize in the event of a company default. Unless you have a legitimate company entity to support you, starting a business in India is a pipe dream.
                  </p>
                   <p className="mt-2">

                    {" "}
                    It is regarded as the greatest business entity by all, from seasoned professionals to newbies, from aspiring startups to seasoned business owners, and from northern to southern India. You can register your Private Limited Company by using our services. We have provided Private Limited Company Registration services to clients from major Indian cities.
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