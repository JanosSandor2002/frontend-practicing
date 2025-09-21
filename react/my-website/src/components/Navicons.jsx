import React from 'react';
import facebookImage from '../images/facebook.png';
import linkedinImage from '../images/linkedin.png';
import gmailImage from '../images/gmail.png';
import phoneImage from '../images/phone.png';
import githubImage from '../images/github.png';

const Navicons = () => {
  return (
    <div className='navicons'>
      <a
        href='https://www.facebook.com/jancsii.sandor'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={facebookImage} alt='Facebook' />
      </a>
      <a
        href='https://www.linkedin.com/in/j%C3%A1nos-s%C3%A1ndor-77a0b7386/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={linkedinImage} alt='LinkedIn' />
      </a>
      <a href='mailto:sandorj2002@email.com'>
        <img src={gmailImage} alt='Email' />
      </a>
      <a href='tel:+36301116731'>
        <img src={phoneImage} alt='Telefon' />
      </a>
      <a
        href='https://github.com/JanosSandor2002'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={githubImage} alt='Github' />
      </a>
    </div>
  );
};

export default Navicons;
