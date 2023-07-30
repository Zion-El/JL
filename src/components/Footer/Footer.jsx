import React from 'react'
import {  Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../asset/logo.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className='footer-wrap'>
      <div className='footer-c'>
        <Row>
            <Col lg={3} md={3} sm={3}>
                <div className='footer-1'>
                   <div className='footer-logo'>
                   <img src={logo} alt="footerimage"/>
                    </div><br/>
                    <p>Caring makes a difference</p>
                </div>
            </Col>
            <Col lg={3} md={3} sm={3}>
                <div className='footer-2'>
                    <h3>Contact Info</h3>
                   <p>Address: No 4 Unity close, Segun Kujore Estate, Off CMD Road, Magodo</p>
                   <p>Email: naomihopefoundation22@gmail.com</p>
                   <p>Contact Us: +2348038231531</p>
                </div>
            </Col>
            <Col lg={3} md={3} sm={3}>
                <div className='footer-3 text-center'>
                    <h3>Important Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/social-events">Social Events</Link></li>
                        <li><Link to="/latest-causes">Latest Cause</Link></li>
                        <li><Link to="/contact">Donate</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </Col>
            <Col lg={3} md={3} sm={3}>
                <div className='footer-4'>
                    <h6 className='text-center'>Follow us on social media</h6>
                    <div className='text-center'>
                    <span><i className='fab fa-facebook'></i></span>
                    <span><i className='fab fa-linkedin'></i></span>
                    <span><i className='fab fa-instagram'></i></span>
                    <span><i className='fab fa-twitter'></i></span>
                    </div>
                </div>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer
