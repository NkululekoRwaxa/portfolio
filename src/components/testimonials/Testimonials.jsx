import React from 'react'
import './testimonials.css';
import data from './data.js';
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='section'>
      <h5>Some words from my colleague</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({id, avatar, name, message})=>{
            return(
              
              <SwiperSlide key={id} className="testimonial">
                  
                  <div className="client__avatar">
                      <img src={avatar} alt='Avatar' />
                  </div>

                  <h5 className='client__name'>{name}</h5>
                      
                  <small className='client__review'>{message}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials