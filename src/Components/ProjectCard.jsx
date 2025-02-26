import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import server_url from '../../services/server_url'



function ProjectCard({displayData}) {
  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
console.log(displayData);

  return (
    <>
    <Card style={{ width: '18rem' }} onClick={handleShow}>
      <Card.Img  variant="top" src={`${server_url}/uploads/${displayData?.projectImg}`}/>
      <Card.Body>
        <Card.Title>{displayData?.title}</Card.Title>
      </Card.Body>
    </Card>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='row'>
        <div className='col-lg-6'>
          <img className='w-100' src={`${server_url}/uploads/${displayData?.projectImg}`} alt="" /> 
        </div>

        <div className='col-lg-6 p-3'>
          <h3 className='text-warning'>{displayData?.title}</h3>
          <h4>Language used: <span className='text-danger'>{displayData?.languages}</span></h4>
          <h4 className='mt-3'>Project overview: <span style={{fontSize:'16px'}}>{displayData?.overview}</span></h4>
          
        </div>
        </div>

        <div className='mt-3'>
          <a href={displayData?.github} className='btn btn-info w-25 me-3'><i className="fa-brands fa-github"></i></a>
          <a href={displayData?.website} className='btn btn-info w-25'><i className="fa-solid fa-link"></i></a>
        </div>
               
       
      

        </Modal.Body>
      </Modal>

     

    </>
  )
}

export default ProjectCard