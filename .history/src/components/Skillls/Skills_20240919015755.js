import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills">
        <div className="skill-item">
          <h4 className="skill-name capitalize"> HTML & CSS </h4>
          <div className="skill-bar" skill-progress="90%">
          attr(skill-progress)
          </div>
        </div>
    </div>
  )
}

export default Skills