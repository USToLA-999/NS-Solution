import { Card, CardBody, Typography } from "@material-tailwind/react";

const Workbox = () => {
  return (
    <div className="maincontainer relative overflow-x-clip pb-20 sm:pb-20 bg-blue-100">
      <div className="container sm:container mx-auto md:container md:auto">
        <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
          <div className="biglines  mt-10">
            <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
            Advantages of ISO Certification
            </h1>
          </div>
        </div>
        <div className="contentbox w-full mx-auto mt-5">
          <Card className="mt-5">
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-3xl"
              >
                International credibility:
              </Typography>
              <Typography className="text-lg">
              As this is an internationally recognized mark, it would ultimately help your business establish an overseas business.
              </Typography>
            </CardBody>
          </Card>
          {/** second card */}
          <Card className="mt-5">
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-3xl"
              >
                Customer satisfaction:
              </Typography>
              <Typography className="text-lg">
              The ways and methods of production would improve. Thus, it would eventually result in better service to the customers.
              </Typography>
            </CardBody>
          </Card>
          {/** third card */}
          <Card className="mt-5">
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-3xl"
              >
                Government tenders:
              </Typography>
              <Typography className="text-lg">
              In the case of any government tenders, the ISO mark would give your business an edge over your competitors.
              </Typography>
            </CardBody>
          </Card>
          {/** fourth card */}
          <Card className="mt-5">
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-3xl"
              >
                Business efficiency:
              </Typography>
              <Typography className="text-lg">
              The ISO certification agency would help you improve your SOP and work instruction and thus it will ultimately make your business more efficient.
              </Typography>
            </CardBody>
          </Card>
          {/** fifith card */}
          <Card className="mt-5">
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-3xl"
              >
                Product quality:
              </Typography>
              <Typography className="text-lg">
              ISO mark products are of international standards. There would be fewer chances of rejection that could’ve occurred due to flawed products.
              </Typography>
            </CardBody>
          </Card>
          {/** sixth card */}
          <Card className="mt-5">
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-3xl"
              >
                Marketability:
              </Typography>
              <Typography className="text-lg">
              ISO (International Standards Organization) agency improves the credibility of the business and thus helps in developing business marketing directly.
              </Typography>
            </CardBody>
          </Card>
          
        </div>
      </div>
    </div>
  );
};

export default Workbox;
