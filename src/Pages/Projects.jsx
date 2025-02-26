import React, { useState } from 'react'
import ProjectCard from '../Components/ProjectCard'
import { allProjectAPI } from '../../services/allAPI'
import { useEffect } from 'react'


function Projects() {

  const[allProjects,setAllProjects]=useState([])
  const [searchKey,setSearchKey]=useState([])
  console.log(allProjects);
  

  useEffect(()=>{
    getAllProjects()
  },[searchKey])


  const getAllProjects=async()=>{

    const token=sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        "content-type":"application/json",
        "authorization":`Bearer ${token}`
      }
      try {
        const result=await allProjectAPI(searchKey,reqHeader)
        console.log(result);
        setAllProjects(result.data)
        
      } 
      catch (err) {
        console.log(err);
        
      }
    }
  }

  return (
    <>
    <div className=' container d-flex align-items-center justify-content-between p-5'>
      <div className='col-lg-6'>
        <h3 className='text-warning'>All Projects</h3>
      </div>
      <input onChange={(e)=>setSearchKey(e.target.value)} type="text" style={{width:'300px'}} className='form-control' placeholder='Search Project by Language'/>
      
    </div>
    <div className='row container p-5 mt-5'>
      {
        allProjects?.length>0 ?
        allProjects?.map(project=>(
          <div className='col-lg-4 me- mb-2'>
        <ProjectCard displayData={project}/>
      </div>
        ))
    :
    <div className='my-5 fw-bolder'>Projects Not Fount</div>  
    }
    </div>
    </>
  )
}

export default Projects