export const getCharacters = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.map(character => ({
      id: character._id,
      name: character.name,
      url: character.image
    })));
};
