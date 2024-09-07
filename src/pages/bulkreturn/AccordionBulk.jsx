import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

export function AccordionBulk (){
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
  
    return (
      <div className="maincontainer relative overflow-x-clip pb-20 sm:pb-20 bg-blue-50">
        <div className="container sm:container mx-auto md:container md:auto">
          <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
            <div className="biglines  mt-10">
              <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                Frequently Asked Questions?
              </h1>
            </div>
          </div>
          <div className="justify-center  mx-auto mt-5 ">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-2 justify-center ">
              <div className=" justify-center   ">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(1)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    1. Who needs to file Income Tax Returns?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Any person whose income exceeds the basic exemption limit as specified in the Income Tax Act,1961 is required to file an Income Tax Return. Now, the basic exemption limit changes from year to year. At present the limit is Rs. 2,50,000 for individuals of less than 60 age, Rs. 3,00,000 for individuals in the age bracket of 60-80 years, and Rs. 5,00,000 for individuals of more than 80 age.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2. Is having PAN(Permanent Account No.) mandatory for income tax return filing?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Yes, a person must have PAN to proceed for filing the income tax return.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3. What are the benefits of filing income tax returns (ITR)?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The filing of ITR is a legal obligation that everyone who falls under is required to comply with. But, it also helps in getting bank loans, visas, for claiming refund against excess income tax paid, as a proof of income certificate, and most importantly for tax payer’s self-satisfaction.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. What are the forms of return prescribed under the Income-tax Law?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Different forms prescribed under the Income-Tax law are:- 1. ITR-1(SAHAJ), ITR-2, ITR-2A, ITR-3, ITR-4, ITR-4S(SUGAM), ITR-5, ITR-6, and ITR-7. 2. For Individuals relevant forms are till ITR-4S.
                  </AccordionBody>
                </Accordion>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

