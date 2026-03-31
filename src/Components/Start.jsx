import React from 'react';

const Start = ({step}) => {
    return (
        <div className='border border-[#F1F1F1] p-5 py-20 rounded-2xl relative flex flex-col items-center bg-white'>
            <div className='w-10 h-10 rounded-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] flex justify-center items-center text-white absolute top-5 right-5'>0{step.id}</div>
            <div className='w-25 h-25 bg-[#E5E7EB] rounded-full flex justify-center items-center'>
                <img src={step.icon} alt="Icon" />
            </div>
            <h3 className='text-2xl font-bold py-3'>{step.title}</h3>
            <p className='text-center text-[#627382]'>{step.description}</p>
        </div>
    );
};

export default Start;