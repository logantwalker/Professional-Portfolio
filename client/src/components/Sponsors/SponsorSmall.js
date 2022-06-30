import React from 'react';
import {Row, Col, Card, CardTitle, Icon} from 'react-materialize';
import './sponsorSmall.css';
import 'materialize-css';

import bisonLogo from './assets/BisonLogo.png';
import bludLogo from './assets/BludLogo.png';
import dunlopLogo from './assets/DunlopLogo.png';
import kytLogo from './assets/KYTLogo.png';
import vortexLogo from './assets/VortexEKlogo.jpg';
import woodcraftLogo from './assets/woodcraftLogo.jpg';

export default function SponsorSmall() {
    return (
        <div className='sponsor'>
            <Row>
                <Col s={12} m={6} l={4} className='sponsor-card'>
                    <a href='https://woodcraft-cfm.com/' target="_blank" rel='noreferrer'>
                        <div className='card' style={{
                            backgroundImage: `url(${woodcraftLogo})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat:'no-repeat'
                        }}>
                            
                        </div>
                    </a>
                </Col>
                <Col s={12} m={6} l={4} className='sponsor-card'>
                    <a href='https://www.bisontrack.com/' target="_blank" rel='noreferrer'>
                        <div className='card' style={{
                            backgroundImage: `url(${bisonLogo})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}>

                        </div>
                    </a>
                </Col>
                <Col s={12} m={6} l={4} className='sponsor-card'>
                    <a href='https://www.vortexracing.com/' target="_blank" rel='noreferrer'>
                        <div className='card' style={{
                            backgroundImage: `url(${vortexLogo})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}>

                        </div>
                    </a>
                </Col>
                <Col s={12} m={6} l={4} className='sponsor-card'>
                    <a href='https://www.kythelmet.com/' target="_blank" rel='noreferrer'>
                        <div className='card' style={{
                            backgroundImage: `url(${kytLogo})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}>

                        </div>
                    </a>
                </Col>
                <Col s={12} m={6} l={4} className='sponsor-card'>
                    <a href='https://www.bludlubricants.com/' target="_blank" rel='noreferrer'>
                        <div className='card' style={{
                            backgroundImage: `url(${bludLogo})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}>

                        </div>
                    </a>
                </Col>
                <Col s={12} m={6} l={4} className='sponsor-card'>
                    <a href='https://www.dunlopmotorcycletires.com/' target="_blank" rel='noreferrer'>
                        <div className='card' style={{
                            backgroundImage: `url(${dunlopLogo})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}>

                        </div>
                    </a>
                </Col>
            </Row>
        </div>
    )
}
