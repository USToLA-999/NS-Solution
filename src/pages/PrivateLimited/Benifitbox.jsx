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
                Advantages of a Private Limited Company
                </h1>
              </div>
            </div>
            <div className="contentbox w-full mx-auto mt-5">
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                   Minimum Capital:
                  </Typography>
                  <Typography className="text-lg">
                  There is 1 Lakh of minimum capital requirement to form a Private Limited Company.
                  </Typography>
                </CardBody>
              </Card>
              {/** second card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Separate Legal Entity:
                  </Typography>
                  <Typography className="text-lg">
                  The assets and liabilities of a Private Limited Company are different from the assets and liabilities of the Directors since the company is regarded by the law as a separate legal entity. Someone who is not a natural or human being is called a juristic person. Members of a company are not responsible for such debts to the creditors of the company. Since ownership and management are kept apart in a private limited company, managers are responsible for both the business's success and failure.
                  </Typography>
                </CardBody>
              </Card>
              {/** third card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Tax Efficient:
                  </Typography>
                  <Typography className="text-lg">
                  The tax efficiency of private limited enterprises comes from their ability to claim corporation tax relief on their profits. Businesses may see major cost reductions as a result, as well as higher earnings, capital allowances, and R&D tax credits. Taxation on dividends paid to shareholders by private limited corporations is reduced.
                  </Typography>
                </CardBody>
              </Card>
              {/** fourth card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Uninterrupted existence:
                  </Typography>
                  <Typography className="text-lg">
                  A company, as a separate legal person, is unaffected by the death or other departure of any member and continues to exist regardless of membership changes.
                  </Typography>
                </CardBody>
              </Card>
              {/** fifith card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Limited Liability:
                  </Typography>
                  <Typography className="text-lg">
                  the state of only having partial legal liability for the obligations of a business. Therefore, in a share-limited business, the members' responsibility in the event of a winding-up is restricted to the amount of unpaid shares. For instance, members of a Private Limited Company are only required to pay the amount owed on their individual shares, or the unpaid share value, if the company takes out a loan and is unable to pay it back. This means that you are not accountable to the corporation for any outstanding debt or credit amount if there is no balance owed on the number of shares you possess.
                  </Typography>
                </CardBody>
              </Card>
              {/** sixth card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Fund Raising:
                  </Typography>
                  <Typography className="text-lg">
                  In India, the only type of business that can raise funds from Venture Capitalists or Angel Investors is a Private Limited Company.
                  </Typography>
                </CardBody>
              </Card>
              {/** seventh card */}
              {/* <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Diminished Tax Evasion
                  </Typography>
                  <Typography className="text-lg">
                  The goods and services tax is a single tax that incorporates several previous taxes and is effective, yet there is a possibility of corruption and tax evasion.
                  </Typography>
                </CardBody>
              </Card> */}
              {/** eighth card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Easier to Manage:
                  </Typography>
                  <Typography className="text-lg">
                  As private limited companies have grown in popularity, several online accounting software providers have included into their systems because of the freedom to set up an infinite number of bank accounts, income and spending items, and other capabilities. These include keeping correct company records, hosting shareholder meetings, and filing yearly returns and reports to Companies House.
                  </Typography>
                </CardBody>
              </Card>
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Owning Property:
                  </Typography>
                  <Typography className="text-lg">
                  A corporation can purchase, hold, use, and dispose of property in its own name since it is a legal person. No shareholder may claim any of the company's assets for as long as it remains in operation.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            </div>
            </div>
    )

}

export default Benifitbox