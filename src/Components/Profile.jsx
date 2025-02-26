
import { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import prof from '../assets/profile1.png'
import server_url from '../../services/server_url'
import { toast } from 'react-toastify';
import { updateUserProfileAPI } from '../../services/allAPI';


function Profile() {
  const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "", github: "", linkedin: "", profilepic: "" })
  const [preview, setPreview] = useState("")

  const [existingImage, setExistingImage] = useState("")
  const [open, setOpen] = useState(false);

  useEffect(() => {

    if (sessionStorage.getItem("user")) {
      let existingUser = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({ ...userDetails, username: existingUser?.username, email: existingUser?.email, password: existingUser?.password, github: existingUser?.github, linkedin: existingUser?.linkedin })
      setExistingImage(existingUser?.profilepic)
    }

  }, [open])

  useEffect(() => {
    if (userDetails?.profilepic) {
      setPreview(URL.createObjectURL(userDetails.profilepic))
    }
    else {
      setPreview("")
    }
  }, [userDetails.profilepic])

  const handleUpdateProfile = async () => {

    const { username, email, password, github, linkedin, profilepic } = userDetails
    if (github && linkedin) {
      //req body

      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("password", password)
      reqBody.append("github", github)
      reqBody.append("linkedin", linkedin)
      preview ? reqBody.append("profilepic", profilepic) : reqBody.append("profilepic", existingImage)


      //req header

      const token = sessionStorage.getItem("token")
      console.log(token);

      if (token) {
        const reqHeader = {
          "content-type": preview ? "multipart/form-data" : "application/json",
          "authorization": `Bearer ${token}`
        }

        //api call

        try {
          const result = await updateUserProfileAPI(reqBody, reqHeader)
          console.log(result);
          if (result.status == 200) {
            setOpen(!open)
            sessionStorage.setItem("user", JSON.stringify(result.data))
          }
        }
        catch (err) {
          console.log(err);

        }


      }

    }
    else {
      toast.warning("enter the field completely")
    }

  }



  return (
    <>
      <div className='d-flex justify-content-between'>
        <h3>Profile</h3>
        <button className='btn' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
          <i className="fa-solid fa-angle-down" style={{ text: 'white' }}></i>
        </button>
        <Collapse in={open}>
          <div id="example-collapse-text d-flex align-items-center justify-content-center rounded shadow p-2">
            <label>
              <input onChange={(e) => setUserDetails({ ...userDetails, profilepic: e.target.files[0] })} type="file" style={{ display: 'none' }} />
              {
                existingImage ?
                  <img className='img-fluid' src={preview ? preview : `${server_url}/uploads/${existingImage}`} alt="" />
                  :
                  <img className='img-fluid' src={preview ? preview : prof} alt="" />
              }
            </label>
            <div className='mb-3'>
              <input onChange={(e) => setUserDetails({ ...userDetails, github: e.target.value })} value={userDetails?.github} type="text" className='form-control' placeholder='Github Link' />
            </div>

            <div className='mb-3'>
              <input onChange={(e) => setUserDetails({ ...userDetails, linkedin: e.target.value })} value={userDetails?.linkedin} type="text" className='form-control' placeholder='Linkedin Link' />
            </div>
            <button onClick={handleUpdateProfile} className='btn btn-warning w-100'>Update Profile</button>
          </div>
        </Collapse>

      </div>
    </>
  )
}

export default Profile