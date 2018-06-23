import React from 'react';
import PropTypes from 'prop-types';

const PlayerDetail = ({index, name, score, created, updated}) => {
  if (index > -1){
    return (
      <div>
        <h3>{ name }</h3>
        <ul>
          <li>
            <span>Score: </span>
            { score }
          </li>
          <li>
            <span>Created: </span>
            { created }
          </li>
          <li>
            <span>Updated: </span>
            { updated }
          </li>
        </ul>
      </div>
    );
  } else {
    return (<p>Click on a player to see more details</p>);
  }
}

PlayerDetail.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
};

export default PlayerDetail;