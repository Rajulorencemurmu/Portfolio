import React, { useContext } from 'react'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Hhfc from '../../img/Hhfc.png'
import Egallery from '../../img/Egallery.png'
import Spotify from '../../img/Spotify.png'
import Expensetracker from '../../img/expensetracker.png'
import { themeContext } from '../../Context'

const Projects = () => {
    const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode
  return (
    <div className="projects" id='Projects'>
        <div className="p-name">
        <span style={{color:darkMode?'white':''}}>Recent </span>
        <span>Projects</span></div>
        <Swiper spaceBetween={30} slidesPerView={2.8} grabCursor={true} className='projects-slider'>
            <SwiperSlide style={{ boxShadow: '3px 3px 5px 6px #ccc'}}>
            <a href="https://hhfc.in/"><img src={Hhfc} alt="" id='hhfc'/></a>
                HHFC TRUST
            </SwiperSlide>
            <SwiperSlide style={{boxShadow: '3px 3px 5px 6px #ccc'}}>
               <a href='https://github.com/Rajulorencemurmu?tab=repositories'> <img src={Spotify} alt="" id='spfy'/></a>
                SPOTIFY CLONE
            </SwiperSlide>
            <SwiperSlide style={{boxShadow: '3px 3px 5px 6px #ccc'}}>
            <a href='https://github.com/Rajulorencemurmu?tab=repositories'><img src={Egallery} alt="" id='img_gal'/></a>
                IMAGE_GALLERY
            </SwiperSlide>
            <SwiperSlide style={{boxShadow: '3px 3px 5px 6px #ccc'}}>
            <a href='https://github.com/Rajulorencemurmu?tab=repositories'><img src={Expensetracker} alt="" /></a>
                EXPENSE_TRACKER
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Projects