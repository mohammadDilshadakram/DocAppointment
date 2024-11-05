import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'

import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyProfile = () => {

 const {userData,setUserData,token,backendUrl,loadUserProfileData}=useContext(AppContext)



  const [isEdit, setIsEdit] = useState(false)
  const [image,setImage]=useState(false)


  const updateUserProfileData=async()=>{
    try {
      const formData=new FormData()

      formData.append('name',userData.name)
      formData.append('phone',userData.phone)
      formData.append('address',JSON.stringify(userData.address))
      formData.append('gender',userData.gender)
      formData.append('dob',userData.dob)

      image && formData.append('image',image)

      const {data}=await axios.post(backendUrl + '/api/user/update-profile',formData,{headers:{token}})

      if(data.success){
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      }else{
        toast.error(data.message)
      }
      

    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }
  }


  return userData && (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>


    {
      isEdit
      ?<label htmlFor="image">
        <div className='inline-block relative cursor-pointer'>
          <img className='w-36 rounded opacity-55 ' src={image? URL.createObjectURL(image):userData.image} alt="" />
          <img className='w-10 text-black absolute bottom-12 right-12' src={image? '':assets.upload_icon} alt="" />
        </div>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file"  id="image" hidden/>

      </label>
      :<img className='w-36 rounded' src={userData.image} alt="" />
    }



      

      {
        isEdit
          ? <input className='bg-gray-300 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-medium text-3xl text-dark mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-500 h-[1px] border-none' />

      <div>
        <p className='text-neutral-300 underline my-3'>Contact Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-white'>
          <p className='font-medium'>Email Id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit
              ? <input className='bg-gray-600 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-gray-300'  >{userData.phone}</p>
          }

          <p className='font-medium'>Address:</p>
          {
            isEdit
            ? <p>

              <input className='bg-gray-600' onChange={e => setUserData(prev => ({ ...prev, address: {...prev.address,line1:e.target.value} }))} value={userData.address.line1} type="text" />
              <br />
              <input className='bg-gray-600' onChange={e => setUserData(prev => ({ ...prev, address: {...prev.address,line2:e.target.value} }))} value={userData.address.line2} type="text" />

            </p>
            : 
              <p className='text-gray-300'>
                {userData.address.line1}
                <br />
                {userData.address.line2}

              </p>
           
          }

        </div>
       
      </div>


      <div>
        <p className='text-neutral-300 underline my-3'>Basic Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-white'>
          <p className='font-medium'>Gender</p>
          {
        isEdit
          ? <select className='max-w-20 bg-gray-600' onChange={(e)=> setUserData(prev=> ({...prev,gender:e.target.value}))}  value={userData.gender}> 

            <option value="Male">Male</option>
            <option value="FeMale">FeMale</option>
          </select>
          : <p className='text-gray-300'>{userData.gender}</p>
      }

      <p className='font-medium'>Birthday:</p>
      {
        isEdit
        ? <input className='max-w-20 bg-gray-600' type="date" value={userData.birthday} onChange={(e) => setUserData
          (prev => ({ ...prev, dob: e.target.value }))} />
          : <p className='text-gray-300'>{userData.dob}</p>
      }

        </div>
      </div>


      <div className='mt-10'>
         {
        isEdit
        ?<button className='border bg-pink-50 border-black px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300' onClick={updateUserProfileData}>Save Information</button>
        :<button className='border bg-pink-50 border-black px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300' onClick={()=>setIsEdit(true)}>Edit</button>
      }
      

      </div>

     

    </div>
  )
}

export default MyProfile