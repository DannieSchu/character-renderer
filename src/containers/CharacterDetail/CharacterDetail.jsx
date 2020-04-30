import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getCharacter } from '../../services/XFiles.jsx';
import Detail from '../../components/Detail/Detail.jsx';

const CharacterDetail = () => {
  const [character, setCharacter] = useState({});
  const match = useRouteMatch('/:name');

  useEffect(() => {
    getCharacter(match.params.name)
      .then(fetchedCharacter => setCharacter(fetchedCharacter));
  }, []);

  return (
    <>
      <Detail character={character} />
    </>
  );
};

export default CharacterDetail;
