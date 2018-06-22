import * as PlayerActionTypes from '../actiontypes/player';
import dateTime from './helpers/datetime.js';

const initialState = {
  players: [
    {
      name: 'John Blaine',
      score: 31,
      created: '6/21/2018 12:30PM',
      updated: '6/22/2018 6:03AM'
    },
    {
      name: 'Nga Nguyen',
      score: 29,
      created: '6/22/2018 10:05AM',
      updated: '6/22/2018 10:33AM'
    },
    {
      name: 'My Hao Pham',
      score: 37,
      created: '6/22/2018 11:37AM',
      updated: '6/22/2018 12:38AM'
    }
  ],
  selectedPlayerIndex: -1
}

export default function Player(state=initialState, action) {
  switch(action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return {
        players: [
          ...state.players,
          {
            name: action.name,
            score: 0,
            created: dateTime(),
            updated: dateTime(),
          }
        ],
        selectedPlayerIndex: state.selectedPlayerIndex
      }

    case PlayerActionTypes.REMOVE_PLAYER:
      return {
        players: [
          ...state.players.slice(0, action.index),
          ...state.players.slice(action.index + 1)
        ],
        selectedPlayerIndex: state.selectedPlayerIndex
      }

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return {
        players: state.players.map((player, index) => {
          if(index === action.index) {
            return {
              ...player,
              score: player.score + action.score
            };
          }
          return player;
        }),
        selectedPlayerIndex: state.selectedPlayerIndex
      }

    default:
      return state;
  }
}
