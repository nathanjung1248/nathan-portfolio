import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_image.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  // Function to open LinkedIn profile in a new tab
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/nathan-jung-874196240", "_blank"); // Replace with correct LinkedIn URL
  };

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Nathan Jung,</span> a developer based in Calgary</h1>
      <p>
        I am a Computer Science student from Calgary, Canada with experience in 
        Process Automation, Frontend Development, UI/UX, and Data Modelling.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>

        {/* LinkedIn button opens LinkedIn in a new tab */}
        <div className="hero-resume" onClick={openLinkedIn}>
          LinkedIn
        </div>
      </div>
    </div>
  );
};

export default Hero;
