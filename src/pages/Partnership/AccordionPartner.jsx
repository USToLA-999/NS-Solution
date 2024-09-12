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

export function AccordionPartner () {
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
                    1. What is the minimum number of Partners required to start a Limited Libility Partnership?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  At least two partners are required for LLP registration. The maximum partners can be 200. If you are the sole owner, you can register as a One Person Company.
                                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2. Who can become a partner in LLP?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Any individual/organization can become the partner in LLP including foreigners/NRI’s. However, the individual must 18+ above in terms of age and should have a valid PAN card.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3. Do I have to be available in-person to incorporate an LLP?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Our procedure is 100% online which means there is no compulsion for you to be present at our office physically. A scanned copy of documents can be sent to us via mail, and we will handle the rest. You will get the company incorporation certificate from MCA via courier at your business address.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. Once I pay for incorporation, is there any other payment before I get the Incorporation Certificate?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  We do not have any hidden charges. Our system is quite transparent. After making your payment, we will send you an all-inclusive invoice, with no hidden charges. Our team supports you till you get your LLP bank account.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    5. How much money do I need to invest upfront in starting the business?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  It is required that you have a bank account with a minimum balance of at least Rs. 5,000. There is no more money that you need to start the business. This amount does not even need to be deposited with the bank. It is also possible to demonstrate that the capital was used for LLP pre-incorporation expenses, such as LLP registration costs. You may also demonstrate how this capital has been invested in assets like computers and other things.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    6. Can NRI/Foreign Nationals be a Designated Partner in LLP?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Yes, but only after he has been assigned with DIN/DPIN. However, at least one designated partner in LLP must be a Resident of India. The foreign director can also be a majority shareholder in the company.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    7. Can I register LLP at my home address?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Yes, you can register your LLP at your residential address. It is perfectly legal to start the company at your home or in your garage. MCA team typically doesn’t visit your office. You just have to provide your home address proof such as rent agreement or electricity bill.
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

