import React, { useState } from 'react'
import Navbar from './Navbar'
import { FaHeart } from 'react-icons/fa'
import Abovefooter from './Abovefooter'
import Ffooter from './Ffooter'
import { useContext } from 'react'
import { Arrcontext } from './Arrcontextprovider'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const FavouriteStudents = () => {

    const{favourites,setfavourites} = useContext(Arrcontext)

   

    const remove = (rollno)=>{

        let updatearr = favourites.filter((items)=>{
            if(items.Rollno===rollno){
                return false
            }

            else{
                return true
            }


        })

        setfavourites(updatearr)
toast.success("Student removed from favourites")
    }
    
  return (
    <div>

        <Toaster position='top-center'></Toaster>
        <Navbar></Navbar>

        <div className='bg-[#F5F3FF] p-10'>
            <h1 className='font-bold text-3xl'>Favourite Students</h1>
            <p className='text-gray-600'>Here is the list of your favourite students</p>

        </div>


    <div className=' flex flex-col p-2 border rounded-md m-5'>

          <div className='flex justify-around'>
          <div className='flex gap-3 items-center'>
<FaHeart size={20} className='text-purple-500'/>
<h1 className='text-purple-600 font-bold'>My Favourite students</h1>



        </div>

<div className='text-purple-500 border rounded w-16 p-1 bg-[#F5F3FF]'>
    <p>Total: {favourites.length}</p>
    </div>
      </div>




   

{
  favourites.length > 0 ? <div className='overflow-x-auto'> <table className='w-full bg-gray-400 mt-2'>
    <thead>
        <tr>
            <th className='p-3 text-left'>#</th>
            <th  className='p-3 text-left'>Roll no</th>
            <th  className='p-3 text-left'> Student Name</th>
            <th  className='p-3 text-left'>Action</th>
        </tr>
    </thead>

<tbody  className='bg-[#F5F3FF]'>
    {favourites.map((items,index)=>(
        <tr key={items.Rollno} className='border-b'>
            <td className='p-4'>{index + 1}</td>
            <td className='p-4'>{items.Rollno}</td>
            <td className='p-4'>{items.Name}</td>
            <td className='p-4'><button className='bg-red-100 text-red-500 px-3 py-1 rounded' onClick={()=>{remove(items.Rollno)}}>Remove</button></td>
        </tr>
    ))}
</tbody>

</table></div>: (
    <div className="text-center p-10">
      <h2 className="text-xl font-semibold text-gray-600">
        No Favourite Students Found ❤️
      </h2>

      <div className="bg-purple-600 text-white p-3 rounded mt-4 inline-block">
        <Link to="/allstudents">
          Back to Student List
        </Link>
      </div>
    </div>
  )
}

 </div>
   

<Abovefooter/>
<Ffooter/>


    </div>
  )
}

export default FavouriteStudents