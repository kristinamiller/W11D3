import React from "react";
import ReactDOM from "react-dom";
import logger from "redux-logger";
import { applyMiddleware } from "redux";
import thunk from './middleware/thunk';
import Root from './components/root';
import configureStore from "./store/store";
import rootReducer from "./reducers/root_reducer";
import { HashRouter, Route } from "react-router-dom";

import {receiveAllPokemon, requestAllPokemon} from "./actions/pokemon_actions";
import {fetchAllPokemon} from "./util/api_util";
import {selectAllPokemon} from "./reducers/selectors";

$(() => {
  const store = configureStore(rootReducer, {}, applyMiddleware(thunk, logger));
  const root = document.getElementById("root");
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
  ReactDOM.render(<Root store={store} />, root)
});