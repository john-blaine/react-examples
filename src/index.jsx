import React from 'react';
import { render } from 'react-dom';
import Scoreboard from './containers/Scoreboard.jsx';

const PLAYERS = [
  {
    name: 'John Blaine',
    score: 31,
    id: 1,
  },
  {
    name: 'Nga Nguyen',
    score: 29,
    id: 2,
  },
  {
    name: 'My Hao Pham',
    score: 37,
    id: 3,
  },
];

render(
  <Scoreboard initialPlayers={PLAYERS} />,
  document.getElementById('root'),
);
