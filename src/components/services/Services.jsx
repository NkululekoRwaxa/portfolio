import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Programming</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficiency in C#, Java & Android Studio. Grasp of CS Fundamentals.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Understanding OOP, Data Structures & Algorithms</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Key skills in ASP.NET Core / MVC / MS SQL Server</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experience with Source Control (Git)</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experience with RDMS (PostgreSQL & SQL Server)</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient in MERN Stack.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experience with Frontend build tools and package manager (NPM)</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experience with Express.js.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Understanding of UI/UX design principles</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experience with Backend build tools & RESTful API.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Knowledge of web deployment & hosting.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Other</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Good verbal and written English communication skills.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>A hunger to continually improve and learn new skills.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Open mindedness. Detail focussed. Quality focussed.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Able to solve problems creatively and efficiently.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Comfortable with using technology and can explain it to others.</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services