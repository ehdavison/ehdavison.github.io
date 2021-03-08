import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import RepertoireIcon from '../../src/icons/repertoireIcon.png'
import ScrumiLogo from '../../src/icons/scrumilogo.png'
import GroceryIcon from '../../src/icons/groceryIcon.png'
import TTTIcon from '../../src/icons/ticTacToeIcon.png'
import { render } from '@testing-library/react'
import '../components/Projects.css'
import repSS from '../icons/screenshots/repertoireScreenshot.png'
import scrumiSS from '../icons/screenshots/scrumi-screenshot.png'
import grocerySS from '../icons/screenshots/groceryScreenshot.png'
import tttSS from '../icons/screenshots/tttScreenshot.png'

import htmlIcon from '../icons/html.png'
import cssIcon from '../icons/css.png'
import javascriptIcon from '../icons/javascript.png'
import reactIcon from '../icons/react.png'
import pythonIcon from '../icons/python.png'


function Projects() {
    // Show Repertoire Modal
    const [repShow, setRepShow] = useState(false);

    // Show Scrumi Modal
    const [scrumShow, setScrumShow] = useState(false);

    // Show Grocery Modal
    const [groShow, setGroShow] = useState(false);

    // Show Tic-Tac-Toe Modal
    const [ticShow, setTicShow] = useState(false);

    return (
      <div className="project-container">

        {/* Repertoire Modal */}
        <Modal size="lg" show={repShow} onHide={() => setRepShow(false)}>
          <Modal.Header className="project-modal">
            <Modal.Title>Repertoire</Modal.Title>
            <img className="project-screenshot" alt="repertoire-screenshot" src={repSS}></img>
          </Modal.Header>
          <Modal.Body className="modal-body">Repertoire is a website for musicians to keep track of music they have learned. This website is meant to be used to prepare for performances or as a practice tool. Users can add songs to their repertoire that contain an embedded YouTube link, a link to any sheet music or tabs and any notes the user needs to take on the song. The front end uses ReactJS for the UI and the back end uses Django and python.</Modal.Body>
          <Modal.Footer>
            <img src={reactIcon} />
            <img src={javascriptIcon} />
            <img src={cssIcon} />
            <img src={pythonIcon} />
            <a  className="project-link" rel="noreferrer noopener" target="_blank" href="https://ehdavison.github.io/repertoire/#/">Deployed Page</a>
            <a className="project-link" rel="noreferrer noopener" target="_blank" href="https://github.com/ehdavison/repertoire">GitHub Repository</a>
          </Modal.Footer>
        </Modal>

        {/* Scrumi Modal */}
        <Modal size="lg" show={scrumShow} onHide={() => setScrumShow(false)}>
          <Modal.Header className="project-modal">
            <Modal.Title>Scrumi</Modal.Title>
            <img className="project-screenshot" alt="repertoire-screenshot" src={scrumiSS}></img>
          </Modal.Header>
          <Modal.Body className="modal-body">Scrumi is an application to help developers with their scrum tasks. Create a task, add that task to a sprint, and track your progress as you complete sections of your current project. Scrumi was developed collaboratively with the scrum process. The front end is made with ReactJS and the backend uses Express and MongoDB.</Modal.Body>
          <Modal.Footer>
            <img src={reactIcon} />
            <img src={javascriptIcon} />
            <img src={cssIcon} />
            <a  className="project-link" rel="noreferrer noopener" target="_blank" href="https://pojo-boys.github.io/Scrumi/#/">Deployed Page</a>
            <a className="project-link" rel="noreferrer noopener" target="_blank" href="https://github.com/Pojo-boys/Scrumi">GitHub Repository</a>
          </Modal.Footer>
        </Modal>

        {/* Grocery Modal */}
        <Modal size="lg" show={groShow} onHide={() => setGroShow(false)}>
          <Modal.Header className="project-modal">
            <Modal.Title>Grocery</Modal.Title>
            <img className="project-screenshot" alt="grocery-screenshot" src={grocerySS}></img>
          </Modal.Header>
          <Modal.Body className="modal-body">Grocery is the first full stack project that I completed. This is a website where you can upload short grocery list. The front end is made using JavaScript, HTML and CSS. The back end uses Express as it's framework.
          </Modal.Body>
          <Modal.Footer>
            <img src={htmlIcon}></img>
            <img src={cssIcon}></img>
            <img src={javascriptIcon}></img>
            <a  className="project-link" rel="noreferrer noopener" target="_blank" href="https://ehdavison.github.io/grocery-client/">Deployed Page</a>
            <a className="project-link" rel="noreferrer noopener" target="_blank" href="https://github.com/ehdavison/grocery-client">GitHub Repository</a>
          </Modal.Footer>
        </Modal>

        {/* Tic-Tac-Toe Modal */}
        <Modal size="lg" show={ticShow} onHide={() => setTicShow(false)}>
          <Modal.Header className="project-modal">
            <Modal.Title>Tic-Tac-Toe</Modal.Title>
            <img className="project-screenshot" alt="grocery-screenshot" src={tttSS}></img>
          </Modal.Header>
          <Modal.Body className="modal-body">Tic-Tac-Toe is a JavaScript based tic-tac-toe game where a user can create an account, play a game of tic-tac-toe, and see how many games they have played.</Modal.Body>
          <Modal.Footer>
            <img src={htmlIcon}></img>
            <img src={cssIcon}></img>
            <img src={javascriptIcon}></img>
             <a  className="project-link" rel="noreferrer noopener" target="_blank" href="https://ehdavison.github.io/tic-tac-toe-client/">Deployed Page</a>
            <a className="project-link" rel="noreferrer noopener" target="_blank" href="https://github.com/ehdavison/tic-tac-toe-client">GitHub Repository</a>
          </Modal.Footer>
        </Modal>

        <div className="projects-container">
          <div className="repertoire">
            <h4 className="project-title">Repertoire</h4>
            <img onClick={() => setRepShow(true)} className="repertoire-icon" alt="repertoire-icon" src={RepertoireIcon} />
          </div>

          <div className="scrumi">
            <h4 className="project-title">Scrumi</h4>
            <img onClick={() => setScrumShow(true)} className="scrumi-icon" alt="scrumi-icon" src={ScrumiLogo} />
          </div>

          <div className="grocery">
            <h4 className="project-title">Grocery</h4>
            <img onClick={() => setGroShow(true)} className="grocery-icon" alt="grocery-icon" src={GroceryIcon} />
          </div>

          <div className="tic-tac-toe">
            <h4 className="project-title">Tic-Tac-Toe</h4>
            <img onClick={() => setTicShow(true)} className="tic-tac-toe-icon" alt="tic-tac-toe-icon" src={TTTIcon}/>
          </div>
        </div>
    </div>
    )
}
render()

export default Projects