import React from 'react';
import { Parallax, Row, Col, Button, Carousel } from 'react-materialize';
import Navbar from '../../components/Navbar/Navbar';
import 'materialize-css';
import './Home.css';
import redSVG from './Assets/whiteLogo.svg';


export default function Home (props) {
    return(
        <React.Fragment>
            <Navbar/>
            <div className='home-page'>
                <div className='homepage-hero_video-container'>
                    <video className='hide-on-small-only' muted playsInline autoPlay loop>
                        <source src='https://i.imgur.com/fQNbEBE.mp4' type='video/mp4' />
                    </video>

                    <video className='hide-on-med-and-up' muted playsInline autoPlay loop>
                        <source src='https://i.imgur.com/sMZcC2d.mp4' type='video/mp4' />
                    </video>
                    
                    <div className='homepage-hero_svg-container center'>
                        <img src={redSVG} className='svg-logo' alt='logo svg' />
                        <div className='heroLogan center'>
                            LOGAN 
                        </div>
                        <div className='heroWalker'>
                            WALKER
                        </div>
                    </div> 
                </div>
            </div>
        </React.Fragment>
    )
}