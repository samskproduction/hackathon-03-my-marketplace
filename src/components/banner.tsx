import Image from 'next/image'
import React from 'react'
import ban from "../../images/Image (1).png"

const banner = () => {
  return (
    <div className='w-full h-[400px] top-0 relative'>
        <Image
            src={ban}
            alt='Room and Furniture'
            layout='fill'
            objectFit='cover'
            className='w-full h-full'
        />
        <div className='absolute top-[250px]  ml-2 sm:left-[200px] lg:left-[470px] flex  '>
      <input type="text" placeholder='Your@email.com'  className='py-4 sm:px-12 px-4   bg-white'/>
      
      
      <button className=' py-4 sm:px-9 px-3  bg-[#2a254b]  text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default banner
