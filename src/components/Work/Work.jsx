import React, { useContext } from 'react'
import './Work.css'
import hhfc from '../../img/hhfclogo.png'
import Fiverr from '../../img/fiverr.png'
import Upwork from '../../img/Upwork.png'
// import Amazon from '../../img/amazon.png'
// import Shopify from '../../img/Shopify.png'
// import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context'

const Work = () => {
  const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode
  return (
    <div className="works" id='Works'>
      <div className="w-left-side">
        <span style={{color:darkMode?'white':''}}>Works for All these</span>
        <span>Brands & Clients</span>
        <span>"You are serving a customer, not a life sentence."<br/><br/> "Learn how to enjoy your work."<br/><br/>"A customer is the most important visitor in our premises.<br/>You are not dependent on us, we are dependent on you."<br/><br/>"You not an interruption to our work, you the purpose of it"<br/><br/>
        </span>

        <button className="button w-button">Hire me</button>
        {/* < div className="blur s-blur1"></div> */}
      </div>

      <div className="w-right">
      <div className="logos">
        <img src={hhfc} alt="hhfc" />
        <img src={Fiverr} alt="fiverr" />
        <img src={Upwork} alt="fiverr" />
        {/* <img src={Amazon} alt="amazon" />
        <img src={Shopify} alt="shopify" />
        <img src={Facebook} alt="facebook" /> */}
      </div>
      
      <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
        <div className='circle4'></div>
        <div className='circle5'></div>
      </div>
      
    </div>
  )
}

export default Work