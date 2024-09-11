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

export function AccordionProp () {
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
                    1. Who Can be Proprietor?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The Proprietor must be an Indian citizen and a Resident of India.
                                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2. Will Proprietorship firm have a certificate of Incorporation?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Proprietorship firms do not have a Certificate of Incorporation.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3. How much do I need to invest upfront in starting the business?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  There is no limit on the minimum capital for starting a Proprietorship. Therefore, a Proprietorship can be started with any amount of minimum capital.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. How to open a bank account for a Proprietorship firm?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  In addition to the PAN card, identification evidence, and address proof of the owner, the Reserve Bank of India requires the proprietor to submit two forms of registration for the proprietorship firm in order to open a bank account. Any two of the following may be used as the two forms of registration: professional license, chartered accountant certificate, MSME registration, VAT/TIN/CST registration, Shop & Establishment Act registration, service tax registration, or other forms as specified by the RBI Know Your Customer guidelines.
                  </AccordionBody>
                </Accordion>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

