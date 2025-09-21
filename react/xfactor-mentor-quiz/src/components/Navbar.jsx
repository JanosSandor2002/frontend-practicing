import React from 'react';
import navlogo from '../images/logo.png';
import userImage from '../images/user.png';
const Navbar = () => {
  return (
    <navbar>
      <img src={navlogo} alt='logo' id='navbar-logo' />
      <h1>X faktor mentorok Quiz {new Date().getFullYear()}</h1>
      <a href=''>
        <img src={userImage} alt='' />
      </a>
    </navbar>
  );
};

export default Navbar;
