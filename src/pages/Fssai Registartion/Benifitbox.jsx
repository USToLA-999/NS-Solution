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
                Types of FSSAI Licence
                </h1>
              </div>
            </div>
            <div className="contentbox w-full mx-auto mt-5">
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  FSSAI Basic Registration

                  </Typography>
                  <Typography className="text-lg">
                  Food business operators (FBOs) with start-ups or small firms must register with the FSSAI. Their yearly revenue is less than Rs. 12 lakh. Depending on the efficiency of your business sales graph, you can upgrade from a basic registration.
                  </Typography>
                </CardBody>
              </Card>
              {/** second card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  FSSAI State license
                  </Typography>
                  <Typography className="text-lg">
                  The State FSSAI License is for the FBOs which have medium-sized businesses. They have an annual turnover of more than Rs.12 Lakhs or up to Rs.20 crores. The state license can be further upgraded to a central license, all depends on your business sale graph productivity.
                  </Typography>
                </CardBody>
              </Card>
              {/** third card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  FSSAI Central license
                  </Typography>
                  <Typography className="text-lg">
                  FBOs with a substantial commercial annual revenue, or more than Rs. 20 crores, are eligible for a Central FSSAI License. It is also necessary when importing or exporting food items or supplying government agencies.
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