import React from 'react'
import Contact from './Contact'
import image from '../images/profilePhoto.png'
import './Hero.css'


export default function Hero(){
    
   return (
    < >
        
        <div className='hero--content' >
            
                
                <img src={image} className='profile--image' alt='my_photo'/>
                <h1>Hello! I am</h1>
                <h1 className='main-heading'>Sucheta Mukherjee</h1>
                <h5 className='main-title'>Frontend Web Developer</h5>
                <Contact />
            
            
            
        
        </div>
        
    </>
   )
    
}