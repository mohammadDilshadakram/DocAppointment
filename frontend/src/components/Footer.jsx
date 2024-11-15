import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>


            {/* left section */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-dark leading-6'>"This is a full stack website built with the MERN stack and other technologies, featuring three user roles: doctor, patient, and admin. Each user type has dedicated login access and functionalities."</p>
            </div>


            
            {/* center section */}
            <div>
                <p className='text-xl text-teal-300 font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-dark'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>contact us</li>
                    <li>Privay policy</li>
                </ul>
            </div>


            
            {/* right section */}
            <div>
                <p className='text-xl text-teal-300 font-medium mb-5'>Follow us</p>
                <ul  className='text-dark'>

                    <li>6291198856</li>
                    <li>mddilshadakram123@gmail.com</li>
                </ul>

            </div>
        </div>

         {/* copyright text */}
         <div>
            <hr />
            <p className='py-5 text-teal-300 text-md text-center'>All right resrved to Dilshad</p>
         </div>

    </div>
  )
}

export default Footer