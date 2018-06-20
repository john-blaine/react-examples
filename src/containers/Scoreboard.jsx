import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import AddPlayer from '../components/AddPlayer.jsx';
import Header from '../components/Header.jsx';
import Player from '../components/Player.jsx';

let playerId = 4;

class Scoreboard extends React.Component {

  render() {

    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
    ))

    return (
      <div className="scoreboard">
        <Header
          title={this.props.title}
          playerNum={players.length}
          totalPoints={players.reduce((acc, player) => acc += player.score, 0)}
        />

        <div className="players">
          { playerComponents }
        </div>
        <AddPlayer onAdd={addPlayer} />
      </div>
    );
  }
};

Scoreboard.defaultProps = {
  title: 'Scoreboard'
};

Scoreboard.propTypes = {
  title: PropTypes.string,
  players: PropTypes.array.isRequired,
}

const mapStateToProps = state => (
  { 
    players: state 
  }
);

export default connect(mapStateToProps)(Scoreboard);
