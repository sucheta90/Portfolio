import React from "react";
import "./ProjectCards.css"
import BusinessCard from "../images/digi_card.png"
import SurveyForm from "../images/SurveyForm_snippet.png"

export default function ProjectCards(props){
   const [toggle, setToggle]= React.useState(false);
   const [showMessage, setShowMessage]= React.useState("Show Info")

   function handleToggle(){
    setToggle(prevState => !prevState);
    setShowMessage(prevSetMessage => {
        if(prevSetMessage === 'Show Info'){
            return prevSetMessage= 'Hide Info'
        }
        else {
            return prevSetMessage = 'Show Info'
        }
    })

  }


   
    return(
        <div className="container-fluid project-card">
            <img src={props.image === "../images/digi_card.png"? BusinessCard: SurveyForm}/>
            <h3 className="project-title">{props.title}</h3>
            <div className="description"
                style={{visibility: toggle == true ? 'visible': 'hidden', position: toggle == true? 'relative':'absolute'}}
            >{props.description} </div>
            <div className="buttons">
                <span><button type='button' className="btn btn-sm btn-outline-dark"
                 onClick={handleToggle} 
                >{showMessage}</button></span>
                <span className="button">
                  <button
                    type='button' className="btn btn-sm btn-outline-dark"
                    onClick={(e)=>{
                        e.preventDefault();
                        window.open(props.liveurl)}}
                    >Live Demo
                    </button></span>
                <span className="button">
                    <button
                    type='button' className="btn btn-sm btn-outline-dark"
                    onClick={(e)=>{
                        e.preventDefault();
                        window.open(props.githuburl)
                    }}
                    >Github</button></span>
                    
            </div>

        </div>
    )
}