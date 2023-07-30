import React from 'react';
import "./team.css"
const Team = (props) => {
  return (
    <div className='team-wrap'>
      <div className='card-team text-center'>
      <div className='text-center'>
      <img src={props.image} alt='team_img'/>
      </div>
        <h3>{props.name}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Team
