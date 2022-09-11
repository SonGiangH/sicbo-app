import React, { Component } from 'react'
import Dice from './Dice'
import { connect } from 'react-redux'

class Options extends Component {
    render() {
        return (
            <div className="options-container d-flex justify-content-around" style={{ width: '80%', margin: '50px auto' }}>
                <div style={{ backgroundColor: '#6666e8' }}>
                    <button className="btn d-flex justify-content-center align-items-center"
                        style={{ width: 150, height: 150, color: 'white', cursor: 'pointer', fontSize: 50 }}
                        onClick={() => {
                            this.props.bet(true)
                        }}>
                        High
                    </button>
                </div>
                <div >
                    <Dice />
                </div>
                <div style={{ backgroundColor: '#6666e8' }}>
                    <button className="btn d-flex justify-content-center align-items-center"
                        style={{ width: 150, height: 150, color: 'white', cursor: 'pointer', fontSize: 50 }}
                        onClick={() => {
                            this.props.bet(false)
                        }}>
                        Low
                    </button>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bet: (option) => {
            let action = {
                type: 'BET',
                option
            }
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(Options)