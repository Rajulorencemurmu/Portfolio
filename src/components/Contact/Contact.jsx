import { useContext, useRef, useState } from 'react';
import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';


const Contact = () => {
    const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode

        const form = useRef();
        const[done,setDone]=useState(false)
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_00a139q', 'template_ot203jl', form.current, 'g8SQPPn8hPg768o-y')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
        }

        const thankyou=()=>{
            if(done){
                alert('Thankyou for getting in touch')
                window.location.reload();
            }
        }


  return (
    <div className="contact-form" id='Contact'>
        <div className="contact-left">
                <span style={{color:darkMode?'white':''}}>Get in touch</span>
                <span>With me</span>
                <div className="blur s-blur1"
                style={{background:'#ABF1FF94'}}> 
            </div>
        </div>


        <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Your Name' required/>
                <input type="email" name='user_email' className='user' placeholder='Your Email'  required/>
                <textarea name="message" className='user' placeholder='Your Message' id='msg' required></textarea>
                {/* <button className='button i-button'>Hire me</button> */}

                <input type="submit" value="Send" className='button1'/>
                {/* <button type='submit' value="Send" className='button'>Send</button> */}
                <span>{done && thankyou()}</span>
            </form>
        </div>
    </div>
  )
}

export default Contact