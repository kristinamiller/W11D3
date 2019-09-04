import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from "react-router-dom";
import PokemonIndexContainer from './pokemon_index_container';
import PokemonDetailContainer from './pokemon_detail_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={PokemonIndexContainer} />
      <Route path="/" component={PokemonDetailContainer} />
    </HashRouter>
  </Provider>
);

export default Root;