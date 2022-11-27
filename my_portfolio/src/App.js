
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js';
import {Routes, Route, Link} from 'react-router-dom'
import Hero from './components/Hero';
import About from './components/About'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from "./resume/sucheta_mukherjee_resume.docx.pdf"




function App() {
  
  return (
      <div className='app-main'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 px-0">
           
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
                <ul className="navbar-nav">
                  <li className="nav-item" >
                    <Link  className="nav-link" aria-current="page" to="/">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item" >
                    <Link
                      className="nav-link"
                      to="./About"
                    >
                      ABOUT 
                    </Link>
                  </li>
                  <li className="nav-item" >
                    <Link className="nav-link" to="./Projects">
                      MY WORK
                    </Link>
                  </li>
                  <li className="nav-item" >
                    <Link className="nav-link" to={Resume} download='resume' target='_blank'>
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
            <div id='logo'><span className='logo-1'>Sucheta</span><span className='logo-2'>Mukherjee</span></div>
          </nav>
          <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='.' element={<Resume/>}/>
          </Routes>
          
          <Footer /> 
    </div>
  )
}

export default App;
