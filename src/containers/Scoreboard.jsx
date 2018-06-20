import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import AddPlayer from '../components/AddPlayer.jsx';
import Header from '../components/Header.jsx';
import Player from '../components/Player.jsx';

let playerId = 4;

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
