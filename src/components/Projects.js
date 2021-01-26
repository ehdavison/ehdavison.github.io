import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import RepertoireIcon from '../../src/icons/repertoireIcon.png'
import ScrumiLogo from '../../src/icons/scrumilogo.png'
import GroceryIcon from '../../src/icons/groceryIcon.png'
import TTTIcon from '../../src/icons/ticTacToeIcon.png'
import { render } from '@testing-library/react'

function Projects() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="project-container">
            <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            <div className="repertoire-container">
                <img alt="repertoire-icon" src={RepertoireIcon} />
                <img alt="scrumi-icon" src={ScrumiLogo} />
                <img alt="grocery-icon" src={GroceryIcon} />
                <img alt="tic-tac-toe-icon" src={TTTIcon}/>
            </div>
        </div>
    )
}
render()

export default Projects