import React, { useContext } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Hhfc from "../../img/Hhfc.png";
// import Egallery from "../../img/Egallery.png";
import Spotify from "../../img/Spotify.png";
// import Expensetracker from "../../img/expensetracker.png";
import { themeContext } from "../../Context";
import adminlogin from "../../img/admin-login.jpeg";
import Rental_App from '../../img/Rental_app.png'


const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="projects" id="Projects">
      <div className="p-name">
        <span style={{ color: darkMode ? "white" : "" }}>Recent </span>
        <span>Projects</span>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={2.8}
        grabCursor={true}
        className="projects-slider"
      >
        <SwiperSlide
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            width: 300,
            height: 190,
            borderRadius: "20px",
            display: "flex", // Enable flexbox
            flexDirection: "column", // Align items vertically
            justifyContent: "center", // Center content vertically
            alignItems: "center", // Center content horizontally
          }}
        >
          <a href="https://hhfc.in/">
            <img
              src={Hhfc}
              alt=""
              id="hhfc"
              style={{ width: 280, height: 150, borderRadius: "10px" }} // Add borderRadius for rounded corners
            />
          </a>
        </SwiperSlide>

        <SwiperSlide
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            borderRadius: "20px",
            display: "flex", // Added for flexbox centering
            justifyContent: "center", // Centers horizontally
            alignItems: "center", // Centers vertically
          }}
        >
          <a href="https://github.com/Rajulorencemurmu/alumni_app-master-main">
            <img
              src={adminlogin}
              alt=""
              style={{
                width: 280,
                height: 180,
                borderRadius: "10px", // Optional for rounded corners
              }}
            />
          </a>
        </SwiperSlide>

        <SwiperSlide
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            borderRadius: "20px",
            display: "flex", // Added for flexbox centering
            justifyContent: "center", // Centers horizontally
            alignItems: "center", // Centers vertically
          }}
        >
          <a href="https://github.com/Rajulorencemurmu/spotify-clone">
            <img
              src={Spotify}
              alt=""
              style={{
                width: 300,
                height: 180,
                borderRadius: "10px", // Optional for rounded corners
              }}
            />
          </a>
        </SwiperSlide>

        <SwiperSlide
          style={{
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            borderRadius: "20px",
            display: "flex", // Added for flexbox centering
            justifyContent: "center", // Centers horizontally
            alignItems: "center", // Centers vertically
          }}
        >
          <a href="https://github.com/Rajulorencemurmu/Rental_App">
            <img
              src={Rental_App}
              alt=""
              style={{
                width: 300,
                height: 180,
                borderRadius: "10px", // Optional for rounded corners
              }}
            />
          </a>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default Projects;
