import React from 'react'
import Image from 'next/image'
import img from "../../../images/Image (4).png"
import Link from 'next/link'

const service = () => {
  return (
    <div className=''>

    <div className='flex flex-wrap w-full h-full'>
        <div className='w-[674px] h-[500px]'>
            <Image
            src={img}
            alt="service"
            />
        </div>
        <div className='w-[674px] sm:h-[565px] h-[800px] bg-gray-100 p-10'>
            <h1 className='text-3xl'>Our service isn’t just personal, it’s actually <br />
            hyper personally exquisite</h1>

            <p className='text-1xl text-gray-500 my-10'>When we started Avion, the idea was simple. Make high quality furniture <br /> affordable and available for the mass market. </p>
                <p className='text-1xl text-gray-600'> Handmade, and lovingly crafted furniture and homeware is what we live,<br /> breathe and design so our Chelsea boutique become the hotbed for the <br /> London interior design community.</p>
<Link href="/shop">
                    <button className='bg-white text-black  mt-32 py-3 px-10 rounded'>View Collection</button>
                    </Link>  
        </div>
      
    </div>
    </div>
  )
}

export default service
