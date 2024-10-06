import {React , useState , useEffect } from 'react';
import projectsData from './projects.json' ;
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// {
//   "projectName": "travel website" ,
//   "projectAttr": "travel-website"  ,
//   "projectDesc": "travel website is website build with HTML, CSS, JS, and SASS. It is consist of 5 pages in responsive design for all screens. in this design we used AOS liberary to make it more dynamic and more attractive." ,
//   "projectURL": "https://toqa-25.github.io/travel-website/",
//   "projectImg": "travel-website.png"
// }

// https://github.com/Toqa-25/project-json/blob/main/projects.json

// <div className="projects-btns">
//   <NavLink to="Games" className="projects-btn btn"> Games </NavLink>
//   <NavLink to="figma" className="projects-btn btn"> figma </NavLink>
// </div>

const Projects = () => {
  console.log("projectsData")
  console.log(projectsData)
  return (
    <div className="container projects flex-column">
      <h2 className="capitalize projects-header page-header">our projects </h2>
      <select className="projects-btns" onchange="">
        <option value="Games">
          <Link to="Games" className="projects-btn btn"> Games </Link>
        </option>
        <option value="tools">
          <NavLink to="tools" className="projects-btn btn">Tools </NavLink>
        </option>
        
      </select>
      <Outlet />
      <div className="Projects-items ">
      {projectsData.map((item) => {
        return (
          <div className="flex-column project-item">
            <img src={ require(`./../../images/portfolio/${item.projectImg}`)} alt="" className="project-img" />
            <h4 className="capitalize project-name">
              {item.projectName} 
              <Link className="arrow-icon icon project-link" to={item.projectURL}>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />             
              </Link>
            </h4>          
          </div>
            )
          })}
      </div>
    </div>
  )
}

export default Projects
