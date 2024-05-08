import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="book" className='navbar-brand flex'>
            <img src={logo} alt="site logo" className="logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'></span>
          </Link>
          <button type="button" style={{ color: 'white' }} className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{
              color: `${toggleMenu ? "#00000" : "white"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">

            <li className='nav-item'>
              <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' style={{ color: 'white' }}>about</Link>
            </li>
            <li className='nav-item'>
              <Link to="login" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' style={{ color: 'white' }}>login</Link>
            </li>
            <li className='nav-item'>
              <Link to="registration" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' style={{ color: 'white' }}>registration</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
