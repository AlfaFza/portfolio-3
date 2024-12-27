import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'


const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={profile_img} alt=''/>  
    <h1><span>I'm Alfiya S,</span>Full Stack Developer Based in India</h1>
    <p>I'm passionate about building user-friendly web applications and helping people achieve their goals.</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
    </div>
    </div>
  )
}

export default Hero
