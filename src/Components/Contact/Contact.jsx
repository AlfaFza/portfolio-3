import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "74f2fffe-0201-4a9c-b26d-3880b6b2c4b1");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         alert(res.message);
        }
      };
    




  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>
                    Feel free to reach out to me at any time. I'm always here to help.
                </p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>sssalfi07@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt="" /><p> +91 7xxxxxxxx1</p>
                    </div> 
                    <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>Trivandrum,Kerala,India</p>
                    </div>
                   
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" placeholder='Enter your name' required />
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" placeholder='Enter your Email' required />
                <label htmlFor="">Your Message</label>
                <textarea name="message" rows='8' placeholder='Enter your message' required />
                <button className='contact-submit' type="submit">Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
