import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import Stopwatch from '../components/Stopwatch.jsx';

let playerId = 4;

class AddPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.onAdd(this.state.name);
    this.setState({ name: '' });
  }

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

AddPlayer.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

function Stats(props) {
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{props.playerNum}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{props.totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  playerNum: PropTypes.number.isRequired,
  totalPoints: PropTypes.number.isRequired,
};

function Header(props) {
  return (
    <div className="header">
      <Stats playerNum={props.playerNum} totalPoints={props.totalPoints} />
      <h1>{props.title}</h1>
      <Stopwatch />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  playerNum: PropTypes.number.isRequired,
  totalPoints: PropTypes.number.isRequired,
};

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={function () { props.onChange(-1); }}> - </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment" onClick={function () { props.onChange(1); }}> + </button>
    </div>
  );
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={props.onRemove}>X</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

const Scoreboard = createReactClass({
  propTypes: {
    title: PropTypes.string,
    initialPlayers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  },

  getDefaultProps() {
    return {
      title: 'Scoreboard',
    };
  },

  getInitialState() {
    return {
      players: this.props.initialPlayers,
    };
  },

  onScoreChange(delta, i) {
    console.log('onScoreChange', delta, i);
    this.state.players[i].score += delta;
    this.setState(this.state);
  },

  onPlayerAdd(name) {
    this.state.players.push({
      name,
      score: 0,
      id: playerId,
    });
    this.setState(this.state);
    playerId++;
  },

  onRemove(i) {
    this.state.players.splice(i, 1);
    this.setState(this.state);
  },

  render() {
    return (
      <div className="scoreboard">
        <Header
          title={this.props.title}
          playerNum={this.state.players.length}
          totalPoints={this.state.players.reduce((acc, player) => acc += player.score, 0)}
        />

        <div className="players">
          {this.state.players.map((player, i) =>
            (<Player
              onScoreChange={delta => this.onScoreChange(delta, i)}
              name={player.name}
              score={player.score}
              key={player.id}
              onRemove={() => this.onRemove(i)}
            />))}
        </div>
        <AddPlayer onAdd={this.onPlayerAdd} />
      </div>
    );
  },
});

export default Scoreboard;