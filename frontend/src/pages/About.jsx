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

          <p>"We are dedicated to connecting patients with trusted healthcare providers, offering a seamless platform for managing appointments and medical needs with ease and confidence."</p>
          <p>"We are committed to enhancing healthcare accessibility by connecting patients with trusted professionals, simplifying appointment booking, and ensuring quality care at every step."</p>
          <b className='text-dark'>Our Vision</b>
          <p>"To empower individuals with accessible, reliable healthcare solutions, making quality care and expert guidance available to everyone, anytime."</p>

        </div>
      </div>



      <div className='text-xl my-4 text-center p-12'>
        <p>WHY <span className='text-dark font-semibold'>CHOOSE US</span></p>
      </div>


      <div className='flex flex-col md:flex-row mb-20 text-center justify-around'>

        <div className='border border-gray-400 rounded-md px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-dark transition-all duration-300 text-white cursor-pointer'>
          <b> Trusted Professionals </b>
          <p>Access a network of verified doctors committed to providing quality care. </p>
        </div>

        <div className='border border-gray-400 rounded-md px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-dark transition-all duration-300 text-white cursor-pointer'>
        <b>Seamless Experience</b>
        <p> Book appointments effortlessly with a user-friendly interface and quick access to healthcare services.</p>
        </div>

        <div className='border border-gray-400 rounded-md px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-dark transition-all duration-300 text-white cursor-pointer'>
        <b>Personalized Care</b>
        <p> Tailored solutions to meet your unique health needs, ensuring a comfortable and reliable experience.</p>
        </div>

      </div>



    </div>
  )
}

export default About