import React, { useContext } from 'react'
import './Services.css'
import Card from '../Card/Card'
import rajulorence_resume from './rajulorence_resume.pdf'
import { themeContext } from '../../Context'
// import { motion } from 'framer-motion'


const Services = () => {
  const transition={duration:1, type:'spring'}

  const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode
  return (
   <div className="services" id='Services'>
    <div className="blur" style={{background:'var(--purple'}}></div>
    <div className="blur1" style={{background:'var(--orange'}}></div>
    <div className="s-left-side">
    <span  style={{color:darkMode?'white':''}}>My Amazing</span>
    <span>Services</span>
    <span>I excel in number of things & I always try to do more better. <br></br> <b>"</b>Your work is going to fill a large part of your life, and the <br></br> only way to be truly satisfied is to do what you believe is <br></br>great work. And the only way to do great work is to love<br></br>  what you do. If you haven't found it yet, keep looking. <br></br> Don't settle. As with all matters of the heart, you'll know <br></br> when you find it <b>"</b> </span>

    <a href={rajulorence_resume} download style={{textDecoration:'none'}}>
    <div className="button s-button">My Resume</div>
    </a>
  </div>
    

    <div className="s-right-side">
      <div className="cards">

        <div whileInView={{left:'2rem'}} inital={{right:'8%'}} transition={{transition}} style={{left:'14rem'}}> <Card heading={'Design'} details={'Canva, Adobe Photoshop, Figma, Webflow'} />
        </div>

        <div whileInView={{left:'24%'}}inital={{left:'12%'}} transition={{transition}} style={{top:'12rem',left:'-4rem'}}>
          <Card heading={'Developer'} details={'Html, Css, Javascript, React, Node js, API, Git'} />
          </div>

        <div whileInView={{left:'4%'}}inital={{left:'3%'}} transition={{transition}} style={{top:'19rem', left:'12rem'}}>
            <Card heading={'Other'} details={'C, Java, Python, C++, Data Science and ML'} />
            </div>

      </div>
    </div>
   </div>
  )
}

export default Services