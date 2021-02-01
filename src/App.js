import React from 'react'
import './App.css'
import {Route, Link} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Projects from './components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'
import headshot from './icons/headshot.png'

function App() {
  return (
    <div>
      <Router>
        <Route path='/' render={() => (
          <div>
            <h4 className="name-banner">Elijah Davison</h4>
            <div className="nav-container">
              <Link className="nav-button" to="/">Home</Link>
              <Link className="nav-button" to="/projects">Projects</Link>
            </div>
          </div>
        )}/>
        <Route exact path='/' render={() => (
          <div className='bio-container'>
            <img className='headshot' src={headshot} alt='headshot'></img>
            <div className='bio'>
              <p>Full Stack Software Engineer</p>
              <p>I am Elijah! I'm a software engineer with a passion for music, video games, applications, and websites.</p>
            </div>
          </div>
        )}></Route>
        <Route exact path='/projects' component={Projects}/>
      </Router>
    </div>
  );
}


export default App
