import React from "react";
import Small from "../about/section"; // Adjust the path as necessary
import Service from "./service";
import Feature from "@/components/feature";
import Banner from "@/components/banner";
import Link from "next/link";

const page = () => {
  return (
    <div className=" ">
      <div className="flex flex-wrap  mx-20 my-20 justify-between items-center">
        <p className="text-3xl md:text-4xl   text-gray-700 my-10">
          A brand built on the love of craftmanship, <br /> quality and
          outstanding customer service
        </p>
        <Link href="/shop">
        <button className="bg-gray-100  text-gray-700 font-bold py-3 px-10 rounded">
          View Our products{" "}
        </button>
        </Link>
      </div>
      <Small/>
      <Service/>
      <Feature/> 
      <Banner/>

    </div>
  );
};

export default page;
