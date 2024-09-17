import React, { useState, useEffect, useRef } from "react";
import scroller1 from "../../assets/Home/scrollers/scroller1.svg";
import scroller2 from "../../assets/Home/scrollers/scroller2.svg";
import scroller3 from "../../assets/Home/scrollers/scroller3.svg";
import scroller4 from "../../assets/Home/scrollers/scroller4.svg";
import scroller5 from "../../assets/Home/scrollers/scroller5.svg";
import playStore from "../../assets/footer/playStore.svg";
import appStore from "../../assets/footer/appStore.svg";
import AboutImg from "../../assets/Home/AboutImg.svg";
import Category1 from "../../assets/Home/categories/category1.svg";
import Category2 from "../../assets/Home/categories/category2.svg";
import Category3 from "../../assets/Home/categories/category3.svg";
import Category4 from "../../assets/Home/categories/category4.svg";
import Category5 from "../../assets/Home/categories/category5.svg";
import Category6 from "../../assets/Home/categories/category6.svg";
import Category7 from "../../assets/Home/categories/category7.svg";
import Category8 from "../../assets/Home/categories/category8.svg";
import Category9 from "../../assets/Home/categories/category9.svg";
import Category10 from "../../assets/Home/categories/category10.svg";
import Category11 from "../../assets/Home/categories/category11.svg";





import "../../index.css";
import AppStoreModal from "../utils/AppStoreModal";

const Home = () => {
  const contentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [appStoreModal, setAppStoreModal] = useState(false);


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

  ];

  const categories = [
    {
      id: 1,
      link: Category1,
    },
    {
      id: 2,
      link: Category2,
    },
    {
      id: 3,
      link: Category3,
    },
    {
      id: 4,
      link: Category4,
    },

    {
      id: 5,
      link: Category5,
    },
    {
      id: 6,
      link: Category6,
    },
    {
      id: 7,
      link: Category7,
    },
    {
      id: 8,
      link: Category8,
    },
    {
      id: 9,
      link: Category9,
    },
    {
      id: 10,
      link: Category10,
    },
    {
      id: 11,
      link: Category11,
    },

  ]

  const calculateActiveIndex = () => {
    const contentElement = contentRef.current ?? 0;
    if (!contentElement) return;
    const scrollLeft = contentElement.scrollLeft ?? 0;
    const containerWidth = 240;
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
    }, 20); // Adjust the interval as needed for desired scrolling speed

    contentRef.current.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      contentRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, [isPaused]);

  return (
    <div className="w-screen  max-sm:pt-[100px] h-max">
      <div className="pl-[10px] mr-[10px] mx-auto sm:pl-[20px] sm:pr-[20px] lg:pl-[40px] ">
        <div
          className="flex  gap-[15px] pl-[30px]  overflow-x-scroll scrollbar-hidden bg-white"
          ref={contentRef}
        >
          {scroller.map((item, index) => (
            <div
              key={index}
              className={`card-slider md:mt-[60px] w-[320px] h-[300px] md:w-[360px] md:h-[360px] lg:w-[360px] lg:h-[360px]  flex-shrink-0  m-2 mb-10 sha ${activeIndex === index ? "active" : ""
                }`}

              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="w-full h-full flex justify-center ">
                <img
                  src={item.link}
                  alt="culturtap-works"
                  loading='lazy'
                  className="w-full h-full"
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




      <div className="w-full flex flex-col md:flex-row md:mt-10 ">
        <div className="w-screen flex flex-1 flex-col  flex-wrap pl-[20px] pr-[20px] sm:pl-[50px] sm:pr-[30px] lg:pl-[120px] lg:pr-[40px] gap-[30px] my-10 max-lg:justify-center">
          <h1 className="text-[28px] lg:text-[56px]  poppins-black text-[#2E2C43] max-sm:text-[28px]">
            About Us !
          </h1>
          <p className="text-[14px]  md:text-[16px] xl:text-[16px] poppins-semibold text-[#001B33]">Lowest Price Shopping & Bargaining App - Shop Fashion, Jewel, Home, Maintenance Services etc.

          </p>
          <p className=" text-[14px]  poppins-regular text-[#001B33]">
            CulturTap Genie is a dedicated e-commerce bargaining app. Now bargaining is possible from your couch! No need to wander in the market anymore. Get better prices than the online-listed product pricing from your nearby stores. Plan your shopping before leaving home. Save your time & money together.
          </p>

          <p className="text-[14px]  poppins-regular text-[#001B33]">
            Download the App Now. Save More Shop Smart !
          </p>
          <div className=" gap-[30px] md:hidden">
            <div className="flex items-center">
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
        </div>
        <div className="flex-1 flex justify-center mt-[30px]  ">
          <img
            src={AboutImg}
            alt="culturtap-about"
            loading='lazy'
            className="w-[280px] h-[320px] md:w-[500px] md:h-[500px] object-cover"
          />
        </div>
      </div>


      <div className="w-full flex flex-col md:flex-row ">
        <div className="w-screen flex flex-1 flex-col  flex-wrap pl-[20px] pr-[20px] sm:pl-[50px]  lg:pl-[120px]  gap-[30px] lg:gap-[40px] my-10 max-lg:justify-center">

          <h1 className="text-[28px] lg:text-[56px]  poppins-black text-[#2E2C43] max-sm:text-[28px]">
            Categories
          </h1>
          <div className="flex flex-row  flex-wrap gap-[15px]  max-sm:gap-[10px]">
            {categories.map((item, index) => (
              <div
                key={item.id}
              >
                <div className="max-sm:w-[155px] max-md:w-[160px] w-full h-full flex justify-center ">
                  <img
                    src={item.link}
                    alt="culturtap-categories"
                    loading='lazy'
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {appStoreModal && <AppStoreModal setAppStoreModal={setAppStoreModal} />}


    </div>
  );
};

export default Home;
