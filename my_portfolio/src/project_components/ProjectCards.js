import React from "react";
import "./ProjectCards.css"
import BusinessCard from "../images/digi_card.png"
import SurveyForm from "../images/SurveyForm_snippet.png"
import PortfolioSnippet from "../images/portfolioSnippet.png"
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function ProjectCards(props){
   const [toggle, setToggle]= React.useState(false);
   const [showMessage, setShowMessage]= React.useState("Show Info")
   let image;
   

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
        <div className=" project-card container-fluid">
            <img src={props.image=== "../images/digi_card.png"? BusinessCard : props.image=== "../images/SurveyForm_snippet.png"? SurveyForm : PortfolioSnippet }/>
            <h3 className="project-title">{props.title}</h3>
            <div className="description"
                style={{visibility: toggle? 'visible': 'hidden', position: toggle? 'relative':'absolute'}}
            >{props.description} </div>
            <div className="buttons">
                <span><button type='button' className="btn btn-sm btn-outline-dark shadow-none"
                 onClick={handleToggle} 
                >{showMessage}</button></span>
            
            <span className="button">
                        <button
                        type='button' className="btn btn-sm btn-outline-dark shadow-none"
                        onClick={(e)=>{
                            e.preventDefault();
                            window.open(props.liveurl)}}
                        >Live Demo
                    </button>
            </span>       
                        
                   

                
                
                

               
            
                <span className="button">
                    <button
                    type='button' className="btn btn-sm btn-outline-dark shadow-none"
                    onClick={(e)=>{
                        e.preventDefault();
                        window.open(props.githuburl)
                    }}
                    >Github</button></span>
                    
            </div>

        </div>
    )
}