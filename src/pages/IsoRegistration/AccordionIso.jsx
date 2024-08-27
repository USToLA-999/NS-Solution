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

export function AccordionIso () {
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
                    1. What is ISO certification?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                    It is a seal of approval from a third part body and it is an indication that shows your company's credibility and also instills confidence in your clients.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2. How to get ISO certification?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  To obtain your ISO certificate in five to six working days, you can either visit our website or get in touch with our experts. All you have to do is complete a brief form, email us the necessary files, and then kick back. We will manage the entire procedure.                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3. What is the price of obtaining ISO certification?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Different fees are inferred for each ISO certificate that we certify. The base price of the ISO is just Rs. 4499. We would finish this process in 5–6 working days, although it might require a lot of your time and energy.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. What is the process to get ISO certification?

                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  First, fill out the ISO registration form. First, complete our short ISO application form and email the required files. Step 2: Choose the form for registration. Simply choose your certificate from our range of certificates by looking through the provided list. After receiving your request, we will go to work on it. Step 3: Document submission The necessary paperwork would then be created and submitted to the registrar. All you need to do is unwind and let our professionals handle this procedure. It will take three days to finish this process. Step 4: You have finished your work. Lastly, we will complete your certificate's ISO audit. After that, we will mail you the ISO certificate.                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(5)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    5. What are the documents required for ISO certification?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Copy of PAN card Passport size photograph Copy of Aadhaar card/Voter Identity card Two copies of the sales/purchase bill
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(6)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    6. What is ISO 9001?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  A quality management system called ISO 9001 guarantees a constant standard of quality for its clients. Determining and examining the method and procedure does this. Any business concept can utilize this. This covers eight major points, which are: client-centered Human Involvement in Leadership Methodological approach methodical approach to management Constant development Using facts while making decisions advantageous supplier partnerships for both parties
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(7)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    7. What is ISO 14001?

                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  An essential component of every organization might be the environmental management system established by ISO. This standard's primary goals are to cut costs, reuse resources, or recycle (if that is not feasible). The company would become more environmentally friendly and efficient as a result. Even if being completely environmentally friendly is unachievable, it nevertheless motivates businesses to either cut back on raw material consumption or keep it at its existing levels. Put simply, it establishes requirements that must be fulfilled without interfering with regular business operations.
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

