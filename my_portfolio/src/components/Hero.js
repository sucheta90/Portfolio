import React from 'react'
import Contact from './Contact'
import './Hero.css'


export default function Hero(){
   return (
    < >
        
        <div className='hero--content' >
            <div className='content-container'>
                <h1 className='main-heading'>Sucheta Mukherjee</h1>
                <h5 className='main-title'>Frontend Web Developer</h5>
                <div id='welcome--message'>Welcome to my page</div>
            </div>
            <div>
                <Contact />
            </div>
        </div>
        
    </>
   )
    
}