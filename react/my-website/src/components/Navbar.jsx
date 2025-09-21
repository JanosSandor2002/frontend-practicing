import React from 'react';
import navlogo from '../images/logo.png';
import Navicons from './Navicons';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src='' alt='mypic' />
      <div className='navbaritems'>
        <a href=''>Főoldal</a>
        <a href=''>Rólam</a>
        <a href=''>Képzettség</a>
        <a href=''>Kapcsolat</a>
      </div>
      <Navicons />
    </div>
  );
};

export default Navbar;
