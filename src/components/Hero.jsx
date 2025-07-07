import image from "../assets/image.png";
import imag2 from "../assets/imag2.png";
import { Button } from "./Button";
import { IoCall } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";

const Hero = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    service: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://casol.in/u526606626_contact", form); // Ensure your backend endpoint is /submit
      alert("Form submitted successfully!");
      setForm({ name: "", phone: "", city: "", service: "" });
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="maincontainer relative overflow-x-clip pb-10 sm:pb-1">
      <img
        src={image}
        alt="bg-left"
        className="absolute lg:block md:hidden sm:hidden -z-50"
      />
      <img
        src={imag2}
        alt="bg-right"
        className="absolute right-0 lg:block md:hidden sm:hidden -z-50"
      />

      <div className="flex flex-col sm:flex-row items-start gap-10 px-6 lg:px-20">
        {/* Left Side Content */}
        <div className="flex-1 w-full pt-20 lg:pt-32">
          <div className="max-w-4xl text-left">
            <h1 className="fonting font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Accounting{" "}
              <span className="relative text-orange-600 inline-block">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-orange-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c..." />
                </svg>
                <span className="relative">made simple</span>
              </span>
              <br />
              <span className="block text-slate-900 sm:text-7xl mt-3">
                for small Businesses
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-700 max-w-2xl">
              Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.
            </p>

            <div className="mt-6">
              <a href="tel:+91 9899971517">
                <Button>Call for details</Button>
              </a>
            </div>

            <p className="mt-6 text-md max-w-2xl text-slate-700">
              File your Taxes now in 3 easy steps, on India’s most trusted Income Tax filing portal.
            </p>

            <hr className="my-6 border-gray-300" />

            <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4 sm:grid-cols-1">
              <p>1. 10+ year data-entry filing experience</p>
              <p>2. Auto-selection of ITR type and regime</p>
              <p>3. Free notice management from us</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex-1 w-full sm:mt-32 mt-10">
          <form
            className="mx-auto max-w-md bg-white rounded-lg shadow p-6"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-semibold mb-4 text-slate-900">Get in Touch</h3>

            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input
              value={form.name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">Phone No.</label>
            <input
              value={form.phone}
              onChange={handleChange}
              type="tel"
              name="phone"
              placeholder="10-digit number"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">City / Pin Code</label>
            <input
              value={form.city}
              onChange={handleChange}
              type="text"
              name="city"
              placeholder="City or PIN Code"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">Select Service</label>
            <select
              value={form.service}
              onChange={handleChange}
              name="service"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-6"
            >
              <option value="">-- Select a Service --</option>
              <option>GST Registration</option>
              <option>Private Ltd. Company Registration</option>
              <option>One Person Company Registration</option>
              <option>LLP Registration</option>
              <option>Sole Proprietorship Registration</option>
              <option>Partnership Registration</option>
              <option>ESI Registration</option>
              <option>ISO Registration</option>
              <option>TAN Registration</option>
              <option>IEC Registration</option>
              <option>FSSAI Registration</option>
              <option>TradeMark Registration</option>
              <option>Income Tax Return</option>
              <option>GST Filling</option>
              <option>Business Income Return</option>
              <option>Bulk Return Filling</option>
              <option>TDS Return Filling</option>
            </select>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold rounded py-2 hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <a
        href="tel:+91 9899971517"
        target="_blank"
        className="whatsapp_float items-start fixed z-50 bottom-6 left-10"
      >
        <IoCall className="text-5xl text-green-600" />
      </a>
    </div>
  );
};

export default Hero;
