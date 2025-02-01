'use client'
import React, { useEffect, useState } from 'react'
import { FaCartArrowDown } from 'react-icons/fa';

const CartPageIcon = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const Cart = localStorage.getItem("cartItem");
        if (Cart) {
            setCart(JSON.parse(Cart));
          }
    }, [])
    
  return (
    <div className='relative'>
       <h1> <FaCartArrowDown size={20}/></h1> 
        {cart.length > 0 && <span className='absolute bg-red-500 top-[-1px] left-0 p-1 rounded-full text-[6px] text-white'></span>   }
         
    </div>
  )
}

export default CartPageIcon