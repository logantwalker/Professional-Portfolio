import React from 'react'
import {Row, Col} from 'react-materialize';
import navlogo from './assets/navlogo.png'
import './Navbar.css';
import 'materialize-css';

export default function Navbar() {

    return(
        <div className='navbar'>
            <Col className='logo-container' s={6}>
                <img className='left logo' src={navlogo} alt='brand logo'/>
            </Col>
        </div>
    )
}