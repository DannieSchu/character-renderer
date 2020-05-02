export const getCharactersByCategory = category => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?category=${category}`)
    .then(res => res.json())
    .then(json => json.results)
    .then(results => results.map(character => ({
      name: character.name,
      url: character.image
    })));
};

export const getCharacters = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
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
    .then(json => json[0])
    .then(obj => ({
      name: obj.name,
      url: obj.image,
      status: obj.status,
      gender: obj.gender,
      born: obj.born,
      description: obj.description
    })); 
};
