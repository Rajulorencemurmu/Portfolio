import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
const Footer = () => {
  return (
   <div className="footer">
    <img src={Wave} alt="wave" style={{width:'100%'}} />
    <div className="f-content">
        <span> © Copyright 2023 Raju Lorence Murmu | All Rights Reserved </span>
        <a href="mailto:rajulorence4321@gmail.com" style={{color:'white'}}><span>@rajulorence4321@gmail.com</span></a>
        <div className="f-icons">
            <a href="https://instagram.com/_life_lover_00?igshid=NmQ2ZmYxZjA="><Insta color='white' size='3rem' /></a>
            <a href="https://www.facebook.com/rajulorencemurmu"><Facebook color='white' size='3rem' /></a>
            <a href="https://github.com/Rajulorencemurmu/profile"><Github color='white' size='3rem' /></a>
            <a href="https://twitter.com/raju_lorence?t=eQSaj-CWu62T1n02a6MThg&s=08"><Twitter color='white' size='3rem'/></a>
        </div>
    </div>
   </div>
  )
}

export default Footer