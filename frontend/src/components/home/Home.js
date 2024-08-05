import React, { useState, useEffect, useRef } from "react";
import scroller1 from "../../assets/Home/scrollers/scroller1.svg";
import scroller2 from "../../assets/Home/scrollers/scroller2.svg";
import scroller3 from "../../assets/Home/scrollers/scroller3.svg";
import scroller4 from "../../assets/Home/scrollers/scroller4.svg";
import scroller5 from "../../assets/Home/scrollers/scroller5.svg";
import scroller6 from "../../assets/Home/scrollers/scroller6.svg";
import scroller7 from "../../assets/Home/scrollers/scroller7.svg";
import AboutImg from "../../assets/Home/AboutImg.svg";

import "../../index.css";

const Home = () => {
  const contentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scroller = [
    {
      id: 1,
      link: scroller1,
    },
    {
      id: 2,
      link: scroller2,
    },
    {
      id: 3,
      link: scroller3,
    },
    {
      id: 4,
      link: scroller4,
    },
    {
      id: 5,
      link: scroller5,
    },
    {
      id: 6,
      link: scroller6,
    },
    {
      id: 7,
      link: scroller7,
    },
  ];

  const calculateActiveIndex = () => {
    const contentElement = contentRef.current ?? 0;
    if (!contentElement) return;
    const scrollLeft = contentElement.scrollLeft ?? 0;
    const containerWidth = 380;
    // const containerWidth = contentElement.offsetWidth;
    const totalWidth = contentElement.scrollWidth ?? 0;
    let newIndex;

    if (scrollLeft === 0) {
      newIndex = 0;
    } else if (scrollLeft + containerWidth >= totalWidth) {
      newIndex = 0;
    } else {
      newIndex = Math.floor(scrollLeft / containerWidth);
    }

    setActiveIndex(newIndex);
  };
  // Attach scroll event listener

  useEffect(() => {
    const handleScroll = () => {
      calculateActiveIndex();
    };

    const interval = setInterval(() => {
      if (isPaused) return;
      const contentElement = contentRef.current;
      const containerWidth = contentElement.offsetWidth;
      const totalWidth = contentElement.scrollWidth;

      if (contentElement.scrollLeft + containerWidth >= totalWidth) {
        contentElement.scrollTo({
          left: 0,
          behavior: "auto",
        });
      } else {
        contentElement.scrollTo({
          left: contentElement.scrollLeft + 1,
          behavior: "auto",
        });
      }
    }, 10); // Adjust the interval as needed for desired scrolling speed

    contentRef.current.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      contentRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, [isPaused]);

  return (
    <div className="w-screen  max-sm:pt-[100px] -z-50">
      <div className="pl-[10px] mr-[10px] mx-auto sm:pl-[20px] sm:pr-[20px] lg:pl-[40px] ">
        <div
          className="flex  gap-[15px]  overflow-x-scroll scrollbar-hidden bg-white"
          ref={contentRef}
        >
          {scroller.map((item, index) => (
            <div
              key={index}
              className={`card-slider md:mt-[60px] w-[320px] h-[280px] md:w-[360px] md:h-[300px] lg:w-[400px] lg:h-[360px] xl:w-[480px] xl:h-[360px] flex-shrink-0  m-2 mb-10 sha ${activeIndex === index ? "active" : ""
                }`}

              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="w-full h-full flex justify-center pt-[18px] ">
                <img
                  src={item.link}
                  alt="culturtap-works"
                  loading='lazy'
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bullet-points pl-[20px]  sm:pl-[50px]  lg:pl-[120px]">
        {scroller.map((item, index) => (
          <div
            key={item.id}
            className={`bullet-point ${index === activeIndex
                ? "active-bullet transition-all duration-500"
                : ""
              }`}
            onClick={() => {
              const contentElement = contentRef.current;
              const containerWidth = `450px`;
              contentElement.scrollTo({
                left: index * containerWidth,
                behavior: "smooth",
              });
            }}
          ></div>
        ))}
      </div>

      <div className="w-full flex flex-col md:flex-row mt-10 ">
        <div className="w-screen flex flex-1 flex-col  flex-wrap pl-[20px] pr-[20px] sm:pl-[50px] sm:pr-[30px] lg:pl-[120px] lg:pr-[40px] gap-[30px] my-10 max-lg:justify-center">
          <h1 className="text-[28px] md:text-[28px] poppins-black text-[#2E2C43] max-sm:text-[28px]">
            About Us !
          </h1>
          <p className="text-[14px]  md:text-[16px] xl:text-[16px] poppins-semibold text-[#001B33]">A bargaining app! </p>
          <p className=" text-[14px]  poppins-regular text-[#001B33]">
            CulturTap Genie is the world's first app dedicated to bargaining. Avail the best prices for all shopping items & maintenance services!
          </p>

          <p className="flex justify-center items-center text-[14px] poppins-regular text-[#001B33]">
            Now bargaining is possible from your couch! There is no need to wander in markets anymore. CulturTap Genie offers everyone an easy bargaining place with nearby stores and service providers. Start bargaining by choosing the right spades category. Accept, recreate, and reject offers until you are satisfied with the offered price. Download the app now and start bargaining.
          </p>
        </div>
        <div className="flex-1 flex justify-center mt-[30px]  ">
          <img
            src={AboutImg}
            alt="culturtap-about"
            loading='lazy'
            className="w-[280px] h-[320px] md:w-[400px] md:h-[500px] 2xl:w-[500px] 2xl:h-[580px] object-cover"
          />
        </div>
      </div>



    </div>
  );
};

export default Home;
