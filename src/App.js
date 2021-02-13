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
                <img className='social-icon' src={linkedInIcon}></img>
                <img className='social-icon' src={gitHubIcon}></img>
                </div>
              </div>
            </div>

            <div className='bio-container'>
              <h4>Skills</h4>
              <img src={javascript}></img>
              <img src={react}></img>
              <img src={python}></img>
              <img src={html}></img>
              <img src={css}></img>
            </div>
          </div>
        )}></Route>
        <Route exact path='/projects' component={Projects}/>
      </Router>
    </div>
  );
}


export default App
