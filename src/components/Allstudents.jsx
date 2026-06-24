import React, { useState } from 'react'
import Navbar from './Navbar'
import { FaUsers } from 'react-icons/fa'
import { useContext } from 'react'
import { Arrcontext } from './Arrcontextprovider'
import Abovefooter from './Abovefooter'
import Ffooter from './Ffooter'
import toast,{Toaster} from 'react-hot-toast'


const Allstudents = () => {

    const{students,setstudents,favourites,setfavourites} = useContext(Arrcontext)
    const[rollno,setrollno] = useState("")
    const[name,setname] = useState("")

   


    const sroll = (evt)=>{

        setrollno(evt.target.value)

    }

    const sname = (evt)=>{
        setname(evt.target.value)
    }

    const add = ()=>{

        if(rollno==="" && name===""){
            toast.error("Please enter the Roll no and Student Name")
            return
        }
        
 setstudents([...students,{Rollno:rollno,Name:name}])
 setrollno("")
 setname("")
 
    }
   

    const remove = (rollno) =>{
        const updatedstudents = students.filter((item)=>{
            if(item.Rollno==rollno){
                return false
            }

            else{
                return true
            }
        })

        setstudents(updatedstudents)

        console.log(updatedstudents)
    }


    const favouritef = (rollNo)=>{


     const alreadyexists = favourites.find(items=>items.Rollno===rollNo)

     if(alreadyexists){
        toast.error("This Student is already added")
        return
     }

     const favour = students.find(items=>items.Rollno===rollNo)

     setfavourites([...favourites,favour])

     toast.success("The student is added")

    


    }


  

  return (
    <div>

        <Toaster position='top-center'/>
<Navbar/>

<div className='bg-[#F5F3FF] p-10 flex justify-between'>
  
  
    <div>
        <h1 className='font-bold text-3xl'>All Students</h1>
        <p className='text-gray-600'>Here is the list of all students</p>
    </div>


    <div className='flex gap-3 items-center border rounded-md p-2 w-1/3 md:w-1/6  border-gray-500'>
        <FaUsers size={60} className='text-purple-600'/>

        <div>
            <p className='text-gray-800'>Total students</p>
            <h1 className='text-purple-900 font-bold text-xl'>{students.length}</h1>
        </div>
    </div>




</div>

<div className='flex gap-2 justify-around items-center  p-5 bg-[#eee5e5b9] border-b-4 border-t-4'>
    <label htmlFor="rollno" >Roll no :</label>
    <input placeholder='Enter the roll number' id='roll no' className='p-2' onChange={sroll} value={rollno}/>

<label htmlFor="name">Student Name:</label>
    <input placeholder='Enter the student name' id='name' className='p-2' onChange={sname} value={name}/>



   
</div>

<div className='bg-[#eee5e5b9] p-5 flex justify-center border-b-4'>
<button className='bg-purple-300 p-3 border rounded text-purple-800' onClick={add}>Add Student</button>
</div>

<div className='border-4 m-5'>
    <table className='w-full'>

    <thead className='bg-gray-400 mt-2'>
        <tr>
            <th className='p-3 text-left'>#</th>
            <th className='p-3 text-left'>Roll no</th>
            <th className='p-3 text-left'>Student Name</th>
            <th className='p-3 text-left'>Action</th>
        </tr>

        
    </thead>


    <tbody>

       {
        students.map((items,index)=>{
            return(
                <>
<tr className='border-b' key={items.Rollno}>

<td  className='p-3 text-left'>{index +1}</td>
<td  className='p-3 text-left'>{items.Rollno}</td>
<td  className='p-3 text-left'>{items.Name}</td>

<td  className='p-3 text-left flex gap-2'>
    <button className='text-purple-500 border rounded  p-1 bg-[#F5F3FF]' onClick={()=>{favouritef(items.Rollno)}
    }>Add to favourite</button>
   <button className='bg-red-100 text-red-500 px-3 py-1 rounded' onClick={()=>{
    remove(items.Rollno)
   }}>Remove</button>
</td>
   
</tr>

                </>
            )
        })

        
       }
        
    </tbody>
</table>
</div>

<Abovefooter/>

<Ffooter/>






    </div>
  )
}

export default Allstudents