import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats.jsx';
import Stopwatch from './Stopwatch.jsx';

const Header = props => {
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

export default Header;
