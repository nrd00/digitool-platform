import React from 'react';
import shoppingCart from '../../assets/products/shopping-cart.png'

const Navbar = () => {
    return (
        
        <div className='container'>
            <nav className='flex justify-between py-5'>
            <a href="#" className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent text-4xl font-extrabold'>DigiTools</a>
            <ul className='flex gap-x-8 items-center'>
                <li><a href="#">Products</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
            <div className='flex gap-x-3 items-center'>
                <img src={shoppingCart} alt="Cart" />
                <button>Login</button>
                <button className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] px-4 py-3 rounded-3xl text-white font-semibold'>Get Started</button>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;