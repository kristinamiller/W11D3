import React from "react";
import ReactDOM from "react-dom";
import {receiveAllPokemon} from "./actions/pokemon_actions";
import {fetchAllPokemon} from "./util/api_util";

$(() => {
  const root = document.getElementById("root");
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  ReactDOM.render(<h1>React is happy.</h1>, root)
});