import logo from '../assets/newlogo2.png'
import { Footer } from "flowbite-react";
import {  BsFacebook,  BsInstagram,  } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export function Footers() {
  return (
    <Footer container bgDark >
      <div className="w-full">
        <div className="grid text-white w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="text-white">
          <Footer.LinkGroup>
            <Footer.Link href="/" className=" mt-5 mb-5  flex justify-center">
                <img src={logo} width={120} height={100} alt="" aria-label='for going to home page' />
            </Footer.Link>
          </Footer.LinkGroup>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div> 
              <Footer.Title title="about" className="text-2xl text-white underline"  />
              <Footer.LinkGroup col className="mt-3 text-xl text-white">
                <Footer.Link href="/">Online Texas</Footer.Link>
                <Footer.Link href="/Contact">Contact</Footer.Link>
                <Footer.Link href="/About">About</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Registration" className="text-2xl text-white underline " />
              <Footer.LinkGroup col className="mt-3 text-white text-xl">
              <Footer.Link href="/tan-registration">TAN Registration</Footer.Link>
                <Footer.Link href="/iso-registration">ISO Registration</Footer.Link>
                <Footer.Link href="/iec-registration">IEC Registration</Footer.Link>
                <Footer.Link href="/fssai-registration">FSSAI Registration</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Filling" className="text-2xl text-white underline " />
              <Footer.LinkGroup col className="mt-3 text-white text-xl">
              <Footer.Link href="/incom-tax-return">Income Tax Return</Footer.Link>
                <Footer.Link href="/gst-filling">GST Filling</Footer.Link>
                <Footer.Link href="/llp-registration">LLP Registration</Footer.Link>
                <Footer.Link href="/sole-proprietorship-registration">Sole Proprietership</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full text-white sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Online Texas™" year={2024} className='text-white' />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon aria-label='for going to facebook page' className='text-white' href="#" icon={BsFacebook} />
            <Footer.Icon aria-label='for going to instagram page' className='text-white' href="#" icon={BsInstagram} />
            <Footer.Icon aria-label='for going to twitter page' className='text-white' href="#" icon={FaXTwitter} />
            
          </div>
        </div>
        <div className="w-full text-white sm:flex sm:items-center sm:justify-between">
          <p>By continuing past this page, you agree to our <Link to='/privacy-policy' className='underline ' > Privacy Policy</Link> and <Link to='/refund-policy' className='underline ' > Refund Policy </Link></p>
        </div>
      </div>
    </Footer>
  );
}
