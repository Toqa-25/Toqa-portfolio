import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills flex-column">
        <h4 className=""> my skills <h4>
        <div className="skill-item">
          <h4 className="skill-name capitalize" id="js"> JS </h4>
          <progress id="js" value="80" max="100"  prog="80%" className="skill-bar" > </progress>
        </div>
        <div className="skill-item">
          <h4 className="skill-name capitalize" id="html&css"> HTML & CSS </h4>
          <progress id="html&css" value="90" max="100"  prog="90%" className="skill-bar" > </progress>
        </div>
        <div className="skill-item">
          <h4 className="skill-name capitalize" id="scss"> SCSS </h4>
          <progress id="scss" value="65" max="100"  prog="65%" className="skill-bar" > </progress>
        </div>
    </div>
  )
}

export default Skills