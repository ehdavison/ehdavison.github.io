import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import RepertoireIcon from '../../src/icons/repertoireIcon.png'
import ScrumiLogo from '../../src/icons/scrumilogo.png'
import GroceryIcon from '../../src/icons/groceryIcon.png'
import TTTIcon from '../../src/icons/ticTacToeIcon.png'
import { render } from '@testing-library/react'
import '../components/Projects.css'

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
        <Modal show={repShow} onHide={() => setRepShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Repertoire</Modal.Title>
          </Modal.Header>
          <Modal.Body>Repertoire is a great app and this is where I'll talk about it!</Modal.Body>
          <Modal.Footer>
            I can write here too!
          </Modal.Footer>
        </Modal>

        <Modal show={scrumShow} onHide={() => setScrumShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Scrummi</Modal.Title>
          </Modal.Header>
          <Modal.Body>Scrummi is a great app and this is where I'll talk about it!</Modal.Body>
          <Modal.Footer>
            I can write here too!
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
            <img className="repertoire-icon" alt="repertoire-icon" src={RepertoireIcon} />
            <Button variant="primary" onClick={() => setRepShow(true)}>Repertoire</Button>
          </div>

          <div className="scrumi">
            <img className="scrumi-icon" alt="scrumi-icon" src={ScrumiLogo} />
            <Button variant="primary" onClick={() => setScrumShow(true)}>Scrumi</Button>
          </div>

          <div className="grocery">
            <img className="grocery-icon" alt="grocery-icon" src={GroceryIcon} />
            <Button variant="primary" onClick={() => setGroShow(true)}>Grocery</Button>
          </div>

          <div className="tic-tac-toe">
            <img className="tic-tac-toe-icon" alt="tic-tac-toe-icon" src={TTTIcon}/>
            <Button variant="primary" onClick={() => setTicShow(true)}>Grocery</Button>
          </div>
        </div>
    </div>
    )
}
render()

export default Projects