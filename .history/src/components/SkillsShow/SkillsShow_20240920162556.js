import './SkillsShow.css'
import images from './images.json'

import React from 'react'

// <img src={images[1].imgURL}  alt=""/>
const SkillsShow = () => {
  return (
    <div>
        <h3>SkillsShowImagescss</h3>
        <img src={require("./../../images/skills/css.svg")}  alt=""/>
    </div>
  )
}

export default SkillsShow