
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Projects from './Pages/Projects'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import { tokenAuthContext } from './context/ContextAPI'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'



function App() {

  const {isAuthorizsed}=useContext(tokenAuthContext)
    console.log(isAuthorizsed);
    
  
  

  return (

    <>

<ToastContainer
position="top-right"
autoClose={3000}

theme="colored"

/>

      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/login'} element={<Auth/>}/>
        <Route path={'/register'} element={<Auth insideRegister={true}/>}/>
        <Route path={'/dashboard'} element={isAuthorizsed?<Dashboard/>:<Navigate to={'/login'}/>}/>
        <Route path={'/projects'} element={isAuthorizsed?<Projects/>:<Navigate to={'/login'}/>}/>        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
