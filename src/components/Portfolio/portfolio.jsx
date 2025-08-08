import React from 'react';
import './portfolio.css';
import CodePic1 from './Screenshot 2023-12-28 184443.png';
import CodePic2 from './CodePic2.png';
import CodePic3 from './CodePic3.png';
import MAVPic from './MAVPic.jpg';
import ware from './ware.png';
import CourseWebPic from './CourseWebPic.png';
import gui from './arm.jpg';
import cansat from './cansat.jpg';
// import './Home.css';
// import ProfilePic from './Profile.png';
import Navbar from '../Nav/Nav';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';


import WorkIcon from '@mui/icons-material/Work';

const Portfolio = () => {
    const experiences = [
        {
            title: "Research Assistant",
            company: "IIT Roorkee",
            duration: "Apr 2024 - Present",
            description: "Developing algorithms for AMRs and real-world vehicles, focusing on object detection, sensor fusion, path planning, and autonomous navigation using computer vision.",
            technologies: "ROS, Python, Computer Vision, OpenCV"
        },
        {
            title: "Robotics Intern",
            company: "Upsurge Labs",
            duration: "Aug 2022 - May 2023",
            description: "Utilized ROS for robotics development, created simulation, and designed CAD models during the internship.",
            technologies: "ROS, Python, Computer Vision, SolidWorks"
        },
        {
            title: "Summer Research Intern",
            company: "IIT Jodhpur",
            duration: "May 2024 - Jul 2024",
            description: "Working on wearable controllers for industrial robots. Developing gesture recognition systems and human-robot interfaces.",
            technologies: "ROS, Python, Tkinter, PyQT"
        }

    ];    return (
        <div id='portfolio-body'>
            <Navbar />
            <div className='cont'>
            <div id='experience-section'>
                    <h1>Professional <span>Experience</span></h1>
                    <p id='experience-para'>My Journey in Technology and Research...</p>
                    
                    <div className='experience-cards'>
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-card">
                                <div className="experience-header">
                                    <WorkIcon className="work-icon" />
                                    <h3>{exp.title}</h3>
                                </div>
                                <h4>{exp.company}</h4>
                                <p className="duration">{exp.duration}</p>
                                <p className="description">{exp.description}</p>
                                <p className="technologies">
                                    <strong>Technologies:</strong> {exp.technologies}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>



                <div id='work-head'>
                    <h1>My <span>Work</span></h1>
                    <p>A Showcase of My Journey ... </p>

                </div>

                <div className='card-cont'>
                    <div class="card">
                        <p class="card__title">Kalyani BharatForge</p>
                        <img style={{ opacity: "0.4" }} src={ware} alt="" />
                        <div class="card__content">
                            <p class="card__description">Centralised Inteligence for Dynamic Swarm Navigation
                            </p>
                            <a className='work-link' href="https://github.com/akky20/Kalyani-BharatForge" target="_blank" rel="noopener noreferrer">
                                {/* GitHub */}
                                <GitHubIcon fontSize='mediu' />
                            </a>
                        </div>

                    </div> 


                    <div class="card">
                        <p class="card__title">Wearable Controller</p>
                        <img style={{ opacity: "0.4" }} src={gui} alt="" />
                        <div class="card__content">
                            <p class="card__description">wearable controller for precise real-time control of industrial robots
                            </p>
                            {/* <a className='work-link' href="https://github.com/akky20/Kalyani-BharatForge" target="_blank" rel="noopener noreferrer"> */}
                                {/* GitHub */}
                                {/* <GitHubIcon fontSize='mediu' /> */}
                            {/* </a> */}
                        </div>

                    </div> 

                    <div class="card">
                        <p class="card__title">CANSAT</p>
                        <img style={{ opacity: "0.4" }} src={cansat} alt="" />
                        <div class="card__content">
                            <p class="card__description">Competition by IN-SPACe, ASI and ISRO
                            </p>
                            <a className='work-link' href="https://drive.google.com/drive/folders/1vqoStJ1tTVgmJE4uM9ZerAFsZrVNXuD7?usp=sharing" target="_blank" rel="noopener noreferrer">
                                {/* GitHub */}
                                <DescriptionIcon fontSize='mediu' />
                            </a>
                        </div>

                    </div> 


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
                            <a className='work-link' href="https://drive.google.com/file/d/1uj9pym-0FoXru90E0E8lYGBfj2RhSqGN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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