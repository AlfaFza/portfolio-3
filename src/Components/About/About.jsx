import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
       <h1>About me</h1>
       <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                    Hi, I'm a software engineer with a passion for creating engaging and visually appealing digital experiences. I recently post graduated from the prestigious University of Mysore with a focus on data science and machine learning.
                </p>
                <p>
                    My goal is to help companies unlock their full potential by providing innovative solutions that improve customer experiences and drive growth.
                </p>
            </div>
            <div className="about-skills">
            <div className="about-skill"> <p> HTML & CSS</p><hr style={{width:'50%'}}/></div>
            <div className="about-skill"> <p> React JS</p><hr style={{width:'70%'}}/></div>
            <div className="about-skill"> <p> JavaScript </p><hr style={{width:'60%'}}/></div>
            <div className="about-skill"> <p> Python Django </p><hr style={{width:'50%'}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>
        </div>


      </div>
    </div>
  )
}

export default About
