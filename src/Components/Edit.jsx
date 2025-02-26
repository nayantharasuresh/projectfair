import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import upload from '../assets/upload11.png'
import { useEffect } from 'react';
import server_url from '../../services/server_url'
import { toast } from 'react-toastify';
import { updateProjectAPI } from '../../services/allAPI';
import { editResponseContext } from '../context/ContextAPI';





function Edit({project}) {
  const { setEditResponse } = useContext(editResponseContext)

  const [projectDetails, SetProjectDetails] = useState({ id: project?._id, title: project?.title, languages: project?.languages, github: project?.github, website: project?.website, projectImg: "", overview: project?.overview })
  const [preview, setPreview] = useState("")
  const [imgFileStatus, setImgFileStatue] = useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    SetProjectDetails({ id: project?._id, title: project?.title, languages: project?.languages, github: project?.github, website: project?.website, projectImg: "", overview: project?.overview })
  }
  const handleShow = () => {
    setShow(true);
    SetProjectDetails({ id: project?._id, title: project?.title, languages: project?.languages, github: project?.github, website: project?.website, projectImg: "", overview: project?.overview })
  }

  useEffect(() => {
    if (projectDetails.projectImg.type == "image/jpg" || projectDetails.projectImg.type == "image/jpeg" || projectDetails.projectImg.type == "image/png") {
      setImgFileStatue(true)
      setPreview(URL.createObjectURL(projectDetails.projectImg))
    }
    else {
      setImgFileStatue(false)
      SetProjectDetails({ ...projectDetails, projectImg: "" })      
      setPreview("")
    }
  }, [projectDetails.projectImg])

  const handleupdate = async () => {
    const { id, title, languages, github, website, projectImg, overview } = projectDetails

    if (title && languages && github && website && overview) {
      //api
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("github", github)
      reqBody.append("website", website)
      preview ? reqBody.append("projectImg", projectDetails.projectImg) : reqBody.append("projectImg", project.projectImg)
      reqBody.append("overview", overview)

      //req header

      const token = sessionStorage.getItem("token")
      console.log(token);

      if (token) {
        const reqHeader = {
          "content-type": preview ?"multipart/form-data" : "application/json",
          "authorization": `Bearer ${token}`
        }
        try {
          const result = await updateProjectAPI(id, reqBody, reqHeader)
          console.log(result);
          if (result.status == 200) {
            setEditResponse(result.data)
            handleClose()
          }
        }
        catch (err) {
          console.log(err);

        }


      }


    }
    else {
      toast.warning("please fill the form completely")
    }

  }
  return (
    <>
      <button className='btn ' onClick={handleShow}><i class="fa-solid fa-pen-to-square" style={{ color: 'green' }}></i></button>
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
            <div className='col-lg-4 text-center'>
              <label>
                <img style={{ width: '150px' }} src={preview?preview : `${server_url}/uploads/${project.projectImg}`} alt="" />
                <input onChange={e => SetProjectDetails({ ...projectDetails, projectImg: e.target.files[0] })} style={{ display: 'none' }} type="file" />
              </label>
              {
                !imgFileStatus &&
                <div className='text-warning fw-bold' style={{ fontSize: '11px' }}>*upoload only the following file type (.jpg,.jpeg,.png)</div>}
            </div>

            <div className='col-lg-8'>
              <div>
                <input onChange={e => SetProjectDetails({ ...projectDetails, title: e.target.value })} type="text" className='form-control mb-3' placeholder='Project title' value={projectDetails?.title} />
              </div>

              <div>
                <input onChange={e => SetProjectDetails({ ...projectDetails, languages: e.target.value })} type="text" className='form-control mb-3' placeholder='Language Used' value={projectDetails?.languages} />
              </div>

              <div>
                <input onChange={e => SetProjectDetails({ ...projectDetails, github: e.target.value })} type="text" className='form-control mb-3' placeholder='Project Github  Link' value={projectDetails?.github} />
              </div>

              <div>
                <input onChange={e => SetProjectDetails({ ...projectDetails, website: e.target.value })} type="text" className='form-control mb-3' placeholder='Project Website Link' value={projectDetails?.website} />
              </div>
            </div>

          </div>
          <div><input onChange={e => SetProjectDetails({ ...projectDetails, overview: e.target.value })} type="text" className='form-control' placeholder='Overview' value={projectDetails?.overview} /></div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleupdate} variant="warning">Update</Button>
        </Modal.Footer>
      </Modal>
    </>


  )
}

export default Edit