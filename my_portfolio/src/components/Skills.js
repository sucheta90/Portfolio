import React from 'react'
import "./Skills.css"

export default function Skills(){
    return(
        <div className='conatiner-fluid skills'>
            <h3>TECHNOLOGIES I USE</h3>
            <div className='skillset'>
            <span><i class="fa-brands fa-html5"></i> <p>HTML</p></span>
            <span><i class="fa-brands fa-css3-alt"></i><p>CSS</p></span>
            <span><i class="fa-brands fa-square-js"></i><p>JavaScript</p></span>
            <span><i class="fa-brands fa-bootstrap"></i><p>Bootstrap</p></span>
            <span><i class="fa-brands fa-react"></i><p>React</p></span>
            <span><i class="fa-brands fa-github"></i><p>Github</p></span>
            </div>
           
        </div>
    )
}