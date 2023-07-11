import React from 'react'
import './projects.css';
import data from './data.js';

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Some of my tutorial based work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {
          data.map(({id, image, title, github, demo, info})=>{
            return(
            <article key={id} className="projects__item">
                <div className="projects__item-image">
                    <img src={image} alt="Project 6" />
                </div>
                <h3>{title}</h3>
                <p>{info}</p>
                <div className="projects__item-cta">
                    <a href={github} target='_blank' className='btn'>GitHub</a>
                    <a href={demo} target='_blank' className='btn btn-primary'>Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects