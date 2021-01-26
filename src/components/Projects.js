import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RepertoireIcon from '../../src/icons/repertoireIcon.png'
import ScrumiLogo from '../../src/icons/scrumilogo.png'
import GroceryIcon from '../../src/icons/groceryIcon.png'
import TTTIcon from '../../src/icons/ticTacToeIcon.png'

class Projects extends Component {
    render () {
        return (
        <div className="project-container">
            <div className="repertoire-container">
                <Link to="/">Home</Link>
                <img alt="repertoire-icon" src={RepertoireIcon} />
                <img alt="scrumi-icon" src={ScrumiLogo} />
                <img alt="grocery-icon" src={GroceryIcon} />
                <img alt="tic-tac-toe-icon" src={TTTIcon}/>
            </div>
        </div>
        )
    }
}

export default Projects