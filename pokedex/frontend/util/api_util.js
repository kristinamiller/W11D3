export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  });
};

export const fetchOnePokemon = (pokemon) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${pokemon.id}`
  })
}