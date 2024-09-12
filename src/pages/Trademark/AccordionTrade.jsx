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

export function AccordionTrade () {
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
                    1. What is Trademark Registration?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The registration of visual symbols, such as words, names, devices, labels, numbers, etc., is known as trademark registration. In India, registering a trademark aids the applicant or trademark owner in protecting their brand. Another benefit of trademark registration is the avoidance of trademark duplication.

                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2. How to get Trademark registration done?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  "Selecting a name, then completing a trademark search, after that filing an application for the trademark registration" is the simplest process for registering a trademark. then submitting the necessary paperwork, such as the trademark name or address. The trademark is then published in the Indian Trade Mark Journals following examination of the application. And lastly, the certificate of trademark registration being issued.

                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3.How much does it cost to get trademark registration done?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Starting At: Rs.6499 + Govt. Fees
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. What is the process to get trademark registration?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The following is the procedure for registering a trademark: Step 1: Selecting a trademark is the first step. Step 2: The applicant needs to confirm that the proposed trademark does not coincide with or look similar to an already-registered trademark by searching the trademark records registry. Step 3: The trademark office or the internet can conduct the search. Step 4: Talking with an experienced attorney is a good idea because they are knowledgeable about their field and ready to perform a thorough search.

                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(5)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    5. Which documents are needed to register a trademark?

                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  To register a trademark, all applicants, including companies, must provide the following paperwork. A copy of the trademark, the partnership deed certificate, identification proof of the individual registering the trademark, and address verification of the corporation registering the trademark are all required.

                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(6)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    6. What is a trademark infringement?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Trademark infringement is the illegal use of a trademark or service mark linked to goods and services.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(7)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    7. Is trademark registration valid for all types of services and goods?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Registrations of trademarks are exclusive to the products or services they represent. Registrations may be restricted to a certain commodity or service. Also, they are created under a Class of goods or services it symbolizes. As a result, the trademark registration will be effective for the entire category of products or services it covers.

                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(8)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    8. In addition to the registration cost, are there any further payments required for the incorporation certificate?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Yes, the authorities mandate it for applicants to check all the documents they submit including the application for trademark registration applying a Class III Digital signature. Our experts will help you e-verify all the documents correctly.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(9)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    9. What is the validity for trademark registration?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The registered trademark is valid for only 10 years from the date of filing of an application. After that one needs to apply for trademark renewal.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(10)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    10. When can i use symbol R or TM?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Following the submission of a trademark application, the symbol "TM" may be used. A trademark must use the "R" symbol after registration. The products and services listed on the registration certificate are the only ones with which the ® sign may be used.

                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 11} icon={<Icon id={11} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(11)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    11. Who can apply for trademark registration in India?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Anyone can apply for trademark registration in India, any individual, a foreign company, society or trust, partnership firm, LLP or private limited company, etc. anyone can apply.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 12} icon={<Icon id={12} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(12)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    12. Can an application be registered in more than one class for the same trademark?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The trademark application can be filed as a multiclass application or as a separate single class.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 13} icon={<Icon id={13} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(13)}>
                    <h1 className="max-w-5xl font-display text-2xl  tracking-tight text-slate-900 sm:text-2xl">
                    13.What is trademark class?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  45 classifications are used by the Trademark Registry to categorize products and services. You must specify the class or classes of products and/or services in your application. These class or classes only would be used for trademark registration.

                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

