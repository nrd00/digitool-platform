import React from 'react';
import TickMark from '../../assets/tick-mark.png'

const Package = ({pack}) => {

    
    return (
        <div className={`border border-[#F2F2F2] p-5 rounded-3xl ${pack.isActive? "bg-linear-to-r from-[#9514FA] to-[#4F39F6]" : "bg-[#F9FAFC] "} `}>
            <h2 className={`text-2xl font-bold pb-2 ${pack.isActive?"text-white" : "text-black"}`}>{pack.name}</h2>
            <p className={`text-[16px]  pb-2 ${pack.isActive?"text-white" : "text-[#627382]"}`}>{pack.description}</p>
            <p className={`${pack.isActive?"text-white" : "text-[#627382]"}`}><span className={`text-3xl font-bold ${pack.isActive?"text-white" : "text-black"} pb-2`}>${pack.price}</span>/{pack.priceDuration}</p>
            <ul>
                {
                    pack.features.map(ft => <li key={ft} className={`flex items-center gap-x-1.5 ${pack.isActive ?"text-white" : "text-[#627382]"} pb-1`}><img src={TickMark} alt="Tick" /> {ft}</li>)
                }
            </ul>
            <button className={`btn w-full rounded-2xl mt-4 ${pack.isActive? "bg-white text-blue-600" : "bg-blue-600 text-white"}`}>{pack.buttonText}</button>
        </div>
    );
};

export default Package;