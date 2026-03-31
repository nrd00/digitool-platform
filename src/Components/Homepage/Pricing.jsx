import React, { useState } from 'react';
import { use } from 'react';
import PriceCard from './PriceCard';
import Cart from './Cart';

const Pricing = ({priceCard, cart, setCart}) => {
    const prices = use(priceCard);
    const [selected, setSelected] = useState("products");
    
    
    
    
    return (
        <section className='py-30'>
            <div className="pricing-content container">
            <h2 className='text-5xl font-extrabold text-[#101727] text-center pb-4'>Premium Digital Tools</h2>
            <p className='text-2xl text-[#627382] text-center'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
            <div className="tabs flex justify-center pt-4">
            <div className="inline-flex justify-center gap-x-1 p-1 rounded-3xl border border-[#E5E7EB] mr-auto ml-auto">
                <button 
                className={`px-4 py-2 rounded-3xl ${selected === "products" ? "bg-blue-700 text-white" : ""}`}
                onClick={()=> setSelected("products")}
                >Products</button>
                <button 
                className={`px-4 py-2 rounded-3xl ${selected === "cart" ? "bg-blue-700 text-white" : ""}`}
                onClick={()=> setSelected("cart")}
                >Cart</button>
            </div>
            </div>
            {
                selected === "products" ? <div className="price-cards grid grid-cols-1 md:grid-cols-3 gap-6.5 pt-10">
                {prices.map(card => <PriceCard key={card.id} card={card} setCart={setCart}/>)}
            </div>  :  <Cart cart={cart} setCart={setCart}/>
            }
            
            </div>
        </section>
    );
};

export default Pricing;