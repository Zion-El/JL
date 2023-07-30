import React from 'react'
import {  Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./donate.css";
import donate from "../../asset/hamper.png";
const Donate = () => {
  return (
    <div className='donate-wrap'>
       <div className="donate-top">
            <Row>
                <Col lg={4} md={4} sm={12}>
                <div className='c-left'>
                <h2>Donate</h2>
                <h3>Donate to support our cause today</h3>
                <p>
                Your generous donations go a long way on helping us achieve our intended goals. We can’t function effectively as an organization without your help.
                </p>
                <div className='btn-c-left'>
                    <Link to="/contact"><i className='fas fa-heart'></i> DONATE NOW</Link>
                </div>
                </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                   <div className='img-middle'>
                   <img src={donate} alt="imaage" />
                   </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                <div className='c-right'>
                <h2>Join our Team</h2>
                <h3>Get involved as we work together</h3>
                <p>
                Joining our team of vibrant and passionate individuals means that you are willing to willfully provide your time to those who need assistance.  
                </p>
                <div className='btn-c-right'>
                    <Link to="/contact"><i className='fas fa-users'></i> JOIN US</Link>
                </div>
                </div>
                </Col>
            </Row>    
        </div> 
    </div>
  )
}

export default Donate