import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const AllAppointment = () => {

  const { aToken, appointments, getAllAppointments,cancelAppointment} = useContext(AdminContext)
  const { calculateAge,slotDateFormat,
    currencySymbol } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {

      getAllAppointments()

    }
  }, [aToken])


  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium'>All Appointments</p>

      <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>

      <div className='hidden sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>

          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>



        {appointments.map((item, index) => (
            <div key={index} className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] py-3 px-6 border-b items-center text-gray-500 hover:bg-gray-50">

            <p className='max:sm-hidden '>{index + 1}</p>
            <div className="flex items-center gap-2">
              <img src={item.userData.image} alt="" className="w-8 rounded-full" />
              <p>{item.userData.name}</p>
            </div>
           
            <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>

            <div className="flex items-center gap-2">
              <img src={item.docData.image} alt="" className="w-8 rounded-full bg-gray-200" />
              <p>{item.docData.name}</p>
            </div>
            <p>{currencySymbol}{item.amount}</p>
            {
              item.cancelled
              ?<p className='text-red-400 text-xs font-medium'>Cancelled</p>
              :item.isCompleted
              ?<p className='text-green-400 text-xs font-medium'>Completed</p>
              : <img onClick={()=>cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
            }
           

          </div>
        ))}


      </div>
    </div>
  )
}

export default AllAppointment