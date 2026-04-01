import React from 'react';
import { toast } from "react-toastify";

const CartItem = ({item, setCart}) => {
    console.log(item);

    const handleRemove = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
        toast.error(`${item.name} removed from cart`);
    };
    
    return (
        <div className='bg-[#F9FAFC] flex justify-between items-center p-3 rounded-3xl'>
            <div className="flex gap-x-5">
                <div className="price-icon w-15 h-15 rounded-full border border-[#F2F2F2] flex items-center justify-center">
                <img src={item.icon} alt="Icon" />
                </div>
                <div>
                    <h3 className='text-xl font-bold pb-1'>{item.name}</h3>
                    <p className='text-[#627382]'>${item.price}</p>
                </div>
            </div>
            <p className='text-red-500 cursor-pointer'
            onClick={()=>handleRemove(item.id)}
            >Remove</p>
        </div>
    );
};

export default CartItem;