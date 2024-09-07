import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import My_pic from "../../img/My_pic.png";
import { themeContext } from "../../Context";
import { Link } from 'react-scroll'


const Intro = ({ userName }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>
            🌟 Welcome, Viewers
          </span>
          <span></span>
          <span>
            During my time at St. Xavier's, I’ve immersed myself in various
            activities that honed my skills and passions. This portfolio
            reflects my journey and the diverse projects I’ve tackled.
            <br />
            <br />
            🚀: I’m constantly seeking new challenges and
            opportunities to grow.
            <br />
            <br />
            🤝: I thrive in team environments, valuing
            clear communication and diverse perspectives.
            <br />
            <br />
            ✨: Thank you for visiting! Feel free to reach out
            if you have questions or just want to chat.
            <br />
            <br />
            Looking forward to connecting!
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}> <button className="button2">Hire me</button></Link>
        <div className="i-icons">
          <a href="https://github.com/Rajulorencemurmu?tab=repositories">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/raju-lorence-murmu-875628223/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://instagram.com/_life_lover_00?igshid=NmQ2ZmYxZjA=">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src={My_pic} alt="profile" />
        <div className="blur"></div>
      </div>
    </div>
  );
};

export default Intro;
