import React, { useState, useEffect } from 'react';
import { getCharacters } from '../../services/XFiles.jsx';
import Characters from '../../components/Characters/Characters.jsx';
import Controls from '../../components/Controls/Controls.jsx';

const CharacterRenderer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(fetchedCharacters => setCharacters(fetchedCharacters));
  }, []);
  
  // handleSubmit = () => {};
  // handleSelect = () => {};
  
  return (
    <>
      <Controls buttonText="Filter"/>
      {/* <Controls onSubmit={handleSubmit} onSelect={handleSelect} buttonText="Filter" /> */}
      <Characters characters={characters} />
    </>
  );
};

export default CharacterRenderer;
