import React, { useContext, useState } from 'react'
import { createContext } from 'react'

 const Arrcontext = createContext()
const Arrcontextprovider = (props) => {

 

  const[users,setusers] = useState([{name:"karthik",pass:"123"}])

  const [students,setstudents] = useState([{Rollno:"1",Name:"karthik"},{Rollno:"2",Name:"kishore"},{Rollno:"3",Name:"john"}])

  const[favourites,setfavourites] = useState([])

  

  
  return (
    <div>
      
      <Arrcontext.Provider value={{users,setusers,students,setstudents,favourites,setfavourites}}>

        {props.children}



    </Arrcontext.Provider>
    
    </div>
  )
}

export default Arrcontextprovider
export {Arrcontext}