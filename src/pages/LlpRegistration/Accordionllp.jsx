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

export function Accordionollp () {
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
                    1. What is the minimum number of Partners required to start a Limited Liability Partnership?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  At least two partners are required for an LLP registration. There is no limit to the maximum number of partners. If you are the sole owner, you can register as a “One Person Company”.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2.Who can become a partner in an LLP?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Any individual/organization can become a partner in an LLP including foreigners/NRIs. However, the individual must be 18+ and should have a valid PAN card.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3. Does an LLP need to be incorporated in person?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  We conduct all of our business entirely online, so you are not required to physically visit our office. You can mail us a scanned copy of the documents, and we will take care of the rest. The company incorporation certificate will be delivered to your business address by courier from MCA.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. Do I need to make any additional payments after paying for the incorporation before receiving the certificate of incorporation?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  There are no unstated costs. We have a really open system. We will email you an all-inclusive invoice with no additional fees after you have made your payment. We provide you with help till you receive your LLP bank account.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(5)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    5. What is the initial financial outlay required to launch the business?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  A bank account with a minimum balance of Rs. 5,000 is required. There is no more money that you need to start the business. This amount does not even need to be deposited with the bank. It is also possible to demonstrate that the capital was used for LLP pre-incorporation expenses, such as LLP registration costs. You may also demonstrate how this capital has been invested in assets like computers and other things.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(6)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    6. Can Foreign Nationals or NRIs hold a Designated Partner position in an LLP?
                     </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Sure, but only once his DIN/DPIN has been assigned. Nonetheless, an LLP requires that at least one of its authorized partners be an Indian resident. Additionally, the foreign director may own a controlling stake in the business.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(7)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    7.Can | register the LLP at my home address?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  You can indeed register your limited liability partnership at your home address. Starting the business in your garage or at home is entirely legal. Usually, the "MCA" team does not stop by your workplace. All you need to do is present identification that shows your home address, like a rent agreement or an electricity bill.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(8)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    8. Can a Salaried working person also become a partner in an LLP?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  It is possible for an employee to become a partner in an LLP. If your employment agreement permits such clauses, you should review it. Most of the time, companies do not mind if one of their employees holds a director position in another business.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(9)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    9. Will my "Limited Liability Partnership (LLP) be converted to a Private Limited company"?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  No, your LLP cannot be changed from a private limited company to one. There are no provisions in either the "LLP Act, 2008" or the "Companies Act, 2013" that permit an LLP to become a "Private limited company." On the other hand, you can create a new "Private Limited Company" with the same name as the LLP if you wish to grow your company. All that is required is the LLP Company to provide a no-objection certificate (NOC).
                  </AccordionBody>
                </Accordion>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

