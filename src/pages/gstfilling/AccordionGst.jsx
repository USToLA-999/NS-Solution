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
   export function AccordionGst () {
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
                        1. What is GST Registration?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  One of the largest tax innovations our nation has witnessed is the Goods and Services Tax, or GST. It is a single tax that replaces all prior levies. as VAT, Octroi, Entry Tax, Central Excise, and Service Tax, among others. July 1st, 2017 saw the nationwide implementation of GST. It is a tax dependent on destination. It is based on a dual taxation paradigm where taxes are collected on products and services by both the State and the federal government. For each state in which a business has registered, it is necessary for them to obtain a GST number. Finding out if a firm has to register and registering appropriately is the first stage in the GST regime.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    2. How to Register for GST?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Saying 1-2-3 is all it takes to register for GST with Online Texas. 1. You complete the above application form. 2. Send the necessary documentation by mail. 3. Remain seated. We will file all of the forms. 4. Get an email with your GST number.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    3. What is the price of registering for GST?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  It is dependent upon several factors. For example, the kind of your company, the bundle you have selected, etc. Contact +91 9136278714 with any questions. For additional information, send us an email at nssolution9@gmail.com.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    4. Who need to register for GST?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  A provider of goods must register for GST registration if their yearly turnover is more than Rs. 40 lakh (Rs. 20 lakhs for States under special category). In some circumstances, even though the taxable person's turnover has not exceeded this threshold, he is nonetheless required to pay GST. When a service provider's revenue reaches Rs. 20 lakhs, or Rs. 10 lakhs in the case of Special Category States, they must register for GST.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(5)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                     5. Who doesn’t need to apply for GST registrtaion?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                    a) A supplier who does not even fall within the mandatory GST requirement list and whose total turnover is below the allowed threshold. (b) When the Reverse Charge Mechanism (RCM) applies to the supply. (c) Individuals who provide GST-registered non-taxable goods and services. (d) Farmers, (f) Services provided by any legally established court or tribunal, (f) Funeral, burial, and mortuary services, including the transfer of the deceased, Sale of real estate or buildings covered by Schedule 5 (g) (ii)(b). actionable allegations that do not involve gaming, lotteries, or betting.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(6)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    6. Is there a time limit to apply GST online?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                    Within 30 days of the date on which he becomes liable for registration, an individual must apply for GST registration. The GST Council's Registration Rules must be adhered to in terms of procedure, regulations, and requirements for the GST application. Both non-resident and casual taxable individuals must register for GST at least five days prior to the start of operations.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(7)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    7. Which products and services are GST-exempt?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Food (cereals, fruits, vegetables, milk, etc.), Raw Materials (raw material, yarn, fiber, etc.), Handtools (shovels, spades, newspapers, books, beehives, human blood, chalk sticks, contraceptives, earthen pots, props used for Pooja (such as idols, bindi, kum kum), Kites, Organic Manure, Vaccines, etc.), etc. Services pertaining to Harvesting, Cultivation, Agriculture, etc. Road or bridge transportation services. Postal services, overseas diplomatic missions, RBI services, etc.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(8)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    8. Which businesses are not required to register for GST?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The following are given a UIN (Unique Identification Number) rather than requiring registration. On notified supplies of goods or services that they have received, they are entitled to a tax refund: (a) The United Nations Organization (UNO) or any other specialized agency, as well as any other multilateral financial institution or organization, notified under the United Nations Act, 1947; (b) Foreign consulates or embassies; (c) Any other person as notified by the Board/Commissioner; and (d) The Central Government or State Government may notify specific individuals that they are exempt from registration.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(9)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    9. What commodities are outside the purview of GST?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Previously, but only temporarily, alcohol for human use and five petroleum products—crude petroleum, motor spirit, high-speed diesel, natural gas, and aviation turbine fuel—were excluded. Moreover, as electricity is an essential necessity, it is GST-free. The previous taxes system's VAT and Central Excise will still apply to those. The GST Council has the authority to determine whether issues, goods, services, or commercial dealings require GST registration.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(10)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    10. What is meant by a casual Taxable Person?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  It refers to an individual who does not have a regular place of business but periodically conducts business in a taxable territory. A person who is registered as a business in one Indian state but wishes to provide to another location where they do not have a fixed place of business is known as a casual taxable person. As a casual taxable person, he must register in the state from which he plans to supply.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 11} icon={<Icon id={11} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(11)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    11. What are taxable transactions under GST act?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  The GST Act defines the supply of goods and/or services as all transactions made or promised to be made for consideration of taxable items or services. This includes sales, transfers, bartering, rentals, exchanges, licenses, leases, and disposals.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 12} icon={<Icon id={12} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(12)}>
                    <h1 className="max-w-5xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
                    12. Describe the mechanism of reverse charging. When does it apply, too?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  when the recipient, not the supplier, pays the government's debt. Typically, the supplier is subject to taxation since they are the ones selling the items. But sometimes the buyer is the one who has to pay the tax. Additionally, the customer pays the government's GST directly. We refer to this as a reverse charge. In this case, the obligation to pay taxes is reversed. When a supplier provides a good or service to a taxpayer who is registered for GST but is not registered themselves, RCM is applicable. In this case, the registered taxpayer must pay the relevant GST to the government as a reverse charge. A list of those who would be subject to the reverse charge has also been informed by the administration.
                  </AccordionBody>
                </Accordion>
                {/* <Accordion open={open === 13} icon={<Icon id={13} open={open} />}>
                  <AccordionHeader onClick={() => handleOpen(13)}>
                    <h1 className="max-w-5xl font-display text-2xl  tracking-tight text-slate-900 sm:text-2xl">
                    13. What is compilance rating?
                    </h1>
                  </AccordionHeader>
                  <AccordionBody className="text-lg">
                  Performance and compliance are the two factors that go into the GST compliance rating. Every taxpayer who is registered receives it. The taxpayer's rating is determined by how closely he follows the GST regulations. Depending on the kind of business, a scale from 1 to 10 is used to create the rating system. In this case, 1 represents the least compliance and 10 the highest. The vendor with the greatest rating is the one your buyer would like to deal with.
                  </AccordionBody>
                </Accordion> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

