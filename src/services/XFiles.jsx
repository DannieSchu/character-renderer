export const getCharacters = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters?category=Informants')
    .then(res => res.json())
    .then(json => json.results)
    .then(results => results.map(character => ({
      name: character.name,
      url: character.image
    })));
};

export const getCharacter = name => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json())
    .then(json => ({
      name: json.name,
      url: json.image,
      status: json.status,
      gender: json.gender,
      born: json.born,
      description: json.description
    })); 
};
