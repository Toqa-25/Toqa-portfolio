import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills">
        <div className="skill-item">
          <h4 className="skill-name capitalize" id="file"> HTML & CSS </h4>
          <progress id="file" value="90" max="100"  proclassName="skill-bar" > </progress>
        </div>
    </div>
  )
}

export default Skills