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

export function AccordionFssai () {
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
                    1. What is the full form of FSSAI?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The full form of FSSAI is the Food Safety and Standards Authority of India.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2. What is that FSSAI Registration?

                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The FSSAI Registration is a process for all food business operators (FBOs) to apply for getting the certificate which states that the food is safe to consume by the consumers.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3. How to Apply for FSSAI Registration?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  FSSAI License Registration can be easily applied online. But you will require an expert to complete the application procedure. For more details call us on 9136278714
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. What are the types of FSSAI Food Licences?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  <p>1. Basic FSSAI Registration- Annual turnover of less than Rs. 12 Lakhs</p>
                  <p>2. State FSSAI Licence- Annual turnover between Rs.12 Lakhs- Rs. 20 crores</p>
                  <p>3. Central FSSAI Licence- Annual turnover more than Rs.20 crores</p>
                

                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(5)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    5. How to check my FSSAI license renewal status?


                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  FSSAI license renewal can be done for 1-5 years and it is necessary for every food business in India. You can contact our experts on 9136278714.
                  </AccordionBody>
                </Accordion>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

