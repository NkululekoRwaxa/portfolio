import React from 'react'
import './footer.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {BiLogoLinkedin} from 'react-icons/bi';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Rwaxa Nkululeko</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://linkedin.com/in/nkululeko-rwaxa-11292227a' target='_blank'><BiLogoLinkedin/></a>
        <a href='https://github.com/NkululekoRwaxa' target='_blank'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; 2023 Rwaxa Nkululeko
        </small>
      </div>
    </footer>
  )
}

export default Footer