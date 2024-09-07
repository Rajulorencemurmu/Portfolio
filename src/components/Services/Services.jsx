import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
// import rajulorence_resume from './rajulorence_resume.pdf'
import { themeContext } from "../../Context";
// import { motion } from 'framer-motion'

const Services = () => {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="blur" style={{ background: "var(--purple)" }}></div>
      <div className="blur1" style={{ background: "var(--orange)" }}></div>
      <div className="s-left-side">
        <span style={{ color: darkMode ? "white" : "" }}>My Amazing</span>
        <span>Services</span>
        <span>
          I am passionate about continuous growth and excellence in all my
          endeavors. <br />
          <br />
          <b>"</b> Your work will define a significant part of your life, and to
          be truly fulfilled, you must do what you believe is great work. <br />
          <br />
          The secret to great work? Love what you do. <br />
          <br />
          If you haven't found that passion yet, keep searching—
          <i>never settle</i>. <br />
          <br />
          As with all matters of the heart, <b>you’ll know</b> when you find it.{" "}
          <b>"</b>
        </span>

        <a href="./raju_resume1.pdf" download style={{ textDecoration: "none" }}>
          <div className="button s-button">My Resume</div>
        </a>
      </div>

      <div className="s-right-side">
        <div className="cards">
          <div
            whileInView={{ left: "2rem" }}
            inital={{ right: "8%" }}
            transition={{ transition }}
            style={{ left: "14rem" }}
          >
            {" "}
            <Card
              heading={"Design"}
              details={"Canva, Adobe Photoshop, Figma, Webflow"}
            />
          </div>

          <div
            whileInView={{ left: "24%" }}
            inital={{ left: "12%" }}
            transition={{ transition }}
            style={{ top: "12rem", left: "-4rem" }}
          >
            <Card
              heading={"Developer"}
              details={
                "Html, Css, Javascript, React, Node js, API, Git,MongoDb,Sql"
              }
            />
          </div>

          <div
            whileInView={{ left: "4%" }}
            inital={{ left: "3%" }}
            transition={{ transition }}
            style={{ top: "19rem", left: "12rem" }}
          >
            <Card
              heading={"Other"}
              details={"C, Java, Python, C++, Cloud, Docker, Linux"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
