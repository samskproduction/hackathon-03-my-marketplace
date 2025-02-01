"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface ProductType {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  productImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}
const Page = () => {
  const [cart, setCart] = useState<string[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [count, setCount] = useState<{ [key: string]: number }>({});
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
      console.log("Cart from localStorage:", JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem("cartItem", JSON.stringify(cart));
    }

    const getProduct = async () => {
      const product: ProductType[] = await client.fetch(
        `*[_type == 'product']`
      );
      console.log("Fetched Products:", product);
      const filteredProducts = product.filter((item) =>
        cart.includes(item._id)
      );
      console.log("Filtered Products:", filteredProducts);
      setProducts(filteredProducts);

      const initialCount = filteredProducts.reduce(
        (acc, item) => {
          acc[item._id] = 1;
          return acc;
        },
        {} as { [key: string]: number }
      );
      setCount(initialCount);
    };

    getProduct();
  }, [cart]);

  const handleQuantityChange = (id: string, type: "increase" | "decrease") => {
    setCount((prevCount) => {
      const newCount = { ...prevCount };
      if (newCount[id]) {
        newCount[id] =
          type === "increase" ? newCount[id] + 1 : newCount[id] - 1;
        if (newCount[id] < 1) newCount[id] = 1;
      }
      return newCount;
    });
  };

  const deleteProduct = (id: string) => {
    const updatedCart = cart.filter((item) => item !== id);
    setCart(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  const total = products.reduce((sum, item) => {
    const itemCount = count[item._id] || 1;
    return sum + item.price * itemCount;
  }, 0);

  return (
    <div className="">
      <div className="flex flex-col mx-10">
        <h1 className="p-5 text-2xl">Your Shopping Cart</h1>
        <div className="w-full rounded">
          <div className="sm:flex hidden h-14 items-center px-10 justify-between mb-4">
            <p className="font-semibold">Product</p>
            <p className="font-semibold ml-20">Quantity</p>
            <p className="font-semibold">Total</p>
          </div>
          <hr className="my-10" />

          {products.map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-4 bg-white rounded justify-start"
            >
              <div className="sm:flex hidden flex-wrap items-center"></div>
              <Image
                src={urlFor(item.productImage).url()}
                width={100}
                height={100}
                alt={item.title}
                className="w-24 h-24 object-cover mr-4"
              />
              <div className="sm:flex justify-between w-full">
                <div className="">
                  <p>{item.title}</p>
                  <p className="">${item.price}</p>
                </div>

                <div className="border py-1 w-20 sm:py-3 sm:w-32 flex justify-around items-center text-black border-gray-300 rounded-md">
                  <button
                    onClick={() => handleQuantityChange(item._id, "decrease")}
                    className="text-2xl font-bold"
                  >
                    -
                  </button>
                  <span className="text-lg text-black">
                    {count[item._id] || 1}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item._id, "increase")}
                    className="text-2xl font-bold"
                  >
                    +
                  </button>
                </div>
                <div className="sm:flex hidden items-center gap-4">
                  <p className="mb-2 md:mb-0">
                    Rs. {(item.price * (count[item._id] || 1)).toFixed(2)}
                  </p>
                  <button
                    onClick={() => deleteProduct(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-10" />
        <div className="flex justify-center sm:justify-end items-center">
          <div className="sm:h-[300px] h-[200px] w-96">
            <div className="flex flex-wrap items-center justify-end">
              <div className="flex gap-5 my-5">
                <h2 className="text-xl text-gray-500 text-center">Subtotal</h2>
                <p className="text-black">$ {total.toFixed(2)}</p>
              </div>
              <p className="text-gray-500">
                Taxes and shipping are calculated at checkout
              </p>
              <Link href="/checkout1">
                <button className="block px-24 py-2 border bg-[#2a254b] text-white mt-4">
                  Go To Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
