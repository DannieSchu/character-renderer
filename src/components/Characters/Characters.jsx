import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Character from './Character.jsx';

const Characters = ({ characters }) => {
  const characterItems = characters.map(character => (
    <li key={character.name}>
      <Link to={`/${character.name}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {characterItems}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
