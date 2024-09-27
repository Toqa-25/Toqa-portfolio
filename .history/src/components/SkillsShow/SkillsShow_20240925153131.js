import './SkillsShow.css'
import images from './images.json'
import HTML from'./../../images/skills/html.svg'
import CSS from'./../../images/skills/css.svg'
import JS from'./../../images/skills/java.svg'

import React from 'react'

// <img src={images[1].imgURL}  alt=""/>
const SkillsShow = () => {
  return (
    <div className="skillShow container">
        <ul className="skillShow-items">
          <li className="skillShow-item">
            <img src={CSS}  alt=""/>
            <img src={HTML}  alt=""/>
          </li>
         
          </ul>
        
    </div>
  )
}

export default SkillsShow