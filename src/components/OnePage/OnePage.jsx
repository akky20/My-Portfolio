import React, { useState, useEffect } from 'react';
import './OnePage.css';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Import images
import CodePic1 from '../Portfolio/Screenshot 2023-12-28 184443.png';
import CodePic2 from '../Portfolio/CodePic2.png';
import CodePic3 from '../Portfolio/CodePic3.png';
import MAVPic from '../Portfolio/MAVPic.jpg';
import ware from '../Portfolio/ware.png';
import CourseWebPic from '../Portfolio/CourseWebPic.png';
import gui from '../Portfolio/arm.jpg';
import cansat from '../Portfolio/cansat.jpg';

const OnePage = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    ];

    const projects = [
        {
            title: "Kalyani BharatForge",
            description: "Centralised Intelligence for Dynamic Swarm Navigation",
            image: ware,
            link: "https://github.com/akky20/Kalyani-BharatForge",
            type: "github"
        },
        {
            title: "Wearable Controller",
            description: "wearable controller for precise real-time control of industrial robots",
            image: gui,
            link: "",
            type: "github"
        },
        {
            title: "CANSAT",
            description: "Competition by IN-SPACe, ASI and ISRO",
            image: cansat,
            link: "https://drive.google.com/drive/folders/1vqoStJ1tTVgmJE4uM9ZerAFsZrVNXuD7?usp=sharing",
            type: "document"
        },
        {
            title: "Water Monitoring System",
            description: "Designed a water monitoring system with Arduino, utilizing water sensors for real-time monitoring via Node.js",
            image: CodePic1,
            link: "https://github.com/akky20/IOT-BASED-WATER-MANAGEMENT-SYSTEM-WITH-REAL-TIME-MONITORING",
            type: "github"
        },
        {
            title: "CBIR",
            description: "Created a CBIR system using color histograms and HOG features for efficient image retrieval",
            image: CodePic2,
            link: "https://github.com/akky20/CBIR",
            type: "github"
        },
        {
            title: "Flapping Wing MAV",
            description: "Designed and fabricated precision small wings for MAV prototypes, optimizing manufacturing methods.",
            image: MAVPic,
            link: "https://drive.google.com/file/d/1uj9pym-0FoXru90E0E8lYGBfj2RhSqGN/view?usp=sharing",
            type: "document"
        },
        {
            title: "Course Web-App",
            description: "Designed a WebApp to serve as a valuable learning tool for mechanical engineering concepts",
            image: CourseWebPic,
            link: "https://github.com/akky20/MoS",
            type: "github"
        },
        {
            title: "College Fest Website",
            description: "Contributed to a collaborative team effort in designing and developing a dynamic college fest website using React.js.",
            image: CodePic1,
            link: "https://github.com/devlup-labs/Ignus-23",
            type: "github"
        },
        {
            title: "College Club Website",
            description: "Improved the user experience of the website by implementing advanced features and optimizing its user interface",
            image: CodePic3,
            link: "https://github.com/devlup-labs/woc",
            type: "github"
        }
    ];

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="one-page-container">
            {/* Fixed Navigation */}
            <nav className="fixed-nav">
                <div className="nav-container">
                    <div className="nav-brand">@kky</div>
                    
                    <button 
                        className="nav-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <MenuIcon />
                    </button>

                    <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
                        {navItems.map(item => (
                            <li key={item.id} className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                    onClick={() => scrollToSection(item.id)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Home Section */}
            <section id="home" className="section home-section">
                <div className="home-content">
                    <div className="profile-image">
                        <img src="https://i.postimg.cc/XYd9L0QG/profile-pic-12-1.png" alt="Abhiroop Bhavsar" />
                    </div>
                    
                    <div className="hero-text">
                        <div className="text-animation">
                            <h1>Abhiroop Bhavsar</h1>
                            <p>"Passionate Creator & Developer"</p>
                            <button 
                                className="cta-button"
                                onClick={() => scrollToSection('about')}
                            >
                                About me
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="scroll-indicator">
                    <KeyboardArrowDownIcon className="bounce" />
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section about-section">
                <div className="section-container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>Enthusiastic <span>Creator</span> blending Tech and Imagination.</h2>
                            <p>I am a tech-savvy individual with a creative flair, possessing a vivid imagination...</p>
                            
                            <a href="https://drive.google.com/file/d/1vxKesiOuOrL7RQTOMrV-E7WRj2sWVivU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <button className="download-cv-btn">Download CV</button>
                            </a>
                        </div>
                        
                        <div className="about-details">
                            <div className="detail-card">
                                <div className="detail-section">
                                    <h3>Academic Pursuits</h3>
                                    <p>Currently I'm pursuing my Bachelor's degree in Mechanical Engineering from IIT Jodhpur</p>
                                </div>
                                
                                <div className="detail-section">
                                    <h3>Tech Enthusiast</h3>
                                    <div className="tech-stack">
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
                                    <p>Proficient in Python coding with a passion for Robotics and active engagement in ROS (Robot Operating System) & Currently working as a Research Intern at IIT Roorkee and seeking for more such opportunities..</p>
                                </div>
                                
                                <div className="detail-section">
                                    <h3>Creative Expressions</h3>
                                    <p>India Book of Records holder for Smallest Origami <a href="https://indiabookofrecords.in/tag/minuscule-origami-art/" target="_blank" rel="noopener noreferrer">Know more</a>. Also, skilled in drawing & painting, and sharing creativity on my YouTube channel <a href="https://www.youtube.com/@ArtNIdea" target="_blank" rel="noopener noreferrer">Link</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="section experience-section">
                <div className="section-container">
                    <h2>Professional <span>Experience</span></h2>
                    <p className="section-subtitle">My Journey in Technology and Research...</p>
                    
                    <div className="experience-timeline">
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-item">
                                <div className="experience-icon">
                                    <WorkIcon />
                                </div>
                                <div className="experience-content">
                                    <h3>{exp.title}</h3>
                                    <h4>{exp.company}</h4>
                                    <p className="duration">{exp.duration}</p>
                                    <p className="description">{exp.description}</p>
                                    <p className="technologies">
                                        <strong>Technologies:</strong> {exp.technologies}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="section portfolio-section">
                <div className="section-container">
                    <h2>My <span>Work</span></h2>
                    <p className="section-subtitle">A Showcase of My Journey...</p>
                    
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <h3>{project.title}</h3>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <p>{project.description}</p>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            {project.type === 'github' ? <GitHubIcon /> : <DescriptionIcon />}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section contact-section">
                <div className="section-container">
                    <h2>Get in <span>Touch</span></h2>
                    
                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="contact-item">
                                <WhatsAppIcon />
                                <p>+91-9929949244</p>
                            </div>
                            <div className="contact-item">
                                <EmailOutlinedIcon />
                                <div>
                                    <p>abhiroop3887@gmail.com</p>
                                    <p>abhiroop.art@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="social-links">
                            <a href="https://www.instagram.com/akky.abhi/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                                <svg viewBox="0 0 16 16" className="social-icon">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                                </svg>
                            </a>
                            
                            <a href="https://github.com/akky20" target="_blank" rel="noopener noreferrer" className="social-link github">
                                <svg viewBox="0 0 16 16" className="social-icon">
                                    <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
                                </svg>
                            </a>
                            
                            <a href="https://www.linkedin.com/in/abhiroop-bhavsar-80a0341b1/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                                <svg viewBox="0 0 448 512" className="social-icon">
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OnePage;