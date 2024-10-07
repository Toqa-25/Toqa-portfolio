import './App.css';
import {React , useState} from 'react'
<<<<<<< HEAD
import {Routes , BrowserRouter, HashRouter, Route , Link} from 'react-router-dom'
=======
import {Routes , BrowserRouter, Route , Link} from 'react-router-dom'
>>>>>>> d241279 (test uploading first react app)
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Nav from './components/Nav/Nav';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'
<<<<<<< HEAD

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import SkillsShow from './components/SkillsShow/SkillsShow';



// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'



            // <Route path ="/services" element={<Services />}> </Route>  
function App() {
  return (
        <div className="App">
          <BrowserRouter basename="/toqa-portfolio">
            <Nav />
            <Routes>
              <Route path ="/"  element={<Home  />}> </Route>
              <Route path =":id" element={<Projects />}> </Route>         
              <Route path ="/about" element={<About />}> </Route> 
              <Route path ="/services" element={<Services />}> </Route>                     
            </Routes>
          </BrowserRouter>
        </div>
          <Nav />
          <Routes>
            <Route path ="/" element={<Home  />}> </Route>
            <Route path =":id" element={<Projects />}> </Route>         
            <Route path ="/about" element={<About />}> </Route>  
          </Routes>
          <Contact />
          </div>
>>>>>>> d241279 (test uploading first react app)
      );
    }

    export default App;
    library.add(fab, fas, far)
    
<<<<<<< HEAD
=======
    // <button className="capitalize contact-btn btn"><Link to="/contact">contact me</Link></button>
// <div className="contact-btn btn">
// </div>
>>>>>>> d241279 (test uploading first react app)
