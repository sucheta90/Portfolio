import React, { useImperativeHandle } from "react";
import './Projects.css'


export default function Projects(props){
    const[toShow, setToShow]= React.useState(false);

    function handleClick(){
        setToShow(current => !current);
    }
    
    return (
        <>
        
        <h3 className="page--title">PROJECTS</h3>
        <div id="allProjects" className="content container-fluid" >
        
            
            
            <section className="project--tile">
                
                <div className="project-container">
                    <div id='survey_form' className="project--snippet"></div>
                    <div className="description" ><p >This project is based upon the Form elements, from freeCodeCamp - Responsive Web Design. This project aims at better understanding of the HTML Form element that includes different input types.</p></div>
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
               
                
              

            </section>
            

            
            <section className="project--tile">
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
                
            </section>
            

            
            <section className="project--tile">

                
                <div className="project-container">
                    <div id='travel_blog' className="project--snippet"></div>
                    <div className="description">
                        <p> The project uses Raect App. Purpose of the project is better understanding of the use of Props. This site is due for further modifications.</p>
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
                
            </section>
                
            

        </div>   
         
    
       </>   

    )
}