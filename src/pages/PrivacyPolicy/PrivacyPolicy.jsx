import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Particles from "../../components/magicui/particles";

const PrivacyPolicy = () => {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
  
    useEffect(() => {
      setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

  return (
    <div>
      <div className="maincontainer relative overflow-x-clip pt-20 pb-20 sm:pb-20 bg-blue-100">
        <div className="container sm:container mx-auto md:container md:auto">
          <div className="headlinesboix lg:pt-5   flex justify-center">
            <div className="biglines text-center  mt-10">
              <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-6xl">
                Privacy & Policy
              </h1>
            </div>
          </div>
          <div className="justify-center items-center  mx-auto mt-5 ">
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <p>
                    A legal document known as a privacy policy outlines all the
                    likely ways in which a party collects, uses, discloses, and
                    maintains a client's data while also safeguarding that
                    client's personal information. This privacy statement
                    regulates how users (including Users) of CASOL.IN obtain or
                    share information from the CASOL.IN website when accessing
                    the https://www.CASOL.in/ website. The Website and all of CA
                    Solution's goods and services are covered by this privacy
                    statement.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h3>1. PERSONAL AND OTHER INFORMATION COLLECTION </h3>

                  <ul className="list-outside list-decimal gap-5 mt-3 mx-5">
                    <li className=" mt-2 ">
                      The user agrees that the company may collect and store
                      personal information that the user provides on the
                      website, including but not limited to the user's username,
                      passwords, email address, name, address, age, date of
                      birth, sex, nationality, shopping preferences, browsing
                      history, and any images published or uploaded by the user.
                      The information provided by the user is used by the
                      website or business to deliver services. The user's need
                      is met as a result. The website or business uses this
                      information to enhance the portal and make it safer and
                      more user-friendly.
                    </li>
                    <li className=" mt-2">
                      Certain information about the user, such as the user's IP
                      address and online activity, is automatically tracked by
                      the company or website. In order to have a better
                      understanding of user demographics, interests, and
                      behavior, the company or website might use this
                      information to conduct internal research. The user is
                      aware that this information could include the URL they
                      visited before visiting the website, the URLs they visit
                      later (whether or not they are part of the website), the
                      user's computer and web browser details, their IP address,
                      and other details.
                    </li>
                    <li className="mt-2">
                      If a user decides to purchase goods or services from the
                      business or website, they are giving the business or
                      website permission to collect their personal data.
                    </li>
                    <li className="mt-2">
                      The user is forewarned that the company or website will
                      assist them in any manner possible going forward,
                      regardless of the provider, review, or feedback they
                      provide elsewhere on the website. Such data can be stored
                      and utilized for a variety of purposes, including conflict
                      resolution, team assistance, defect diagnosis, and more.
                      Only information that the business or website may give to
                      the appropriate legal or governmental authorities, or that
                      the business or website develops in accordance with the
                      rules, is considered protected data, if required.
                    </li>
                    <li className="mt-2">
                      Letters, email addresses, and comments from other users or
                      a third party about the user's use or posting on websites
                      are examples of personal information that is collated and
                      kept in a folder by the website or company. The user is
                      aware of all of these details.
                    </li>
                    <li className="mt-2">
                      We encourage users to freely browse our website without
                      disclosing any personal information. However, we will
                      require some information for registration before you can
                      use some of the features or do things like place an order.
                      You consent to receiving tailored offers and promotions
                      from us by giving us this information. To make sure we
                      give you the most exciting and pertinent offers, these
                      updates can be based on your past orders or interests.
                    </li>
                    <li className="mt-2">
                      On occasion, we might ask you to participate in optional
                      online surveys. Your contact information and demographic
                      information (such as your zip code, age, economic bracket,
                      or gender) may be requested in these surveys. By using
                      this information, we can better customize your online
                      experience, offering you goods, services, or content that
                      we believe you will enjoy. Additionally, it enables us to
                      provide you material that is relevant to your interests.
                      We want your experience to be as relevant and pleasurable
                      as possible, so please know that participating in these
                      surveys is completely voluntary.
                    </li>
                    <li className="mt-2">
                      On our website, we could ask you to post reviews of goods
                      or services you have used or bought. In order to assist
                      other users in making wise selections, you consent to us
                      posting your review on our website together with your name
                      and contact information. Your comments are important since
                      they not only benefit other customers but also enable us
                      to find and deal with any vendors or subpar goods. We
                      value your suggestions for improving everyone's
                      experience!
                    </li>
                    <li className="mt-2">
                      No reviews, comments, surveys, or other information you
                      submit on our website may be saved, uploaded, published,
                      or shown in any other location. Additionally, you
                      acknowledge that the website or business may delete any
                      such content you have submitted at any time without giving
                      you advance notice or a justification.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h3>2. COOKIES </h3>

                  <ul className="list-outside list-decimal gap-5 mt-3 mx-5">
                    <li className=" mt-2 ">
                    A cookie is a tiny bit of data that our website saves on your computer in order to remember information about you for use on subsequent visits. You are aware that these cookies facilitate a more seamless user experience by assisting the website in remembering crucial data, such as your login credentials or preferences. By using our website, you accept and agree to the possibility that it will install both temporary and persistent cookies on your browser or device.
                    </li>
                    <li className=" mt-2">
                    Certain parts of the website contain a variety of data gathering tools, including cookies. These tools support trust and safety, monitor the efficacy of promotions, and analyze the flow of online pages. These are the features that are only accessible because cookies are used. All of this is known to the user. Although the user can choose not to accept cookies from the website if their browser allows it, doing so may prevent them from using some of the website's functions.

                    </li>
                    <li className="mt-2">
                    In addition, the user is informed that third parties or affiliates on the website may place cookies on specific pages, among other data gathering tools. The user understands and agrees that the website or company has no liability because they have no control over how third parties utilize these cookies or other devices, and the user bears all associated risks.

                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h3>3.TRANSMITTING PERSONAL DATA                  </h3>

                  <ul className="list-outside list-decimal gap-5 mt-3 mx-5">
                    <li className=" mt-2 ">
                    The website or business may share your personal information in order to stop fraud, identity theft, and other unlawful acts. In order to facilitate the connection of connected accounts, stop service abuse, and offer joint or co-branded services, this information can also be shared with affiliated businesses. You are aware of this and accept it as a requirement of using the website.

                    </li>
                    <li className=" mt-2">
                    If mandated by law or deemed essential to comply with subpoenas, court orders, or other legal procedures, the website or business may divulge your personal information. If the business believes it is essential to enforce its Terms or Policies, respond to allegations of content violations, or safeguard the rights, property, or safety of users and the public, it may also share this information with law enforcement, third-party rights holders, or other pertinent parties.

                    </li>
                    <li className="mt-2">
                    If a company or website is reorganizing, combining, or rebuilding its operations, or if it is merging with another company or website, it may be necessary to share the user's personal information. Any new or existing business entity will remain subject to the Terms and Policy, as they may be updated from time to time.

                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h3>4.SECURITY                  </h3>

                  <p className="mt-2">
                  Every transaction that takes place on the website is safe and secure. Since the website is encrypted to prevent accidental exposure to third parties, no information is shared with third parties during transactions. The Company or Website does not receive, store, or retain any information pertaining to the User's credit and debit card information. The user provides this information directly to the payment gateway, which is permitted to handle it and complies with the rules and specifications of the many banks, organizations, and payment franchises with which it is affiliated.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h3>5.THIRD PARTY PROMOTION AND ADVERTISMENTS             </h3>

                  <p className="mt-2">
                  Every transaction that takes place on the website is safe and secure. Since the website is encrypted to prevent accidental exposure to third parties, no information is shared with third parties during transactions. The Company or Website does not receive, store, or retain any information pertaining to the User's credit and debit card information. The user provides this information directly to the payment gateway, which is permitted to handle it and complies with the rules and specifications of the many banks, organizations, and payment franchises with which it is affiliated.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h3>6.CONSENT OF THE USER           </h3>

                  <p className="mt-2">
                  By using the Website and/or sending information to the Company via the Website, the User agrees to the collection and use of the information that the User discloses on the Website in line with this Policy, including but not limited to the User's consent for the Company/Website to share or divide the User's information in accordance with the terms stated above in Section 4 of the Policy.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-1 md:grid-cols-1   justify-center items-center sm:grid-cols-1  ">
              <div className="biglines mx-auto justify-center align-center  ">
                <div className="relative flex text-xl  pt-4 pb-4 px-4  w-full   flex-col  justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <h3>7.DISPUTE RESOLUTION AND JURISDICTION          </h3>

                  <p className="mt-2">
                  A two-step Alternate Dispute Resolution ("ADR") process shall be used to settle any disagreement pertaining to the creation, interpretation, and application of this policy. The Parties agree to it. The Parties further agree that the contents of this Section will remain in effect even after the Policy and/or Terms expire.
                  </p>
                  <ul className="list-outside list-decimal gap-5 mt-3 mx-5">
                    <li className=" mt-2 ">
                    <b>Mediation:</b> In the event that a disagreement arises between the parties, they will try to settle it amicably so that both sides are satisfied. The disagreement shall be settled by arbitration, as explained below, if the Parties cannot agree on a resolution within thirty (30) days of one Party informing the other of the problem's existence;

                    </li>
                    <li className=" mt-2">
                    <b>Arbitration:</b> Should the parties be unable to settle their disagreement through mediation, the matter will be decided by a single arbitrator chosen by the business. Both parties shall be bound by the sole arbitrator's ruling, which is enforceable. The parties shall pay the expenses of the procedures, but the sole arbitrator may, at his or her sole discretion, order either party to pay the whole cost of the proceedings. The arbitration will take place in the Indian city of Delhi, and it will be conducted in English.
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Particles
        className="absolute inset-0 "
        quantity={200}
        ease={100}
        color={color}
        refresh
      />
    </div>
  );
};

export default PrivacyPolicy;
