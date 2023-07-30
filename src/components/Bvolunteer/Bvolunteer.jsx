import React from 'react'
// import {  Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./bvolunteer.css"
const Bvolunteer = () => {
  return (
    <div className='b-wrap'>
      <div className='b-wrap-content'>
      <h2>Become a volunteer</h2>
      <p> “There is nothing more beautiful than someone who goes out of their way to make life beautiful for others.” <br/><br/>
― Mandy Hale
</p>
      <div className='btn-b'>
          <Link>Join Us</Link>
      </div>
      </div>
    </div>
  )
}

export default Bvolunteer
