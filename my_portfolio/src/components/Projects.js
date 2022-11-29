import React from "react";
import "./Projects.css"
import projectData from "../project_components/projectData";
import ProjectCards from "../project_components/ProjectCards";
import Skills from "./Skills";

export default function Projects(){
   const data = projectData.map(element =>{
    
    return (
        <ProjectCards 
            title= {element.title}
            image= {element.image}
            description = {element.description}
            liveurl = {element.liveUrl}
            githuburl = {element.githubUrl}
            key= {element.title}
    
        />
    )
   }

   )
    
    return (
        <div className="container-fluid project-page">
            <h3 className="page--title">PROJECTS</h3>
            <div className="projects container-fluid">
                
                {data}
                
            </div>  
            <Skills />
        </div>
    )
}







                
            

          