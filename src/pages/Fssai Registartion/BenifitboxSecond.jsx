import {
    Card,
    CardBody,
    
    Typography,
    
  } from "@material-tailwind/react";



const BenifitboxSecond = () => {
  return (
    
        <div className="maincontainer relative overflow-x-clip pb-20 sm:pb-20 bg-blue-100">
          <div className="container sm:container mx-auto md:container md:auto">
            <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
              <div className="biglines  mt-10">
                <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                Steps for getting the Food license

                </h1>
              </div>
            </div>
            <div className="contentbox w-full mx-auto mt-5">
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 1

                  </Typography>
                  <Typography className="text-lg">
                  Complete the FSSAI licensing registration form A on the FSSAI website, and then pay the FBO in your area to submit your application for licensure.
                  </Typography>
                </CardBody>
              </Card>
              {/** second card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 2
                  </Typography>
                  <Typography className="text-lg">
                  As soon as the payment confirmation appears in your FSSAI account, you must submit Form B to the authorities. Your application must be submitted with a number of declarations and resolutions. such as an owner self-declaration or a board resolution. A business secretary should ideally draft these declarations.
                  </Typography>
                </CardBody>
              </Card>
              {/** third card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 3
                  </Typography>
                  <Typography className="text-lg">
                  The government department must then be contacted again to inquire about the status of your application. Your application could be returned to you for revisions by the government; if you do not reply within 15 days of submitting it, it will be denied.
                  </Typography>
                </CardBody>
              </Card>
              {/** fourth card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 4
                  </Typography>
                  <Typography className="text-lg">
                  It will take the government agency 45–60 working days to thoroughly examine and approve your application. In 98% of our situations, we obtain licenses and spare our clients from all the bureaucratic headaches. Customers may occasionally need to visit the Food department or give the inspector extra money.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            </div>
            </div>
  )
}

export default BenifitboxSecond