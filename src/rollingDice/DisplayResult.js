import React, { Component } from 'react'
import { connect } from 'react-redux'

class DisplayResult extends Component {

    // Render result 


    render() {
        return (
            <div className='d-flex flex-column'>
                <div className="_option-player" style={{ color: 'red', fontSize: 60 }}>
                    <span style={{ color: 'black' }}>Your Choice</span>: {this.props.result ? 'Tài' : 'Xỉu'}
                </div>
                <div className="_count-win" style={{ color: 'green', fontSize: 60 }}>
                    <span style={{ color: 'black' }}>Winning time : </span> {this.props.winningTimes}
                </div>
                <div className="_count-playing" style={{ color: 'white', fontSize: 60 }}>
                    <span style={{ color: 'black' }}>Total playing time: </span>{this.props.totalPlaying}
                </div>
                <button className='btn btn-success' style={{ width: '30%', margin: 'auto' }}
                    onClick={() => { this.props.playgame() }}
                >Play Game
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.RollingDiceReducer.result,
        winningTimes: state.RollingDiceReducer.winningTimes,
        totalPlaying: state.RollingDiceReducer.total,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playgame: () => {
            let action = {
                type: 'PLAY_GAME',

            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayResult)