import React from "react";
import facebook from "../../assets/footer/facebook.svg";
import twitter from "../../assets/footer/twitter.svg";
import linkedin from "../../assets/footer/linkedin.svg";
import instagram from "../../assets/footer/insta.svg";
import playStore from "../../assets/footer/playStore.svg";
import appStore from "../../assets/footer/appStore.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-[100%] flex max-lg:flex-col text-[14px]  max-lg:items-center lg:justify-between lg:pl-[120px] lg:pr-[120px] mt-[50px] pb-[30px] pt-[30px] bg-[#f5f5f5]  ">
      <div className="w-full lg:w-3/5  flex max-sm:flex-col max-sm:pl-[30px]  max-sm:gap-4  lg:justify-between justify-evenly">
        <div className="">
          <p className="text-[12px]  md:text-[14px]  poppins-regular text-[#2E2C43]">@2024 All rights reserved to </p>
          <p className="text-[12px]  md:text-[14px] poppins-regular text-[#2E2C43]"> CulturTap Tourism India Pvt. Ltd.</p>
          <div className="flex mt-[26px] poppins-black text-[#2e2c43] text-[12px]  md:text-[14px] xl:text-[16px]">
            Registered Office
          </div>
          <p className="text-[12px]  md:text-[14px]  poppins-regular text-[#2E2C43]">189/2, Out side datia gate,</p>
          <p className="text-[12px]  md:text-[14px]  poppins-regular text-[#2E2C43]">Jhansi, Uttar Pradesh, India.</p>
          <p className="text-[12px]  md:text-[14px]  poppins-regular text-[#2E2C43]">284002</p>
          <div className="max-sm:flex flex-col hidden my-2">
            <p className="flex text-[#2e2c43]  text-[12px]  md:text-[14px] xl:text-[16px] poppins-black">Help Center</p>
            <p className="flex flex-col ">
              <Link to="/contact/report" className="text-[12px]  md:text-[14px] poppins-regular text-[#2E2C43]"> Report Concern </Link>
              <Link to="/contact" className="text-[12px]  md:text-[14px] poppins-regular text-[#2E2C43]">Contact Us</Link>
              <Link to="/termsandconditions" className="text-[12px]  md:text-[14px]  poppins-regular text-[#2E2C43]">Terms and Conditions*</Link>
            </p>
            <p className="flex mt-[15px] font-bold text-[#2e2c43] text-[12px]  md:text-[14px] xl:text-[16px] poppins-black">Careers</p>
            <p className="text-[12px]  md:text-[14px]  poppins-regular text-[#2E2C43]">Open Opportunities</p>
          </div>
        </div>
        <div className="max-sm:hidden">
          <p className="flex text-[#2e2c43]  text-[12px]  md:text-[14px] xl:text-[16px] poppins-black ">Help Center</p>
          <p className="flex flex-col ">
            <Link to="/contact/report" className="text-[12px]  md:text-[14px] poppins-regular text-[#2E2C43]"> Report Concern </Link>
            <Link to="/contact" className="text-[12px]  md:text-[14px] poppins-regular text-[#2E2C43]">Contact Us</Link>
            <Link to="/termsandconditions" className="text-[12px]  md:text-[14px]  poppins-regular text-[#2E2C43]">Terms and Conditions*</Link>
          </p>
          <p className="flex mt-[15px]  text-[#2e2c43] text-[12px]  md:text-[14px] xl:text-[16px] poppins-black">Careers</p>
          <p className="text-[12px]  md:text-[14px]  poppins-regular text-[#2E2C43]">Open Opportunities</p>
        </div>
      </div>

      <div className="max-lg:w-full flex flex-col max-sm:items-start max-lg:items-center max-sm:pl-[30px]">
        <p className="text-[#2e2c43] content-baseline text-[12px]  md:text-[14px] xl:text-[16px] poppins-black">Follow Us</p>
        <div className="flex gap-2 mt-3 cursor-pointer">
          <a
            href="https://www.facebook.com/share/4JS6Rn4yNNWu8hJA/?mibextid=qi2Omg"
            className="w-[32px] h-[32px]"
            target="_blank"
          >
            <img src={facebook} alt="logo" loading="lazy" />
          </a>
          <a
            href="https://x.com/Culturtap_Genie?t=iIE9XUCGQggt_Nr2OAn9RA&s=09"
            className="w-[32px] h-[32px] pt-[2px] cursor-pointer"
            target="_blank"
          >
            <img src={twitter} alt="logo" loading="lazy" />
          </a>
          <a
            href="https://www.linkedin.com/company/culturtap/"
            className="w-[32px] h-[32px] cursor-pointer"
            target="_blank"
          >
            <img src={linkedin} alt="logo" loading="lazy" />
          </a>
          <a
            href="https://www.instagram.com/culturtap_genie?igsh=MXNrbTQ5aHdkdzNsbA=="
            className="w-[32px] h-[32px] cursor-pointer"
            target="_blank"
          >
            <img src={instagram} alt="logo" loading="lazy" />
          </a>
        </div>

        <p className="text-[#2e2c43] font-bold mt-[25px] mb-[10px] text-[12px]  md:text-[14px] xl:text-[16px] poppins-black">
          Download App
        </p>
        <div className="flex scale-110 items-center">
          <a href="#" className=" cursor-pointer">
            <img
              src={appStore}
              alt="logo"
              loading="lazy"
              width="100px"
              height="44px"
            />
          </a>
          <a href="#" className="cursor-pointer ">
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
    </div>
  );
};

export default Footer;
