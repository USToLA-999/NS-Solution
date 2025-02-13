import React from 'react'
import Navbars from '../../components/Navbars'
import Hero from '../Trademark/Hero'
import Matterbox from '../Trademark/Matterbox'
import Benifitbox from '../Trademark/Benifitbox'
import IconBars from '../../serviceComponent/IconBars'
import { AccordionTrade } from '../Trademark/AccordionTrade'
import { Footers } from '../../components/Footer'

const Trademark = () => {
  return (
    <>
    
    
    <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
    </div>
      <Hero/>
      <Matterbox/>
      <Benifitbox/>
      <IconBars/>
      <AccordionTrade/>
      <Footers/>
    </>
  )
}

export default Trademark
