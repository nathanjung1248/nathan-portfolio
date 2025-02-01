import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "33881892-86fb-46e0-ac2b-a9a5bce37f45"); // Replace with your Web3Forms Access Key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        setResult("Form Submitted Successfully");
        alert("✅ Form Submitted Successfully!");
        event.target.reset(); // Clear the form after submission
      } else {
        setResult(data.message);
        alert("❌ Error: " + data.message);
      }
    };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently pursuing full-time career and research opportunities</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> 
              <p>nathan.jung1248@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> 
              <p>Calgary AB, Canada</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> 
              <p>403-796-8036</p>
            </div>
          </div>
        </div>

        {/* ✅ Updated form to handle submission with Web3Forms */}
        <form className="contact-right" onSubmit={onSubmit}>
          <input type="hidden" name="access_key" value="33881892-86fb-46e0-ac2b-a9a5bce37f45" /> {/* Hidden Access Key */}
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />

          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />

          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>

          <button type='submit' className="contact-submit">Submit now</button>

          {/* Display form submission result message */}
          <p className="form-result">{result}</p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
