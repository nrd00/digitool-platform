import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";





const Footer = () => {
    return (
        <footer className='bg-[#101727] pt-20 text-white'>
            <div className="footer-content container">
                <div className="footer-links border-b-2 border-[#FAFAFA] pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <a href="#" className='text-6xl font-extrabold'>DigiTools</a>
                        <p className='pt-6'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='flex justify-around'>
                        <ul className='flex flex-col gap-y-2 text-[#FAFAFA]'>
                            <li><a href="#" className='font-bold'>Products</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Templates</a></li>
                            <li><a href="#">Integrations</a></li>
                        </ul>
                        <ul className='flex flex-col gap-y-2 text-[#FAFAFA]'>
                            <li><a href="#" className='font-bold'>Company</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>
                    <div className='flex justify-around'>
                        <ul className='flex flex-col gap-y-2 text-[#FAFAFA]'>
                            <li><a href="#" className='font-bold'>Resources</a></li>
                            <li><a href="#">Documantation</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div>
                            <p className='pb-4 font-bold'>Social Links</p>
                            <ul className='flex gap-x-3 text-[#FAFAFA]'>
                            <li className='w-10 h-10 rounded-full bg-white text-black flex justify-center items-center text-2xl'><FaInstagram /></li>
                            <li className='w-10 h-10 rounded-full bg-white text-black flex justify-center items-center text-2xl'><FaFacebook /></li>
                            <li className='w-10 h-10 rounded-full bg-white text-black flex justify-center items-center text-2xl'><FaXTwitter /></li>
                        </ul>
                    </div>
                        </div>
                </div>
                <div className='flex justify-between py-6 text-[#FAFAFA]'>
                    <p>&copy; 2026 Digitools. All right resereved.</p>
                    <ul className='flex gap-x-6'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;