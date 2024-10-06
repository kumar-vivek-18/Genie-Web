import React, { useEffect, useState } from "react";
import "../../index.css";
import { useLocation } from "react-router-dom";
import Genie from "../../assets/earnings/genie-business.svg";

import PlayStore from "../../assets/navbar/playStore.svg";
import AppStore from "../../assets/navbar/appStore.svg";
import earn from "../../assets/earnings/earn.svg";
import AppStoreModal from "../utils/AppStoreModal";

const Earn = () => {
  const location = useLocation();
  const [appStoreModal, setAppStoreModal] = useState(false);

  useEffect(() => {
    // console.log("location", location.search);
    if (location.search.includes("termandcondition")) {
      // console.log("location");
      window.scrollTo({
        top: 1300,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div className="max-sm:px-[30px] max-lg:px-[50px] lg:ml-[120px] md:mt-[60px] max-sm:pt-[100px] overflow-x-hidden">
      <div>
        <h1 className="text-[28px] lg:text-[56px]  text-[#2E2C43]  max-sm:text-[28px] poppins-black">
          Earn with us!
        </h1>
      </div>
      <div className="w-full flex flex-col-reverse lg:flex-row mt-[20px] gap-10   md:mt-[30px]  ">
        <div className="lg:w-[50%] flex flex-col  ">
          <div className="">
            <p className=" text-[14px] poppins-bold text-[#2F2E41] my-4">
              CulturTap Genie Business app
            </p>
            <p className=" text-[14px] poppins-regular text-[#001B33]">
              CulturTap Genie is the world's first app dedicated to bargaining.
              The application is designed for individuals who own small
              businesses such as shops, stores, and warehouses, as well as for
              maintenance work professionals such as plumbers, electricians,
              carpenters, and others in similar trades. This app is also helpful
              for aspiring people looking to start a new small business. The
              CulturTap Genie Business App unites small business entities,
              creating a supportive ecosystem for stores and maintenance
              professionals to attract more & more customers to increase sales &
              grow exponentially. Engage with real customers through bargaining
              on the CulturTap Genie Business app.
            </p>
            <p className=" text-[14px]    mt-6 poppins-bold text-[#001B33]">
              How Does CulturTap Genie Business App Work?
            </p>
            <div className="flex flex-col mt-[20px] gap-2">
              <p className="text-[14px] poppins-regular  text-[#001B33]">
                Ready to connect with customers online like never before? The
                Genie is here to help. Vendors can capture customers’ attention
                by offering the best price for available stock items & services.
              </p>
              <p className="text-[14px] poppins-regular text-[#001B33]">
                <span className=" text-[14px] poppins-semibold text-[#001B33]">
                  1. Receive Notifications:{" "}
                </span>
                You will receive notifications with a message and product images
                with the customer’s expected price.
              </p>
              {/* <p className="text-[14px] poppins-regular ml-4 text-[#001B33]">
                Example: "I need to replace my laptop charger, Expected Price: 1230 Rs"
              </p> */}

              <p className=" text-[14px] poppins-regular text-[#001B33]">
                <span className="text-[14px] poppins-semibold">
                  2. Accept Requests:{" "}
                </span>
                If you have the right product or service availability, you can
                accept the customer's request.
              </p>
              <p className="text-[14px] poppins-regular text-[#001B33]">
                <span className=" text-[14px]  poppins-semibold">
                  3. Send an Offer or Query:{" "}
                </span>
                You can ask for more details about the product, send
                product-related attachments, or create a new offer for the
                customer.
              </p>
              <div className="flex flex-col ml-4">
                <p className="text-[14px] poppins-regular text-[#001B33]">
                  <span className=" text-[14px]  poppins-semibold">
                    • Send Message Query:{" "}
                  </span>
                  If you don't understand the customer's needs, ask for more
                  details.
                </p>
                <p className="text-[14px] poppins-regular text-[#001B33]">
                  <span className=" text-[14px]  poppins-semibold">
                    • Send an Offer:{" "}
                  </span>
                  Send an offer with the real images to confirm product
                  availability with the offered price & product warranty.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <p className=" text-[14px]  poppins-bold mt-8 text-[#001B33] ">
              How to “Send an Offer” to the Customer?
            </p>
            <div className="flex flex-col mt-[10px]">
              <p className=" text-[14px] poppins-regular text-[#001B33]">
                Step 1. Type your response first.
              </p>
              <p className=" text-[14px] poppins-regular text-[#001B33]">
                Step 2. Click a real product image for the right match.
              </p>
              <p className=" text-[14px] poppins-regular text-[#001B33]">
                Step 3. Type your offered price and product warranty.
              </p>
              <p className=" text-[14px] poppins-regular text-[#001B33]">
                Step 4. Preview & send your offer.
              </p>
            </div>
          </div>
          <div>
            <p className=" text-[14px]  poppins-bold mt-8 text-[#001B33] ">
              Let's Grow together! We create what you believe in.
              </p>
              <p className=" text-[14px]  poppins-regular mt-8 text-[#001B33] ">
                There is a minimal charge of 100 Rs for 1000 customers. Please
                accept and proceed with the customer's request carefully. Only
                accept requests when you have the right product availability.
                These are temporary charges, CulturTap will increase the charges
                shortly.
              </p>
            <p className=" text-[14px]  poppins-bold mt-8 text-[#001B33] ">
            Unlock Your Business Potential – Download the CulturTap Genie
            Business App and Transform Your Sales Now!
            </p>
          </div>
        </div>

        <div className="lg:w-[50%] flex justify-center">
          <div className="flex flex-1 justify-center mt-[30px] lg:mt-6">
            <img
              src={earn}
              alt="contact"
              loading="lazy"
              className="w-[250px] h-[300px] sm:w-[300px] sm:h-[320px] lg:w-[500px] lg:h-[593px]  "
            />
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-6 w-full flex-row justify-center items-center">
        <div className="flex max-sm:flex-col flex-row justify-center  items-center gap-[10px] border-[1px] w-max p-[20px] border-[#FB8C00]">
          <img
            src={Genie}
            alt="logo"
            loading="lazy"
            className=" w-[120px] h-[80px] xl:w-[102px] xl:h-[102px]"
          />
          <div className="flex flex-col gap-2">
            <p className=" text-[12px] md:text-[14px] xl:text-[14px] font-bold text-[#2E2C43] max-sm:text-center">
              Download the Business App
            </p>
            <div className="flex flex-row gap-[6px]">
              <button
                onClick={() => {
                  setAppStoreModal(!appStoreModal);
                }}
                className=" cursor-pointer"
              >
                <img
                  src={AppStore}
                  alt="logo"
                  loading="lazy"
                  width="120px"
                  height="44px"
                />
              </button>
              <a href="#" className="cursor-pointer ">
                <img
                  src={PlayStore}
                  alt="logo"
                  loading="lazy"
                  width="120px"
                  height="44px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {appStoreModal && <AppStoreModal setAppStoreModal={setAppStoreModal} />}
    </div>
  );
};

export default Earn;
