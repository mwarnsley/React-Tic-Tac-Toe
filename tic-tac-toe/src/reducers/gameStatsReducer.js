import initialState from './initialState';
import {map, difference, forEach} from 'lodash';

const gameStatState = initialState.gameStats;

export function gameStatsReducer(state = gameStatState, action) {
  switch (action.type) {
    case 'RESET_GAME':
      return {
        turn: '',
        turnsTaken: 0,
        playerTurn: 1,
        winner: false,
        playerWon: null,
        x: [],
        o: [],
        winningCombinations: [
          {
            combo1: [1, 2, 3],
          },
          {
            combo2: [1, 4, 7],
          },
          {
            combo3: [1, 5, 9],
          },
          {
            combo4: [2, 5, 8],
          },
          {
            combo5: [3, 5, 7],
          },
          {
            combo6: [3, 6, 9],
          },
          {
            combo7: [4, 5, 6],
          },
          {
            combo8: [7, 8, 9],
          },
        ],
        squares: [
          {
            _id: 1,
            disabled: false,
            label: '',
          },
          {
            _id: 2,
            disabled: false,
            label: '',
          },
          {
            _id: 3,
            disabled: false,
            label: '',
          },
          {
            _id: 4,
            disabled: false,
            label: '',
          },
          {
            _id: 5,
            disabled: false,
            label: '',
          },
          {
            _id: 6,
            disabled: false,
            label: '',
          },
          {
            _id: 7,
            disabled: false,
            label: '',
          },
          {
            _id: 8,
            disabled: false,
            label: '',
          },
          {
            _id: 9,
            disabled: false,
            label: '',
          },
        ],
      };
    case 'SWITCH_TURN':
      let turn = '';
      let playerTurn = null;
      if (!state.turn) {
        turn = 'x';
      } else if (state.turn === 'x') {
        turn = 'o';
      } else if (state.turn === 'o') {
        turn = 'x';
      }
      if (state.playerTurn === 1) {
        playerTurn = 2;
      } else if (state.playerTurn === 2) {
        playerTurn = 1;
      }
      return {
        ...state,
        playerTurn: playerTurn,
        turn: turn,
      };
    case 'SELECT_SQUARE':
      const id = action.payload;
      const stateCurrentCombos = state.currentCombinations;
      const currentTurn = state.turn;
      const newSquareState = map(state.squares, s => {
        if (s._id === Number(id)) {
          return {
            ...s,
            disabled: true,
            label: state.turn,
          };
        }
        return s;
      });
      const combos = map(stateCurrentCombos, c => {
        if (c[currentTurn]) {
          return {
            [currentTurn]: [...c[currentTurn], Number(id)],
          };
        }
        return c;
      });
      return {
        ...state,
        squares: newSquareState,
        currentCombinations: combos,
      };
    case 'ADD_COMBO':
      const currentID = action.payload;
      const stateTurn = state.turn;
      const x = state.x;
      const o = state.o;
      let xState = [];
      let oState = [];
      if (stateTurn === 'x') {
        xState = [...x, Number(currentID)];
        oState = [...o];
      } else if (stateTurn === 'o') {
        oState = [...o, Number(currentID)];
        xState = [...x];
      }
      return {
        ...state,
        x: xState,
        o: oState,
      };
    case 'ADD_TURN':
      const turnAmount = action.payload;
      return {
        ...state,
        turnsTaken: state.turnsTaken + turnAmount,
      };
    case 'CHECK_FOR_WIN':
      const currentxState = state.x;
      const currentoState = state.o;
      const winningCombinations = state.winningCombinations;
      let winner = false;
      let playerWon = null;
      let currentSquares = [...state.squares];
      forEach(winningCombinations, w => {
        const wValue = w[Object.keys(w)[0]];
        if (difference(wValue, currentxState).length === 0 || difference(wValue, currentoState).length === 0) {
          winner = true;
        }
      });
      if (winner) {
        currentSquares = map(state.squares, s => {
          return {
            ...s,
            disabled: true,
          };
        });
        playerWon = state.playerTurn === 1 ? 2 : 1;
      }
      return {
        ...state,
        winner: winner,
        playerWon: playerWon,
        squares: currentSquares,
      };
    default:
      return state;
  }
}
