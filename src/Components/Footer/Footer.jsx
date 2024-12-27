import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>
                A platform for connecting with like-minded individuals who share similar interests and values.
                

                Discover new opportunities and meet new people.
            </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your Email'/>
            </div>
            <div className="footer-subscribe"> Subscribe </div>
        </div>
        
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                &copy; 2021 MindfulConnect. All rights reserved.
            </p>
            <div className="footer-bottom-right">
                <p> Term of Services </p>
                <p> Privacy Policy</p>
                <p> Connect with me </p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
