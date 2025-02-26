import React, { useState } from 'react'
import Header from '../Components/Header'
import View from '../Components/View'
import Profile from '../Components/Profile'
import { useEffect } from 'react'

 
function Dashboard() {
  const [username,setUsername]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      setUsername(JSON.parse(sessionStorage.getItem("user")).username)
    }
    else{
      setUsername("")
    }
  },[])
  return (
    <>
    <Header/>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-lg-8'>
        <h1>welcome <span className='text-warning'>{username.split(" ")[0]}</span></h1>        
        <View/>
        </div>
     
      <div className='col-lg-4'>
      <Profile/>
      </div>
      </div>
    </div>
   
    </>
  )
}

export default Dashboard