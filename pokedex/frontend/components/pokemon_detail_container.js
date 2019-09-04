import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  pokemon: state.entities.pokemon
});

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: () => dispatch(requestOnePokemon())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail));