import React from 'react'
import './App.css'
import {Route, Link} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <Router>
      <Route exact path='/' render={() => (
        <div>
          <h4>Elijah Davison</h4>
          <Link to="/projects">Projects</Link>
        </div>
      )}/>
      <Route path='/projects' component={Projects}/>
      </Router>
    </div>
  );
}


export default App
