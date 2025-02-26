import React, { useContext } from 'react'
import Add from './Add'
import Edit from './Edit'
import { useState } from 'react'
import { useEffect } from 'react'
import { deleteProjectAPI, userProjectAPI } from '../../services/allAPI'
import { addResponseContext, editResponseContext } from '../context/ContextAPI'



function View() {

  const {addResponse}=useContext(addResponseContext)
  const {editResponse}=useContext(editResponseContext)
  const [userProjects,setUserProjects]=useState([])

  useEffect(() => {
    getUserProjects()
  }, [addResponse,editResponse])
  

  const getUserProjects=async()=>{
  
      const token=sessionStorage.getItem("token")
      if(token){
        const reqHeader={
          "content-type":"application/json",
          "authorization":`Bearer ${token}`
        }
        try {
          const result=await userProjectAPI(reqHeader)
          setUserProjects(result.data)
          
        } 
        catch (err) {
          console.log(err);
          
        }
      }
    }
  
    const handleDeleteProject=async(id)=>{

      const token=sessionStorage.getItem("token")
console.log(token);

      if(token){
        const reqHeader={
          "content-type":"application/json",
          "authorization":`Bearer ${token}`
        }

      try {
        const result=await deleteProjectAPI(id,reqHeader)
        console.log(result);
        
        if(result.status==200){
        getUserProjects()
        }
      } catch (err) {
        console.log(err);
        
      }
    }

  }

  return (
    <>
    <div className='d-flex justify-content-between align-items-center'>
      
        <h2 className='text-info'>All Projects</h2>
      
        <Add/>
    </div>
    {
      userProjects?.length>0 ?
      userProjects?.map(project=>(
        <div className='mt-4 border rounded d-flex justify-content-between p-4'>
        <h5>{project.title}</h5>
        <div className='d-flex justify-content-center align-items-center'>
          <Edit project={project}/>
          <a href={project?.github} className='ms-2'><i className="fa-brands fa-github fa-xl text-info"></i></a>
          <button onClick={() => handleDeleteProject(project._id)} className='btn ms-2'><i className="fa-solid fa-trash fa-lg text-danger "></i></button>
        </div>
        </div>
      ))
  :
  <div className='fw-bolder my-5 text-danger'>No Projects added yet</div>  
  }
   
    </>
  )
}

export default View