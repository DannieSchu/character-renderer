import React, { useState, useEffect } from 'react';
import { getCharacters } from '../../services/XFiles.jsx';
import Characters from '../../components/Characters/Characters.jsx';

const CharacterRenderer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(fetchedCharacters => setCharacters(fetchedCharacters));
  }, []);
  
  return (
    <Characters characters={characters} />
  );
};

export default CharacterRenderer;
