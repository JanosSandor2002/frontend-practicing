import React from 'react';
import navlogo from '../images/logo.png';
import selfPic from '../images/self.jpeg';
import '../styles/Navbar.css';
import Navicons from './Navicons';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={selfPic} alt='mypic' />
      <div className='navbaritems'>
        <a href=''>MainMenu</a>
        <a href=''>About Me</a>
        <a href=''>Qualifications</a>
        <a href=''>Contact</a>
      </div>
      <Navicons />
    </div>
  );
};

export default Navbar;
