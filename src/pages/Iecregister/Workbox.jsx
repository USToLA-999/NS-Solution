import { Card, CardBody, Typography } from "@material-tailwind/react";

const Workbox = () => {
  return (
    <div className="maincontainer relative overflow-x-clip pb-20 sm:pb-20 bg-blue-100">
      <div className="container sm:container mx-auto md:container md:auto">
        <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
          <div className="biglines  mt-10">
            <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
              Steps to Apply Import Export Code
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
                Step 1 : Application Preparation
              </Typography>
              <Typography className="text-lg">
                To obtain a code, one must submit an application to the DGFT in
                the region where the company's registered office is located,
                using the Aayaat Niryaat Form 2A format. To obtain IEC CODE
                ONLINE, the government has also set up an online filing tool.
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
                Step 2: Application Processing
              </Typography>
              <Typography className="text-lg">
                The fundamental needs of ANF 2A are information on the company,
                its owners, directors, or partners, bank account information,
                and a bank certificate. IEC documentation requirements must be
                fulfilled in full and submitted with ANF 2A. The ANF2A form
                requires a digital signature.
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
                Step 3 : IEC fee payment
              </Typography>
              <Typography className="text-lg">
                After the application is finished, it must be submitted to DGFT
                and the government must receive the application fee. Your
                application may be returned by the IEC department for revision
                or adjustment. The DGFT requires a response from you within 15
                days.
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
                Step 4: Issue an IE code
              </Typography>
              <Typography className="text-lg">
                Upon the department's thorough verification of the application,
                the Directorate General of Foreign Trade will assign an IE Code
                to your company. Hard copy and soft copy versions of this IE
                code are available. You can begin the import-export procedure
                with the softcopy that you get via email.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Workbox;
