import React from 'react';
import TickMark from '../../assets/tick-mark.png';
import { toast } from "react-toastify";

const PriceCard = ({card, setCart}) => {

    const handleToCart = (card) => {
        setCart((prev) => [...prev, card]);
        toast.success(`${card.name} added to cart`);
    }
    
    
    return (
        <div className="price-card border border-[#F2F2F2] py-4 px-4 rounded-2xl relative">
            <span className={`py-1.5 px-3 rounded-3xl absolute top-2.5 right-2.5 
            
            ${
    card.tagType === "new" ? "bg-[#DBFCE7] text-[#0A883E]" :
    card.tagType === "popular" ? "bg-[#E1E7FF] text-purple-900" :
    card.tagType === "best-seller" ? "bg-[#FEF3C6] text-[#BB4D00]" :
    ""
  }`} >{card.tag}</span>
            <div className="price-icon w-15 h-15 rounded-full border border-[#F2F2F2] flex items-center justify-center">
                <img src={card.icon} alt="Icon" />
            </div>
            <h2 className='pt-4 text-2xl font-bold pb-4'>{card.name}</h2>
            <p className='text-[16px] text-[#627382] pb-4'>{card.description}</p>
            <p className='text-[16px] text-[#627382] pb-4'><span className='text-2xl font-bold'>${card.price}</span>/{card.period}</p>
            <ul>
                {
                    card.features.map((ft, i) => <li key={i} className='flex items-center gap-x-2 text-[16px] text-[#627382] pb-2'><img src={TickMark} alt="Tick Mark" /> {ft}</li>)
                }
            </ul>
            <button 
            className='w-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] px-4 py-3 rounded-3xl text-white font-semibold'
            type="button"
            onClick={()=>handleToCart(card)}
            >Buy Now</button>
        </div>
    );
};

export default PriceCard;