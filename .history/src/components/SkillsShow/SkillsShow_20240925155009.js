import './SkillsShow.css'
import images from './images.json'
import HTML from'./../../images/skills/html.svg'
import CSSImg from'./../../images/skills/css.svg'
import JSImg from'./../../images/skills/javascript.svg'
import ResponsiveImg from'./../../images/skills/responsive.svg'
import ReactImg from'./../../images/skills/react.svg'
import SCSSImg from'./../../images/skills/sass.svg'
import BootstrapImg from'./../../images/skills/bootstrap.svg'
import Wordpress from'./../../images/skills/wordpress.png'

import React from 'react'

// <img src={images[1].imgURL}  alt=""/>
const SkillsShow = () => {
  return (
    <div className="skillShow container">
        <ul className="skillShow-items">
          <li className="skillShow-item">
            <img src={CSS}  alt=""/>
            <img src={HTML}  alt=""/>
            <img src={JS}  alt=""/>
            <img src={Responsive}  alt=""/>
            <img src={React}  alt=""/>
            <img src={SCSS}  alt=""/>
            <img src={Bootstrap}  alt=""/>
            <img src={Wordpress}  alt=""/>
          </li>
         
          </ul>
        
    </div>
  )
}

export default SkillsShow