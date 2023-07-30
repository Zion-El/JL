import React from 'react'
import {  Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img2 from "../../asset/img2.jpg";
import img6 from "../../asset/img6.png";
import "./mission2.css"
const Mission2 = () => {
  return (
    <>
    <div>
    <div className='f-mission'>
        <Row>
           <Col lg={6} md={6} sm={12}>
            <div className='f-left'>
                <h6>About Our Foundation</h6>
                <h2> We are on a mission  to<br/> to help the most vulnerable </h2>
                <p>Naomi Hope Foundation is a non-governmental organization established in the year 2018 and officially registered with the Corporate Affairs Commission in 2022 to provide humanitarian services to the orphans, widows and less privileged children in the society.</p>
                <p>Since its inception in 2018, NHP has left no efforts in its quest to serve these categories of people and providing sustainable livelihoods.</p>
                <div className='f-btn'>
                    <Link to="/about">About Us</Link>
                </div>
                </div>
            </Col>
           
           <Col lg={6} md={6} sm={12}>
           <div className='f-right'>
                <img className='img1' src={img2} alt="imgg"/>
                <img className='img2' src={img6} alt="imgg"/>
            </div>
            </Col>
           
        </Row>
        </div>   
    </div>
    </>
  )
}

export default Mission2