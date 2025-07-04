import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/image-1.svg';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true); // default is dark

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.style.backgroundColor = darkMode ? 'black' : 'white';
    document.body.style.color = darkMode ? 'white' : 'black';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="Navbox">
      <img id="logo" src={logo} alt="Paste App Logo" />
      <i
        className={darkMode ? 'ri-sun-fill' : 'ri-moon-fill'}
        title="Toggle Theme"
        onClick={toggleTheme}
        style={{ cursor: 'pointer' }}
      ></i>
    </div>
  );
};

export default Navbar;
