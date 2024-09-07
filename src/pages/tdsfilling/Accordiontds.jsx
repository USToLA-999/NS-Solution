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

export function Accordiontds(){
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
                    1. What is TDS?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  TDS means Tax Deducted at Source. It is the amount deducted from payments of various kinds such as salary, contract payment, commission, etc. This deducted amount can be adjusted against the tax due to the deductee.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2. Who is required to file TDS return?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  When paying someone for certain products or services, it is their responsibility to deduct TDS and submit a TDS return. Salary, interest, commission, brokerage, professional fees, royalties, contract payments, and other expenses are all included in the given amount. The individual whose tax is being deducted is known as the deductee, and the person who deducts TDS is known as the deductor. Individuals and HUF are not required to deduct TDS, with the exception of those whose accounts are subject to audit under Section 44AB, i.e., whose gross receipts in the previous fiscal year exceeded 2 crore (AY 2017-2018) or 1 crore (AY 2016-2017) in the case of businesses, and 50 lakhs (AY 2017-2018) or 25 lakhs (AY 2016-2017) in the case of professions.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3. What is TAN and is it required to file TDS return?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The TAN is a ten-digit alphanumeric number that must be entered by anyone who is responsible for deducting taxes and filing returns. Therefore, in order to receive a Tax Deduction and Collection Number (TAN) on Form 49B, the individual in question must apply within a month of the TDS being deducted. It is required that this number be included in all TDS Certificates that are issued, returns, challans, etc. A person faces fines of up to Rs. 10,000 if they neglect to apply for TAN.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. What are different types of TDS forms?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Different types of TDS forms are as follows:- Form 24Q -TDS on Salaries Form 26Q – TDS on payments other than Salaries Form 27Q – TDS on payments made to Non-Residents Form 27EQ – TCS
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(5)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    5. Is PAN mandatory for deductors and employees/deductees?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  PAN of the deductor has to be given by Non-Government deductors. It is essential to quote the PAN of all deductees.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(6)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    6. What are the due dates of submission of quarterly TDS Returns?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Due dates of submission of quarterly TDS Return is 31st July for Q1, 31st October for Q2, 31st January for Q3, and 31st May for the last quarter.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(7)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    7. How do I deposit TDS to Central Government?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  By choosing Challan 281 and utilizing net banking, you can make a payment online through NSDL. It is necessary to make these TDS payments before submitting the TDS return. All corporate assessees and non-corporate assessees subject to an audit under section 44AB must make electronic payments. Challan 281 can be used in the approved bank branch to make a physical payment.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(8)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    8. What is TDS Justification Report?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  It is a document that serves as an annexure to the intimation to be sent to the deductor.
                  </AccordionBody>
                </Accordion>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

