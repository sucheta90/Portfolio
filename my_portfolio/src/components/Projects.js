import React from "react";
import './Projects.css'


export default function Projects(){
   

    return (
       <div id="projects" className="content container-fluid" >
        <h3 className="page--title">PROJECTS</h3>
        <div className="row">
            <div className="col-lg-3">
            <section className="project--tile">
                <div id='survey_form' className="project--snippet"></div>
                <button className="btn btn-outline-light btn-sm project-btn" onClick={(e)=>{
                    e.preventDefault();
                    window.open('_blank')
                }}> Live Demo</button> 
                <button className="btn btn-outline-light btn-sm project-btn" onClick={(e)=>{
                    e.preventDefault();
                    window.open('_blank')
                }}> Github </button> 
            </section>
            </div>

            <div className="col-lg-3">
            <section className="project--tile">
                <div id='digi_card' className="project--snippet"></div>
                <button className="btn btn-outline-light btn-sm project-btn" onClick={(e)=>{
                    e.preventDefault();
                    window.open('https://digitalbusinesscard-sucheta-mukherjee.netlify.app/','_blank')
                }}> Live Demo</button> 
                <button className="btn btn-outline-light btn-sm project-btn" onClick={(e)=>{
                    e.preventDefault();
                    window.open('_blank')
                }}> Github </button>
            </section>
            </div>
        </div>   
         
       </div>
    )
} 