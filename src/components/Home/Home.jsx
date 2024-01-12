import React from 'react';
import './Home.css';
import Navbar from '../Nav/Nav';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div id='body'>
            <Navbar />
            <div class="intro">
                <div class="my-photo">
                    <img src="https://i.postimg.cc/XYd9L0QG/profile-pic-12-1.png" class="img" alt="..." />
                </div>


                <section class="cd-intro">
                    <div class="cd-intro-content mask-2 ">
                        <div class="content-wrapper my-intro ">
                            <div >
                                <h1>Abhiroop Bhavsar</h1>
                                <p >"Passionate Creator of Digital Marvels."</p>
                                <div class="action-wrapper">

                                <Link to="/about">
                                <button>About me</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
            
            </div>
        </div>
    );
};

export default Home;
