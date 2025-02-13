import {
    Card,
    CardBody,
    
    Typography,
    
  } from "@material-tailwind/react";


const Advantangebox = () => {
    return (
        <div className="maincontainer relative overflow-x-clip pb-20 sm:pb-20 bg-blue-100">
          <div className="container sm:container mx-auto md:container md:auto">
            <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
              <div className="biglines  mt-10">
                <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                Benefits of OPC Registration
                </h1>
              </div>
            </div>
            <div className="contentbox w-full mx-auto mt-5">
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  
                  </Typography>
                  <Typography className="text-lg">
                  OPC is the only corporate entity in India that can be operated by a single promoter with limited liability protection, ensuring the business's perpetual existence as well as easy ownership transferability.
                  </Typography>
                </CardBody>
              </Card>
              {/** second card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                 
                  </Typography>
                  <Typography className="text-lg">
                  In the event of the original director's incapacity or death, the only owner of the OPC shall nominate another person who is an Indian resident.
                  </Typography>
                </CardBody>
              </Card>
              {/** third card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  
                  </Typography>
                  <Typography className="text-lg">
                  Until it is formally dissolved, the incorporated OPC will continue to exist in "perpetual succession." The firm maintains its own legal existence and is not impacted by the passing away or resignation of any of its members. It also survives ownership changes.
                  </Typography>
                </CardBody>
              </Card>
              {/** fourth card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  
                  </Typography>
                  <Typography className="text-lg">
                  In an OPC, ownership can be moved by altering the nominee director's details, shareholding, or directorship, or it can be done so by signing, transferring, and filing share transfer forms and certificates, which are sufficient to move the company's ownership.
                  </Typography>
                </CardBody>
              </Card>
              {/** fifith card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  
                  </Typography>
                  <Typography className="text-lg">
                  Due to the requirement that an OPC have its books audited annually, it has greater credibility among vendors and lending institutions.
                  </Typography>
                </CardBody>
              </Card>
              {/** sixth card */}
              {/* <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  
                  </Typography>
                  <Typography className="text-lg">
                  Angel investors, financial institutions, venture capital, and other funding sources are easily accessible. It is evident that banks and other financial organizations would much rather lend money to corporations than to proprietary companies or partnership firms that need only minimal ROC filings in order to be registered with the Registrar of Companies.
                  </Typography>
                </CardBody>
              </Card> */}
              {/** seventh card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                 
                  </Typography>
                  <Typography className="text-lg">
                  When acting as the nominated director, a corporation with artificial person status is able to purchase, hold, use, and alienate property in its name, including buildings, factories, intangible assets, residential property, and so forth. It can also assert ownership of any such property.
                  </Typography>
                </CardBody>
              </Card>
              {/** eighth card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  
                  </Typography>
                  <Typography className="text-lg">
                  There are less Reasonable and Minimum Compliance requirements for a One Person Company Registration.
                  </Typography>
                </CardBody>
              </Card>
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Owning Property:
                  </Typography>
                  <Typography className="text-lg">
                  Regardless of the business's indebtedness, the directors' personal assets are safeguarded; only the company's investment in OPC is destroyed. The entrepreneurs' assets are shielded from the corporation's failures since the business entity is a corporation.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            </div>
            </div>
    )
}

export default Advantangebox