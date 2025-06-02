import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {
    const [currState,setCurrState] =useState("sign up")
  return (
    <div className='login-popup'>
<form className='login-popup-container'>
    <div className='login-popup-title'>
  <h2>{currState}</h2>
  <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} />
    </div>
    <div className="login-popup-inputs">
        {
            currState==="Login"?<></>:<input type="text" placeholder='your name' required/>
        }
   
   <input type="password" required />
   <input type="Email" required />
    </div>
    <button>{currState==="sign up"?"create account":"Login"}</button>
    <div className="login-popup-condition">
        <input type="checkbox" required/>
        <p>By continue, i agree to the terms of use & privacy policy</p>
    </div>
    {
        currState==="Login"?<p>create a new Account? <span onClick={()=>setCurrState("sign up")}>click here</span></p>
        :<p>Already Have An Account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
    }
    
    
</form>
    </div>
  )
}

export default LoginPopUp