import React from 'react'
import Navbars from '../../components/Navbars'
import Hero from '../PrivateLimited/Hero'
import Matterbox from '../PrivateLimited/Matterbox'
import Benifitbox from '../PrivateLimited/Benifitbox'
import IconBars from '../../serviceComponent/IconBars'
import { Accordionp } from '../PrivateLimited/Accordion'
import { Footers } from '../../components/Footer'

const PrivateLimited = () => {
  return (
   <>
    <div className=" bg-orange-500 fixed w-full z-50 ">
        <Navbars/>
    </div>
      <Hero/>
      <Matterbox/>
      <Benifitbox/>
      <IconBars/>
      <Accordionp/>
      <Footers/>
   </>
  )
}

export default PrivateLimited