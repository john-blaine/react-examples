import React from 'react';
import PropTypes from 'prop-types';

const PlayerDetail = ({index, player}) => {
  if (index > -1){
    return (
      <div>
        <h3>{ player.name }</h3>
        <ul>
          <li>
            <span>Score: </span>
            { player.score }
          </li>
          <li>
            <span>Created: </span>
            { player.created }
          </li>
          <li>
            <span>Updated: </span>
            { player.updated }
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
  player: PropTypes.object.isRequired,
};

export default PlayerDetail;