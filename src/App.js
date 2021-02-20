import React from 'react'
import './App.css'
import {Route, Link} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Projects from './components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'
import headshot from './icons/headshot.png'
import linkedInIcon from './icons/linkedin.png'
import gitHubIcon from './icons/github.png'

import javascript from './icons/javascript.png'
import react from './icons/react.png'

import python from './icons/python.png'
import html from './icons/html.png'
import css from './icons/css.png'
import django from './icons/django.png'
import mongodb from './icons/mongodb.png'
import nodejs from './icons/nodejs.png'

function App() {
  return (
    <div className='big-container'>
      <Router>
        <Route path='/' render={() => (
          <div>
            <div className="nav-container">
              <Link className="nav-button" to="/">Home</Link>
              <Link className="nav-button" to="/projects">Projects</Link>
            </div>
          </div>
        )}/>
        <Route exact path='/' render={() => (
          <div>
            <div className='bio-container'>
              <img className='headshot' src={headshot} alt='headshot'></img>
              <div className='bio'>
                <h4 className="name-banner">Elijah Davison</h4>
                <p>Full Stack Software Engineer</p>
                <p>I am Elijah! I'm a software engineer with a passion for music, video games, applications, and websites. After studying and teaching music for the past 6 years I've made a career change and completed General Assembly's Software Engineering Intensive program.</p>
                <div className='social-container'>
                <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/elijahdavison/">
                  <img className='social-icon' src={linkedInIcon}></img>
                </a>
                <a rel="noreferrer noopener" target="_blank" href="https://github.com/ehdavison">
                  <img className='social-icon' src={gitHubIcon}></img>
                </a>
                </div>
              </div>
            </div>

            <div className='skills-container'>
              {/* <h4 className='skills-title'>Skills</h4> */}
              <img className="skills-icon" src={javascript}></img>
              <img className="skills-icon" src={react}></img>
              <img className="skills-icon" src={python}></img>
              <img className="skills-icon" src={html}></img>
              <img className="skills-icon" src={css}></img>
              <img className="skills-icon" src={django}></img>
              <img className="skills-icon" src={mongodb}></img>
              <img className="skills-icon" src={nodejs}></img>
            </div>
          </div>

          
        )}></Route>
        <Route exact path='/projects' component={Projects}/>
      </Router>
    </div>
  );
}


export default App
