import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {MdMiscellaneousServices} from 'react-icons/md';
import {BiUser, BiBook, BiMessageDetail} from 'react-icons/bi';
import {GoChecklist} from 'react-icons/go';
import { useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>

      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active':''} >
        <AiOutlineHome />
      </a>

      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}
        data-tooltip-id='my_tooltip' data-tooltip-content='About Me'>
        <BiUser />
      </a>

      <a href='#skills' onClick={()=>setActiveNav('#skills')} className={activeNav === '#skills' ? 'active':''}
        data-tooltip-id='my_tooltip' data-tooltip-content='Skills'>
        <MdMiscellaneousServices /></a>

      <a href='#services'onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active':''}
        data-tooltip-id='my_tooltip' data-tooltip-content='Services'>
        <BiBook />
      </a>

      <a href='#projects' onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects' ? 'active':''}
        data-tooltip-id='my_tooltip' data-tooltip-content='Projects'>
        <GoChecklist />
      </a>

      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}
        data-tooltip-id='my_tooltip' data-tooltip-content='Contact Me'>
        <BiMessageDetail />
      </a>

      <Tooltip id='my_tooltip' place='top' />
    </nav>
  )
}

export default Nav