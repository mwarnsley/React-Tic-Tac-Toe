import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import GameContainer from './GameContainer';
import registerServiceWorker from './registerServiceWorker';

// Creating the store
import {createStore, compose} from 'redux';

// Import combined reducers
import reducers from './reducers/index';

// Create the store passing in the reducer
const store = createStore(reducers, undefined, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
