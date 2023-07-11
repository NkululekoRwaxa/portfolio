import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/nkululeko-rwaxa-11292227a' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/NkululekoRwaxa' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials