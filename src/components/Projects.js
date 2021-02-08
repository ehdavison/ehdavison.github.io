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
        <Modal size="lg" show={repShow} onHide={() => setRepShow(false)}>
          <Modal.Header className="project-modal">
            <Modal.Title>Repertoire</Modal.Title>
            <img className="project-screenshot" alt="repertoire-screenshot" src={repSS}></img>
          </Modal.Header>
          <Modal.Body>Repertoire is a website for musicians to keep track of music they have learned. This website is meant to be used to prepare for performances or as a practice tool.</Modal.Body>
          <Modal.Footer>
            <a  className="project-link" rel="noreferrer noopener" target="_blank" href="https://ehdavison.github.io/repertoire/#/">Deployed Page</a>
            <a className="project-link" rel="noreferrer noopener" target="_blank" href="https://github.com/ehdavison/repertoire">GitHub Repository</a>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={scrumShow} onHide={() => setScrumShow(false)}>
          <Modal.Header className="project-modal">
            <Modal.Title>Scrummi</Modal.Title>
            <img className="project-screenshot" alt="repertoire-screenshot" src={scrumiSS}></img>
          </Modal.Header>
          <Modal.Body>Scrummi is a great app and this is where I'll talk about it!</Modal.Body>
          <Modal.Footer>
            <a  className="project-link" rel="noreferrer noopener" target="_blank" href="https://pojo-boys.github.io/Scrumi/#/">Deployed Page</a>
            <a className="project-link" rel="noreferrer noopener" target="_blank" href="https://github.com/Pojo-boys/Scrumi">GitHub Repository</a>
          </Modal.Footer>
        </Modal>

        <Modal show={groShow} onHide={() => setGroShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Grocery</Modal.Title>
          </Modal.Header>
          <Modal.Body>Grocery is a great app and this is where I'll talk about it!</Modal.Body>
          <Modal.Footer>
            I can write here too!
          </Modal.Footer>
        </Modal>

        <Modal show={ticShow} onHide={() => setTicShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Tic-Tac-Toe</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tic-Tac-Toe is a great app and this is where I'll talk about it!</Modal.Body>
          <Modal.Footer>
            I can write here too!
          </Modal.Footer>
        </Modal>

        <div className="projects-container">
          <div className="repertoire">
            <img onClick={() => setRepShow(true)} className="repertoire-icon" alt="repertoire-icon" src={RepertoireIcon} />
          </div>

          <div className="scrumi">
            <img onClick={() => setScrumShow(true)} className="scrumi-icon" alt="scrumi-icon" src={ScrumiLogo} />
          </div>

          <div className="grocery">
            <img onClick={() => setGroShow(true)} className="grocery-icon" alt="grocery-icon" src={GroceryIcon} />
          </div>

          <div className="tic-tac-toe">
            <img onClick={() => setTicShow(true)} className="tic-tac-toe-icon" alt="tic-tac-toe-icon" src={TTTIcon}/>
          </div>
        </div>
    </div>
    )
}
render()

export default Projects