import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Allstudents from './Allstudents'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center p-5 bg-[#f1f1f1b9]'>

        <div className='flex gap-2 items-center'>
            <FaGraduationCap size={40} className='text-[#7C3AED]'/>
            <h1 className='font-bold text-2xl'>Student Manager</h1>
        </div>


<div className='flex font-bold gap-10 underline text-[#7C3AED]'>
  
  <Link to="/allstudents">All students</Link>
  <Link to="/favouritestudents">Favourite Students</Link>
</div>
     
    </div>
  )
}

export default Navbar