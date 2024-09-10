import React from 'react'
import { ContactUs } from '../../serviceComponent/ServiceForm'

const Hero = () => {
  return (
    <div>
        <div className="maincontainerbox relative overflow-x-clip pb-10 sm:pt-0  sm:pb-1">
            
            <div className="container    lg:-pt-12  sm:pt-1 lg:pb-24 md:pb-10 mx-auto    ">
                <div className=" grid lg:grid-cols-2 md:grid-cols-1 gap-8  justify-center  sm:grid-cols-1 ">
                    <div className="mx-auto md:mx-auto  lg:mt-10 sm:mt-10">
                        <div className="headerlines pt-5 pb-2 mx-auto lg::mx-auto text-wrap  justify-center items-center ">
                            <h1 className="text-3xl sm:text-5xl"> Private Limited Company Registration</h1>
                        </div>
                            <div className="paralines mt-3 md:mt-5 sm:mt-5 ">
                                <p className="text-xl ">Filling your Private Limited Company Registration just Rs: 9999/-</p>
                            </div>

                            <div className="pointsbox mt-3 lg:mt-5 sm:mt-5">
                            <p className="text-xl ">
                                <ul className="lists mx-4">
                                    <li className="mt-4">Online process. Save 30% cost</li>
                                    <li className="mt-4">Fast & Quick Process</li>
                                    <li className="mt-4">Well Qualified Team</li>
                                    <li className="mt-4">Free Consultations Lifetime</li>
                                    <li className="mt-4">Lowest Price</li>
                                    <li className="mt-4">100% Customer Satisfaction</li>
                                </ul>
                            </p>
                            </div>
                        
                    </div>
                    <div className="mx-auto w-full md:mx-auto  lg:mt-10 sm:mt-10 ">
                        <div className="background-box  w-full bg-orange-50 pt-1  rounded-3xl justify-center mx-auto">
                            <div className="headerlines pt-5 pb-2 mx-auto lg::mx-auto text-wrap  justify-center items-center ">
                                <h1 className="text-3xl sm:text-5xl text-center">APPLY NOW</h1>
                            </div>
                            <ContactUs />
                        </div>


                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero