import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    return (
        <div className="navbar">
            <img src={assets.logo} alt="" className="logo" />
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("info")} className={menu === "info" ? "active" : ""}>
                    <Link to="/info">Info</Link>
                </li>
                <li onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>Services</li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search icon" />
                <div className="navbar-search-icon">
                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    );
};

export default Navbar;
