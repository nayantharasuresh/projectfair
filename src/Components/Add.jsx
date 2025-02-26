import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import upload from '../assets/upload11.png'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { addProjectAPI } from '../../services/allAPI';
import { addResponseContext } from '../context/ContextAPI';



function Add() {

  const { setAddResponse } = useContext(addResponseContext)

  const [show, setShow] = useState(false);
  const [projectDetails, SetProjectDetails] = useState({ title: "", languages: "", github: "", website: "", projectImg: "", overview: "" })
  const [imgFileStatus, setImgFileStatue] = useState(false)
  const [preview, setPreview] = useState("")
  console.log(projectDetails);


  const handleClose = () => {
    SetProjectDetails({ title: "", languages: "", github: "", website: "", projectImg: "", overview: "" })
    setShow(false);
  }
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (projectDetails.projectImg.type == "image/jpg" || projectDetails.projectImg.type == "image/jpeg" || projectDetails.projectImg.type == "image/png") {
      setImgFileStatue(true)
      setPreview(URL.createObjectURL(projectDetails.projectImg))
    }
    else {
      setImgFileStatue(false)
      SetProjectDetails({ ...projectDetails, projectImg: "" })
      setPreview(upload)
    }
  }, [projectDetails.projectImg])

  const handleAddProject = async () => {
    const { title, languages, github, website, projectImg, overview } = projectDetails
    if (title && languages && github && website && projectImg && overview) {
      //api call

      //reqbody
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("projectImg", projectImg)
      reqBody.append("overview", overview)

      //req header
      const token = sessionStorage.getItem("token")
      console.log(token);

      if (token) {
        const reqHeader = {
          "content-type": "multipart/form-data",
          "authorization": `Bearer ${token}`
        }
        try {
          const result = await addProjectAPI(reqBody, reqHeader)
          if (result.status == 200) {
            setAddResponse(result.data)
            toast.success("project added successfully")
            handleClose()
          }
          else {
            toast.error(result.response.data)
          }

        }
        catch (err) {
          console.log(err);

        }

      }


    }
    else {
      toast.warning("enter the fields completely")
    }
  }


  return (
    <>
      <button onClick={handleShow} className='btn btn-warning'>+New project</button>

      <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'> New Project Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row align-items-center'>
            <div className='col-lg-4'>
              <label><img style={{ width: '150px' }} src={preview} alt="" /><input onChange={e => SetProjectDetails({ ...projectDetails, projectImg: e.target.files[0] })} style={{ display: 'none' }} type="file" /></label>
              {
                !imgFileStatus &&
                <div className='text-warning fw-bold' style={{ fontSize: '11px' }}>*upoload only the following file type (jpg,jpeg,png)</div>}
            </div>

            <div className='col-lg-8'>
              <div><input onChange={e => SetProjectDetails({ ...projectDetails, title: e.target.value })} type="text" className='form-control mb-3' placeholder='Project title' /></div>
              <div><input onChange={e => SetProjectDetails({ ...projectDetails, languages: e.target.value })} type="text" className='form-control mb-3' placeholder='Language Used' /> </div>
              <div><input onChange={e => SetProjectDetails({ ...projectDetails, github: e.target.value })} type="text" className='form-control mb-3' placeholder='Project Github  Link' /> </div>
              <div><input onChange={e => SetProjectDetails({ ...projectDetails, website: e.target.value })} type="text" className='form-control mb-3' placeholder='Project Website Link' /></div>
            </div>
          </div>
          <div><input onChange={e => SetProjectDetails({ ...projectDetails, overview: e.target.value })} type="text" className='form-control' placeholder='Overview' /></div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddProject} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add