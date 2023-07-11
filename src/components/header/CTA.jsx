// call to action
import React from 'react'
import CV from '../../assets/Rwaxa_Nkululeko_CV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn btn-primary' href='#contact'>Contact Me.</a>
        <a className='btn' href='https://github.com/NkululekoRwaxa'>My GitHub</a>
    </div>
  )
}

export default CTA