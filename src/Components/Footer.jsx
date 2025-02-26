import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
     <div className=" mt-5 w-100">
        <div className="ms-3 row p-5">
            <div className="col-lg-4 text-white">
                <h4>
                <i className='fa-brands fa-docker text-warning'></i>&nbsp;

                    Project Fair</h4>
                    <p className='mt-4 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem eveniet rerum obcaecati possimus illum, ad natus sint dolore fuga necessitatibus nisi rem nesciunt nobis eius cupiditate officia quis consequuntur quae.</p>
                    <p className='text-white'>Code is liscensed by Luminar</p>
                    <p className='text-white'>Currently v5.3.2</p>
            </div>
            <div className="col-lg-2 text-white">
                <div className='mt-4'>
                <h5>Links</h5>
                <Link className='text-decoration-none text-white' to={'/'}>Home</Link><br />
                <Link className='text-decoration-none text-white' to={'/login'}>Login</Link><br />
                <Link className='text-decoration-none text-white' to={'/register'}>Register</Link>
                </div>
            </div>
            <div className="col-lg-2 text-white">
            <div className='mt-4'>
                <h5>Guides</h5>                
                <a href="" className='text-decoration-none text-white'>React</a><br />
                <a href="" className='text-decoration-none text-white'>React Bootstrap</a><br />
                <a href="" className='text-decoration-none text-white'>React Router</a>
                </div>
            </div>
            <div className="col-lg-4 text-white">
                <h5>Contact Us</h5>
                <div className='d-flex mt-4 '>
                    <input type="text" className='form-control' placeholder='enter email' />
                    <button className='btn btn-warning ms-3'> <i class="fa-solid fa-arrow-right"></i></button>

                </div>
                <div className="d-flex align-items-center justify-content-around mt-4 fs-5">
                    <a href="" className='text-white'><i class="fa-brands fa-facebook"></i></a>
                    <a href="" className='text-white'><i class="fa-brands fa-twitter"></i></a>
                    <a href="" className='text-white'><i class="fa-brands fa-github"></i></a>
                    <a href="" className='text-white'><i class="fa-brands fa-linkedin"></i></a>
                    <a href="" className='text-white'><i class="fa-brands fa-instagram"></i></a>
                    <a href="" className='text-white'><i class="fa-solid fa-phone"></i></a>
                </div>

            </div>
        </div>
        <p className='text-center text-white'>Copyright  © September 2024 Batch, media Player, Built with react </p>

    </div>
    </>
  )
}

export default Footer