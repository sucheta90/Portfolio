import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function Contact(){
    return(
        <div className='contact'>
            
            {/* <div className=''> */}
                <div className='social-tag'>    
                    <a className='social--link github`' href="https://github.com/sucheta90" rel="noreferrer" target='_blank'><i className="fa-brands fa-square-github"></i> </a>
                </div> 
                <div className='social-tag'>  
                    <a className='social--link linkedIn' href="https://www.linkedin.com/in/sucheta-mukherjee-07347b88/"  rel="noreferrer" target='_blank'><i className="fa-brands fa-linkedin"></i> </a>
                </div>  
                <div className='social-tag'> 
                    <a className='social--link email' href='mailto:mukherjee.sucheta90@gmail.com'><i className="fa-solid fa-envelope"></i></a>
                </div> 
                
                
            
            {/* </div> */}
            
        </div>
    )
}