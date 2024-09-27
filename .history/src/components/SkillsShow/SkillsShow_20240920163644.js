import './SkillsShow.css'
import images from './images.json'
import css from'./../../images/skills/css.svg'

import React from 'react'

// <img src={images[1].imgURL}  alt=""/>
const SkillsShow = () => {
  return (
    <div className="skillShow">
        <h3>SkillsShowImagescss</h3>
        <img src={css}  alt=""/>
        <img src={require("./../../images/skills/wordpress.png")}  alt=""/>
    </div>
  )
}

export default SkillsShow