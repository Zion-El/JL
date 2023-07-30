import React from 'react'
import { Link } from 'react-router-dom';
import "./afternav.css";
const AfterNav = (props) => {
  return (
    <div className='afternav-wrap'>
      <div className='a-content text-center'>
            <h3>{props.title}</h3>
            <p><Link to="/">home</Link> <i className='fa fa-arrow-right'></i> {props.title}</p>
      </div>
    </div>
  )
}

export default AfterNav
