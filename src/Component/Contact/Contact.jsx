import React, { useState } from 'react'
import SectionHeader from '../Sectionheader/SectionHeader'
import svgimage from '../../img/a1173ba5-3000-4d2d-a821-81a469010b0f.png'
import './Contact.css'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {    
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



    const [username, setUsername] = useState('')
    const [useremail, setuseremail] = useState('')
    const [message, setmessage] = useState('')
  return (
    <section  className='contact__seddction'>
        <div className="container">
            <SectionHeader title='Contact us' desc1='You can esaily contact us below,we will surely reply to you in due course'/>
            <div className="contact__wrapper">
                <div className="contact__wrapper-left">
                    <img src={svgimage} alt="" />
                </div>
                <div className="contact__wwrapper-right">
                    <form action="">
                        <input  required placeholder='Enter your Name' type="text" name="user_name" id="user_name" value={username} onChange={(e)=> setUsername(e.target.value)} />
                        <input required  placeholder='Enter your Email' type="email" name="user_email" id="user_email" value={useremail} onChange={(e)=> setuseremail(e.target.value)} />
                        <textarea required  placeholder='Enter your message' name="message" id="message" value={message} onChange={(e)=> setmessage(e.target.value)} ></textarea>
                        <button className='btn btn-submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact