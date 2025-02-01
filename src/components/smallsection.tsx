import React from "react";
import Image from "next/image";
import heroimage from "../../images/Image Block.png";
import Link from "next/link";

const smallsection = () => {
  return (
    <div className="mx-10 ">
      <h1 className="flex my-10 text-3xl md:text-5xl text-gray-700 items-center">Our popular products</h1>
      <div className="flex flex-wrap justify-center mb-10 gap-7 items-center">
        <div className="bg-[#2a254b] p-10  text-white h-[500px]  sm:h-[400px] w-[600px]">
          <h1 className="mt-10 text-3xl">It started with a small idea</h1>
          <p className="my-5 sm:text-lg text-sm">
            A global brand with local beginnings,
            our story begain in a small studio in South London in early 2014
            View collection
          </p>

          <div className="sm:mt-32 mt-20">
            <Link href="/shop">
              <button className="bg-[#454066]  text-white font-bold py-3 px-10 rounded">
                New Collection
              </button>
            </Link>
          </div>

        </div>

        <div className="w-[600px] h-[400px] relative ">
            <Image
                src={heroimage}
                alt="Room and Furniture"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
            />

        </div>
      </div>
    </div>
  );
};

export default smallsection;
