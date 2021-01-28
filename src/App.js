import React from 'react'
import './App.css'
import {Route, Link} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Projects from './components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Router>
        <Route path='/' render={() => (
          <div>
            <h4 className="name-banner">Elijah Davison</h4>
            <Link className="nav-button" to="/home">Home</Link>
            <Link className="nav-button" to="/projects">Projects</Link>
          </div>
        )}/>
        <Route exact path='/projects' component={Projects}/>
      </Router>
    </div>
  );
}


export default App
