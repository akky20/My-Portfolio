import React from 'react';
import './portfolio.css';
import pic1 from './5555.png';
import CodePic1 from './Screenshot 2023-12-28 184443.png';
import CodePic2 from './CodePic2.png';
import CodePic3 from './CodePic3.png';
import MAVPic from './MAVPic.jpg';
import CourseWebPic from './CourseWebPic.png';
// import './Home.css';
// import ProfilePic from './Profile.png';
import Navbar from '../Nav/Nav';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';


const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <div className='cont'>
                <div id='work-head'>
                    <h1>My <span>Work</span></h1>
                    <p>A Showcase of My Journey ... </p>

                </div>

                <div className='card-cont'>
                    <div class="card">
                        <p class="card__title">Water Monitoring System</p>
                        <img style={{ opacity: "0.4" }} src={CodePic1} alt="" />
                        <div class="card__content">
                            <p class="card__description">Designed a water monitoring system with Arduino, utilizing water
                                sensors for real-time monitoring via Node.js
                            </p>
                            <a className='work-link' href="https://github.com/akky20/IOT-BASED-WATER-MANAGEMENT-SYSTEM-WITH-REAL-TIME-MONITORING" target="_blank" rel="noopener noreferrer">
                                {/* GitHub */}
                                <GitHubIcon fontSize='mediu' />
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <p class="card__title">CBIR</p>
                        <img style={{ opacity: "0.4" }} src={CodePic2} alt="" />
                        <div class="card__content">
                            <p class="card__description">Created a CBIR system using color histograms and HOG features
                                for efficient image retrieval</p>
                            <a className='work-link' href="https://github.com/akky20/CBIR" target="_blank" rel="noopener noreferrer">
                                {/* GitHub */}
                                <GitHubIcon fontSize='mediu' />
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <p class="card__title">Flapping Wing MAV</p>
                        <img style={{ opacity: "0.4" }} id='MAV-img' src={MAVPic} alt="" />
                        <div class="card__content">
                            <p class="card__description">Designed and fabricated precision small wings for MAV prototypes,
                                optimizing manufacturing methods.
                            </p>
                            <a className='work-link' href="https://drive.google.com/file/d/1rKRIfIzHbUyY5j6ilGexIBpBe1o4CF5C/view" target="_blank" rel="noopener noreferrer">
                                {/* GitHub */}
                                <DescriptionIcon fontSize='mediu' />
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <p class="card__title">Course Web-App</p>
                        <img style={{ opacity: "0.4" }} id='MAV-img' src={CourseWebPic} alt="" />
                        <div class="card__content">
                            <p class="card__description"> Designed a WebApp to serve as a valuable learning tool for mechanical engineering concepts
                            </p>
                            <a className='work-link' href="https://github.com/akky20/MoS" target="_blank" rel="noopener noreferrer">
                                {/* GitHub */}
                                <GitHubIcon fontSize='mediu' />
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <p class="card__title">College Fest Website</p>
                        <img style={{ opacity: "0.4" }} id='MAV-img' src={CodePic1} alt="" />
                        <div class="card__content">
                            <p class="card__description">Contributed to a collaborative team effort in designing and developing a
                                dynamic college fest website using React.js. </p>
                            <a className='work-link' href="https://github.com/devlup-labs/Ignus-23" target="_blank" rel="noopener noreferrer">
                                {/* GitHub */}
                                <GitHubIcon fontSize='mediu' />
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <p class="card__title">College Club Website</p>
                        <img style={{ opacity: "0.4" }} id='MAV-img' src={CodePic3} alt="" />
                        <div class="card__content">
                            <p class="card__description"> Improved the user experience of the website by implementing
                                advanced features and optimizing its user interface</p>
                            <a className='work-link' href="https://github.com/devlup-labs/woc" target="_blank" rel="noopener noreferrer">
                                {/* GitHub */}
                                <GitHubIcon fontSize='mediu' />
                            </a>
                        </div>
                    </div>

                    {/* <div class="card">HOVER</div>
                    <div class="card">HOVER</div>
                    <div class="card">HOVER</div> */}
                </div>
            </div>

        </div>
    );
};

export default Portfolio;