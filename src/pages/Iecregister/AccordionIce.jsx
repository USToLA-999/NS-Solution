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

 export function AccordionIce  () {
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
                    1. What is IEC code registration?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  A company or individual must have an Import Export Code, or IEC, which is a 10-digit code, in order to import or export products or services. The Indian government's Ministry of Commerce and Industries, under the direction of the Director General of Foreign Trade (DGFT), issuing this code. This code has perpetual validity, thus it does not need to be renewed. After the necessary modifications are made and the papers are submitted, this code is generated in a timeframe of 5 to 15 working days.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2. How to get IEC code registered?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  You can get the IEC code registered by using our expert services at NSSOLUTION.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3. How much does it cost to get the IEC code registered?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  We at NSSOLUTION cost our clients Rs.3,499 to get a new IEC code and Rs.2,000 to make some amendments in the IEC code.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. What are the documents required to get the IEC code registered?

                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  A list of all the documentation needed to register an entity with the IEC is provided below. The list is mentioned above for any other. • A copy of the PAN card business • A copy of the property records, if any • A copy of the lease, if the property is rented • Landlord NOC (We will supply the format). • Firm's cancelled check • Water and electricity bills for the business; • Phone bills under the same name; • Copies of tax returns (if the business is sole proprietorship) • The certificate of incorporation (if a business) • The company's bank statement • One company letterhead (if applicable) • AOA and MOA (if applicable)
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(5)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    5.  Can a person/entity have more than 1 IEC code?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  No. Only 1 IEC is issued to a person/entity. So if more than 1 IEC code is issued, then the same should be surrendered to the Regional Office for cancellation.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(6)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    6.  Can I surrender my IEC number?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Yes, you can. You need to inform the issuing of the authority about such a decision. And they shall immediately cancel your IEC number after electronically transmitting it to DGFT for onward transmission to the Customs and Regional Authorities.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(7)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    7. How can I get a duplicate IEC certificate online?

                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  If you have taken IEC Certificate in new process e-IEC online, then you can download your certificate any time by login into the IEC portal with your username details. But if you had taken your IEC in the physical process, you have to re-apply for e-IEC with all the documents, and DGFT will provide you a certificate in a new online format.
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

