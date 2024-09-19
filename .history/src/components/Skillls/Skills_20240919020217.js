import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills">
        <div className="skill-item">
          <h4 className="skill-name capitalize"> HTML & CSS </h4>
          <div className="skill-bar" skill-progress="90%">
            <label for="file">Downloading progress:</label>
            <progress id="file" value="32" max="100"> 32% </progress>
          </div>
        </div>
    </div>
  )
}

export default Skills