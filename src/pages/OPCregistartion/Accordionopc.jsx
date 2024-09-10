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

export function Accordionopc () {
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
                    1. What do you understand by OPC and its registration?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The One Person Company (OPC), a recently established business structure, maintains the benefits of both being a sole proprietor and a corporate entity with just one member—the director and a nominee. The Companies Act of 2013 introduced the idea of OPC Registration in an effort to support potential entrepreneurs in starting their business. They can be used to establish a one-person business. All entrepreneurs must complete the OPC Registration.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2. How many prople are required to start One Person Company?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  At least one nominee is required to start an OPC who can act as a shareholder as well as a director.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3. How much capital is required to begin with OPC company?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The lowest capital need is one lakh rupees, while your investment may require a larger sum. In an OPC Company, authorized capital and investment are not the same thing. You are free to invest as much as you like, but in order to formally incorporate a company, you must start with a capital of one lakh rupees.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. Who can become member of One Person Company?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Any individual/organization can become a member of One person company including foreigners/NRI’s.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(5)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    5. For Incorporation of One Person Company do I have to be present in person?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  You do not need to appear in person at our office or any other office to complete the entire process because it is all done online. Documents must be scanned and supplied via mail.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(6)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    6. What is the reason that OPC company is preferred by individuals?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  a) Compliances are low b) Simple to incorporate c) Fee and expenses are less d) Body corporate e) Limited liability
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(7)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    7. Are we allowed to from more than one One Person Company?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The candidate in your company cannot be chosen to be the nominee in any other OPC firm, and you are not allowed to form more than one OPC.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(8)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    8. In addition to the registration cost, are there any further payments required for the incorporation certificate?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  There is absolutely no other payment. We will send you an all-inclusive invoice, with no hidden charges.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(9)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    9. Which compliances are essential for an OPC to be aware of?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The following fundamental requirements must be met: • Maintaining an accurate book of accounts; • Statutory Audit of Financial Statements • Recording the Annual ROC return, which includes form MGT; • Filing the firm income tax return for the entire year before September 30.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(10)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    10. Is Foreign Direct Investment ( FDI ) allow for One Person Company (OPC)?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  No, FDI is not allowed for the formation of OPC Companies; if it is, the company will no longer truly be OPC.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 11} icon={<Icon id={11} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(11)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    11. Is there any tax advantage applicable to an OPC?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  No there are no special tax advantages available for OPC. Tax is paid at the flat rate of 30% on profits.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 12} icon={<Icon id={12} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(12)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    12. How much time taken for OPC registration in India?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Normally, at LegalRaasta the registration process takes 7 working days.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 13} icon={<Icon id={13} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(13)}>
                    <h1 className="max-w-5xl font-display text-2xl  tracking-tight text-slate-900 sm:text-2xl">
                    13. What actions are taken in case of the death of a member fo the OPC company?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  In the event of a member's death, the nominee assumes management of the business. The nominee has 15 days to notify the Registrar of Companies by registering Form INC-4 and paying the appropriate fee.
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

