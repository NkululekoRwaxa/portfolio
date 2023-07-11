import React,{useRef} from 'react'
import './contact.css';
import {MdOutlineEmail, MdWhatsapp} from 'react-icons/md';
import emailjs from 'emailjs-com';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';

const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_20ued9s', 'template_4l1qrdc', form.current, 'HuOlE3CsTi3ddJ7FX')
   
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Let's get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>nkululekorwaxa@gmail.com</h5>
            <a href="mailto:nkululekorwaxa@gmail.com" target='_blank'>Send an email</a>
          </article>

          <article className="contact__option">
            <MdWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+27 81 426 1928</h5>
            <a href="https://api.whatsapp.com/phone+27814261928" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Please enter full name' required/>
          <input type="email" name='email' placeholder='Please enter email' required />
          <textarea name='message' rows="10" placeholder='Please leave a message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact