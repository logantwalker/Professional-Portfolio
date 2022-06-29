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
                <div className='white-space'></div>
                <div className='about-section'>
                    <Row>
                        <Col offset='m6' s={12} m={6} className='about-content'>
                            <div className='about-logan'>LOGAN</div>
                            <div className='about-walker'>WALKER</div>
                            <div className='about-text'>
                                Logan Walker started riding motorcycles at age 5 on a Honda cr50. Not long after that, he was racing motocross at tracks all across Georgia. 
                                He raced motocross for almost 10 years before having to sell his race bike to buy his first car. 
                                In late 2019, just after graduating from college at Georgia Tech, Logan was finally able to buy another bike - a 2019 Ninja 400! Just few months later, he was taking his Ninja 400 to the track, and he was instantly hooked.
                                In August 2021, he got his racing license and scored his first podium with WERA the next day. In addition to that, He also brought home 3rd place in the WERA National Sportsman Series Championship in the D superstock category and was promoted to an Expert Racing license. 
                                Logan’s ultimate goal is to compete in the MotoAmerica Twins Cup category.
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}