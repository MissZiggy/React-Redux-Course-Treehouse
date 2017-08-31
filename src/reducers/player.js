import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
	players: [{
		name: 'Jim Hoskins',
	  score: 31,
		created: '31/08/2017 23:57:23',
		updated: '31/08/2017 23:57:23'
	},
	{
		name: 'Andrew Chalkley',
		score: 20,
		created: '31/08/2017 23:57:23',
		updated: '31/08/2017 23:57:23'
	},
	{
		name: 'Alena Holligan',
		score: 50,
		created: '31/08/2017 23:57:23',
		updated: '31/08/2017 23:57:23'
	}
	],
	selectedPlayerIndex: -1
}

export default function Player(state=initialState, action) {
  let now = new Date();
  now = `${now.toLocaleDateString('en-GB')} ${now.toLocaleTimeString('en-GB')}`;

  switch(action.type) {
    case PlayerActionTypes.ADD_PLAYER: {
			const addPlayerList = [...state.players,   {
          name: action.name,
          score: 0,
          created: now
      }];
      return {
        ...state,
				players: addPlayerList
		 	};
     }

    case PlayerActionTypes.REMOVE_PLAYER: {
			const removePlayerList = [
				...state.players.slice(0, action.index),
				...state.players.slice(action.index + 1)
			];
      return {
				...state,
				players: removePlayerList
			};
		}
      
    case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
			const updatePlayerList = state.players.map((player, index) => {
        if(index === action.index){
          return {
            ...player,
             score: player.score + action.score,
             updated: now
           };
        }
        return player;
      });
			return {
				...state,
				players: updatePlayerList
			};
		}
   
    case PlayerActionTypes.SELECT_PLAYER:
      return {
        ...state,
        selectedPlayerIndex: action.index,
      };

    default:
      return state;
  }
}
