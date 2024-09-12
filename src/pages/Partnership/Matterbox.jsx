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
                  What is Partnership?
                  </h1>
                </BoxReveal>
              </div>
            </div>
            <div className="paralinebox justify-center items-center ">
              <div className="patalines mt-5 text-xl">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p>
                    {" "}
                    In the context of business, a partnership is a relationship in which two or more people decide to split the profits from a venture that they undertake together or with one of them acting on behalf of the other. Usually, it is done in appropriate language. The degree of ownership fluctuates and depends on certain factors. In this sense, a partnership firm is one that allows for shared business responsibilities. A Partnership firm must be established in accordance with certain laws and guidelines. The Indian Partnership Act, 1932 does not need a partnership firm to be enrolled; only Maharashtra has made this requirement. Furthermore, a partnership firm may be registered at any moment, even years after it was founded. 
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p>
                    {" "}
                    Establishing the partnership is quite simple, but there are some requirements and restrictions that must be met. In a similar vein, the Indian Partnership Act, 1932 stipulates that all partners in a partnership firm must consent to important matters (such as the admission of new partners, the dissolution of the firm, its conversion, etc.), play a leading role in other matters, and share in the substantial gains and losses incurred by the business. It also states that in order to avoid any harsh actions taken by authorities against your company, there must be a written agreement that there are unquestionably more restrictions when establishing a partnership organization, as stated in the Indian Partnership Act, 1933.
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