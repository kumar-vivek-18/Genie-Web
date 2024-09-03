import React, { useState } from "react";
import facebook from "../../assets/footer/facebook.svg";
import twitter from "../../assets/footer/twitter.svg";
import linkedin from "../../assets/footer/linkedin.svg";
import instagram from "../../assets/footer/insta.svg";
import playStore from "../../assets/footer/playStore.svg";
import appStore from "../../assets/footer/appStore.svg";
import Youtube from "../../assets/footer/youtube.svg";
import { Link } from "react-router-dom";
import AppStoreModal from "../utils/AppStoreModal";

const Footer = () => {
  const [appStoreModal, setAppStoreModal] = useState(false);

  return (
    <div className="w-[100%] flex max-lg:flex-col text-[14px]  max-lg:items-center lg:justify-between lg:pl-[120px] lg:pr-[120px] mt-[50px] pb-[30px] pt-[30px] bg-[#FFE9CE]  ">
      <div className="w-full lg:w-3/5  flex max-sm:flex-col max-sm:pl-[30px]  max-sm:gap-4  lg:justify-between justify-evenly">
        <div className="">
          <p className="text-[12px]  md:text-[14px]  poppins-regular text-[#FB8C00]">@2024 All rights reserved to </p>
          <p className="text-[12px]  md:text-[14px] poppins-regular text-[#FB8C00]"> CulturTap Tourism India Pvt. Ltd.</p>
          <div className="flex mt-[40px] poppins-black text-[#FB8C00] text-[12px]  md:text-[14px] xl:text-[16px]">
            Office Address
          </div>
          <p className="text-[12px]  md:text-[14px]  poppins-regular text-[#FB8C00]">Bundelkhand Innovation & Incubation </p>
          <p className="text-[12px]  md:text-[14px]  poppins-regular text-[#FB8C00]">Center Foundation, BIET Jhansi,</p>
          <p className="text-[12px]  md:text-[14px]  poppins-regular text-[#FB8C00]">Jhansi, Uttar Pradesh, India.</p>
          <p className="text-[12px]  md:text-[14px]  poppins-regular text-[#FB8C00]">284128</p>
          <div className="max-sm:flex flex-col hidden my-2">
            <p className="flex text-[#FB8C00]  text-[12px]  md:text-[14px] xl:text-[16px] poppins-black">Help Center</p>
            <p className="flex flex-col ">
              <Link to="/genie/contact/report" className="text-[12px]  md:text-[14px] poppins-regular text-[#FB8C00]"> Report Concern </Link>
              <Link to="/genie/contact" className="text-[12px]  md:text-[14px] poppins-regular text-[#FB8C00]">Contact Us</Link>
              <Link to="/genie/termsandconditions" className="text-[12px]  md:text-[14px]  poppins-regular text-[#FB8C00]">Terms and Conditions*</Link>
              <Link to="/genie/genie-privacy-policy" className="text-[12px]  md:text-[14px]  poppins-regular text-[#FB8C00]">CulturTap Genie Privacy Policy*</Link>
              <Link to="/genie/business-privacy-policy" className="text-[12px]  md:text-[14px]  poppins-regular text-[#FB8C00]">CulturTap Genie Business Privacy Policy*</Link>

            </p>
            <p className="flex mt-[15px] font-bold text-[#FB8C00] text-[12px]  md:text-[14px] xl:text-[16px] poppins-black">Careers</p>
            <p className="text-[12px]  md:text-[14px]  poppins-regular text-[#FB8C00]">Open Opportunities</p>
          </div>
        </div>
        <div className="max-sm:hidden">
          <p className="flex text-[#FB8C00]  text-[12px]  md:text-[14px] xl:text-[16px] poppins-black ">Help Center</p>
          <p className="flex flex-col ">
            <Link to="/genie/contact/report" className="text-[12px]  md:text-[14px] poppins-regular text-[#FB8C00]"> Report Concern </Link>
            <Link to="/genie/contact" className="text-[12px]  md:text-[14px] poppins-regular text-[#FB8C00]">Contact Us</Link>
            <Link to="/genie/termsandconditions" className="text-[12px]  md:text-[14px]  poppins-regular text-[#FB8C00]">Terms and Conditions*</Link>
            <Link to="/genie/genie-privacy-policy" className="text-[12px]  md:text-[14px]  poppins-regular text-[#FB8C00]">CulturTap Genie Privacy Policy*</Link>
            <Link to="/genie/business-privacy-policy" className="text-[12px]  md:text-[14px]  poppins-regular text-[#FB8C00]">CulturTap Genie Business <br />Privacy Policy*</Link>

          </p>
          <p className="flex mt-[15px]  text-[#FB8C00] text-[12px]  md:text-[14px] xl:text-[16px] poppins-black">Careers</p>
          <p className="text-[12px]  md:text-[14px]  poppins-regular text-[#FB8C00]">Open Opportunities</p>
        </div>
      </div>

      <div className="max-lg:w-full flex flex-col max-sm:items-start max-lg:items-center max-sm:pl-[30px]">
        <p className="text-[#FB8C00] content-baseline text-[12px]  md:text-[14px] xl:text-[16px] poppins-black">Follow Us</p>
        <div className="flex gap-2 mt-3 cursor-pointer">
          <a
            href="https://www.facebook.com/share/4JS6Rn4yNNWu8hJA/?mibextid=qi2Omg"
            className="w-[32px] h-[32px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="logo" loading="lazy" />
          </a>
          <a
            href="https://x.com/Culturtap_Genie?t=iIE9XUCGQggt_Nr2OAn9RA&s=09"
            className="w-[32px] h-[32px] pt-[2px] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="logo" loading="lazy" />
          </a>
          <a
            href="https://www.linkedin.com/company/culturtap/"
            className="w-[32px] h-[32px] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="logo" loading="lazy" />
          </a>
          <a
            href="https://www.instagram.com/culturtap_genie?igsh=MXNrbTQ5aHdkdzNsbA=="
            className="w-[32px] h-[32px] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="logo" loading="lazy" />
          </a>
          <a
            href="https://youtube.com/@culturtapgenie?si=tyPUWkptagSfh56m"
            className="w-[32px] h-[32px] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="logo" loading="lazy" />
          </a>
        </div>

        <p className="text-[#FB8C00] font-bold mt-[25px] mb-[10px] text-[12px]  md:text-[14px] xl:text-[16px] poppins-black">
          Download App
        </p>
        <div className="flex scale-110 items-center">
          <button onClick={() => { setAppStoreModal(!appStoreModal); console.log('hii') }} className=" cursor-pointer">
            <img
              src={appStore}
              alt="logo"
              loading="lazy"
              width="100px"
              height="44px"
            />
          </button>
          <a href="https://play.google.com/store/apps/details?id=com.culturtapgenie.Genie" className="cursor-pointer ">
            <img
              src={playStore}
              alt="logo"
              loading="lazy"
              width="115px"
              height="55px"
            />
          </a>
        </div>
      </div>
      {appStoreModal && <AppStoreModal setAppStoreModal={setAppStoreModal} />}
    </div>
  );
};

export default Footer;
