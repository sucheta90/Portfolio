import React from "react";
import "./ProjectCards.css"
import BusinessCard from "../images/digi_card.png"
import SurveyForm from "../images/SurveyForm_snippet.png"

export default function ProjectCards(props){
   const [toggle, setToggle]= React.useState('false');

   function handleToggle(){
    setToggle(prevState => !prevState)
  }


   
    return(
        <div className="container-fluid project-card">
            <img src={props.image === "../images/digi_card.png"? BusinessCard: SurveyForm}/>
            <h3 className="project-title">{props.title}</h3>
            <div className="description"
                style={{visibility: toggle == true ? 'visible': 'hidden', position: toggle == true? 'relative':'absolute'}}
            >{props.description} </div>
            <div className="buttons">
                <span><button
                 onClick={handleToggle}
                >Info</button></span>
                <span className="button">
                  <button
                    onClick={(e)=>{
                        e.preventDefault();
                        window.open(props.liveurl)}}
                    >Live Demo
                    </button></span>
                <span className="button">
                    <button
                    onClick={(e)=>{
                        e.preventDefault();
                        window.open(props.githuburl)
                    }}
                    >Github</button></span>
                    
            </div>

        </div>
    )
}