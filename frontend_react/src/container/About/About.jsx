import React, { useState, useEffect } from "react";
// import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { client } from "../../client";

const About = () => {
  const [setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        It is often <span>believed,</span>
        <br></br>
        <span>A Good Design</span> <br />
        means <span>A Good Business</span>
      </h2>
      <br />
      <p className="p-text" style={{ fontSize: 20 }}>
        Hello and welcome to my portfolio! My name is Raju Lorence Murmu and I
        am a student at <span style={{color:'violet'}}>St. Xavier's College of Management and Technology, Patna</span>.
        I am passionate about learning new things, and I am excited to share some of my
        projects and experiences with you.
      </p><br />
      <p className="p-text" style={{ fontSize: 20 }}>
        Throughout my time at <span style={{color:'violet'}}>St. Xavier's</span>, I have been involved in a variety of
        activities and organizations that have allowed me to develop my skills
        and explore my interests. Some of my proudest achievements include ...
      </p><br />
      <p className="p-text" style={{ fontSize: 20 }}>
        In this portfolio, you will find examples of my work in various fields.
        I have completed projects such as <span style={{color:'Highlight'}}>HHFC website, Instagram reels, Spotify</span>, which
        have challenged me to think creatively and critically. I am always eager
        to learn more and to take on new challenges.
      </p><br />
      <p className="p-text" style={{ fontSize: 20 }}>
        I believe that collaboration and communication are essential to success,
        and I enjoy working with others to achieve a common goal. I am a strong
        communicator and an effective team player, and I have experience working
        with people from diverse backgrounds and perspectives.
      </p><br />
      <p className="p-text" style={{ fontSize: 20 }}>
        Thank you for taking the time to visit my portfolio. I hope that you
        find it informative and inspiring. If you have any questions or would
        like to learn more about my work, please feel free to contact me.
      </p>

      {/* <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
