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
   export function Accordionp () {
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
                    1. What do you mean by "Private Company Registration"?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Private “Company registration” is a service, which our firm provides. Private Limited Company registration is one of the most popular form of a “legal structure” for all businesses in India. A “Pvt Ltd.” company is incorporated under the “Companies Act 2013” and is governed by the Ministry of Corporate Affairs (MCA).
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2. How can someone get "Private Company Registered"?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  You can go through the procedure of “Private Company registration” using our expert services. This whole process usually takes 10-15 days to complete. You are only required to fill out a 10-minute questionnaire.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3. What is the process of getting a Private company registered?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Step 1: Obtaining Digital Signature (DSC) and DPIN Step 2: Application of DPIN Step 3: Name approval Step 4: Form SPICe Step 5: e-MoA (INC-33) and e-AoA (INC-34) Step 6: PAN and TAN application
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. Which documents are required to get a Private company registered?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  A comprehensive overview of the paperwork needed to register your private company is provided below: 1. A copy of each director's PAN card 2. All of the directors' passport-sized photos 3. Copies of each director's voter identity card and Aadhaar card 4. A copy of the rent agreement, if the business owns the property. 5. Water and electricity bills (pertaining to the "Business Place") 6. A copy of the property's legal documents, if any 7. Landlord NOC (will be supplied in a format)
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(5)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    5. What are the primary requirements for the incorporation of a "Private Limited Company"?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The following conditions must be met in order to incorporate a "Private Limited Company": • A minimum of two directors and two shareholders are needed. • The affiliated members ought to be in the "2-200" range. • Each director has to be assigned a DPIN. • A copy of each shareholder’s or director’s PAN card, or (for NRIs only) a copy of their passport.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(6)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    6. What is a "Company Registration Certificate?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Following completion of the paperwork filing process, the ROC schedules a meeting with the lawyer to go over the documents and make any required revisions to the filed "MoA and AoA." Following this, the company receives its Certificate of Incorporation.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(7)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    7. What is the minimum capital required to form a Private Limited Company?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  A private limited corporation requires a minimum capital of Rs. 1,000,000 to be established. You do not have to have your bank account open or this amount on hand. This sum might be shown as the start-up's pre-incorporation expenses. It is also possible to display the capital as a sum that has been invested in the assets.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(8)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    8. Is it possible for a Private Limited Company to operate and own many businesses?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  It is only feasible to run more than one business if it is specified in the "MoA" and authorized by the company registrar. The companies may operate in the same industry or a different one. However, distinct professions such as fashion design and event management cannot be registered under the same business.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(9)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    9. How many director are necessery for a Private Limited Company Registration?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Your company needs at least 2 directors to get itself registered as a “Private limited company”.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(10)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    10. What is meant by "Private Liability protection"?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  You are only responsible for the extent of your investment in the company. Personal assets are not to be procured in case of bankruptcy.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 11} icon={<Icon id={11} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(11)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    11. What is "Digital Signature"?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  While a digital signature is similar to a hand signing, it serves the additional function of being attached to electronic reporting. A DSC gives the signature legitimacy.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 12} icon={<Icon id={12} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(12)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    12. Is it possible to register a company at residential place?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  It is only possible if you provide sufficient proof of it. The address to be provided shall be of the place from where the company receives important information (if any) from the MCA or any other concerned authorities.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 13} icon={<Icon id={13} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(13)}>
                    <h1 className="max-w-5xl font-display text-2xl  tracking-tight text-slate-900 sm:text-2xl">
                    13. Are there any annual compilances which must be fulfilled by a Private Limited Company?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  A private limited corporation must comply with several requirements, including: • The firm needs to appoint an auditor. • At least "one AGM (Annual General Meeting) and four board meetings (one in each quarter)" shall be held by the company. • An auditor is required to review the company's books. • In addition, a business must complete forms AOC-4 and MGT-7 within the allotted time limit as part of annual compliance. • The "ITR" must be filed annually with the "Registrar of Companies (RoC)".
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}




