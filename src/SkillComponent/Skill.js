import React from 'react'
import './Skill.css'
var imga='../Assets/Img/skill.png';

function Skill() {
  return (
    <div className='skill'>
      <div className='skill_left'>
        <img src={imga}></img>
      </div>
      <div className='skill_right'>
        <h2>Skillsets</h2>
      
      </div>
    </div>
  )
}

export default Skill
