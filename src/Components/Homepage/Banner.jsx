import React from 'react';
import circle from '../../assets/circle.png'
import play from '../../assets/play.png'
import featureImage from '../../assets/banner.png';

const Banner = () => {
    return (
        <section className='container py-21.25 grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center"'>
            <div className="banner-content">
                <span className="sticker bg-[#E1E7FF] p-2 rounded-3xl inline-flex items-center gap-x-2 mb-3"> <img src={circle} alt="Circle" /> New: AI-Powered Tools Available</span>
                <h1 className='text-6xl font-extrabold text-[#101727]'>Supercharge Your Digital Workflow</h1>
                <p className='text-xl text-[#627382] leading-5 tracking-wide pt-4 pb-8'>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.
Explore Products</p>
                <div className="banner-btns flex gap-x-4">
                    <button className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] px-4 py-3 rounded-3xl text-white font-semibold'>Explore Products</button>
                    <button className='border-2 border-purple-500 flex items-center gap-x-4 py-3 px-4 rounded-3xl bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent text-xl font-bold'
                    
                    >
                        <img src={play} alt="Play Button" />
                        Watch Demo
                    </button>
                </div>
            </div>
            <div className="banner-img flex justify-end">
                <img src={featureImage} alt="Banner Image" />
            </div>
        </section>
    );
};

export default Banner;