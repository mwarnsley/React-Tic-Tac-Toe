import initialState from './initialState';

const gameState = initialState.starting;

export function buttonReducer(state = gameState, action) {
  switch (action.type) {
    case 'RESET_GAME':
      return {
        gameEnded: false,
        gameReset: false,
      };
    default:
      return state;
  }
}
