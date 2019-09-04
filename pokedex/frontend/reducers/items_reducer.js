import {RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      return Object.assign(nextState, action.pokemon.items);
    default:
      return state;
  }

};

export default itemsReducer;