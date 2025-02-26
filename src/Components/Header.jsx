import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { tokenAuthContext } from '../context/ContextAPI';


function Header() {
  const {setIsAuthorized}=useContext(tokenAuthContext)
  
  const navigate=useNavigate()
  const logout=()=>{
    sessionStorage.clear()
    setIsAuthorized(false)
    navigate('/')
  }

  return (
    <>
     <Navbar expand="lg" className="bg-warning ">
            <Container>
              <Navbar.Brand href="#"><h3 style={{color:'white'}}>
               <Link to={'/'}>
                  <i style={{color:'white'}} className='fa-brands fa-docker me-2'></i>
  
               </Link>
                    Project Fair</h3></Navbar.Brand>
            </Container>
            <Button onClick={logout} className='bg-primary me-5' type="text">Logout</Button>

          </Navbar>
    </>
  )
}

export default Header