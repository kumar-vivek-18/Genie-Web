import React, { useState } from "react";
import "../../index.css";
import Customer from "../../assets/termsandconditions/Customer.svg";
import Retailer from "../../assets/termsandconditions/Retailer.svg";
import Star from "../../assets/termsandconditions/star.svg";
import DropDown from "../../assets/termsandconditions/dropdown.svg";
import DropUp from "../../assets/termsandconditions/dropup.svg";

const PrivacyPolicyGenie = () => {
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
                    <div className="w-[100%]  sm:p-[20px] flex flex-col gap-4 mx-auto">

                        <div className="relative pb-[40px]">
                            <p className="text-[20px] poppins-extrabold text-[#2E2C43]">
                                CulturTap Genie
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
                                            We collect personal information -  Name, Mobile number, Email address.
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
                                            Use of personal data- to create or manage your account, to process of order and invoice, to identify you on our platform, to contact you and respond your queries.
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
                                            We don't share any data with anyone, We understand the need for customer data privacy. The vendors would not get any data directly, excluding customer names, unless the customer approves and shares it for purchase and delivery purposes.
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
                                <li className="text-[14px] pl-[25px]  poppins-regular text-[#001B33]">
                                    <div className="flex items-start">
                                        {/* <img
                                            src={Star}
                                            alt="contact"
                                            loading='lazy'
                                            className="w-[10px] h-[10px] mt-[5px] mr-4"
                                        /> */}
                                        <p className="text-[14px] poppins-regular text-[#001B33]">
                                            <span className="text-[14px]  poppins-bold text-[#001B33]">
                                                - Notifications:{" "}
                                            </span>
                                            Notifications permission is needed to handle the app notifications.
                                        </p>
                                    </div>
                                </li>
                                <li className="text-[14px] pl-[25px]  poppins-regular text-[#001B33]">
                                    <div className="flex items-start">
                                        {/* <img
                                            src={Star}
                                            alt="contact"
                                            loading='lazy'
                                            className="w-[10px] h-[10px] mt-[5px] mr-4"
                                        /> */}
                                        <p className="text-[14px]   poppins-regular text-[#001B33]">
                                            <span className="text-[14px]  poppins-bold text-[#001B33]">
                                                - Camera:{" "}
                                            </span>
                                            Camera permission is needed to capture product, and profile images, update a profile and send product attachments and offers while bargaining.                                            </p>
                                    </div>
                                </li>
                                <li className="text-[14px] pl-[25px]  poppins-regular text-[#001B33]">
                                    <div className="flex items-start">
                                        {/* <img
                                            src={Star}
                                            alt="contact"
                                            loading='lazy'
                                            className="w-[10px] h-[10px] mt-[5px] mr-4"
                                        /> */}
                                        <p className="text-[14px]   poppins-regular text-[#001B33]">
                                            <span className="text-[14px]  poppins-bold text-[#001B33]">
                                                - Gallery:{" "}
                                            </span>
                                            Gallery permission is needed to upload and save the product and profile images in the gallery.
                                        </p>
                                    </div>
                                </li>
                                <li className="text-[14px] pl-[25px]  poppins-regular text-[#001B33]">
                                    <div className="flex items-start">
                                        {/* <img
                                            src={Star}
                                            alt="contact"
                                            loading='lazy'
                                            className="w-[10px] h-[10px] mt-[5px] mr-4"
                                        /> */}
                                        <p className="text-[14px]   poppins-regular text-[#001B33]">
                                            <span className="text-[14px]  poppins-bold text-[#001B33]">
                                                - Storage:{" "}
                                            </span>
                                            Storage permission is needed to save the images and documents.                                           </p>
                                    </div>
                                </li>
                                <li className="text-[14px] pl-[25px]  poppins-regular text-[#001B33]">
                                    <div className="flex items-start">

                                        <p className="text-[14px]   poppins-regular text-[#001B33]">
                                            <span className="text-[14px]  poppins-bold text-[#001B33]">
                                                - Location:{" "}
                                            </span>
                                            Location permission is required to collect the customer’s current location to send customer requests to the valid vendors in their range of shopping.                                   </p>
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
                                            We have different apps to target customers(demand) and vendors (supply). We are sharing data between these two apps securely and with the user’s consent. We are not selling any data to anyone. All permissions are taken at the launch of the application.
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
                                            For account deletion requirements, we have provided a "Need any help? "section in the app menu. User can raise the request for account deletion and we proceed with their concern. Also, help them in any other use cases.
                                        </p>
                                    </div>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicyGenie;
