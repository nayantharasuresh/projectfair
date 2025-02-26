import React, { createContext, useState } from 'react'
import { useEffect } from 'react'


export const addResponseContext=createContext()
export const editResponseContext=createContext()
export const tokenAuthContext=createContext()


function ContextAPI({children}) {
    const [addResponse,setAddResponse]=useState("")
    const [editResponse,setEditResponse]=useState("")
    const [isAuthorizsed,setIsAuthorized]=useState(false)

    useEffect(() => {

      if(sessionStorage.getItem("token")){
        setIsAuthorized(true)
      }
      else{
        setIsAuthorized(false)
      }
     
    }, [isAuthorizsed])
    
    

  return (

    <>
   <tokenAuthContext.Provider value={{isAuthorizsed,setIsAuthorized}}>
   <editResponseContext.Provider value={{editResponse,setEditResponse}}>
   <addResponseContext.Provider value={{addResponse,setAddResponse}}>
    {children}
    </addResponseContext.Provider>
   </editResponseContext.Provider>
   </tokenAuthContext.Provider>
    </>
  )
}

export default ContextAPI