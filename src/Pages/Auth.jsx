import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { tokenAuthContext } from '../context/ContextAPI';
import { loginAPI, registerAPI } from '../../services/allAPI';


function Auth({insideRegister}) {

  const {setIsAuthorized}=useContext(tokenAuthContext)
  const [userData,setUserData]=useState({username:"",email:"",password:""})
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  //console.log(userData);
  const navigate=useNavigate()

  const handleRegister=async(e)=>{
    e.preventDefault()
    const {username,email,password}=userData
    if(username && email && password){
      //api call
      try{
        const result=await registerAPI(userData)
      console.log(result);

      if(result.status==200){
        navigate('/login')
        setUserData({username:"",email:"",password:""})
      }
      else{
        if(result.status==406){
          alert(result.response.data)
        }
      }
      }
      catch(err){
        console.log(err);
        
      }
      
    }
    else{
      toast.warning("Please fill the form completely..!!")
      setUserData({username:"",email:"",password:""})
    }
  }

  const handleLogin=async(e)=>{
    e.preventDefault()
    if(userData.email && userData.password){
      // api call
      try{
        const result=await loginAPI(userData)
        if(result.status==200){
          //redirect to homepage
          setIsLoggedIn(true)
          
            sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          setIsAuthorized(true)
          setTimeout(()=>{
          setUserData({username:"",email:"",password:""})
          navigate('/')
          setIsLoggedIn(false)
          },2000)
        }
        else{
          if(result.status==404){
            toast.warning(result.response.data)
          }
        }
        
      }
      catch(err){
        console.log(err);
        
      }
    }
    else{
      toast.warning("Please fill the form completely..!!")
    }
  }
  
  return (
    <>
      <div className='d-flex align-items-center justify-content-center w-100 text-center' style={{height:"100vh" , backgroundColor:"#0c3c49"}}>
        <div className='d-flex align-items-center justify-content-centre w-75 rounded shadow' style={{backgroundColor:"#0e5169"}}>
            <div className='w-50'>
            <img style={{width:'400px'}} src="https://cdni.iconscout.com/illustration/premium/thumb/login-illustration-download-in-svg-png-gif-file-formats--profile-account-sign-music-app-features-pack-design-development-illustrations-3757211.png?f=webp" alt="" />
            </div>
            <div className='w-50 p-5'>
                  <h1 className='mb-2 text-light fw-bold'><span><i className="fa-brands fa-docker me-3" style={{color:"#93efbe"}}></i></span>Project Fair</h1>
                  <h5 className='mb-5' style={{color:"#93efbe"}}>Sign {insideRegister ? 'up' : 'in'} to your account</h5>
                  { insideRegister &&
                    <input value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} className='rounded border-0 w-100 p-3 mb-3' type="text"  placeholder='Username' style={{height:"45px"}}/>}
                  <input value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} className='rounded border-0 w-100 p-3 mb-3' type="email"  placeholder='Email' style={{height:"45px"}}/>
                  <input value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} className='rounded border-0 w-100 p-3 mb-4' type="password"  placeholder='Password' style={{height:"45px"}}/>
                  {
                    insideRegister ?
                    <div>
                      <button onClick={handleRegister} className='btn text-light p-2 w-75 border-0 mb-4' style={{backgroundColor:"#8c8010"}}>Sign Up</button>
                      <h6 className='me-2 text-light'> Already have an account?<Link className='ms-3' style={{color:"#93efbe"}} to={'/login'}>Login</Link></h6>
                    </div>
                    :
                    <div>
                      <button onClick={handleLogin} className='btn text-light p-2 w-75 border-0 mb-4' style={{backgroundColor:"#8c8010"}}>Sign In {isLoggedIn && <Spinner animation="border" variant="light" />}</button>
                      <h6 className='text-light'>Don't have an account yet?<Link className='ms-3' style={{color:"#93efbe"}} to={'/register'}>Register</Link></h6>
                    </div>
                  }
            </div>
        </div>
      </div>
    </>
  )
}

export default Auth



