import React from 'react';
import './About.css';
import Navbar from '../Nav/Nav';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='main'>
                <div className='text-area'>
                    <h1>Transforming <span>Ideas</span> into Intelligent Reality</h1>
                    <p>I am a tech-savvy individual with a creative flair, possessing a vivid imagination...</p>
                    
                    <a href="https://drive.google.com/file/d/1X_NEwZFxE-1tFm-xcU89ObIK5TnZnBAQ/view?usp=sharing"  target="_blank" rel="noopener noreferrer">
                    <button >download cv</button>
                    </a>

                </div>
                <div className="text-area-2">
                    <div className='text-cont'>
                        <div className='text-section'>
                            <p className='head'>Academic Pursuits -</p>
                            <p>Currently I'm pursuing my Bachelor's degree in Mechanical Engineering from IIT Jodhpur </p>
                        </div>

                        <div className='text-section'>
                            <p className='head'>TechEnthusiast -</p>
                            <p>Strong command of coding, particularly in Python. I have a passion for web development and am actively engaged in working with ROS (Robot Operating System)</p>
                        </div>
                       
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;