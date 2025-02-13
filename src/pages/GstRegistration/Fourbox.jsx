import React from "react";
import Meteors from "../../components/magicui/meteors";

const Fourbox = () => {
  return (
    <div className="bodybox relative pt-5 pb-5 overflow-x-clip    bg-orange-300 ">
      <Meteors number={50} />
      <div className="container  sm:container   mx-auto ">
        <div className="headerlines   mx-auto md:mx-auto text-wrap  justify-center items-center ">
          <h1 className="text-center text-4xl lg:text-6xl">
            Types of GST Registration
          </h1>
        </div>
        <div className="contentbox mt-5 mb-3 justify-center items-center text-center mx-auto">
          <div className="grid lg:grid-cols-3 mx-auto justify-center items-center md:grid-cols-1  gap-10 sm:grid-cols-1    ">
            <div className="justify-center mt-3  items-center">
              <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="headercontent mt-4">
                  <h1 className="text-2xl lg:text-2xl">
                    Casual Taxable Persons
                  </h1>
                </div>
                <div className="paralines mt-3 mb-3">
                  <p>
                    A person who occasionally provides goods or services in a
                    State or Union territory without a fixed location is
                    considered a casual taxable person under the GST Act. Under
                    the GST, people that operate traveling enterprises at
                    performances or during certain seasons would be considered
                    casual taxable persons.
                  </p>
                </div>
              </div>
            </div>
            <div className="justify-center mt-3  items-center">
              <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="headercontent mt-4">
                  <h1 className="text-2xl lg:text-2xl">
                    Non-resident Taxable Persons
                  </h1>
                </div>
                <div className="paralines mt-3 mb-3">
                  <p>
                    Any individual, company, or organization that provides goods
                    or services covered by the GST but does not maintain a
                    permanent place of business or residence in India is
                    considered a non-resident taxable person (NRI). Any foreign
                    individual, company, or organization that supplies goods or
                    services to India would therefore be considered a
                    non-resident taxable person and would be required to abide
                    by all relevant GST laws in India.
                  </p>
                </div>
              </div>
            </div>
            <div className="justify-center mt-3  items-center">
              <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="headercontent mt-4">
                  <h1 className="text-2xl lg:text-2xl">
                  E-Commerce Operators
                  </h1>
                </div>
                <div className="paralines mt-3 mb-3">
                  <p>
                  A "electronic commerce operator" is a person who owns, runs, or manages an electronic or digital platform or facility for electronic commerce. Regardless of the size of their firm, anyone who sells online may be considered an e-commerce operator and must register for GST.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourbox;
