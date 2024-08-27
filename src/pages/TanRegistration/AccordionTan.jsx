import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
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


export function AccordionTan () {
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
                    1. Who must obtain a TAN?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Tax deductions at the source are not necessary for salaried individuals. On the other hand, proprietorship owners have to deduct taxes at the source. A TAN must be obtained and tax must be withheld at source for all other entities, including trusts, societies, limited companies, private limited companies, and LLPs.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2. What are the documents required to obtain TAN?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  To obtain TAN, an application must be made in Form 49B at any of the authorized TAN Facilitation Center.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3. What are the due dates of filing TDS Returns?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Depending on the transaction, there are several rates for tax deduction at the source. Based on the employee's income and the amount of tax they are required to pay, the TDS rate for salary is established. The kind of transaction determines the tax rate. If the total rent for the year exceeds Rs. 1,80,000, 10% of the rent on the land, building, or furnishings would be withheld for tax deduction. View the full list of TDS charges. (Source: charts%20%20tables/tds%20rates.htm on incometaxindia.gov.in):
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. When should Service Tax payments be deposited?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  15th of every July, October, January, and May are the due dates for filing quarterly TDS return. Any delay in furnishing your return will result in a penalty of Rs 200 per day not exceeding the total amount of TDS for the quarter.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(5)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    5. What is the penalty for not obtaining tax registration?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  If tax registration is not obtained then a penalty Rs 5000 Rs. 200 a day, whichever is higher may be attracted.
                  </AccordionBody>
                </Accordion>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AccordionTan