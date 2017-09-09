// Action for switching the turns
export function switchTurn() {
  return {
    type: 'SWITCH_TURN',
  };
}
// Action for selecting the square
export function selectSquare(id) {
  return {
    type: 'SELECT_SQUARE',
    payload: id,
  };
}
// Action for adding the selected combos to the state
export function addCombo(id) {
  return {
    type: 'ADD_COMBO',
    payload: id,
  };
}
// Action for checking to see if someone won the game yet
export function checkForWin() {
  return {
    type: 'CHECK_FOR_WIN',
  };
}
// Action that counts the turns taken
export function addTurn() {
  return {
    type: 'ADD_TURN',
    payload: 1,
  };
}
