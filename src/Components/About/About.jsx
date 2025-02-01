import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_image.png'

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
                        <p>I am a Computer Science student at the University of Calgary, passionate about blending technical expertise with real-world problem-solving. My academic journey has been enriched by diverse coursework in computational systems, algorithm design, and even biology, reflecting my curiosity and adaptability. 
                            I've had the opportunity to apply my skills in meaningful ways, from developing data models to completing personal projects that challenge and excite me.</p>
                        <p>Beyond academics, my professional experiences span roles such as RPA Student Developer, where I spearheaded end-to-end automation projects, and Pavement Maintenance Technician, where I honed my precision, time management, and adaptability. 
                            My volunteer work—ranging from coaching youth basketball to mentoring at summer camps—underscores my commitment to community, teamwork, and leadership.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Process Auomation</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Data Models</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
          {/*}  <div className="about-achievements">
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>Years of Experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>Projects completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1></h1>
                    <p></p>
                </div>
            </div> */}
        </div>
    )
}

export default About
