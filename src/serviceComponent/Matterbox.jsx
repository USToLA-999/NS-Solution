import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import BoxReveal from "../components/magicui/BoxReveal";
import Particles from "../components/magicui/particles";

const Matterbox = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  console.log("BoxReveal component loaded", BoxReveal);

  return (
    <div className="maincontainer relative overflow-x-clip pb-20 sm:pb-20 bg-blue-100">
      <div className="container sm:container mx-auto md:container md:auto">
        <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
          <div className="biglines  mt-10">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                Understanding Income Tax Returns in India
              </h1>
            </BoxReveal>
          </div>
        </div>
        <div className="paralinebox justify-center items-center ">
          <div className="patalines mt-5 text-2xl">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p>
                {" "}
                In India, there are two different kinds of taxes: direct tax and
                indirect tax.
              </p>
            </BoxReveal>
          </div>
          <div className="explainboxpara mt-5 text-xl">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p>
                {" "}
                1. <b>Direct Tax</b>
                is one that is imposed straight on the earnings of an individual
                or an organization, including profits from their business,
                salaries, and wages. The taxpayer pays this kind of tax, which
                includes income tax, directly to the government, representing
                their income and financial situation.
              </p>
            </BoxReveal>
          </div>
          <div className="explainboxpara mt-5 text-xl">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p>
                {" "}
                2. <b>Indirect Tax</b> is imposed. and used to products or
                services. Thus, if you are buying a new outfit or a cell phone.
                The Goods and Services Tax (GST) currently covers the majority
                of indirect taxes.
              </p>
            </BoxReveal>
          </div>
          <div className="explainboxpara mt-5 text-xl">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p>
                {" "}
                3. <b>Income Tax (Direct Tax)</b>
              </p>
              <p>
                {" "}
                imposed on individuals whose earnings surpass a specific
                threshold. The income may come from a job, a rental property,
                interest from savings accounts, money from mutual funds, sales
                of real estate, or money from a business or profession. The
                Union Budget, which is approved by the Indian Parliament,
                determines the income tax rates for the upcoming fiscal year.
                The term income tax refers to the tax paid on these incomes.
              </p>
            </BoxReveal>
          </div>
          <div className="explainboxpara mt-5 text-xl">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p>
                {" "}
                4. <b>Income Tax Return</b>
              </p>
              <p>
                {" "}
                All that is required is the filing of a form with the Income Tax
                Department. a document that must be submitted as a revenue
                statement. The way it is set up makes it easy for taxpayers to
                calculate their tax burden, plan their tax payments, and request
                refunds for overpaid taxes. Before filing their returns,
                individuals must first ascertain the kind of Income Tax Return
                (ITR) Form they must complete. Which Form needs to be completed
                will depend on the taxpayers income. Its goal is to notify the
                government of our income and the taxes we have paid on it.
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
};

export default Matterbox;
