import React from 'react';
import { use } from 'react';
import PriceCard from './PriceCard';

const Pricing = ({priceCard}) => {
    const prices = use(priceCard);
    
    
    return (
        <section className='py-30'>
            <div className="pricing-content container">
            <h2 className='text-5xl font-extrabold text-[#101727] text-center pb-4'>Premium Digital Tools</h2>
            <p className='text-2xl text-[#627382] text-center'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
            <div className="tabs flex justify-center gap-x-2 pt-4">
                <button className='btn btn-active btn-primary rounded-3xl'>Products</button>
                <button className=''>Cart</button>
            </div>
            <div className="price-cards grid grid-cols-1 md:grid-cols-3 gap-6.5 pt-10">
                {prices.map(card => <PriceCard key={card.id} card={card} />)}
            </div>
            </div>
        </section>
    );
};

export default Pricing;