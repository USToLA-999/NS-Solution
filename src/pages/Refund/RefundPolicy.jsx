
import Particles from '../../components/magicui/particles'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const RefundPolicy = () => {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
  
    useEffect(() => {
      setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);
  return (
    <div>
      <div className="maincontainer relative overflow-x-clip pt-20 pb-20 sm:pb-20 bg-blue-100">
        <div className="container sm:container mx-auto md:container md:auto">
          <div className="headlinesboix lg:pt-5   flex justify-center">
            <div className="biglines text-center  mt-10">
              <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-6xl">
                Refund Policy
              </h1>
            </div>
          </div>
          <div className="justify-center items-center  mx-auto mt-5 ">
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <p>
                  At CA Solution, we are dedicated to offering top-notch services and making sure you are completely satisfied with our assistance. Our goal is to provide the greatest online accounting, financial, and secretarial services by constantly improving. However, do not hesitate to contact us if you are unhappy with our services for any reason. Whether it is fixing the problem, giving a refund, or giving you credit for more CA Solution services, we will do all in our power to make things right. Our first goal is your satisfaction!
                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h2>1. Refund Policy </h2>

                  <p className="mt-3">
                  The fees paid in advance are retained in a client account when you pay CA Solution. As soon as we begin working on your case, CA Solution starts to receive these fees. Depending on the milestones reached throughout the procedure (e.g., obtaining a DIN, filing paperwork, appointing a relationship manager, etc.), our fees are received at various stages and rates. We are unable to issue refunds for money already paid because the resources and man-hours used to provide the service cannot be recouped. <br />
                  Simply put, any possible return will be reduced by processing fees, payment gateway fees, administrative costs, and the costs of the labor done up to that time. Furthermore, we are unable to reimburse or credit payments made to third parties involved in order processing or to government agencies (such as filing fees or taxes). No matter what, CA Solution's obligation to reimburse is capped at the client's payments.



                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h2>2. Refund Request </h2>

                  <p className="mt-3">
                  You can start a refund request by sending an email to refund@casol.in. Requests for refunds must be submitted within six days of the transaction. After we receive the necessary information, such as the cause for the refund and the bank account information needed to complete the request, we will handle your request within 15 to 25 working days.

                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h2>3. Change of Service            </h2>

                  <p className='mt-3'>
                  Within six days of making your purchase, you can request a change if you would like to switch from the service you initially booked to another one. Your CA Solution account will be credited with the amount you paid for the initial service, less any earned fees and payments made to government agencies (such filing fees or taxes) or any third parties that handled your order. This remaining amount can be applied as credit against any additional CA Solution services.

                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h2>4. Normal Prices
                  </h2>

                  <p className="mt-2">
                  Businesses of all sizes can select services that meet their needs thanks to CA Solution's uniform pricing strategy for a range of services. Depending on the region (territorial jurisdiction), the type of services needed, or the quantity of services chosen, the basic costs shown on our website or in emails are only starting rates.
                  </p>
                  <p className="mt-3">
                  Please be aware that we have the right to change our prices at any moment. However, contracts that have already been confirmed will not be impacted by price adjustments. Additional fees that might result from higher government fees, the cost of filling out legal paperwork, or the requirement to resubmit or reject papers are not covered by our usual price policy.

                  </p>
                  <p className="mt-2">
                  Although we make every effort to present accurate pricing information on our website, mistakes may occasionally happen. In the event that a disparity is discovered, we will verify the accurate pricing throughout the sales process and let you know about any changes prior to signing the contract. Any additional costs you may incur while completing the service are not CA Solution's responsibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h2>5. Factors Outside our Control           </h2>

                  <p className="mt-2">
                  Although we at CA Solution strive to offer the greatest service possible, we are unable to promise any certain results for your process. For instance, the government may deny a trademark application for legal reasons that are outside the purview of our offerings. Furthermore, government backlogs or problems with their platforms (such the MCA, Income Tax, or FSSAI websites) can occasionally cause delays.

                  </p>
                  <p className="mt-2">
                  Regretfully, our warranty and return policies do not apply to certain uncontrollable conditions. Refund requests cannot be granted for delays brought on by government processing. As we make every effort to help you along the way, we really appreciate your patience and understanding.

                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h2>6. Force majeure
                  </h2>

                  <p className="mt-2">
                  CA Solution disclaims all liability for any delays, disruptions, or incapacity to provide services brought on by uncontrollable events, including strikes, natural disasters, law changes, epidemics, and other unanticipated situations (sometimes referred to as "Force Majeure Events"). We value your understanding in these circumstances, as these events are beyond our reasonable control.

                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h2>7. Cancellation Charge
                  </h2>

                  <p className="mt-2">
                  At CA Solution, we put resources, time, and effort into your service. Changes in your circumstances or preferences are not covered by our satisfaction guarantee; only problems that we cause are. We will keep your fee until you are ready to continue if you request that we suspend a service. <br />

We will try our best to finish the service before giving a refund. In addition to earning fees and government taxes, there will be a 20% cancellation fee if you are still not happy. You will not be assessed a cancellation fee, though, if you decide to change providers.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Particles
        className="absolute inset-0 "
        quantity={200}
        ease={100}
        color={color}
        refresh
      />
    </div>
  )
}

export default RefundPolicy