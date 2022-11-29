import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js';
import {Routes, Route, Link} from 'react-router-dom'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from "./resume/sucheta_mukherjee_resume.docx.pdf"




function App() {
  //const [isActive, setIsActive]= React.useState(false);
  const [activeNavID, setActiveNavID] = React.useState('home');

  function activate(e){
    //setIsActive(prevIsActive => !prevIsActive)
    setActiveNavID(() => e.target.id)
  }
  
  return (
      <div className='app-main'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 px-0">
           {/* <div id='logo'><span className='logo-1'>Sucheta</span><span className='logo-2'>Mukherjee</span></div> */}

            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav nav-pills">
                  <li className="nav-item">
                    <Link id="home" className={activeNavID === 'home'?"active nav-link": 'nav-link' } aria-current="page" to="/"
                      
                      onClick={activate}
                    >
                      HOME
                    </Link>
                  </li>
                  <li  className="nav-item">
                    <Link
                      id="about"
                      className={activeNavID === 'about'?"active nav-link": 'nav-link' }
                      to="About"
                      
                      onClick={activate}
                    >
                      ABOUT 
                    </Link>
                  </li>
                  <li className="nav-item"  >
                    <Link id="my_work" 
                    className={activeNavID === 'my_work'?"active nav-link": 'nav-link' } to="Projects"
                      onClick={activate}
                    >
                      MY WORK
                    </Link>
                  </li>
                  <li className="nav-item" >
                    <Link id="dwnld_resume" 
                      className={activeNavID === 'dwnld_resume'?"active nav-link": 'nav-link' } to={Resume} download='resume'
                      onClick={activate}
                     target='_blank'>
                      DOWNLOAD RESUME
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/download_resume">
                      DOWNLOAD RESUME
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='.' element={<Resume/>}/>
          </Routes>
          
          <Footer /> 
    </div>
  )
}

export default App;
