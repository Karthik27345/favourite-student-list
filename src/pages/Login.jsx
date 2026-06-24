import React, { useState } from 'react'
import { useContext } from 'react'
import Fnavbar from '../components/Fnavbar'
import Ffooter from '../components/Ffooter'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import { Arrcontext } from '../components/Arrcontextprovider'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [checking,setchecking] = useState(true)
 const navigate = useNavigate()
  const[eusername,seteusername] = useState("")

  const[epassword,setepassword] = useState("")

 

const handlechange = (evt)=>{
  seteusername(evt.target.value)
}

const handlepass = (evt)=>{
  setepassword(evt.target.value)
}

const {users,setusers} = useContext(Arrcontext)

const check = ()=>{
 
  let userfound = false


  users.forEach((item)=>{
    if(item.name===eusername&&item.pass == epassword){

      navigate("/allstudents")
      userfound = true

     
       }
   })

    if(userfound === false){

        setchecking(false)

       }


   seteusername("")
   setepassword("")
  
}
  return (
   <>

   <Fnavbar/>


<div className='border-4 border-[#7C3AED] p-10 m-10' >

  <div className='flex flex-col gap-3'>
    <h1 className='font-bold text-2xl'>Welcome Back! ❤️</h1>
    <p className='text-gray-500'>Login to your account to continue</p>
    {checking?"": <p className='text-white-500 border-4 border-red-500 p-2 bg-amber-700 lg:w-1/4'>Please Signup before Login</p>}
   
    </div>

     <div className='flex flex-col gap-2 m-10' >
      <p className='font-medium'>Name:</p>
      <input placeholder='Enter your name' className='border border-black p-2' value={eusername} onChange={handlechange} ></input>
    </div>

    <div className='flex flex-col gap-2 m-10'>
      <p className='font-medium'>Passwords:</p>
      <input placeholder='Enter your Password' className='border border-black p-2' onChange={handlepass}></input>

      <button className='w-24 bg-[#7C3AED] p-2 mt-5 cursor-pointer' onClick={check}>Login</button>

    </div>

    
    <div className='flex m-10 gap-2'>
            <p className='text-gray-600'>Don't have an account?</p> 
            <Link to="/signup" className='text-[#7C3AED] underline'>Signup</Link>
    </div>
</div>

<Ffooter/>
   </>
  )
}

export default Login