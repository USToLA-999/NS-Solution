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

  export function AccordionBusiness() {
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
                    1. I work as a professional, earning more than the income tax slab, like a lawyer, accountant, or chartered accountant. Which tax return ought I to submit?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Professionals are required to file one of two types of returns: ITR 4S if they do not opt to maintain and audit their accounts, or ITR 4 if they do. Therefore, you must file an ITR-4 if you are keeping your books of accounts up to date and having your accounts audited; if not, you must file an ITR 4S utilizing an assumed source of income.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2. When is the deadline for me to submit my company income tax?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The deadline for filing the business and profession income return is typically July 31 of the assessment year; however, if you must have your accounts audited, your deadline is September 30 of the same year.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3. Do I have to keep accounting records? When is the deadline for filing a return using presumptive income or no books of accounts?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  If you work in a specific profession (as defined in Q4), you must keep accurate records of your gross receipts if your gross receipts for the three years prior to the current year exceeded Rs. 1,50,000, or if you plan to launch a new business, your gross receipts are expected to exceed Rs. 1,50,000.

                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. What is included in the Specified Profession?

                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Legal, medical, engineering, architectural, accounting, technical, interior design, film artist, business secretary, information technology, and authorized representative professions are examples of specified professions.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(5)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    5. When can I opt for a Presumptive Source of Income?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  If your turnover or gross receipts fall within the designated ranges (as stated in Q6), or if you are in the business of selling, renting, or leasing products or carriages, you may choose to have an assumed source of income.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(6)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    6. When am I required to get my accounts audited?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  If your turnover or gross receipts above Rs. 2 Cr. (for businesses) or Rs. 50 lakhs (for professions), you must get your accounts audited.

                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(7)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    7. What would happen if I choose not to choose a presumed source of income even though I am qualified?

                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Even if you are eligible, you must keep books of accounts and have your accounts audited if you choose not to use a presumptive source of income.
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

