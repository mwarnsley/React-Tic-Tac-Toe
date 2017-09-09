import {combineReducers} from 'redux';

import {buttonReducer} from './buttonReducer';
import {gameStatsReducer} from './gameStatsReducer';

// Combining the reducers
export default combineReducers({
  status: buttonReducer,
  gameStats: gameStatsReducer,
});
