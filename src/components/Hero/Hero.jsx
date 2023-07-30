import React from 'react'
import {  Row, Col } from 'react-bootstrap';
import "./hero.css";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <>

            <div className='hero-image'>
            <Row> 
                <Col lg={12} sm={12} md={12}>
                   <div className='hero-content'>
                   <h1>Join us today</h1>
                    <h2>To make the world a better place</h2>
                    <p>We are a volunteer-driven organization with a specific focus on providing basic food and shelter to the less privilege in the society. </p>
                    <div className='row hero-btn'>
                      <div className='col-md-6 col-lg-6 btn-left'>
                          <Link to="/about">About Us</Link>
                      </div>
                      <div className='col-md-6 col-lg-6 btn-right'>
                      <Link to="/contact">Donate</Link>
                      </div>
                  </div>
                   </div>
                </Col>
            </Row>
            </div>
    </>
  )
}

export default Hero
