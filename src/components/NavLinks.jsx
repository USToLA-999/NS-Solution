import  { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                setHeading(heading !== link.name ? link.name : "");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-4xl md:hidden inline">
                <ion-icon
                  name={heading === link.name ? "chevron-up" : "chevron-down"}
                ></ion-icon>
              </span>
              <span className="text-3xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                {/* Desktop View */}
                <div className="hidden  group-hover:md:block hover:md:block">
                  <div className="absolute  z-50 py-3">
                    {/* <div className="w-4 h-4 left-3 absolute mt-0.5 bg-orange-400 rotate-45"></div> */}
                    <div className="bg-orange-400 text-3xl p-6 mt-2.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                      {link.sublinks.map((mysublinks, subIndex) => (
                        <div key={subIndex}>
                          {/* <h1 className="text-lg  font-semibold">
                            {mysublinks.Head}
                          </h1> */}
                          <ul>
                            {mysublinks.sublink.map((slink, sIndex) => (
                              <li
                                key={sIndex}
                                className="text-lg border-b text-gray-600 my-2.5"
                              >
                                <Link
                                  to={slink.link}
                                  className=" border-b text-xl hover:text-primary"
                                >
                                  {slink.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile View */}
                <div
                  className={`${
                    heading === link.name ? "block" : "hidden"
                  } md:hidden`}
                >
                  {link.sublinks.map((slinks, subIndex) => (
                    <div key={subIndex}>
                      <h1
                        onClick={() =>
                          setSubHeading(
                            subHeading !== slinks.Head ? slinks.Head : ""
                          )
                        }
                        className="py-4 pl-7 underline font-semibold flex justify-between items-center"
                      >
                        {slinks.Head}
                        <span className="text-xl">
                          <ion-icon
                            
                          ></ion-icon>
                        </span>
                      </h1>
                      <div
                        className={`${
                          subHeading === slinks.Head ? "block" : "hidden"
                        }`}
                      >
                        {slinks.sublink.map((slink, sIndex) => (
                          <li key={sIndex} className="py-3 pl-14">
                            <Link to={slink.link}>{slink.name}</Link>
                          </li>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
