import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, url }) => {
  return (
    <section>
      <h3>{name}</h3>
      <img src={url} alt={name} />
    </section>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Character;
