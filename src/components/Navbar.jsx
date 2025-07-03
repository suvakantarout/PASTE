import React from 'react';
import './Navbar.css';
import logo from '../assets/image-2.svg'


const Navbar = () => {
  return (
    <div className="Navbox">
      <img id="logo" src={logo} alt="Paste App Logo" />
      <i className="ri-sun-fill settings-icon" title="Toggle theme"></i>
    </div>
  );
};

export default Navbar;
