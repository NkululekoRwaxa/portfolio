import React from 'react'
import './about.css';
import AboutMe from '../../assets/about-me.png';
import {GiGraduateCap} from 'react-icons/gi';
//import {MdOutlineScreenSearchDesktop as CodeReviews} from 'react-icons/md';
import {FaUniversity} from 'react-icons/fa';
import {PiCertificateFill} from 'react-icons/pi';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMe} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>/Education</h5>
              <small>
                <ul>
                  <li><small>
                        2023-now&gt;
                        <br/> 

                        FullStack Software Development
                        <br/> 

                        <FaUniversity className='school__icon'/> <a href='https://codecollege.co.za/' target='_blank' rel="noreferrer">Code College</a>
                      </small>
                  </li>
                  <li><small>
                        2020-now&gt;
                        <br/>
                        
                        BSc Computer Science
                        <br/> 
                        <FaUniversity className='school__icon'/> <a href='https://www.mandela.ac.za/' target='_blank' rel="noreferrer">Nelson Mandela University</a>
                      </small>
                  </li>
                </ul>
              </small>
            </article>

            <article className='about__card'>
              <PiCertificateFill className='about__icon'/>
              <h5>/Certifications</h5>
              <small>
                <ul>
                  <li><small>&gt;Intro to HTML, CSS & JavaScript</small></li>
                  <li><small>&gt;SQL</small></li>
                  <li><small>&gt;Advanced JavaScript</small></li>
                  <li><small>&gt;Node JS</small></li>
                  <li><small>&gt;React</small></li>
                </ul>
              </small>
            </article>
          </div>

          <p><small>
            I am very passionate about software development and learning                                         industry related skills & technologies. I am a determined individual; 
            I always work towards a successful outcome when given a task. 
            I have excellent organization, prioritization, and execution skills. 
            I have demonstrated these skills through my involvement with a coding bootcamp (from <a href="https://codecollege.co.za/" target="_blank" rel="noreferrer">Code College</a>) together with university. I believe the skills I have 
            acquired throughout my university years, and the industry related 
            skills I have obtained so far from <a href="https://codecollege.co.za/" target="_blank" rel="noreferrer">Code College</a> make me an ideal match to Software Development as a career. 
            Please take a look at my very <a href='https://nkululekorwaxa.github.io/Bootcamp/' target='_blank' rel="noreferrer" className='early__work'>early work</a>.
          </small></p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About