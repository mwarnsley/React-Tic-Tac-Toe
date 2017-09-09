export function resetGame(reset) {
  return {
    type: 'RESET_GAME',
    payload: reset,
  };
}
