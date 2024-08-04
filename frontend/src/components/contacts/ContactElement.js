import React, { useState } from "react";
import axios from "axios";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactElement = ({ details }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    countryCode: "",
    mobileNo: "",
    email: "",
    concern: "",
  });

  const HandleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.name.length > 0 &&
      data.email.length > 0 &&
      data.mobileNo.length > 0 &&
      data.concern.length > 0
    ) {
      const apiuri = process.env.REACT_APP_API_URL;
      console.log("apiUri", apiuri);
      console.log("data", data);
      setLoading(true);
      try {
        if (details.type === "Contact us!") {
          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/contact`,
            {
              name: data.name,
              countryCode: data.countryCode,
              mobileNo: data.mobileNo,
              email: data.email,
              concern: data.concern,
              requestId:""
            }
          );
          console.log("res", res);
          if (res) {
            setLoading(false);
            toast.success("Send Successfully");
          }
          console.log("res", res);

          setData({
            name: "",
            countryCode: "",
            mobileNo: "",
            email: "",
            concern: "",
          });
        } else {
          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/query`,
            {
              name: data.name,
              countryCode: data.countryCode,
              mobileNo: data.mobileNo,
              email: data.email,
              concern: data.concern,
              requestId:""
            }
          );
          if (res) {
            console.log("resquery", res);
            setLoading(false);
            toast.success("Send Successfully");
          }
          // console.log('res', res);
          setData({
            name: "",
            countryCode: "",
            mobileNo: "",
            email: "",
            concern: "",
          });
        }
      } catch (error) {
        console.log("error", error);
        toast.error("Error Occured");
        return;
      }
    }
  };

  return (
    <div className="max-lg:pl-[0px] lg:ml-[180px] md:mt-[66px] max-sm:pt-[100px] overflow-hidden">
      <div className="max-lg:pl-[30px] ">
        <h1 className="text-[28px]  text-[#2E2C43] poppins-black max-sm:text-[28px]">
          {details.type}
        </h1>
        <p className="text-[14px] text-[#001b33] poppins-regular">{details.title}</p>
      </div>

      <div className="md:mt-[69px] flex max-lg:flex-col-reverse max-lg:items-center md:gap-[100px] lg:gap-[150px] ">
        <form
          onSubmit={HandleSubmit}
          className="flex flex-1 flex-col items-center gap-6 z-10"
        >
          <div>
            <p className="text-[14px] text-[#2E2C43] pl-4 pb-2 poppins-regular">Name</p>
            <input
              type="text"
              placeholder="Kishor Kumar"
              name="name"
              value={data.name}
              onChange={HandleChange}
              required
              className="w-[320px] md:w-[350px] h-[54px] text-[14px] text-black  rounded-2xl bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] poppins-regular placeholder-[#dbcdbb]"
            />
          </div>
          <div className="flex gap-[16px]">
            <div>
              <p className="text-[14px] w-[max-content] text-[#2e2c43] md:pl-4 pb-2 poppins-regular">
                Country Code
              </p>
              <input
                type="text"
                placeholder="+91"
                name="countryCode"
                value={data.countryCode}
                onChange={HandleChange}
                required
                className="w-[84px] md:w-[104px] h-[54px] text-[14px] rounded-2xl poppins-regular bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] text-black placeholder-[#dbcdbb]"
              />
            </div>
            <div>
              <p className="text-[14px] text-[#2e2c43] pl-4 pb-2 poppins-regular">
                Mobile number
              </p>
              <input
                type="text"
                placeholder="8088790488"
                name="mobileNo"
                value={data.mobileNo}
                onChange={HandleChange}
                required
                className="w-[200px] md:w-[230px] h-[54px] text-[14px] poppins-regular rounded-2xl bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] text-black placeholder-[#dbcdbb]"
              />
            </div>
          </div>
          <div>
            <p className="text-[14px] text-[#2e2c43] pl-4 pb-2 poppins-regular">Email</p>
            <input
              type="email"
              placeholder="shrivastavaaishwary@gmail.com"
              name="email"
              value={data.email}
              onChange={HandleChange}
              required
              className="w-[320px] md:w-[350px] h-[54px] poppins-regular rounded-2xl text-[14px] bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] text-black placeholder-[#dbcdbb]"
            />
          </div>
          <div>
            <p className="text-[14px] text-[#2e2c43] pl-4 pb-2 poppins-regular">Your concern</p>
            <textarea
              placeholder="type here..."
              name="concern"
              cols="30"
              rows="10"
              value={data.concern}
              onChange={HandleChange}
              required
              className="w-[320px] md:w-[350px] h-[180px] poppins-regular text-[14px] rounded-2xl bg-[#f9f9f9] stroke-[#2e2c43] outline-none px-[31px] py-[18px] text-black placeholder-[#dbcdbb]"
            />
          </div>
          <button
            type="submit"
            className="w-[300px] h-[50px] md:w-[350px] md:h-[60px] bg-[#fb8c00] rounded-md text-white  text-[14px] md:text-[16px] poppins-black"
          >
            {loading ? "Sending..." : details.submit}
          </button>
        </form>

        <div className="flex flex-1 justify-center items-center">
          <img
            src={details.img}
            alt="contact"
            className="w-[400px] h-[300px] md:w-[754px] md:h-[540px]  max-md:px-[30px] "
          />
        </div>
      </div>
    </div>
  );
};

export default ContactElement;
