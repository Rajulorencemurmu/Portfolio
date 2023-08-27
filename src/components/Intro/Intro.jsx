import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import My_pic from '../../img/My_pic.png'
import { themeContext } from '../../Context'


const Intro = () => {
  const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span  style={{color:darkMode?'white':''}}>Hi! I am </span>
                <span>Raju Lorence Murmu</span>
                  {/* <span>Hello and welcome to my portfolio! My name is Raju Lorence Murmu and I
                  am a student at <span style={{color:'violet'}}>St. Xavier's College of Management and Technology, Patna</span>.
                  I am passionate about learning new things, and I am excited to share some of my
                  projects and experiences with you.</span> */}
                <span>Throughout my time at St. Xavier's, I have been involved in a variety of
                activities and organizations that have allowed me to develop my skills
                and explore my interests.
                In this portfolio, you will find examples of my work in various fields.
                I am always eager
                to learn more and to take on new challenges.
               I believe that collaboration and communication are essential to success,
               and I enjoy working with others to achieve a common goal. I am a strong
               communicator and an effective team player, and I have experience working
               with people from diverse backgrounds and perspectives.
               Thank you for taking the time to visit my portfolio. I hope that you
                find it informative and inspiring. If you have any questions or would
                like to learn more about my work, please feel free to contact me.</span>
            </div>
            <button className='button2'>Hire me</button>
            <div className="i-icons">
                <a href="https://github.com/Rajulorencemurmu?tab=repositories"><img src={Github} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/raju-lorence-murmu-875628223/">
                <img src={LinkedIn} alt="LinkedIn" /></a>
               <a href="https://instagram.com/_life_lover_00?igshid=NmQ2ZmYxZjA="><img src={Instagram} alt="Instagram" /></a>
            </div>
        </div>

        
        <div className="i-right">
                {/* Hello there i am raju lorence */}
                <img src={Vector1} alt="vector1" />
                <img src={Vector2} alt="vector2" />
                <img src={My_pic} alt="profile" />
               
                <div className="blur" ></div>
                
        </div>
    </div>
  )
}

export default Intro