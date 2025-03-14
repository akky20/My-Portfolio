import React from 'react';
import './About.css';
import Navbar from '../Nav/Nav';

const About = () => {
    return (
        <div id='About-body'>
            <Navbar />
            <div className='main'>
                <div className='text-area'>
                    <h1>Enthusiastic <span> Creator</span> blending Tech and Imagination.</h1>
                    <p>I am a tech-savvy individual with a creative flair, possessing a vivid imagination...</p>

                    <a href="https://drive.google.com/file/d/1vxKesiOuOrL7RQTOMrV-E7WRj2sWVivU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button >download cv</button>
                    </a>

                </div>
                <div className="text-area-2">
                    <div className='text-cont'>
                        <div className='text-section'>
                            <p className='head'>Academic Pursuits</p>
                            <p>Currently I'm pursuing my Bachelor's degree in Mechanical Engineering from IIT Jodhpur </p>
                        </div>
                        <div className='text-section'>
                            <p className='head'>TechEnthusiast</p>
                            <div className="techstack-cont">
                                <span>Python</span>
                                <span>C/C++</span>
                                <span>ROS/ROS2</span>
                                <span>Gazebo, Rviz</span>
                                <span>HTML,CSS</span>
                                <span>Javascript</span>
                                <span>Bootstrap</span>
                                <span>React</span>
                                <span>Node.Js</span>
                                <span>MySQL</span>
                                <span>Tkinter, PyQT</span>



                            </div>
                            <p>Proficient in Python coding with a passion for Robotics and active engagement in ROS (Robot Operating System) & Currently working as a Research Intern at IIT Roorkee and seeking for more such opportunities.. </p>
                        </div>
                        <div className='text-section'>
                            <p className='head'>Creative Expressions</p>
                            <p>India Book of Records holder for Smallest Origami <a href="https://indiabookofrecords.in/tag/minuscule-origami-art/" target='blank'>Know more</a>. Also, skilled in drawing & painting, and sharing creativity on my YouTube channel <a href="https://www.youtube.com/@ArtNIdea" target='blank'>Link</a></p>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;