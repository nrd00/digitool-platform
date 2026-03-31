import React from 'react';
import CartItem from './CartItem';
import { LiaCartArrowDownSolid } from "react-icons/lia";


const Cart = ({cart, setCart}) => {
    console.log("Cart", cart, setCart);

    const totalPrice = cart.reduce((total, item) => {
            return total + item.price;
        }, 0);

    const handleCheckout = () => {
        setCart([]);
    }
    
    return (
        <>
            {cart.length < 1 ? 
            <div className='flex flex-col items-center py-4'>
                <LiaCartArrowDownSolid className='text-9xl'/>
                <h3 className='text-2xl font-bold'>Your cart is empty!</h3>
            </div> : 
            <div className='border border-[#F2F2F2] p-4 rounded-2xl flex flex-col gap-y-3'>
                <h3 className='text-2xl font-bold  pb-3'>Your cart</h3>
                {
                cart.map(item => <CartItem key={item.id} item={item} setCart={setCart}/>)
                }
                <h5 className='flex justify-between items-center'>
                    <p className='text-[#627382] text-sm'>Total:</p>
                    <p className='text-xl font-bold'>${totalPrice.toFixed(2)}</p>
                </h5>
                <button 
                className='btn btn-primary rounded-2xl'
                onClick={handleCheckout}
                >Proceed To Checkout</button>
            </div>
            }
        </>

    );
};

export default Cart;