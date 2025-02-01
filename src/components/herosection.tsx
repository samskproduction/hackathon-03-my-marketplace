import Image from "next/image";
import React from "react";
import heroimage from "../../images/hero.png";
import Link from "next/link";

const herosection = () => {
  return (
    <section className="relative bg-gray-50  py-10">
      <div className="w-full h-72 lg:h-[70vh] ">
        <Image
          src={heroimage}
          alt="Room and Furniture"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <div className="absolute bottom-5 lg:bottom-16 flex h-[350px] items-center justify-center lg:justify-start sm:right-36 px-9  bg-white  rounded-lg shadow-md">

        <div className="text-center lg:text-start     ">
          <p className=" w-full sm:w-[400px] text-2xl">
            Luxury homeware for people <br />who love timeless design quality{" "}
          </p>
          <p className="mt-4 text-gray-600 text-1xl w-full sm:w-[400px]">
            shop the new spring 2022 collection today{" "}
          </p>

        <Link href="/shop">
          <button className="sm:mt-[150px] mt-[50px] px-6 md:px-10 py-3 md:py-4 text-gray-700 bg-gray-100 font-medium rounded">
        Veiw Collection
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default herosection;
