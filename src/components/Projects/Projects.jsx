import React,{useContext} from "react";
import { themeContext } from "../../Context";
import './Projects.css';
import Slider from "react-slick";
import Hhfc from "../../img/Hhfc.png";
import alumni from '../../img/admin-login.jpeg'
import spotify from '../../img/Spotify.png';
import rental from '../../img/Rental_app.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projectsData = [
  {
    title: "HHFC-NGO",
    image: Hhfc,
    description: "A NGO website build fully for charity and fundings for children. It was our first ever website built in HTML, Css, Js",
    link: "https://hhfc.in/"
  },
  {
    title: "SPOTIFY CLONE",
    image: spotify,
    description: "A React and Node.js clone of Spotify. Users can browse music, create playlists, and listen to tracks.",
    link: "https://github.com/Rajulorencemurmu/spotify-clone"
  },
  {
    title: "RENTAL APP",
    image: rental,
    description: "A platform for renting Bikes and Cars for trips. We created it using react native, the web version is also available do check it out.(ONGOING PROJECT)",
    link: "https://github.com/Rajulorencemurmu/Rental_App"
  },
  {
    title: "MY ALUMNI NETWORK",
    image: alumni,
    description: "It was a 3rd year project, I used react native to build this. This app includes chats, location tracking, events, games and many more.",
    link: "https://github.com/Rajulorencemurmu/alumni_app-master-main"
  }
];

const Projects = () => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="projects-section" id="Projects">
      <span style={{ color: darkMode ? "white" : "" }}>Recent </span>
          <span>Projects</span>
      <Slider {...settings}>
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
