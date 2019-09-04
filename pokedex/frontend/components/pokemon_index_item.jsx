import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {
  return (  
          <li>
            <Link to={`/pokemon/${props.poke.id}`}>{props.poke.name}</Link>
            <img src={props.poke.image_url} height="100px" width="100px" />
          </li>
        )
}

export default PokemonIndexItem;