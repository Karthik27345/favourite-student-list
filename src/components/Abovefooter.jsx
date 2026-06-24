import React from 'react'
import { FaGraduationCap, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Abovefooter = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white border-t-4 border-b-4">

      <div className="flex flex-col gap-2 p-4 border-b-2 md:border-b-0 md:border-r-2 md:flex-1">
        <div className="flex gap-2 items-center">
          <FaGraduationCap size={30} className="text-[#7C3AED]" />
          <p className="font-bold text-lg">Student Manager</p>
        </div>

        <p className="text-gray-700">
          A smart way to manage and organize your students.
        </p>
      </div>

     
      <div className="flex flex-col gap-2 p-4 border-b-2 md:border-b-0 md:border-r-2 md:flex-1">
        <h1 className="font-semibold text-lg">About</h1>

        <p className="text-gray-700">
          This is a simple application to manage student records and favourite students.
        </p>
      </div>

   
      <div className="flex flex-col gap-2 p-4 md:flex-1">
        <h1 className="font-semibold text-lg">Contact</h1>

        <div className="flex items-center gap-2">
          <MdEmail size={20} className="text-gray-500" />
          <p>
            support@studentmanager.com
          </p>
        </div>

        <div className="flex items-center gap-2">
          <FaPhoneAlt size={18} className="text-gray-500" />
          <p>+91 9846576389</p>
        </div>
      </div>

    </div>
  )
}

export default Abovefooter