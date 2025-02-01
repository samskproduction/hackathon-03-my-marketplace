import Banner from "@/components/banner";
import Feature from "@/components/feature";
import Herosection from "@/components/herosection";
import ProductCard from "@/components/products";
import Smallsection from "@/components/smallsection";
import React from "react";
// import { Metadata } from "next";

const page = () => {
  return (
    <div>
      <Herosection />
      <Feature />
      <ProductCard />
      <Smallsection />
      <Banner />
    </div>
  );
};

export default page;



// export const metadata: Metadata = {
//   title: "Home-My-Store",
//   description: "lorem my e-store",
// };
