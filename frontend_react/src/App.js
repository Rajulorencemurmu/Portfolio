import React from 'react'

import About from './container/About/About'
import Footer from './container/Footer/Footer'
import Header from './container/Header/Header'
import Skills from './container/Skills/Skills'
// import Testimonials from './container/Testimonial/Testimonials'
import Work from './container/Work/Work'

import Navbar from './components/Navbar/Navbar'

import './App.scss'

const App = () => {
  return (
    <div className='app'>
        
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Footer/>
        {/* <Testimonials/> */}

    </div>
  )
}
export default App
