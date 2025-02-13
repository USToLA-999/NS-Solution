import React from 'react'
import Navbars from '../../components/Navbars'
import RefundPolicy from '../Refund/RefundPolicy'
import { Footers } from '../../components/Footer'

const Refund = () => {
    
  return (
    <>
        <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
        </div>
        <RefundPolicy />
        <Footers />
    </>
  )
}

export default Refund