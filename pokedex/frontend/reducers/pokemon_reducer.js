import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from "../actions/pokemon_actions";


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      nextState = action.pokemon; 
      return nextState;
    case RECEIVE_ONE_POKEMON:
      return Object.assign(nextState, action.pokemon);
    default:
      return state;
  }
};

export default pokemonReducer;