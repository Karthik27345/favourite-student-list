import React from 'react'
import { FaGraduationCap } from "react-icons/fa"

const Fnavbar = () => {
  return (
    <>

<div className='flex gap-2  bg-[#F5F3FF] h-24 items-center'>
 <FaGraduationCap size={40} className='text-[#7C3AED]' />


<div>

    <h1 className='text-xl font-bold'>Student Manager</h1>
    <p className='text-gray-700'>Manage your students with ease</p>
   
    </div>

    </div>
    </>
  )
}

export default Fnavbar