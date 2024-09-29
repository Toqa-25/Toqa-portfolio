import {React , useState , useEffect} from 'react'
import { Link , NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './../Main/Main.css'
import './Nav.css'
import Contact from '../Contact/Contact'
import Folder from './../../images/sections/folder.svg'


const Nav = () => {
    const [showHeader , setShowHeader] = useState(false);
    const showHeaderFun = () => {
        setShowHeader(!showHeader)
    }   
    const hideHeaderFun = () => {
        setShowHeader(false)
        console.log("hide")
    }  
   
   
  return (
        <div className="nav">   
                <div className="flex-column  bar" onClick={showHeaderFun}>
                    <FontAwesomeIcon icon="fa-solid fa-xmark " className={showHeader && " show-xmark"} />   
                </div>  
                <div className={"header flex-column " + (showHeader && " show-header")} >                      
                    <div className="logo" onClick={hideHeaderFun}>
                        <Link to="/"><span className="special-font special-color">t</span>oqa</Link>               
                    </div>
                    <ul className={"header-list flex-column" }>
                        <li className="header-list-item special-color" onClick={hideHeaderFun}>
                            <NavLink to="/projects" className="special-color"> 
                            <img src{Folder} alt="" />
                                <FontAwesomeIcon icon="fa-solid fa-folder-open" className="icon"/>
                                 <span> Projects </span> 
                            </NavLink>
                        </li>
                        <li className="header-list-item " onClick={hideHeaderFun}>
                            <NavLink to="/about" > 
                                <FontAwesomeIcon icon="fa-solid fa-user " className="icon" /> 
                                <span> about me </span>  
                            </NavLink>
                        </li> 
                        <li className="header-list-item " onClick={hideHeaderFun}>
                            <NavLink to="/services"> 
                                <FontAwesomeIcon icon="fa-solid fa-code" className="icon" />
                                <span> services </span> 
                            </NavLink>
                        </li>           
                    </ul>
                    <Contact />
                    </div>
                    <button className="btn contact-btn capitalize" onClick={showHeaderFun}> contact me </button>
        </div>
  )
}
export default Nav



