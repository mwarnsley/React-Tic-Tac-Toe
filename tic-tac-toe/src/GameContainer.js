import React, {Component} from 'react';
import Board from './components/Board';
import {connect} from 'react-redux';
import {Grid, Row} from 'react-bootstrap';

import {resetGame} from './actions/buttonActions';
import {selectSquare, switchTurn, addCombo, checkForWin, addTurn} from './actions/gameStatsActions';

import Button from './components/Button';

class GameContainer extends Component {
  constructor() {
    super();

    this.resetGame = this.resetGame.bind(this);
    this.squareSelect = this.squareSelect.bind(this);
  }
  resetGame() {
    const {dispatch} = this.props;
    dispatch(resetGame(true));
  }
  squareSelect(e) {
    const {dispatch} = this.props;
    const idValue = e.target.value;
    dispatch(switchTurn());
    dispatch(selectSquare(idValue));
    dispatch(addCombo(idValue));
    dispatch(addTurn());
    dispatch(checkForWin());
  }
  render() {
    const {state, squares, playerTurn, winner, playerWon, turnsTaken} = this.props;
    let gameText = `Player ${playerTurn} it's your turn to play!`;
    if (winner) {
      gameText = `Player ${playerWon} is the WINNER!`;
    } else if (!winner && turnsTaken === 9) {
      gameText = `The game has ended in a tie!`;
    }
    return (
      <Grid id="game_container">
        <Row>
          <div className="player-text-container">
            <p className="player-turn">{gameText}</p>
          </div>
        </Row>
        <Board squares={squares} squareSelect={this.squareSelect} />
        <Row>
          <div className="btn-container">
            <Button btnText={'Reset Game'} classes={'btn btn-default btn-danger btn-reset'} onClick={this.resetGame} />
          </div>
        </Row>
      </Grid>
    );
  }
}

export default connect(state => ({
  state: state,
  started: state.status.gameStarted,
  reset: state.status.gameReset,
  squares: state.gameStats.squares,
  playerTurn: state.gameStats.playerTurn,
  playerWon: state.gameStats.playerWon,
  winner: state.gameStats.winner,
  turnsTaken: state.gameStats.turnsTaken,
}))(GameContainer);
