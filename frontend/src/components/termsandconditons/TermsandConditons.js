import React, { useState } from "react";
import "../../index.css";
import Customer from "../../assets/termsandconditions/Customer.svg";
import Retailer from "../../assets/termsandconditions/Retailer.svg";
import Star from "../../assets/termsandconditions/star.svg";
import DropDown from "../../assets/termsandconditions/dropdown.svg";
import DropUp from "../../assets/termsandconditions/dropup.svg";

const TermsAndConditons = () => {
  const [customerCard, setCustomerCard] = useState(false);
  const [vendorCard, setVendorCard] = useState(false);

  return (
    <div className="max-sm:px-[30px] max-lg:px-[50px] lg:mx-[120px] md:mt-[60px] max-sm:pt-[100px] overflow-x-hidden">
      <div>
        <h1 className="text-[28px]  text-[#2E2C43] poppins-black  max-sm:text-[26px]">
          Terms & Conditions*
        </h1>
      </div>
      <div className="w-full flex flex-col gap-[40px] mt-[30px] mb-[30px] md:mt-[30px]  ">
        {/* customercard */}
        {!customerCard && (
          <div className="w-[100%] flex items-center justify-center terms-card mx-auto ">
            <div className=" w-[100%]  flex flex-col lg:flex-row max-lg:justify-center  max-lg:gap-2 justify-between items-center p-[20px] lg:p-[40px] lg:py-[30px]">
              <img
                src={Customer}
                alt="contact"
                loading='lazy'
                className="w-[196px] h-[152px]"
              />
              <h1 className="text-[28px] flex-1 lg:ml-[30px]  text-[#2E2C43] poppins-black  max-sm:text-[22px] max-lg:text-center">
                Are you a customer ?
              </h1>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setCustomerCard(true);
                  setVendorCard(false);
                }}
              >
                <img src={DropDown} alt="dropdown" loading='lazy' className="   " />
              </button>
            </div>
          </div>
        )}

        {customerCard && (
          <div className="mb-[30px] flex items-center ">
            <div className="w-[100%] terms-card p-[20px] flex flex-col gap-4 mx-auto">
              <div className="flex flex-1 max-sm:justify-center relative">
                <img
                  src={Customer}
                  alt="contact"
                  loading='lazy'
                  className="w-[196px] h-[152px]   "
                />
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    setCustomerCard(false);
                  }}
                >

                  <img
                    src={DropUp}
                    alt="contact"
                    loading='lazy'
                    className=" absolute max-md:hidden top-[30px] right-[30px]  "
                  />
                </button>
              </div>
              <div className="relative pb-[40px]">
                <p className="text-[20px]  poppins-extrabold text-[#2E2C43]">
                  For Customers
                </p>
                <ul className="flex flex-col mt-[20px]">
                  <li className="flex text-[14px]   poppins-regular text-[#001B33]">
                    <span>
                      <img
                        src={Star}
                        alt="contact"
                        loading='lazy'
                        className="w-[10px] h-[10px] mt-[5px]   mr-4"
                      />
                    </span>
                    50 spades are free for first-time users! After that, each spade will cost you 5 Rs. These are temporary charges, CulturTap will increase the charges shortly. 
                  </li>
                  <li className="flex text-[14px]  poppins-regular text-[#001B33]">
                    <span>
                      <img
                        src={Star}
                        alt="contact"
                        loading='lazy'
                        className="w-[10px] h-[10px] mt-[5px]  mr-4 "
                      />
                    </span>
                    Vendors don't accept your request?, or if fewer than 2 vendors are connected on chat, there won't be any charge.

                  </li>
                  <li className="flex text-[14px] poppins-regular text-[#001B33]">
                    <span>
                      <img
                        src={Star}
                        alt="contact"
                        loading='lazy'
                        className="w-[10px] h-[10px] mt-[5px]  mr-4  "
                      />
                    </span>
                    Encountered any issues? Please report your concerns to us.
                  </li>
                  <li className="flex text-[14px]   poppins-regular text-[#001B33]">
                    <span>
                      <img
                        src={Star}
                        alt="contact"
                        loading='lazy'
                        className="w-[10px] h-[10px]  mt-[5px] mr-4 "
                      />
                    </span>{" "}
                    Vendors will list their stores for home delivery, You can choose specific vendors based on your delivery requirements.
                  </li>
                </ul>

                <div className="md:hidden flex justify-center items-center mt-[20px]">
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setCustomerCard(false);
                    }}
                  >
                    <img
                      src={DropUp}
                      loading='lazy'
                      alt="contact"

                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* vendorcard */}

        {!vendorCard && (
          <div className="w-[100%] flex items-center justify-center terms-card mx-auto ">
            <div className=" w-[100%]  flex flex-col lg:flex-row max-lg:justify-center  max-lg:gap-2 justify-between items-center p-[20px] lg:p-[40px] lg:py-[30px]">
              <img
                src={Retailer}
                alt="contact"
                loading='lazy'
                className="w-[196px] h-[152px]  "
              />
              <h1 className="text-[28px] flex-1 lg:ml-[30px]  text-[#2E2C43] poppins-black  max-sm:text-[22px] max-lg:text-center">
                Are you a vendor ?
              </h1>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setVendorCard(true);
                  setCustomerCard(false);
                }}
              >
                <img src={DropDown} alt="dropdown" loading='lazy' className="   " />
              </button>
            </div>
          </div>
        )}

        {vendorCard && (
          <div className="mb-[30px] flex ">
            <div className="w-[100%] terms-card p-[20px] flex flex-col gap-4 mx-auto">
              <div className="flex flex-1 max-sm:justify-center relative">
                <img
                  src={Retailer}
                  alt="contact"
                  loading='lazy'
                  className="w-[196px] h-[152px]   "
                />
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    setVendorCard(false);
                  }}
                >
                  <img
                    src={DropUp}
                    alt="contact"
                    loading='lazy'
                    className=" absolute max-md:hidden top-[30px] right-[30px]"
                  />
                </button>
              </div>
              <div className="relative pb-[40px]">
                <p className="text-[20px] poppins-extrabold text-[#2E2C43]">
                  For Vendors
                </p>
                <ul className="flex flex-col mt-[20px]">
                  <li className="text-[14px]   poppins-regular text-[#001B33]">
                    <div className="flex items-start">
                      <img
                        src={Star}
                        alt="contact"
                        loading='lazy'
                        className="w-[10px] h-[10px] mt-[5px] mr-4"
                      />
                      <p className="text-[14px]   poppins-regular text-[#001B33]">
                        <span className="text-[14px]  poppins-bold text-[#001B33]">
                          Do's:{" "}
                        </span>
                        Only accept customer requests if you have the same
                        product available. Authenticity and honesty are crucial
                        to us and our customers.
                      </p>
                    </div>
                  </li>
                  <li className="text-[14px]  poppins-regular text-[#001B33]">
                    <div className="flex items-start">
                      <img
                        src={Star}
                        alt="contact"
                        loading='lazy'
                        className="w-[10px] h-[10px] mt-[5px] mr-4"
                      />
                      <p className="text-[14px]  poppins-regular text-[#001B33]">
                        Maintain your store rating on top for customer trust and
                        satisfaction.
                      </p>
                    </div>
                  </li>
                  <li className="text-[14px]   poppins-regular text-[#001B33]">
                    <div className="flex items-start">
                      <img
                        src={Star}
                        alt="contact"
                        loading='lazy'
                        className="w-[10px] h-[10px] mt-[5px] mr-4"
                      />
                      <p className="text-[14px]   poppins-regular text-[#001B33]">
                        <span className="text-[14px]  poppins-bold text-[#001B33]">
                          Dont's:{" "}
                        </span>
                        Customer complaints may lead to a permanent account
                        block or a significant penalty for unlocking the
                        account.
                      </p>
                    </div>
                  </li>
                  <li className="text-[14px]   poppins-regular text-[#001B33]">
                    <div className="flex items-start">
                      <img
                        src={Star}
                        alt="contact"
                        loading='lazy'
                        className="w-[10px] h-[10px] mt-[5px] mr-4"
                      />
                      <p className="text-[14px]   poppins-regular text-[#001B33]">
                        <span className="text-[14px]  poppins-bold text-[#001B33]">
                          Support:{" "}
                        </span>
                        Tell us what you want to start as a new small business,
                        and we'll consider your business category for our
                        platform, We support small businesses to attract local
                        customers online and help to convert into a profitable
                        business.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="md:hidden flex justify-center items-center mt-[20px]">
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setVendorCard(false);
                    }}
                  >
                    <img
                      src={DropUp}
                      loading='lazy'
                      alt="contact"

                    />
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsAndConditons;
