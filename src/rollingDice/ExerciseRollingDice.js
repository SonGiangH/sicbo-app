import React, { Component } from 'react'
import DisplayResult from './DisplayResult'
import Options from './Options'
import background from '/rollDice/bgGame.png'


export default class ExerciseRollingDice extends Component {
    render() {
        return (
            <div className="container-fluid d-flex flex-column align-items-center" style={{ backgroundImage: 'url("http://SonGiangH.github.io/sicbo-app/rollDice/bgGame.png")', height: 1000, fontSize: 40 }}>
                <h2 className='text-center' style={{ fontSize: 100, padding: 20 }}>Welcome to Rolling Dice game </h2>
                <Options />
                <DisplayResult />
            </div>
        )
    }
}
