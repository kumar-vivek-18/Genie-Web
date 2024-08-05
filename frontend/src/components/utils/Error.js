import React from 'react';
import { useNavigate } from 'react-router-dom';


const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='max-md:mt-[100px] md:w-[600px] md:h-[400px] mx-auto rounded-xl flex flex-col items-center justify-center'>
            <h1 className='font-bold text-[100px] text-[#fb8c00] max-md:text-[60px]'>404</h1>
            <p className='text-[28px] font-semibold max-md:text-[20px]'>Page Not Found</p>
            <button onClick={() => navigate('/genie')} className='w-[max-content] bg-[#fb8c00] font-bold text-white mt-10 px-8 py-3 rounded-lg max-md:mt-6 max-md:px-4'>Back to Home</button>
        </div>
    )
}

export default Error