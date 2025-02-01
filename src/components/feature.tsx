import React from "react";
import { CiCircleCheck, CiCreditCard1, CiDeliveryTruck } from "react-icons/ci";
import { PiPlantThin } from "react-icons/pi";
const categories = [
  {
    icon: <CiDeliveryTruck />,
    name: "Next day as standard",
    des: "Order before 3pm and get your order the next day as standard",
    href: "#",
  },
  { icon:<CiCircleCheck />,name: "Made by true artisans", des:"Handmade crafted goods made with real passion and craftmanship", href: "#" },
  { icon:<CiCreditCard1 /> , name: "Unbeatable prices", des:"For our materials and quality you wont find better prices anywhere", href: "#" },
  { icon:<PiPlantThin />,name: "recycled packagging", des:"We use 100% recycled to ensure our footprint is more manageable", href: "#" },
];
const feature = () => {
  return (
    <div className="w-full  justify-center">
      <h1 className="justify-center flex sm:ml:0 ml-10 text-2xl mt-16">What makes our brand different</h1>
      
        <div className=" flex flex-wrap my-10  justify-center w-full  items-center gap-5 ">
          {categories.map((category) => (
            <div key={category.name} className="w-[300px] h-[200px] p-5 bg-gray-100 text-gray-800 "> 
               <h1 className="text-3xl font-bold">{category.icon}</h1> 
          <h1 className="my-3 text-xl">{category.name}</h1>    
              <h1 className="">
                {category.des}
              </h1>
            </div>
          ))}
        </div>
    </div>
  );
};

export default feature;
