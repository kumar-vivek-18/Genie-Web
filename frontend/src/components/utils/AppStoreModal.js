import React from 'react';
import ModalImg from '../../assets/appStoreModalImg.svg';

function AppStoreModal({ setAppStoreModal }) {
    return (
        <div className='w-screen h-screen fixed top-0 left-0 right-0 flex flex-row justify-center items-center bg-[rgba(0,0,0,0.6)]'>

            <div className='max-sm:w-[90%] max-md:w-[80%] max-lg:w-[70%] w-1/2 h-1/2 bg-white flex flex-col justify-center items-center shadow-2xl rounded-3xl'>
                <img src={ModalImg} alt="icon" />
                <div className=' max-md:text-[18px] text-[24px] font-bold text-[#2e2c43] pt-[50px]'>We are working on it</div>
                <div className='max-md:text-[14px] text-[18px] text-[#2e2c43] pb-[30px] text-center'>We appreciate your curiosity, it motivates us</div>
                <button onClick={() => { setAppStoreModal(false); }} className=' max-md:text-[14px] text-[18px] font-bold text-[#fb8c00]'>Close</button>
            </div>
        </div >
    )
}

export default AppStoreModal;
