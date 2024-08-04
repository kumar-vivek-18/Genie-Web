import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white  rounded-2xl shadow-lg z-50 relative">
                <div className="flex justify-end">
                    <button className=" absolute z-10 top-[44px] right-[44px] text-[#fb8c00] text-[16px] font-bold" onClick={onClose}>
                        {/* <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg> */}
                        cancel
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
