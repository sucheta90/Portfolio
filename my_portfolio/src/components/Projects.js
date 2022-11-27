import React, { useImperativeHandle } from "react";
import "./Projects.css"
import projectData from "../project_components/projectData";
import ProjectCards from "../project_components/ProjectCards";


export default function Projects(){
   const data = projectData.map(element =>{
    
    return (
        <ProjectCards 
            title= {element.title}
            image= {element.image}
            description = {element.description}
            liveurl = {element.liveUrl}
            githuburl = {element.githubUrl}
    
        />
    )
   }

   )
    
    return (
        <>
        <h3 className="page--title">PROJECTS</h3>
        <div className="projects">
            
            {data}
            
        </div>  
        </>
    )
}






{/* <div className="container-fluid project-tile">
                <img src={BusinessCard} className='img-fluid'/>
                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Digital Business Card
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="description" ><p >This project is based upon the Form elements, from freeCodeCamp - Responsive Web Design. This project aims at better understanding of the HTML Form element that includes different input types.</p></div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="buttons">
                        <button className="btn btn-outline-light btn-sm" onClick={(e)=>{
                            e.preventDefault();
                            window.open('https://digital-bz-card-sucheta.netlify.app/','_blank')
                        }}> Live Demo</button> 
                        <button className="btn btn-outline-light btn-sm" onClick={(e)=>{
                            e.preventDefault();
                            window.open('https://github.com/sucheta90/Digital_business_card','_blank')
                        }}> Github </button>
                    </div>
            </div> */}
            
            
            
            {/* <section className="project--tile">
                
                <div className="project-container">
                    <div id='survey_form' className="project--snippet"></div>
                    <div className="accordian">
                        <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                        </div>
                    </div>
                    
                    {/* <div className="description" ><p >This project is based upon the Form elements, from freeCodeCamp - Responsive Web Design. This project aims at better understanding of the HTML Form element that includes different input types.</p></div>
                    <div className="buttons">
                        <button className="btn btn-outline-light btn-sm " onClick={(e)=>{
                            e.preventDefault();
                            window.open('https://jolly-klepon-0395fa.netlify.app/','_blank')
                        }}> Live Demo</button> 
                        <button className="btn btn-outline-light btn-sm" onClick={(e)=>{
                            e.preventDefault();
                            window.open('https://github.com/sucheta90/SurveyForm','_blank')
                        }}> Github </button>
                    
                    </div> 

                </div>

            </section>*/}
            

            
            {/* <section className="project--tile">
                <div className="project-container">
                    <div  className="project--snippet" id='digi_card'></div>
                    <div className="description">
                        <p> This digital business card has been created using React app. The app consists of different react components that are rendered in a single div. The buttons are made responsive.</p>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-outline-light btn-sm" onClick={(e)=>{
                            e.preventDefault();
                            window.open('https://digital-bz-card-sucheta.netlify.app/','_blank')
                        }}> Live Demo</button> 
                        <button className="btn btn-outline-light btn-sm" onClick={(e)=>{
                            e.preventDefault();
                            window.open('https://github.com/sucheta90/Digital_business_card','_blank')
                        }}> Github </button>
                    </div>
                </div>
                
            </section> */}
            

            
            {/* <section className="project--tile">

                
                <div className="project-container">
                    <div id='travel_blog' className="project--snippet"></div>
                    <div className="description">
                        <p> The project uses React App. Purpose of the project is better understanding of the use of Props. This site is due for further modifications.</p>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-outline-light btn-sm" onClick={(e)=>{
                            e.preventDefault();
                            window.open('https://travel-blog-react-props.netlify.app/','_blank')
                        }}> Live Demo</button> 
                        <button className="btn btn-outline-light btn-sm" onClick={(e)=>{
                            e.preventDefault();
                            window.open('https://github.com/sucheta90/Travel-Blog_-React','_blank')
                        }}> Github </button>
                    </div>

                </div>
                
            </section> */}
                
            

          