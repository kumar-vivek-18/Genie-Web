import React, { useEffect, useState } from 'react';
import logo from '../../assets/navbar/culturTap logo.svg';
import appStore from '../../assets/navbar/appStore.svg';
import playStore from '../../assets/navbar/playStore.svg';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Genie from "../../assets/navbar/logo.svg"
import AppStoreModal from '../utils/AppStoreModal';


const Navbar = () => {
    // const currentURL = window.location.href;
    const [currPage, setCurrPage] = useState("home");
    const [updatedURL, setUpdatedURL] = useState(window.location.href);
    const [isOpen, setisOpen] = useState(false);
    const [appStoreModal, setAppStoreModal] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setUpdatedURL(location.pathname);
        // console.log('updated URL: ' + updatedURL);
    }, [location]);


    useEffect(() => {

        if (updatedURL.includes('earn')) {
            setCurrPage("earn");
        }
        else if (updatedURL.includes('contact')) {
            setCurrPage("contact");
        }

        else {
            setCurrPage("home");

        }
        // console.log('url', currPage);

    }, [updatedURL]);

    useEffect(() => {
        if (!updatedURL.includes('services') && !location.search.includes("termandcondition")) {
            window.scrollTo(0, 0);
        }
    }, [updatedURL, location.search]);
    const handleNav = () => {
        setisOpen(!isOpen);
    }

    return (
        <div className='w-screen max-sm:fixed max-sm:top-0 flex justify-between md:px-[14px] max-sm:mt-0 max-lg:pb-[20px]  lg:pr-[50px] bg-white md:bg-opacity-0 z-50'>
            <div className='pt-[14px] flex flex-row gap-[20px] md:pl-[14px] max-lg:pl-[30px] relative'>
                <a href="/">
                    <img src={logo} alt="logo" loading='lazy' className=' w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] ' />
                </a>
                {
                    <img src={Genie} alt="logo" loading='lazy' className=' w-[80px] h-[50px] lg:w-[120px] lg:h-[80px] ' />

                }
            </div>
            <div className=' hidden lg:flex lg:gap-10 items-center  text-[#2f2341] text-[16px]'>
                <div className='w-full flex pt-[40px] gap-[40px] '>


                    <div className='w-[max-content]'>
                        <Link to='/' className={`${currPage === "home" ? "poppins-black border-b-4 pb-2  border-[#fb8c00]" : ""}  text-[14px] text-[#2F2E41] poppins-regular`}>About Us</Link>
                    </div>

                    <div className='w-[max-content]'>
                        <Link to='/earn' className={`${currPage === "earn" ? "poppins-black border-b-4 pb-2  border-[#fb8c00]" : ""}  text-[14px] text-[#2F2E41] poppins-regular`}>Earn with us</Link>
                    </div>
                    <div className='w-[max-content]'>
                        <Link to='/contact' className={`${currPage === "contact" ? "poppins-black border-b-4 pb-2  border-[#fb8c00]" : ""}  text-[14px] text-[#2F2E41] poppins-regular`}>Contact Us</Link>
                    </div>
                </div>
                <div className='w-full flex scale-110 pl-2 gap-[5px] items-center justify-center'>
                    <button onClick={() => { setAppStoreModal(!appStoreModal); }} className='mt-[30px]'>
                        <img src={appStore} alt="appStore" loading='lazy' width="100px" height="44px" />
                    </button>
                    <a href="https://play.google.com/store/apps/details?id=com.culturtapgenie.Genie" className='mt-[30px]'>
                        <img src={playStore} alt="playStore" loading='lazy' width="100px" height="44px" />
                    </a>
                </div>
            </div>
            <div className='flex flex-col gap-1 justify-center cursor-pointer mr-4 lg:hidden' onClick={handleNav}>
                {isOpen ?
                    (<AiOutlineClose fontSize={30} />) :
                    (<GiHamburgerMenu fontSize={30} />)

                }

            </div>


            {isOpen &&
                <div className='w-full flex fixed top-[80px] overflow-y-hidden  lg:hidden  justify-center z-50 '>
                    <div className='flex flex-col gap-6 py-10 pb-10 bg-white w-full  h-screen text-[14px] text-[#2F2E41]  items-center shadow-md  rounded-md'>
                        <div >
                            <Link to='/' className={`${currPage === "home" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`} onClick={handleNav}>About Us</Link>
                        </div>

                        <div >
                            <Link to='/earn' className={`${currPage === "earn" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`} onClick={handleNav}>Earn with us</Link>
                        </div>
                        <div>
                            <Link to='/contact' className={`${currPage === "contact" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`} onClick={handleNav}>Contact Us</Link>
                        </div>
                        <button onClick={() => { setAppStoreModal(!appStoreModal); }} className=''>
                            <img src={appStore} alt="appStore" loading='lazy' width="100px" height="44px" />
                        </button>
                        <a href="https://play.google.com/store/apps/details?id=com.culturtapgenie.Genie" className=''>
                            <img src={playStore} alt="playStore" loading='lazy' width="100px" height="44px" />
                        </a>
                    </div>
                </div>
            }

            {appStoreModal && <AppStoreModal setAppStoreModal={setAppStoreModal} />}
        </div >

    )
}

export default Navbar;
