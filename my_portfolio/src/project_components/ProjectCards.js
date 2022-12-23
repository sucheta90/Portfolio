import React from "react";
import "./ProjectCards.css"

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
        <div className=" project-card container-fluid">
            <img src={props.image}/>
            <h3 className="project-title">{props.title}</h3>
            <div className="description"
                style={{visibility: toggle? 'visible': 'hidden', position: toggle? 'relative':'absolute'}}
            >{props.description} </div>
            <div className="buttons">
                <span>
                    <button type='button' className="btn btn-sm btn-outline-dark shadow-none"
                    onClick={handleToggle} 
                    >{showMessage}</button>
                </span>
                {
                    props.isDemoAvailable && 
                    <span className="button">
                        <button
                            type='button' className="btn btn-sm btn-outline-dark shadow-none"
                            onClick={(e)=>{
                                e.preventDefault();
                                window.open(props.liveurl)}}    
                            >Live Demo
                        </button>
                    </span>    
                }
                   
                        
                   

                
                
                

               
            
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