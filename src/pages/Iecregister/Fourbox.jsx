

import Meteors from "../../components/magicui/meteors";
const Fourbox = () => {
  return (
    <div className="bodybox relative pt-5 pb-5 overflow-x-clip    bg-orange-300 ">
            <Meteors number={50}  />
            <div className="container  sm:container   mx-auto ">
                <div className="headerlines   mx-auto md:mx-auto text-wrap  justify-center items-center ">
                    <h1 className="text-center text-4xl lg:text-6xl">
                    Documents required for IEC Code
                    </h1>
                </div>
                <div className="contentbox mt-5 mb-3 justify-center items-center text-center mx-auto">
                    <div className="grid lg:grid-cols-2 mx-auto justify-center items-center md:grid-cols-1  gap-10 sm:grid-cols-1    ">
                        <div className="justify-center mt-3  items-center"> 
                        <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                                <div className="headercontent mt-4">
                                    <h1 className="text-2xl lg:text-2xl">Sole Proprietorship</h1>
                                </div>
                                <div className="paralines mt-3 mb-3">
                                    <ul className="lists mx-5 text-start text-xl">
                                        <li className="mt-2">Digital photograph (3*3)</li>
                                        <li className="mt-2">Copy of pan card of the proprietor</li>
                                        <li className="mt-2">Copy of passport/voter id/driving license/UID</li>
                                        <li className="mt-2">If the business is self-owned, then sale-deed</li>
                                        <li className="mt-2">If the business is rented, then the rental/lease agreement</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="justify-center mt-3  items-center"> 
                        <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                            <div className="headercontent mt-4">
                                    <h1 className="text-2xl lg:text-2xl">Partnership Firm</h1>
                                </div>
                                <div className="paralines mt-3 mb-3">
                                    <ul className="lists mx-5 text-start text-xl">
                                        <li className="mt-2">Digital photograph (3*3) of the managing partner signing the application</li>
                                        <li className="mt-2">Copy of partnership deed</li>
                                        <li className="mt-2">Copy of passport/voter id UID/driving license/PAN of the managing partner signing the application</li>
                                        <li className="mt-2">Sale-deed, in the case of self-owned business</li>
                                        <li className="mt-2">If the business is rented, then the rental/lease agreement</li>
                                        <li className="mt-2">Bank Certificate as per ANF 2A/ Cancelled cheque bearing the blueprinted name of the applicant entity and A/c no.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Fourbox