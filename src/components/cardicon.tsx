"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
const CartIcon = ({ id, add,}: { id: string; add?: string; }) => {
  const [cart, setCart] = useState<string[]>([]);
  useEffect(() => {
    const Cart = localStorage.getItem("cartItem");
    if (Cart) {
      setCart(JSON.parse(Cart));
    }
  }, []);
  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem("cartItem", JSON.stringify(cart));
    }
  }, [cart]);

  const addCart = (id: string) => {
    console.log(id)
    setCart([...cart, id ]);
  };

   const delCart = (id: string) => {
    const cartItem = cart.filter((faID: string) => id !== faID);
    setCart(cartItem);
    if (cartItem.length === 0) {
      localStorage.setItem("cartItem", JSON.stringify([]));
    }
  };
  return (
    <div>
      {add ? (
        <button
          type="button"
          className="px-4 rounded-full py-2 border-[1px]  hover:text-black hover:bg-white duration-300"
          onClick={() => addCart(id)}
        >        </button>
      ) : (
        <div className=" flex p-2  rounded-full cursor-pointer">
          {cart.includes(id) ? (
            
              
              <h1 className=" flex gap-5 text-white items-center">
            <span>
                <Link href="/carts">
                
                cart
          </Link>
                 </span>
        <MdDelete size={20} onClick={() => delCart(id)} />
</h1>
            
          ) : (

            <h1 className=" items-center text-white"
            onClick={() => addCart(id)}
            > <span>Add to cart</span></h1>
          )}
        </div>
      )}
    </div>
  );
};

export default CartIcon;