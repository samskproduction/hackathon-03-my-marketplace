import React from 'react'
import Image from 'next/image'
import img from "../../../images/Frame 143.png"
import { IoMdArrowDropdown } from 'react-icons/io'
import ProductCard from './productscard'
const filter =[
    {name:"Category",},
    {name:"Product type",},
    {name:"Price",},
    {name:"Brand",}

]

const page = () => {
  return (
    <div>
        <Image
        src={img}
        alt="Globe icon"
        className='w-full h-full'
        />
        <div className='flex  flex-wrap justify-between  m-10'>
        <div className=" flex flex-wrap mb-5 items-center gap-10 ">
            {filter.map((category) => (
              <div key={category.name} className=" flex gap-5 items-center text-gray-400">
                  {category.name}
                  <span className='text-black'><IoMdArrowDropdown />
                  </span>
             
              </div>
            ))}
          </div>
          <div className='text-sm flex gap-10 text-gray-400 '>
               <h1>Sorting by:</h1>
               <h1 className='flex '>Date added <span className='text-black'><IoMdArrowDropdown />
               </span></h1>
          </div>
          </div>
          <ProductCard/>
    </div>
  )
}

export default page
