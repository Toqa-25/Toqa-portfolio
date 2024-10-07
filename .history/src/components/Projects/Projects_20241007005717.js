import {React , useState } from 'react';
import projectsData from './projects.json' ;
<<<<<<< HEAD
import { Link,  useParams} from 'react-router-dom';
=======
import { Link,  Outlet , useParams} from 'react-router-dom';
>>>>>>> d241279 (test uploading first react app)
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects = () => {
   const param = useParams()
    let paramName = param.id
    let selectedProjects = projectsData[paramName]
<<<<<<< HEAD
    console.log (projectsData)
    console.log (selectedProjects)
=======
>>>>>>> d241279 (test uploading first react app)
    const [hideList , setHideList] = useState(true)
    const hideShowListFun = () => {
      setHideList(!hideList)
      console.log(hideList)
    }
    const hideListFun = () => {
      setHideList(true)
      console.log("true.")
    }
   
  return (
    <div className="container projects flex-column">
      <h2 className="capitalize projects-header page-header">my projects </h2>

      <h2 className="capitalize projects-header page-header">our projects </h2>
      <div className="projects-list" >
        <div className="capitalize projects-list-header " onClick={hideShowListFun}> 
          projects 
          <FontAwesomeIcon icon="fa-solid fa-caret-down " className="drop-icon"/>
        </div>
        <ul className={"projects-list-items " + (hideList && "hide")} >    
          <li  className="capitalize projects-list-item" onClick={hideListFun} > 
              <Link to="/projects">All</Link>
          </li>
          <li  className="capitalize projects-list-item" onClick={hideListFun} > 
              <Link to="/Figma_Projects">Figma</Link>
          </li>
          <li  className="capitalize projects-list-item" onClick={hideListFun} > 
              <Link to="/SCSS_Projects">SCSS</Link>
          </li>
          <li  className="capitalize projects-list-item" onClick={hideListFun} > 
              <Link to="/Games">Games</Link>
          </li>
          <li  className="capitalize projects-list-item" onClick={hideListFun} > 
              <Link to="/Tools">Tools</Link>
          </li>
        </ul>
      </div>
      <div className="Projects-items mains">
      {selectedProjects.map((item , index) => {
        return (
          <div className="flex-column project-item" key={index}>
            <img src={ require(`./../../images/portfolio/${item.projectImg}`)} alt="" className="project-img" />
            <h4 className="capitalize project-name">
              {item.projectName} 
              <Link className="arrow-icon icon project-link" to={item.projectURL}>
<<<<<<< HEAD
                <FontAwesomeIcon icon="fa-solid fa-arrow-right"  className="icon"/>             
=======
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />             
>>>>>>> d241279 (test uploading first react app)
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
