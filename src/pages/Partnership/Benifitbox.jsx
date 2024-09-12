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
                Steps to form an Partnership Registration
                </h1>
              </div>
            </div>
            <div className="contentbox w-full mx-auto mt-5">
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 1 :
                  </Typography>
                  <Typography className="text-lg">
                  All the previously mentioned records must be submitted to the Registrar of firms of the state
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
                  An authentication of Registration is then given, by the Registrar, and a duplicate should be given to all the accomplices
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
                  Likewise, a different enrollment with the Income Tax office is to be done to maintain any future problems and should get a PAN card and a bank account under the name of the Partnership firm.

                  </Typography>
                </CardBody>
              </Card>
              {/** fourth card */}
              
            </div>
            </div>
            </div>
  )
}

export default Benifitbox