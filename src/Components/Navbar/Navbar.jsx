import React, { useContext } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {
const {getTotalCartAmount} = useContext(StoreContext)
    const[menu,Setmenu]=useState("Menu")
  return (
    <div className='navbar'>
       <Link to='./#'> <img src={assets.logo} className='logo'/></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>Setmenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>Setmenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>Setmenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>Setmenu("Contact-us")} className={menu==="Contact-us"?"active":""}>contact-us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="nav-bar-search-icon">
           <Link to='./cart'><img src={assets.basket_icon} alt="" /></Link>     
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>


    </div>
  )
}

export default Navbar