import React from 'react'
import './skills.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';

const Skills = () => {
  return (
    <section id='skills'>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Fontend Development</h3>
          <div className="skills__content">

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Basic</small>
              </div>
              
            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Basic</small>
              </div>
              
            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>React&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
            
          </div>
        </div>

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>ASP.net</h4>
                <small className='text-light'>Basic</small>
              </div>
              
            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>SQL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Skills