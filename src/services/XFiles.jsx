export const getCharacters = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters?category=Informants')
    .then(res => res.json())
    .then(json => json.results)
    .then(results => results.map(character => ({
      name: character.name,
      url: character.image
    })));
};
