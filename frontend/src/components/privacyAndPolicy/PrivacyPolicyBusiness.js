import React, { useState } from "react";
import "../../index.css";
import Customer from "../../assets/termsandconditions/Customer.svg";
import Retailer from "../../assets/termsandconditions/Retailer.svg";
import Star from "../../assets/termsandconditions/star.svg";
import DropDown from "../../assets/termsandconditions/dropdown.svg";
import DropUp from "../../assets/termsandconditions/dropup.svg";

const PrivacyAndPolicyBusiness = () => {
    const [customerCard, setCustomerCard] = useState(false);
    const [vendorCard, setVendorCard] = useState(false);

    return (
        <div className="max-sm:px-[30px] max-lg:px-[50px] lg:mx-[120px] md:mt-[60px] max-sm:pt-[100px] overflow-x-hidden">
            <div>
                <h1 className="text-[28px]  text-[#2E2C43] poppins-black  max-sm:text-[26px]">
                    Privacy & Policy*
                </h1>
            </div>
            <div className="w-full flex flex-col gap-[40px] mt-[30px] mb-[30px] md:mt-[30px]  ">

                <div className="mb-[30px] flex ">
                    <div className="w-[100%] terms-card p-[20px] flex flex-col gap-4 mx-auto">

                        <div className="relative pb-[40px]">
                            <p className="text-[20px] poppins-extrabold text-[#2E2C43]">
                                CulturTap Genie Business
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
                                            We don't share data with anyone outside the CulturTap community, We understand the need for vendor data privacy. The person would not get any data directly, excluding vendor name, store location, and contact number (Only when the customer accepts the vendor’s offer).

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
                                            <span className="text-[14px]  poppins-bold text-[#001B33]">
                                                App permissions:{" "}
                                            </span>
                                            Notifications, Camera, Gallery, Storage, Location.
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
                                                Notifications:{" "}
                                            </span>
                                            Notifications permission is needed to handle the app notifications.
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
                                                Camera:{" "}
                                            </span>
                                            Camera permission is needed to capture store images while registering a new account, updating a profile and sending attachments and offers while bargaining.
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
                                                Gallery:{" "}
                                            </span>
                                            Gallery permission is needed to upload and save the product and store images in the gallery.                                            </p>
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
                                                Storage:{" "}
                                            </span>
                                            Storage permission is needed to save the images and documents.                                            </p>
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
                                                Location:{" "}
                                            </span>
                                            Location permission is required to collect the vendor’s store location to provide store location reference to the customers.                                            </p>
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
                                            We have different apps to target customers(demand) and vendors (supply). We are sharing data between these two apps securely and with the user’s consent. We are not selling any data to anyone. All permissions are taken at the launch of the application.                                          </p>
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
                                            For account deletion requirements, we have provided a "Need any help? "section in the app menu. User can raise the request for account deletion and we proceed with their concern. Also, help them in any other use cases.
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
            </div>
        </div>
    );
};

export default PrivacyAndPolicyBusiness;
