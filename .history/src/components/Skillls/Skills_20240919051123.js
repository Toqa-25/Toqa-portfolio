import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills flex-column">
        <div className="skill-item">
          <h4 className="skill-name capitalize" id="js"> JS </h4>
          <progress id="file" value="90" max="100"  prog="80%" className="skill-bar" > </progress>
        </div>
        <div className="skill-item">
          <h4 className="skill-name capitalize" id="file"> HTML & CSS </h4>
          <progress id="file" value="90" max="100"  prog="90%" className="skill-bar" > </progress>
        </div>
        <div className="skill-item">
          <h4 className="skill-name capitalize" id="file"> SCSS </h4>
          <progress id="file" value="90" max="100"  prog="65%" className="skill-bar" > </progress>
        </div>
    </div>
  )
}

export default Skills