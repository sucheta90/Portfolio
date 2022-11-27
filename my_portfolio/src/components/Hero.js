import React from 'react'
import Contact from './Contact'
import Background from "./HeroBackground"
import image from '../images/IMG_0977.png'
import './Hero.css'


export default function Hero(){
    
   return (
        
    <div className='hero-main container-fluid'>
         <Background/>   
        
        {/* <div className='design-back'></div> */}
        {/* <div className='hero--content' >
            
                
            <div className='slide-right'>
                <img src={image} className='profile--image img-fluid' alt='my_photo'/>
            </div>
            <div className='slide-left'>
                <h1>Hello! I am</h1>
                <h1 className='main-heading'>Sucheta Mukherjee</h1>
                <h5 className='main-title'>Frontend Web Developer</h5>
                <Contact />
            </div>
        
        </div> */}
        
    </div>
   
   )
    
}