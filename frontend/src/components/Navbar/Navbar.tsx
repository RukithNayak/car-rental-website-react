import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets' 

const Navbar = () => {
    const[menu, setMenu] = useState("home");
  return (
    <div className = "navbar">
        <img src= {assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <li onClick = {() => setMenu("home")} className = {menu === "home" ? "active" : ""}>Home</li>
            <li onClick = {() => setMenu("info")} className = {menu === "info" ? "active" : ""}>Info</li>
            <li onClick = {() => setMenu("services")} className = {menu === "services" ? "active" : ""}>Services</li>
            <li onClick = {() => setMenu("contact-us")} className = {menu === "contact-us" ? "active" : ""}>Contact Us</li>
        </ul>
        <div className = "navbar-right">
            <img src = {assets.search_icon}/>
            <div className="navbar-search-icon">
                <div className="dot"></div>
            </div>
            <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar