import Link from "next/link";
import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  slug: {
    current: string;
  };
  productImage: string;
  name: string;
  title: string;
  price: string;
  description: string;
 
}

const ProductCard = async () => {
  const query = `*[_type=="product"]`;
  const Products = await client.fetch(query);
  return (
    <div className=" mx-10 my-16">
      <h1 className=" text-3xl md:text-5xl  text-gray-700 my-10">
        New ceramics
      </h1>
      <div className="flex  flex-wrap gap-5 justify-around  ">
        {Products.map((product: Product, index: number) => (
          <Link
            key={index}
            href={`/singlepage/${product.slug.current}`}
            className=""
          >
            <div className="w-[250px] sm:w-[250px] md:w-[300px] lg:w-[300px]">
              <div className="relative">
          <Image
            src={urlFor(product.productImage).url()}
            alt={product.name}
            width={200}
            height={350}
            className="w-full h-[350px] object-cover"
          />
              </div>
              <div className="-10">
          <h3 className="text-lg text-gray-700 font-bold mb-1 my-5">
            {product.title}
          </h3>
          <h3 className=" text-gray-700  mb-1 line-clamp-1">
            {product.description}
          </h3>
          <p className="text-sm font-bold text-gray-700 mb-2">Price: ${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/shop">
          <button className="bg-gray-100  text-gray-700 font-bold py-3 px-10 rounded">
            New Collection{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
