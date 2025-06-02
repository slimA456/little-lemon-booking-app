import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Cart from './pages/card/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Home from './pages/Home/Home'
import Footer from './Components/Footer/Footer'
import LoginPopUp from './Components/LoginPopup/LoginPopUp'
import { useState } from 'react'
const App = () => {

  const [showLogin,setShowLogin]= useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
     
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<Placeorder />}/>
        <Route path='/' element={<Home />}/>
      </Routes >
      
      
    </div>
    <Footer/>
    
    </>
    
  )
}

export default App