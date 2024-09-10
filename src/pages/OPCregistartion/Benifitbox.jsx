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
                Procedure for OPC Company Companies to Register Their Companies
                </h1>
              </div>
            </div>
            <div className="contentbox w-full mx-auto mt-5">
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 1:
                  </Typography>
                  <Typography className="text-lg">
                  Using the RUN application to reserve the OPC Company's name through Spice PART A form accessible via the MCA portal.
                  </Typography>
                </CardBody>
              </Card>
              {/** second card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 2:
                  </Typography>
                  <Typography className="text-lg">
                  Choosing a memorable name for the OPC Company. Look up the name of the OPC Company.
                  </Typography>
                </CardBody>
              </Card>
              {/** third card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 3:
                  </Typography>
                  <Typography className="text-lg">
                  It will take MCA 3-4 days to approve or reject the name approval request.
                  </Typography>
                </CardBody>
              </Card>
              {/** fourth card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 4:
                  </Typography>
                  <Typography className="text-lg">
                  If the name is approved, the MCA will send us a name permission letter, and we must register the firm within 20 days.
                  </Typography>
                </CardBody>
              </Card>
              {/** fifith card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 5:
                  </Typography>
                  <Typography className="text-lg">
                  An additional cost must be paid in order to extend the grace period before the 20-day grace period ends.
                  </Typography>
                </CardBody>
              </Card>
              {/** sixth card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 6:
                  </Typography>
                  <Typography className="text-lg">
                  Obtaining the DSC and DIN of the company's directors will incur additional costs.
                  </Typography>
                </CardBody>
              </Card>
              {/** seventh card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 7:
                  </Typography>
                  <Typography className="text-lg">
                  Using SPICE PART B, draught the company's MOA and AOA electronically.
                  </Typography>
                </CardBody>
              </Card>
              {/** eighth card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 8:
                  </Typography>
                  <Typography className="text-lg">
                  Submitting an online application for the formation of an OPC Company.
                  </Typography>
                </CardBody>
              </Card>
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 9:
                  </Typography>
                  <Typography className="text-lg">
                  The application will be evaluated by the Ministry of Corporate Affairs.
                  </Typography>
                </CardBody>
              </Card>
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 10:
                  </Typography>
                  <Typography className="text-lg">
                  The MCA will issue a Certificate of Incorporation, PAN, and TAN in the event that a company is founded.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            </div>
            </div>
  )
}

export default Benifitbox