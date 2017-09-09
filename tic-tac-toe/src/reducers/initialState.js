export default {
  starting: {
    gameEnded: false,
    gameReset: false,
  },
  gameStats: {
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
  },
};
