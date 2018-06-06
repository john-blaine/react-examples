import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React from 'react';

const PLAYERS = [
  {
    name: "John Blaine",
    score: 31,
  },
  {
    name: "Nga Nguyen",
    score: 29,
  },
  {
    name: "My Hao Pham",
    score: 37,
  },
]

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment"> + </button>
    </div>
  )
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
};

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} />
      </div>
    </div>
  )
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title}/>

      <div className="players">
        {props.players.map((player) => <Player name={player.name} score={player.score}/>)}
      </div>
    </div>
  );
}

Application.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
  })).isRequired,
};

Application.defaultProps = {
  title: "Scoreboard",
}

ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById('container'));
