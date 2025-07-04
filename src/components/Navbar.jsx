import React from 'react';
import './Navbar.css';
import logo from '../assets/image-1.svg'


const Navbar = () => {
  return (
    <div className="Navbox">
      <img id="logo" src={logo} alt="Paste App Logo" />
      <i class="ri-search-2-line" title="search icon"></i>
    </div>
  );
};

export default Navbar;
