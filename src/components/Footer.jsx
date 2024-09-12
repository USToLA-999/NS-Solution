
import { Footer } from "flowbite-react";
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function Footers() {
  return (
    <Footer container bgDark >
      <div className="w-full">
        <div className="grid text-white w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="text-white">
          <Footer.LinkGroup>
            <Footer.Link href="/" className=" mt-5 mb-5 sm:text-center flex justify-center">
                <h1 className="max-w-5xl font-display text-2xl  tracking-tight text-white sm:text-5xl">
                    NS Solution
                </h1>
            </Footer.Link>
          </Footer.LinkGroup>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div> 
              <Footer.Title title="about" className="text-2xl underline"  />
              <Footer.LinkGroup col className="mt-3 text-xl">
                <Footer.Link href="/">NS Solution</Footer.Link>
                <Footer.Link href="/Contact">Contact</Footer.Link>
                <Footer.Link href="/About">About</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Registration" className="text-2xl underline " />
              <Footer.LinkGroup col className="mt-3 text-xl">
              <Footer.Link href="/tan-registration">TAN Registration</Footer.Link>
                <Footer.Link href="/iso-registration">ISO Registration</Footer.Link>
                <Footer.Link href="/iec-registration">IEC Registration</Footer.Link>
                <Footer.Link href="/fssai-registration">FSSAI Registration</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Filling" className="text-2xl underline " />
              <Footer.LinkGroup col className="mt-3 text-xl">
              <Footer.Link href="/incom-tax-return">Income Tax Return</Footer.Link>
                <Footer.Link href="/gst-filling">GST Filling</Footer.Link>
                <Footer.Link href="/llp-registration">LLP Registration</Footer.Link>
                <Footer.Link href="/sole-proprietorship-registration">Sole Proprietership</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="NS Solution™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="https://github.com/USToLA-999" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
