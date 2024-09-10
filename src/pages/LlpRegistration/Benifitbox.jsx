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
                7 Steps to form an LLP
                </h1>
              </div>
            </div>
            <div className="contentbox w-full mx-auto mt-5">
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 1: Digital Signature Certificate (DSC)
                  </Typography>
                  <Typography className="text-lg">
                  You should register for the DSC for the allocated partners of the planned LLP before starting the enlistment process. Since LLP registration is done online and involves a digital signature, applying for DSC is required. The DSC must be obtained in this manner from government-approved confirming offices by the partners in an LLP.
                  </Typography>
                </CardBody>
              </Card>
              {/** second card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 2: Applying the Designated Partner Identification Number (DPIN) and Director Identification Number (DIN)
                  </Typography>
                  <Typography className="text-lg">
                  After submitting a DSC application, the proposed LLP partners must thereafter, within five to seven days, enlist for DPIN and DIN. The DIN allocation request needs to be submitted using Form DIR-3. A scanned copy of your PAN card and Aadhaar card must be attached to the form. The paperwork designating the candidate as a director should be signed by the "Managing Director, Directors, or CEO" of the current firm, or by a firm Secretary who works full-time for the company.
                  </Typography>
                </CardBody>
              </Card>
              {/** third card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 3: Name Approval and Reservation with ROC
                  </Typography>
                  <Typography className="text-lg">
                  It is necessary to register under "LLP-RUN," or "Limited Liability Partnership-Reserve Unique Name," in order to reserve the prospective LLP's name. The Central Registration Center handles this in addition under Non-STP. In any case, it is advised that you use the free name search tool on the "LegalRaasta" website prior to submitting the name in the form. The maximum number of suggested names that must be submitted to the "MCA" is "one to six." If the name does not conflict with any already-existing partnership firm or limited liability partnership (LLP), the registrar will only accept it if the Central Government does not deem it unworkable.


The name approval process will require five to seven business days. Within fifteen days, the form must be submitted again. 

                  </Typography>
                </CardBody>
              </Card>
              {/** fourth card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 4: Document Submission
                  </Typography>
                  <Typography className="text-lg">
                  We will create all the required documents including LLP agreement.
                  </Typography>
                </CardBody>
              </Card>
              {/** fifith card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 5: Get Incorporation Certificate of LLP
                  </Typography>
                  <Typography className="text-lg">
                  The FILLIP (Form for consolidation of Limited Liability Partnership) is the form used for joining, and it needs to be registered with the Registrar who oversees the state where the LLP's enrolled office is situated. It will take the shape of an integrated framework. It is possible to present joining records to the "MCA" in addition to the LLP's PAN, TAN, and incorporation application.Within five to seven days, "MCA" will approve the consolidation application. The certification of incorporation serves as evidence of the organization's formation. Additionally, it contains your CIN.



                  </Typography>
                </CardBody>
              </Card>
              {/** sixth card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 6: Appeal for PAN, TAN and Bank account

                  </Typography>
                  <Typography className="text-lg">
                  You must apply for "PAN and TAN" after completing the aforementioned requirements. You will receive them in seven working days. To open a bank account, you can provide the bank with the "MOA, AOA, and PAN," which is the incorporation endorsement.

                  </Typography>
                </CardBody>
              </Card>
              {/** seventh card */}
              <Card className="mt-5">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl">
                  Step 7: Register for LLP Agreement
                  </Typography>
                  <Typography className="text-lg">
                  The common rights and responsibilities of the LLP and its participants are governed by the LLP agreement. The LLP agreement needs to be included in Form 3, which needs to be submitted 30 days following the formation date.

                  </Typography>
                </CardBody>
              </Card>
              {/** eighth card */}
            </div>
            </div>
            </div>
  )
}

export default Benifitbox