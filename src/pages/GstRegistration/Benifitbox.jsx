import {
    Card,
    CardBody,
    
    Typography,
    
  } from "@material-tailwind/react";

const Benifitbox = () => {
    return (
        <div className="maincontainer relative overflow-x-clip pb-20 sm:pb-20 bg-blue-100">
          <div className="container sm:container mx-auto md:container md:auto">
            <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
              <div className="biglines  mt-10">
                <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                    Benefits of GST Registration
                </h1>
              </div>
            </div>
            <div className="contentbox w-full mx-auto mt-5">
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Simplifies taxation services
                  </Typography>
                  <Typography className="text-lg">
                  By consolidating multiple indirect taxes under one roof, the GST has brought about market integration in India.
                  </Typography>
                </CardBody>
              </Card>
              {/** second card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Reduction in costs of products & services
                  </Typography>
                  <Typography className="text-lg">
                  The introduction of GST reduced the cost of products and services by removing the cascading effects of several taxes and VATs.
                  </Typography>
                </CardBody>
              </Card>
              {/** third card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Helps avoid lengthy taxation services
                  </Typography>
                  <Typography className="text-lg">
                  The ability to avoid time-consuming tax services is one of the benefits of GST registration for small enterprises. Because service providers and product suppliers are excused from paying GST if their yearly sales are less than 20 lakh rupees and 40 lakh rupees, respectively.
                  </Typography>
                </CardBody>
              </Card>
              {/** fourth card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Aimed at reducing corruption and sales without receipts
                  </Typography>
                  <Typography className="text-lg">
                  The goal of the GST's implementation was to eradicate unreceipted sales and fraud. It also helps reduce the amount of indirect taxes that small firms have to pay.
                  </Typography>
                </CardBody>
              </Card>
              {/** fifith card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Uniformity in the taxation process
                  </Typography>
                  <Typography className="text-lg">
                  Centralized registration is made possible by GST registration, which also standardizes the taxation procedure. Businesses can now file their quarterly tax returns online more easily as a result.
                  </Typography>
                </CardBody>
              </Card>
              {/** sixth card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Composition scheme for small businesses
                  </Typography>
                  <Typography className="text-lg">
                  Because the GST provides the opportunity to lower taxes through the Composition plan, small firms with turnover up to Rs. 1.5 crores can benefit from it. This step has reduced the tax and compliance load for many small businesses.
                  </Typography>
                </CardBody>
              </Card>
              {/** seventh card */}
              
            </div>
            <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
                <div className="biglines  mt-10">
                    <h1 className="fonting mx-auto text-center max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                    What is the GSTIN?

                    </h1>
                    <div className="explainboxpara w-full mt-5 text-lg">
                    
                        <p>
                            <ul className="lists mx-4">
                                <li className="mt-3">The 15-digit alphanumeric GSTIN is specific to each Firm, Company, or Individual that has enrolled in the GST program.                                </li>
                                <li className="mt-3">The government has promised that the GST will only be available digitally, resulting in greater openness and decreased corruption.                                </li>
                                <li className="mt-3">The state code, which is determined by the 2011 census, is represented by the first two digits of the GSTIN.                                </li>
                                <li className="mt-3">The entity's PAN number is represented by the next ten digits.                                </li>
                                <li className="mt-3">The 14th digit is Z by default.</li>
                                <li className="mt-3">The checksum digit is the fifteenth or last digit. It follows logically from the figure used in the computation of the remaining 14 digits.                                </li>
                            </ul>
                        </p>
                    
                        {/* <p className="mt-5 text-xl">
                        It takes 15 to 30 working days (approx.) to finish the Limited Liability Partnership Registration procedure. The timeline may vary depending on responses from the ROC department.
                        </p> */}
                    </div>
                </div>
            </div>
            <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
                <div className="biglines  mt-10">
                    <h1 className="fonting mx-auto text-center max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                    What is a GST Return?

                    </h1>
                    <div className="explainboxpara w-full mt-5 text-lg">
                    
                        <p>
                        According to the law, a GST return is a record of income that has to be filed with the tax authorities. According to the GST law, a taxpayer must file two GST returns: one annually (if appropriate) and one monthly or quarterly. It is required that all tax returns be filed online. Please be advised that there is no way to avoid filing a return. The current month must contain all unreported invoices from the previous tax period. Under the GST, a registered dealer must file returns for output, sales, purchases, input tax credit (GST paid on purchases), and GST (on sales).
                        </p>
                    
                    </div>
                </div>
            </div>
            <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
                <div className="biglines  mt-10">
                    <h1 className="fonting mx-auto text-center max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                    What is the GSTN?

                    </h1>
                    <div className="explainboxpara w-full mt-5 text-lg">
                    
                        <p>
                        A section 8 (non-profit) private limited company, the Goods and Service Tax Network (GSTN) functions independently of the government. For all of your indirect tax requirements, GSTN is your one-stop resource. GSTN is responsible for overseeing the Indirect Taxation platform for GST in order to help you with the preparation, filing, amendment, and payment of your indirect tax bills.
                        </p>
                    
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
}

export default Benifitbox