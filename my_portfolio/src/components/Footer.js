import React from 'react'
import Contact from './Contact'
import "./Footer.css"

export default function Footer(){
    return(
    
        
        <div className='footer container-fluid'> 
            <Contact/>
            <p id='footer-copyright'>&copy; Developed by Sucheta Mukherjee in 2022</p>
            <p id='telephone'>Tel: +1 831-224-7090</p>
        </div>
        
    )
} 