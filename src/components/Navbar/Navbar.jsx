import {React,useContext} from 'react'
import { themeContext } from '../../Context'
import './Navbar.css'
import logo from '../../img/logo.png'
import logo1 from '../../img/L_logo.jpg'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
// import Services from '../Services/Services'
// import { themeContext } from '../../Context'

const Navbar = () => {
  const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode
  return (
    <div className="n-wrapper">
       <div className="n-left">
       <div className="n-logo">
        <a href="/">
        <img src={logo} alt="My Portfolio" id='logoImage'/>

        {/* <img src={logo1} alt="My Portfolio" id='logoImage'/> */}
        </a>
        </div>

        {/* <div className="n-name">lorence</div> */}

          <Toggle/>
      </div>

       <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType:'none'}}>
              <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'><li>Home</li></Link>

                <Link spy={true} to='Services' smooth={true}><li>Services</li></Link>
                {/* <li>Experiences</li> */}
                <Link spy={true} to='Works' smooth={true}><li>Works</li></Link>
                <Link spy={true} to="Projects" smooth={true}>Projects</Link>
                
                {/* <Link spy={true} to='About' smooth={true}><li>About</li></Link> */}
            </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true}><button className='button0'>
            Contact
        </button></Link>
       </div>
    </div>
  )
}

export default Navbar