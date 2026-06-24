import React, { useState } from 'react'
import Fnavbar from '../components/Fnavbar'
import Ffooter from '../components/Ffooter'
import { useContext } from 'react'
import { Arrcontext } from '../components/Arrcontextprovider'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

const{users,setusers} = useContext(Arrcontext)
const navigate = useNavigate()

    const [eusername,seteusername] = useState("")
    const[epassword,setepassword] = useState("")
    const[cpassword,setcpassword] = useState("")
    const[error,seterror] = useState("")
  const[agree,setagree] = useState(false)
    const handlename = (evt)=>{
        seteusername(evt.target.value)
    }

    const handlepass = (evt)=>{
        setepassword(evt.target.value)
    }


    const handlecpass = (evt)=>{
        setcpassword(evt.target.value)
    }

    console.log(users)
   const adduser = ()=>{
    
if(!agree){
    seterror("You must agree to Terms & Privacy Policy ✅")
    return
}

  

    if(cpassword===epassword){
        setusers([...users,{name:eusername, pass:epassword}])
        navigate("/")
          setepassword("")
    seteusername("")
    setcpassword("")
    seterror("")
    }

    else{
        seterror("Passwords does not match")
    }

   }


   



  return (
    <div>
       
       <Fnavbar/>

<div className='border-4 border-[#7C3AED]  p-10 m-10'>
    <div className='p-10'>
        <h1 className='text-xl font-bold'>Create Account 🚀</h1>
        <p className='text-gray-600'>Sign up to get started with Student Manager</p>
    </div>

    <div className='flex flex-col gap-2 m-5'>
        <p className='font-bold'> Full Name:</p>
        <input placeholder='Enter your full name' className='border border-black p-2' value={eusername} onChange={handlename}/>
    </div>

    <div className='flex flex-col gap-2 m-5'>
        <p className='font-bold'>Password:</p>
        <input placeholder='Create a Password' className='border border-black p-2' value={epassword} onChange={handlepass}></input>
    </div>


<div className='flex flex-col gap-2 m-5'>
    <p className='font-bold'>Confirm Password:</p>
    <input placeholder='Confirm your Password' className='border border-black p-2' value={cpassword} onChange={handlecpass}></input>
</div>

<div className='flex gap-2 ml-5' >
    <input type='checkbox' checked={agree} onChange={()=>{
        setagree(!agree)
    }}></input>
    <span>I agree to the <span className='text-[#7C3AED]'>Terms of service</span> and <span className='text-[#7C3AED]'> Privacy Policy</span> </span>

</div>

<div className='m-5'>
  {error && (
    <p className="text-red-600 font-medium mb-3">{error}</p>
  )}
  <button
    className='w-24 bg-[#7C3AED] cursor-pointer p-2'
    onClick={adduser}
  >
    Signup
  </button>
</div>


</div>

      <Ffooter/>
       
       
        </div>
  )
}

export default Signup