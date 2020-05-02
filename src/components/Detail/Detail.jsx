import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Characters/Character.jsx';

const Detail = ({ name, url, status, gender, born, description }) => {
  return (
    <section>
      <Character name={name} url={url} /> 
      <p>Status: {status || 'Probably dead'}</p>
      <p>Gender: {gender || 'What is this anyway?'}</p>
      <p>Date of Birth: {born || 'Unknown'}</p>
      <p>{description || 'Use your imagination'}</p>
    </section>
  );
};

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  status: PropTypes.string,
  gender: PropTypes.string,
  born: PropTypes.string,
  description: PropTypes.string
};

export default Detail;
