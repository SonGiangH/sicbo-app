import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dice extends Component {

    // Render Dice
    renderDice = () => {
        return (
            this.props.diceArray.map((dice, index) => {
                return (
                    <img key={index} src={dice.image} alt={dice.id} style={{ width: 50, height: 50 }} />
                )
            })
        )
    }

    render() {
        return (
            <div className="_img-dice d-flex justify-content-center">
                {this.renderDice()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        diceArray: state.RollingDiceReducer.diceArray  // lấy state từ root
    }
}

export default connect(mapStateToProps)(Dice)