import React from 'react'
import Navbars from '../../components/Navbars'
import Hero from '../Soleproprietr/Hero'
import IconBars from '../../serviceComponent/IconBars'
import Matterbox from '../Soleproprietr/Matterbox'
import { AccordionProp } from '../Soleproprietr/AccordionProp'
import { Footers } from '../../components/Footer'

const SoleProprieter = () => {
  return (
    <>
     <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
    </div>
      <Hero/>
      <IconBars/>
      <Matterbox/>
      <AccordionProp/>
      <Footers/>
    </>
  )
}

export default SoleProprieter