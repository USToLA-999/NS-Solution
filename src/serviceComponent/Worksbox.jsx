

import {
  Card,
  CardBody,
  
  Typography,
  
} from "@material-tailwind/react";

const Worksbox = () => {
  return (
    <div className="maincontainer relative overflow-x-clip pb-20 sm:pb-20 bg-blue-100">
      <div className="container sm:container mx-auto md:container md:auto">
        <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
          <div className="biglines  mt-10">
            <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
              How NS Solution Works?
            </h1>
          </div>
        </div>
        <div className="contentbox w-full mx-auto mt-5">
          <Card className="mt-5">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                Available Always
              </Typography>
              <Typography className="text-lg">
                 We understand the process is complex and confusing. So we put in extra efforts to stay with you every step of the way – preparation, scrutiny, assessment, filing, liaison, rectification, or refund.
              </Typography>
            </CardBody>
          </Card>
          {/** second card */}
          <Card className="mt-5">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
              Complete Range
              </Typography>
              <Typography className="text-lg">
              ITR-1, ITR-2, ITR-2A, ITR-3, ITR-4, ITR-5, ITR-6, ITR-7, we file all. And that’s not all. Our CAs are experts in the reconciliation of ITR data with 26AS. We assist in TDS & GST compliance.
              </Typography>
            </CardBody>
          </Card>
          {/** third card */}
          <Card className="mt-5">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                No Up-Selling
              </Typography>
              <Typography className="text-lg">
                We do not try to sell any financial products in the guise of filing your returns. We do not advise you to buy a higher product than the one you actually require. Even the prices quoted here are exhaustive.
              </Typography>
            </CardBody>
          </Card>
          {/** fourth card */}
          <Card className="mt-5">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
              No Distraction
              </Typography>
              <Typography className="text-lg">
              Our interface is Ad-Free and well-designed to keep it straightforward and practical. No clutter means nothing to divert your mind.
              </Typography>
            </CardBody>
          </Card>
          {/** fifith card */}
          <Card className="mt-5">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
              Speed
              </Typography>
              <Typography className="text-lg">
              When it is about uploading sensitive information on the World Wide Web, the speed of the website matters. And matters BIG. Our site gives you an interruption-free experience.
              </Typography>
            </CardBody>
          </Card>
          {/** sixth card */}
          <Card className="mt-5">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
              Document Management
              </Typography>
              <Typography className="text-lg">
              Store all the tax documents in one place and retrieve it as per requirement. So you don’t have to maintain a separate tax file. And your desk is always organized.
              </Typography>
            </CardBody>
          </Card>
          {/** seventh card */}
          <Card className="mt-5">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
              Certified
              </Typography>
              <Typography className="text-lg">
              To maintain our spot under the government and preserve our position as the largest E-Filing Intermediary of the Income Tax department, we strictly adhere to the legal guidelines of data privacy.
              </Typography>
            </CardBody>
          </Card>
          {/** eighth card */}
          <Card className="mt-5">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
              Safe-Guard
              </Typography>
              <Typography className="text-lg">
              Our server uses 128-bit encryption over the network and automatically backs up all your valuable data. All nationalized banks in India use the same level of encryption.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
            <div className="biglines  mt-10">
                <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                    Concerns Related To Private Limited Company
                </h1>
                <div className="explainboxpara w-full mt-5 text-lg">
                
                    <p>
                        <ul className="lists mx-4">
                            <li className="mt-3">Pvt. Ltd company requires a few more ROC compliance translating into an additional cost of 5000 to 10000/annum.</li>
                            <li className="mt-3">The minimum capital required is Rs.100,000.</li>
                            <li className="mt-3"> A private limited company can have a maximum of 200 members.</li>
                        </ul>
                    </p>
                
                    <p className="mt-5 text-xl">
                    Still, entrepreneurs prefer privately limited for the ease in share transfer and potential for future growth.
                    </p>
                </div>
            </div>
        </div>
        <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
            <div className="biglines  mt-10">
                <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                Penalties Provisions in LLP annual compliance default
                </h1>
                <div className="explainboxpara w-full mt-5 text-lg">
                
                    <p>
                        <ul className="lists mx-4">
                            <li className="mt-3">The Limited Liability Partnership Act of 2008 mandates that all required compliance be registered annually. If Forms 8 and 11 are not registered in time to report the LLP's financial statements and annual return, there is a provision for a penalty. A daily set sum of Rs. 100 for every unregistered agreement. There is no upper limit mentioned.</li>
                            <li className="mt-3">TAn annual online filing of income tax returns is mandatory for all listed limited liability companies. Please complete this file by September 30th of each year. Any LLP that misses this date after registering will be subject to a penalty of Rs. 5,000 and will need to file by December 31st of that year. In the event that the LLP misses this date, the penalty would be doubled, or Rs. 10,000.</li>
                        </ul>
                    </p>
                
                    <p className="mt-5 text-xl">
                    It takes 15 to 30 working days (approx.) to finish the Limited Liability Partnership Registration procedure. The timeline may vary depending on responses from the ROC department.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Worksbox;
