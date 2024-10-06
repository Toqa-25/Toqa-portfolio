import {React , useState , useEffect} from 'react'

import axios from 'axios'

// https://github.com/Toqa-25/project-json/blob/main/projects.json

const Projects = () => {

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com")
    .then(data=> console.log(data))
    .catch(err => console.log("error"))
  })

  // fetch("https://github.com/Toqa-25/project-json/blob/main/projects.json")
  // .then(res => res)
  // .then(data=> console.log(data))
  return (
    <div className="container">
      Projects
    </div>
  )
}

export default Projects
