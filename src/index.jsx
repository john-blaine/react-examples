import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './reducers/player'
import Scoreboard from './containers/Scoreboard.jsx';

const store = createStore(
  PlayerReducer
);

render(
  <Provider store={store}>
    <Scoreboard />
  </Provider>,
  document.getElementById('root'),
);
