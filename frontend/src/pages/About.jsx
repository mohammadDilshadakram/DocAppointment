import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 '>
        <p>ABOUT <span className='text-dark font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-white'>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt exercitationem, minus, possimus aliquam enim eos cumque quaerat voluptate impedit dignissimos error? Recusandae, est odio. Eos quidem nesciunt numquam dolore.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci maiores culpa ea esse repellendus labore dolore officia, neque quae sunt quis vel assumenda necessitatibus enim delectus voluptatibus obcaecati. Quam.</p>
          <b className='text-dark'>Our Vision</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates explicabo cupiditate exercitationem expedita magni dolor optio velit pariatur id, autem molestias ratione minima vel repellat amet delectus soluta voluptate aut.</p>

        </div>
      </div>



      <div className='text-xl my-4 text-center p-12'>
        <p>WHY <span className='text-dark font-semibold'>CHOOSE US</span></p>
      </div>


      <div className='flex flex-col md:flex-row mb-20 text-center justify-around'>

        <div className='border border-gray-400 rounded-md px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-dark transition-all duration-300 text-white cursor-pointer'>
          <b> Efficiency: </b>
          <p>Bahut efficient hai </p>
        </div>

        <div className='border border-gray-400 rounded-md px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-dark transition-all duration-300 text-white cursor-pointer'>
        <b>Conveniance  </b>
        <p>Bahut convenient hai, bhai</p>
        </div>

        <div className='border border-gray-400 rounded-md px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-dark transition-all duration-300 text-white cursor-pointer'>
        <b>Personalization </b>
        <p>ek dum personalize hai</p>
        </div>

      </div>



    </div>
  )
}

export default About