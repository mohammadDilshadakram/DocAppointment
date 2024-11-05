import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 '>
        <p>CONTACT <span className='text-dark font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
      

      <div className='flex flex-col  justify-center items-start gap-6' >
         <p className='font-semibold text-lg text-title
          '>Our Office</p>
         <p className='text-gray-100'>45 kadamtalla 2nd bye lane <br />Howrah 711101</p>
         <p className='text-gray-100'>9211420123 <br />aahaidha@yahoo.com</p>
         <p className='font-semibold text-lg text-title '>Career at here</p>
         <p className='text-gray-100'>Learn more about our terms and openings</p>
         
         <button className='border border-black text-white px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-800'>Explore Now</button>
      </div>

      </div>

    </div>
  )
}

export default Contact