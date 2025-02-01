import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa'
const menu=[
    { name:"New arrivals",href:"#" },
    { name:"Best sellers",href:"#" },
    { name:"Recently viewed",href:"#" },
    { name:"Popular this week",href:"#"},
    { name:"All products",href:"#"},

]
const category =[
    {name: "Crockery", href: "#"},
    {name: "Furniture", href: "#"},
    {name: "Homeware", href: "#"},
    {name: "Plant pots", href: "#"},
    {name: "Chairs", href: "#"},
    {name: "Crockery", href: "#"},
]
const company=[
    {name: "About us",  href: "/about", },
    { name: "Shop ",href: "/shop", },
    {  name: "Contact us",  href: "#",},
    { name: "Privacy", href: "#",},
    { name: "Returns policy", href: "#", }
]
const footer = () => {
  return (
    <div className=' h-full w-full bg-[#2a254b]'>
    <div className=' flex    '>
        <div className=' flex  flex-wrap mx-3 justify-between w-full h-full'>
      <div className=' flex flex-col gap-5 mt-10'>
        <h1 className='text-white text-2xl  my-5'>Menu</h1>
        {menu.map((menu,index)=>(
          <Link key={index} href={menu.href} className='text-white text-sm  '>{menu.name}</Link>
        ))}

      </div>
      <div className=' flex flex-col gap-5  mt-10'>
        <h1 className='text-white text-2xl  my-5'>Category</h1>
        {category.map((category,index)=>(
          <Link key={index} href={category.href} className='text-white text-sm  '>{category.name}</Link>
        ))}

      </div>
      <div className=' flex flex-col gap-5  mt-10'>
        <h1 className='text-white text-2xl my-5'>Our Company</h1>
        {company.map((company,index)=>(
          <Link key={index} href={company.href} className='text-white text-sm  '>{company.name}</Link>
        ))}
      </div>
      <div className=' flex flex-col gap-5  my-10'>
      <h1 className='text-white text-2xl  my-5'>Join our mailing list</h1>
      <div className='flex'>
      <input type="text" placeholder='Your@email.com'  className='py-4 sm:px-24 px-2   bg-[#454066]'/>
      
      
      <button className=' py-4 sm:px-9 px-2  text-[#2a254b]  bg-white'>Sign Up</button>
      </div>
      </div>
      </div>
    </div>
    <hr className='mt-10'/>
    <div className='p-5 flex  justify-center sm:justify-between'>
    <h1 className='text-white'>Copyright 2022 Costco Club LTD</h1>
    <div className='flex flex-wrap gap-5 font-bold text-white text-1xl'>
    <FaLinkedin />
    <FaFacebookSquare />
    <FaInstagramSquare />
    <FaSkype />
    <FaTwitter />
    <FaPinterest />

    </div>
    </div>
   
    </div>
  )
}

export default footer
