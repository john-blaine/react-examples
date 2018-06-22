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
    return [
      ...state,
      {
        name: action.name,
        score: 0,
        created: dateTime(),
        updated: dateTime(),
      }
    ];

    case PlayerActionTypes.REMOVE_PLAYER:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

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

    case PlayerActionTypes.SET_CREATED_DATE:
      return [

      ]

    default:
      return state;
  }
}
