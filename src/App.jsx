import React from 'react'
import { FaUserPlus, FaLock} from 'react-icons/fa'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Arrcontextprovider, { Arrcontext } from './components/Arrcontextprovider'

import Navbar from './components/Navbar'
import Abovefooter from './components/Abovefooter'
import Ffooter from './components/Ffooter'
import FavouriteStudents from './components/FavouriteStudents'
import Allstudents from './components/Allstudents'
import { useContext } from 'react'




const App = () => {


  return (
    <>

<Arrcontextprovider>

    <BrowserRouter>

    <Routes>

     <Route path='/' element={<Login/>}></Route>
     <Route path='/signup' element={<Signup/>}></Route>
     <Route path='/allstudents' element={<Allstudents></Allstudents>}></Route>
     <Route path='/favouritestudents' element={<FavouriteStudents/>}></Route>
    </Routes>
    
    
    </BrowserRouter>


</Arrcontextprovider> 
  


 

   
    </>
  )
}

export default App