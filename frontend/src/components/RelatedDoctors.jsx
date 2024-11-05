import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
 

const RelatedDoctors = ({docId,speciality}) => {

    const {doctors}=useContext(AppContext)
    const navigate=useNavigate()

    const [relDoc,setRelDoc]=useState([])

    useEffect(()=>{

        if (doctors.length >0 && speciality) {

            const doctorsData=doctors.filter((doc)=>doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
            
        }
    },[doctors,speciality,docId])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md-mx-10'>
    <h1 className='text-3xl font-medium text-punk'>Related Doctors</h1>
    <p className='sm:w-1/3 text-center text-white text-sm'>Browse throgh our best doctors</p>
    <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {relDoc.slice(0,5).map((item,index)=>(
            <div 
            onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0, 0)}} 
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500" 
            key={index}
        >
            {/* Image Section */}
            <div className="h-[70%]">
                <img 
                    className="w-full h-full object-cover bg-blue-50" 
                    src={item.image} 
                    alt={item.name} 
                />
            </div>
        
            {/* Space between Image and Details */}
            <div className="h-[10%]"></div>
        
            {/* Details Section */}
            <div className="h-[20%] p-4">
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-red-500'}`}>
                    <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></p>
                    <p>{item.available ? 'Available' : 'Not-Available'}</p>
                </div>
                <p className="text-dark text-lg font-medium">{item.name}</p>
                <p className="text-dark text-sm">{item.speciality}</p>
            </div>
        </div>
        
        ))}
    </div>
    <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-primary text-dark px-12 py-3 rounded-full mt-10'>More</button>
    </div>
  )
}

export default RelatedDoctors