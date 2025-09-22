import React from 'react';
import navlogo from '../images/logo.png';
import userImage from '../images/user.png';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbaritems'>
        <img src={navlogo} alt='logo' id='navbar-logo' />
        <h1>X faktor mentorok Quiz {new Date().getFullYear()}</h1>
        <a href='https://my-personal-website-janossandor.netlify.app/'>
          <img src={userImage} alt='' />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
