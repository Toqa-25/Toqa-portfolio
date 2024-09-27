import './SkillsShow.css'
import images from './images.json'
import HTML from'./../../images/skills/html.svg'
import CSS from'./../../images/skills/css.svg'

import React from 'react'

// <img src={images[1].imgURL}  alt=""/>
const SkillsShow = () => {
  return (
    <div className="skillShow">
        <ul className="skillShow-items">
          <li className="skillShow-item">
            <img src={CSS}  alt=""/>
          </li>
          <li className="skillShow-item">
            <img src={CSS}  alt=""/>
          </li>
          </ul>
        
    </div>
  )
}

export default SkillsShow