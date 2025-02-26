import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { homeProjectAPI } from '../../services/allAPI';
import { useEffect } from 'react';
import { toast } from 'react-toastify';



function Home() {

  const [homeProjects,setHomeProjects]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    getHomeProjects()
  },[])

  const getHomeProjects=async()=>{
    try {
      const result=await homeProjectAPI()
     // console.log(result);
      if(result.status==200){
        setHomeProjects(result.data)
      }
      
    } 
    catch (err) {
      console.log(err);
      
    }
  }

const handleProjects=()=>{
  if(sessionStorage.getItem("token")){

    navigate('/projects')

  }
  else{
    toast.warning("please login to get full access of our projects")
  }
}

  return (
    <>
    <div className='container mb-5' style={{marginTop:'150px'}}>
      <Row>
        <Col lg={6} md={6} sm={12}> <br /> <br /> <br /> <br />
          <h1 className='fw-bold' style={{fontSize:'50px'}}><i className='fa-brands fa-docker text-danger'></i> Project Fair</h1>
          <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe at, tenetur praesentium nulla explicabo quasi vitae unde voluptate natus necessitatibus officia nobis molestias ex repellendus. Deleniti nostrum excepturi quae?</p>
        {sessionStorage.getItem("token")?
          <Link to={'/dashboard'} className='btn btn-warning p-2 mt-2' style={{borderRadius:'10px'}}>MANAGE YOUR PROJECTS</Link> 
        
        :
        <Link to={'/login'} className='btn btn-warning p-2 mt-2' style={{borderRadius:'10px'}}>START TO EXPLORE</Link>} 
        </Col>
        <Col lg={4} md={6} sm={12} >
        <img className='ms-5 ' style={{widht:'450px'}} src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-2974925-2477356.png" alt="" />
        </Col>
          </Row>
          <div className='mt-5 text-center'>
            <h2 className='my-5 text-danger' >Explore Our Projects</h2>
            <div >
              <marquee className='mb-5'>
                <div className='d-flex'>
                  {
                    homeProjects?.length>0 ?
                    homeProjects?.map(projects=>(
                      <div className='me-5'>
                    <ProjectCard displayData={projects}/>                   
                  </div> 
                    ))
                  :
                  <div className='text-danger my-5 fw-bolder'>Project Not Found</div>                 
                  }
                </div>
              </marquee>
              <button onClick={handleProjects} className='btn btn-link'>Click here to view more projects</button>
            </div>
          </div>

          {/* {testimonial} */}

          <div className="mt-5">
            <h1 className='text-center '>Our Testimonial</h1>
            <div className="d-flex justify-content-center align-items-center mt-5">

            <Card style={{ width: '18rem' }} className='p-3'>
      <Card.Body>
        <Card.Title>
          <div className='text-center'>                  
              <img className='text-center rounded-circle w-50' src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" alt="" />
          </div>
        </Card.Title>
        <Card.Text className=''>
          <h5 className='text-center mt-3'>Zinta Sam</h5>
          <div className='d-flex justify-content-center align-items-center mt-2'>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
          </div>
          <p className='mt-3' style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique eaque tempore incidunt magnam quisquam aut dolorum dolores adipisci eveniet odio necessitatibus deleniti facilis veritatis nesciunt, vitae accusamus in unde!</p>
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }} className='p-3 ms-5'>
      <Card.Body>
        <Card.Title>
          <div className='text-center'>                  
              <img className='text-center rounded-circle w-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfw6-LspCyt-0yFdIiNM6y5jMeGLN8g_ME4w&s" alt="" />
          </div>
        </Card.Title>
        <Card.Text className=''>
          <h5 className='text-center mt-3'>Litha Lio</h5>
          <div className='d-flex justify-content-center align-items-center mt-2'>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
          </div>
          <p className='mt-3' style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique eaque tempore incidunt magnam quisquam aut dolorum dolores adipisci eveniet odio necessitatibus deleniti facilis veritatis nesciunt, vitae accusamus in unde!</p>
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }} className='p-3 ms-5'>
      <Card.Body>
        <Card.Title>
          <div className='text-center'>                  
              <img className='text-center rounded-circle w-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-wDAbo0zEeL-an5AFjeTr634hEOBDYdIAWBxl_onWolAC1tImMIwqKnBiDAVJOFawTOk&usqp=CAU" alt="" />
          </div>
        </Card.Title>
        <Card.Text className=''>
          <h5 className='text-center mt-3'>Maz Miller</h5>
          <div className='d-flex justify-content-center align-items-center mt-2'>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>

          </div>
          <p className='mt-3' style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique eaque tempore incidunt magnam quisquam aut dolorum dolores adipisci eveniet odio necessitatibus deleniti facilis veritatis nesciunt, vitae accusamus in unde!</p>
        </Card.Text>
      </Card.Body>
    </Card>

            </div>
          </div>

    </div>
    </>
  )
}

export default Home