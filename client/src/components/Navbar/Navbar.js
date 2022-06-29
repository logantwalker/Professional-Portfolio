import React from 'react'
import {Row, Col, NavItem} from 'react-materialize';
import navlogo from './assets/navlogo.png'
import './Navbar.css';
import 'materialize-css';

export default function Navbar() {

    return(
        <div className='navbar'>
            <Col className='logo-container' s={6}>
                <a href='/'><img className='left logo' src={navlogo} alt='brand logo'/></a>
            </Col>
            <ul id='nav-mobile' className='right hide-on-med-and-down navitem-container'>
                <NavItem href='/' className='custom-navitem'>HOME</NavItem>
                <NavItem href='/' className='custom-navitem'>RACING</NavItem>
                <NavItem href='/' className='custom-navitem'>CODING</NavItem>
                <NavItem href='/' className='custom-navitem'>CONTACT</NavItem>
            </ul>
        </div>
    )
}